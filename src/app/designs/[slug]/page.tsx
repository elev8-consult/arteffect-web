import {notFound} from 'next/navigation'

import {ProductCard} from '@/components/cards/ProductCard'
import {CTASection} from '@/components/sections/CTASection'
import {PlaceholderMedia} from '@/components/ui/PlaceholderMedia'
import {Reveal} from '@/components/ui/Reveal'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {getDesignBySlug, getProducts} from '@/lib/sanity/fetchers'
import {resolveImageUrl} from '@/lib/sanity/image'
import {buildMetadata} from '@/lib/seo'

interface DesignPageProps {
  params: Promise<{slug: string}>
}

export async function generateMetadata({params}: DesignPageProps) {
  const {slug} = await params
  const design = await getDesignBySlug(slug)

  if (!design) {
    return buildMetadata({title: 'Design Not Found | ArtEffect'})
  }

  return buildMetadata({
    title: `${design.name} | ArtEffect`,
    description: design.meaning,
    path: `/designs/${design.slug}`,
  })
}

export default async function DesignDetailPage({params}: DesignPageProps) {
  const {slug} = await params
  const design = await getDesignBySlug(slug)
  if (!design) notFound()

  const products = (await getProducts()).filter((product) => product.design?.slug === design.slug)

  return (
    <div className="space-y-12 pb-10">
      <Reveal className="space-y-6">
        <PlaceholderMedia
          src={resolveImageUrl(design.artworkImage)}
          alt={design.name}
          label="Design Artwork"
          className="aspect-[16/9]"
          priority
        />

        <div className="rounded-2xl border border-borderTone bg-base-900 p-7">
          <h1 className="font-display text-4xl text-ivory">{design.name}</h1>
          <div className="mt-4 grid gap-2 text-sm text-textSecondary sm:grid-cols-2">
            <p>Batch: {design.batch?.title ?? 'TBA'}</p>
            <p>Artist: {design.artist?.name ?? 'TBA'}</p>
            <p>Related NGO: {design.ngo?.name ?? 'TBA'}</p>
            <p>Colors: {design.availableColors?.join(', ')}</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="grid gap-6 lg:grid-cols-2" delay={0.05}>
        <article className="rounded-2xl border border-sunflower/35 bg-base-900 p-7">
          <SectionHeading title="Meaning" accent="design" />
          <p className="mt-4 text-textSecondary">{design.meaning}</p>
        </article>

        <article className="rounded-2xl border border-sunflower/35 bg-base-900 p-7">
          <SectionHeading title="Symbolism" accent="design" />
          <p className="mt-4 text-textSecondary">{design.symbolism}</p>
        </article>
      </Reveal>

      <Reveal className="space-y-6" delay={0.08}>
        <SectionHeading title="Available Products" accent="design" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} asLink={false} />
          ))}
        </div>
      </Reveal>

      <CTASection
        title="Wear this story"
        description="Request a piece from this design and follow the batch it belongs to."
        primary={{label: 'View Batch', href: design.batch ? `/batches/${design.batch.slug}` : '/batches'}}
        secondary={{label: 'Explore Shop', href: '/shop'}}
      />
    </div>
  )
}
