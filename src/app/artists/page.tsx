import {ArtistCard} from '@/components/cards/ArtistCard'
import {EmptyState} from '@/components/ui/EmptyState'
import {Reveal} from '@/components/ui/Reveal'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {getArtists} from '@/lib/sanity/fetchers'
import {buildMetadata} from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Artists | ArtEffect',
  description: 'Meet ArtEffect artists and explore their background, design language, and release collaborations.',
  path: '/artists',
})

export default async function ArtistsPage() {
  const artists = await getArtists()

  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading
          eyebrow="Artists"
          title="Profiles behind the visual narratives"
          description="Each artist page documents biography, quote, social links, designs, and participating batches."
        />
      </Reveal>

      {artists.length === 0 ? (
        <EmptyState
          title="No artists yet"
          description="Add artists in Studio or run the demo seed data."
          action={{label: 'Explore Batches', href: '/batches'}}
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, index) => (
            <Reveal key={artist._id} delay={0.04 * index}>
              <ArtistCard artist={artist} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
