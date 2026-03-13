import {BatchCard} from '@/components/cards/BatchCard'
import {EmptyState} from '@/components/ui/EmptyState'
import {Reveal} from '@/components/ui/Reveal'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {getBatches} from '@/lib/sanity/fetchers'
import {buildMetadata} from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Batches | ArtEffect',
  description: 'Explore all ArtEffect release batches and their cause + NGO-driven storytelling identity.',
  path: '/batches',
})

export default async function BatchesPage() {
  const batches = await getBatches()

  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading
          eyebrow="Batches"
          title="Cause-led releases"
          description="Every batch is identified by cause + NGO + release. Designs and products belong to that story arc."
        />
      </Reveal>

      {batches.length === 0 ? (
        <EmptyState
          title="No batches available"
          description="Add batch documents in Sanity or run the seed script."
          action={{label: 'View Shop', href: '/shop'}}
        />
      ) : (
        <div className="grid gap-5">
          {batches.map((batch, index) => (
            <Reveal key={batch._id} delay={0.04 * index}>
              <BatchCard batch={batch} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
