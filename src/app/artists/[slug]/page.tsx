import Link from 'next/link'
import {notFound} from 'next/navigation'

import {BatchCard} from '@/components/cards/BatchCard'
import {DesignCard} from '@/components/cards/DesignCard'
import {CTASection} from '@/components/sections/CTASection'
import {PlaceholderMedia} from '@/components/ui/PlaceholderMedia'
import {Reveal} from '@/components/ui/Reveal'
import {RichText} from '@/components/ui/RichText'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {getArtistBySlug, getBatchBySlug, getDesignBySlug} from '@/lib/sanity/fetchers'
import {resolveImageUrl} from '@/lib/sanity/image'
import {buildMetadata} from '@/lib/seo'

interface ArtistPageProps {
  params: Promise<{slug: string}>
}

export async function generateMetadata({params}: ArtistPageProps) {
  const {slug} = await params
  const artist = await getArtistBySlug(slug)

  if (!artist) {
    return buildMetadata({title: 'Artist Not Found | ArtEffect'})
  }

  return buildMetadata({
    title: `${artist.name} | ArtEffect`,
    description: artist.shortBio,
    path: `/artists/${artist.slug}`,
  })
}

export default async function ArtistDetailPage({params}: ArtistPageProps) {
  const {slug} = await params
  const artist = await getArtistBySlug(slug)
  if (!artist) notFound()

  const [designs, batches] = await Promise.all([
    Promise.all(artist.designs?.map((design) => getDesignBySlug(design.slug)) ?? []),
    Promise.all(artist.batches?.map((batch) => getBatchBySlug(batch.slug)) ?? []),
  ])

  return (
    <div className="space-y-12 pb-10">
      <Reveal className="grid gap-6 rounded-2xl border border-borderTone bg-base-900 p-6 md:grid-cols-[1fr_1.2fr]">
        <PlaceholderMedia
          src={resolveImageUrl(artist.profileImage)}
          alt={artist.name}
          label="Artist Portrait"
          className="aspect-[4/5]"
          priority
        />

        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-artistBlue">Artist Profile</p>
          <h1 className="font-display text-4xl text-ivory">{artist.name}</h1>
          <p className="text-lg text-textSecondary">{artist.shortBio}</p>
          <RichText value={artist.fullBio} />
          {artist.featuredQuote ? (
            <blockquote className="rounded-xl border border-artistBlue/35 bg-base-950/60 p-4 text-textSecondary">
              “{artist.featuredQuote}”
            </blockquote>
          ) : null}

          <div className="flex flex-wrap gap-4 text-sm text-artistBlue">
            {artist.instagram ? (
              <Link href={artist.instagram} target="_blank" rel="noreferrer" className="hover:text-goldHover">
                Instagram
              </Link>
            ) : null}
            {artist.portfolioUrl ? (
              <Link href={artist.portfolioUrl} target="_blank" rel="noreferrer" className="hover:text-goldHover">
                Portfolio
              </Link>
            ) : null}
          </div>
        </div>
      </Reveal>

      <Reveal className="space-y-6" delay={0.05}>
        <SectionHeading title="Designs Created" accent="artist" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designs
            .filter((design): design is NonNullable<typeof design> => Boolean(design))
            .map((design) => (
              <DesignCard key={design._id} design={design} />
            ))}
        </div>
      </Reveal>

      <Reveal className="space-y-6" delay={0.07}>
        <SectionHeading title="Batches Involved" accent="artist" />
        <div className="grid gap-4">
          {batches
            .filter((batch): batch is NonNullable<typeof batch> => Boolean(batch))
            .map((batch) => (
              <BatchCard key={batch._id} batch={batch} />
            ))}
        </div>
      </Reveal>

      <CTASection
        title="Discover more artists"
        description="Browse the full roster and explore each contributor's storytelling approach."
        primary={{label: 'All Artists', href: '/artists'}}
        secondary={{label: 'Explore Batches', href: '/batches'}}
      />
    </div>
  )
}
