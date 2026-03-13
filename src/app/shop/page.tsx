import {ProductCard} from '@/components/cards/ProductCard'
import {EmptyState} from '@/components/ui/EmptyState'
import {Reveal, RevealStagger, RevealStaggerItem} from '@/components/ui/Reveal'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {getProducts} from '@/lib/sanity/fetchers'
import {buildMetadata} from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Shop | ArtEffect',
  description: 'Browse ArtEffect product catalog connected to artists, designs, and social impact batches.',
  path: '/shop',
})

export default async function ShopPage() {
  const products = await getProducts()

  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading
          eyebrow="Shop"
          title="Curated product catalog"
          description="Visual commerce preview for current and upcoming pieces. Checkout can be integrated later."
        />
      </Reveal>

      {products.length === 0 ? (
        <EmptyState
          title="No products yet"
          description="Add product documents in Studio and connect them to designs."
          action={{label: 'Explore Designs', href: '/batches'}}
        />
      ) : (
        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <RevealStaggerItem key={product._id}>
              <ProductCard product={product} />
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      )}
    </div>
  )
}
