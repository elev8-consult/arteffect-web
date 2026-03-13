import {NGOCard} from '@/components/cards/NGOCard'
import {EmptyState} from '@/components/ui/EmptyState'
import {Reveal} from '@/components/ui/Reveal'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {getNgos} from '@/lib/sanity/fetchers'
import {buildMetadata} from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'NGOs | ArtEffect',
  description: 'Explore NGO partners and understand the mission and impact behind each ArtEffect batch.',
  path: '/ngos',
})

export default async function NGOsPage() {
  const ngos = await getNgos()

  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading
          eyebrow="NGO Partners"
          title="Organizations behind each release impact"
          description="Each batch supports one NGO aligned with its cause story."
        />
      </Reveal>

      {ngos.length === 0 ? (
        <EmptyState
          title="No NGO profiles yet"
          description="Add NGOs in Studio or run demo seed data."
          action={{label: 'Explore Batches', href: '/batches'}}
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {ngos.map((ngo, index) => (
            <Reveal key={ngo._id} delay={0.04 * index}>
              <NGOCard ngo={ngo} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
