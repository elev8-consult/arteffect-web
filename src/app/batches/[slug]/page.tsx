import {notFound} from 'next/navigation'

import {ArtistCard} from '@/components/cards/ArtistCard'
import {DesignCard} from '@/components/cards/DesignCard'
import {ProductCard} from '@/components/cards/ProductCard'
import {CTASection} from '@/components/sections/CTASection'
import {PlaceholderMedia} from '@/components/ui/PlaceholderMedia'
import {Reveal} from '@/components/ui/Reveal'
import {RichText} from '@/components/ui/RichText'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {getArtists, getBatchBySlug, getDesignBySlug, getProducts} from '@/lib/sanity/fetchers'
import {resolveImageUrl} from '@/lib/sanity/image'
import {buildMetadata} from '@/lib/seo'
import {formatDate} from '@/lib/utils'

interface BatchPageProps {
  params: Promise<{slug: string}>
}

export async function generateMetadata({params}: BatchPageProps) {
  const {slug} = await params
  const batch = await getBatchBySlug(slug)

  if (!batch) {
    return buildMetadata({title: 'Batch Not Found | ArtEffect'})
  }

  return buildMetadata({
    title: `${batch.title} – ${batch.causeTitle} | ArtEffect`,
    description: batch.overview,
    path: `/batches/${batch.slug}`,
  })
}

export default async function BatchDetailPage({params}: BatchPageProps) {
  const {slug} = await params
  const batch = await getBatchBySlug(slug)
  if (!batch) notFound()

  const [allArtists, allProducts, designDetails] = await Promise.all([
    getArtists(),
    getProducts(),
    Promise.all(batch.designs.map((design) => getDesignBySlug(design.slug))),
  ])

  const artists = allArtists.filter((artist) => batch.artists.some((a) => a.slug === artist.slug))
  const designs = designDetails.filter((design): design is NonNullable<typeof design> => Boolean(design))
  const products = allProducts.filter((product) => designs.some((design) => design.slug === product.design?.slug))

  return (
    <div className="space-y-12 pb-10">
      <Reveal className="space-y-6">
        <PlaceholderMedia
          src={resolveImageUrl(batch.heroImage)}
          alt={batch.title}
          label="Batch Hero"
          className="aspect-[16/7]"
          priority
        />

        <div className="grid gap-6 rounded-2xl border border-borderTone bg-base-900 p-7 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-lavender">Batch {batch.batchNumber}</p>
            <h1 className="font-display text-4xl text-ivory">{batch.title}</h1>
            <p className="text-lg text-textSecondary">Cause: {batch.causeTitle}</p>
            <p className="text-sm text-textSecondary">NGO Supported: {batch.ngo?.name ?? 'TBA'}</p>
            <p className="text-sm text-textSecondary">Release Date: {formatDate(batch.releaseDate)}</p>
            <p className="text-sm text-textSecondary">Status: {batch.status}</p>
          </div>

          <aside className="rounded-xl border border-lavender/35 bg-base-950/60 p-4 text-sm text-textSecondary">
            <p className="text-xs uppercase tracking-[0.15em] text-lavender">Batch Identity</p>
            <p className="mt-3 leading-relaxed">
              This batch is defined by <span className="text-ivory">{batch.causeTitle}</span> +{' '}
              <span className="text-ivory">{batch.ngo?.name ?? 'NGO'}</span> +{' '}
              <span className="text-ivory">{formatDate(batch.releaseDate)}</span>.
            </p>
          </aside>
        </div>
      </Reveal>

      <Reveal className="space-y-5" delay={0.04}>
        <SectionHeading title="Overview" accent="batch" />
        <RichText value={batch.overview} />
      </Reveal>

      <Reveal className="space-y-5" delay={0.06}>
        <SectionHeading title="Why This Batch Exists" accent="batch" />
        <RichText value={batch.whyThisBatchExists} />
      </Reveal>

      <Reveal className="space-y-6" delay={0.08}>
        <SectionHeading title="Artists in This Batch" />
        <div className="grid gap-4 sm:grid-cols-2">
          {artists.map((artist) => (
            <ArtistCard key={artist._id} artist={artist} />
          ))}
        </div>
      </Reveal>

      <Reveal className="space-y-6" delay={0.1}>
        <SectionHeading title="Designs in This Batch" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <DesignCard key={design._id} design={design} />
          ))}
        </div>
      </Reveal>

      <Reveal className="space-y-6" delay={0.12}>
        <SectionHeading title="Related Products" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Reveal>

      <Reveal className="rounded-2xl border border-gold/28 bg-base-900 p-7" delay={0.14}>
        <SectionHeading
          eyebrow="NGO Support"
          accent="ngo"
          title={batch.ngo?.name ?? 'Partner NGO'}
          description="A share of this release supports direct programs linked to this cause."
        />
      </Reveal>

      <CTASection
        title="Continue the story"
        description="Explore the artists behind this batch and request pieces connected to this release narrative."
        primary={{label: 'See Artists', href: '/artists'}}
        secondary={{label: 'Browse Shop', href: '/shop'}}
      />
    </div>
  )
}
