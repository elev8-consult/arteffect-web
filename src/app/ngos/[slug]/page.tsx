import Link from 'next/link'
import {notFound} from 'next/navigation'

import {BatchCard} from '@/components/cards/BatchCard'
import {CTASection} from '@/components/sections/CTASection'
import {PlaceholderMedia} from '@/components/ui/PlaceholderMedia'
import {Reveal} from '@/components/ui/Reveal'
import {RichText} from '@/components/ui/RichText'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {StatTile} from '@/components/ui/StatTile'
import {getBatchBySlug, getNgoBySlug} from '@/lib/sanity/fetchers'
import {resolveImageUrl} from '@/lib/sanity/image'
import {buildMetadata} from '@/lib/seo'

interface NGOPageProps {
  params: Promise<{slug: string}>
}

export async function generateMetadata({params}: NGOPageProps) {
  const {slug} = await params
  const ngo = await getNgoBySlug(slug)

  if (!ngo) {
    return buildMetadata({title: 'NGO Not Found | ArtEffect'})
  }

  return buildMetadata({
    title: `${ngo.name} | ArtEffect`,
    description: ngo.shortDescription,
    path: `/ngos/${ngo.slug}`,
  })
}

export default async function NGODetailPage({params}: NGOPageProps) {
  const {slug} = await params
  const ngo = await getNgoBySlug(slug)
  if (!ngo) notFound()

  const supportedBatches = (
    await Promise.all((ngo.supportedBatches ?? []).map((batch) => getBatchBySlug(batch.slug)))
  ).filter((batch): batch is NonNullable<typeof batch> => Boolean(batch))

  return (
    <div className="space-y-12 pb-10">
      <Reveal className="grid gap-6 rounded-2xl border border-borderTone bg-base-900 p-6 md:grid-cols-[0.9fr_1.2fr]">
        <PlaceholderMedia
          src={resolveImageUrl(ngo.logo ?? ngo.featuredImage)}
          alt={ngo.name}
          label="NGO Logo"
          className="aspect-[16/10]"
          variant="ngo-logo"
          priority
        />

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-forest">NGO Profile</p>
          <h1 className="font-display text-4xl text-ivory">{ngo.name}</h1>
          <p className="text-lg text-textSecondary">{ngo.mission}</p>
          <RichText value={ngo.fullStory} />

          <div className="flex flex-wrap gap-4 text-sm text-forest">
            {ngo.website ? (
              <Link href={ngo.website} target="_blank" rel="noreferrer" className="hover:text-goldHover">
                Website
              </Link>
            ) : null}
            {ngo.instagram ? (
              <Link href={ngo.instagram} target="_blank" rel="noreferrer" className="hover:text-goldHover">
                Instagram
              </Link>
            ) : null}
          </div>
        </div>
      </Reveal>

      <Reveal className="space-y-6" delay={0.05}>
        <SectionHeading title="Impact Stats" accent="ngo" />
        <div className="grid gap-4 sm:grid-cols-3">
          {(ngo.impactStats ?? []).map((stat) => (
            <StatTile key={stat.label} label={stat.label} value={stat.value} accent="ngo" />
          ))}
        </div>
      </Reveal>

      <Reveal className="space-y-6" delay={0.08}>
        <SectionHeading title="Supported Batches" description="Batches connected to this NGO partnership." accent="ngo" />
        <div className="grid gap-4">
          {supportedBatches.map((batch) => (
            <BatchCard key={batch._id} batch={batch} />
          ))}
        </div>
      </Reveal>

      <CTASection
        title="Explore connected designs"
        description="See artworks and pieces from batches that support this organization."
        primary={{label: 'Browse Batches', href: '/batches'}}
        secondary={{label: 'Visit Shop', href: '/shop'}}
      />
    </div>
  )
}
