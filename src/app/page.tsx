import {ArtistCard} from '@/components/cards/ArtistCard'
import {BatchCard} from '@/components/cards/BatchCard'
import {DesignCard} from '@/components/cards/DesignCard'
import {NGOCard} from '@/components/cards/NGOCard'
import {CTASection} from '@/components/sections/CTASection'
import {HeroSection} from '@/components/sections/HeroSection'
import {HowItWorks} from '@/components/sections/HowItWorks'
import {EmptyState} from '@/components/ui/EmptyState'
import {Reveal, RevealStagger, RevealStaggerItem} from '@/components/ui/Reveal'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {StatTile} from '@/components/ui/StatTile'
import {aboutContent} from '@/content/mock-data'
import {getHomeData} from '@/lib/sanity/fetchers'
import {buildMetadata} from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'ArtEffect | Wear the Effect',
  description:
    'Discover mission-driven fashion drops where every batch connects artists, stories, and NGOs for measurable impact.',
  path: '/',
})

export default async function HomePage() {
  const data = await getHomeData()

  return (
    <div className="space-y-20 pb-10">
      <HeroSection
        title="Wearable stories crafted by artists, released for impact."
        subtitle="ArtEffect unites artists, causes, and NGO partners through curated batches. Every release is defined by one cause, one NGO, and one launch moment."
      />

      <Reveal className="space-y-7">
        <SectionHeading
          eyebrow="Featured Batch"
          accent="batch"
          title={data.featuredBatch ? `${data.featuredBatch.title} · ${data.featuredBatch.causeTitle}` : 'Upcoming Batch'}
          description="Each batch is built around a social cause and one NGO partnership. Designs and products are expressions within that release identity."
        />

        {data.featuredBatch ? (
          <BatchCard batch={data.featuredBatch} />
        ) : (
          <EmptyState
            title="No featured batch yet"
            description="Add or seed batch content in Sanity Studio."
            action={{label: 'Explore Batches', href: '/batches'}}
          />
        )}
      </Reveal>

      <Reveal className="space-y-7" delay={0.05}>
        <SectionHeading
          eyebrow="How It Works"
          title="From artwork to measurable impact"
          description="A transparent path from artistic creation to NGO support."
          accentLine
        />
        <HowItWorks items={aboutContent.howItWorks} />
      </Reveal>

      <Reveal className="space-y-7" delay={0.08}>
        <SectionHeading
          eyebrow="Featured Designs"
          accent="design"
          title="Symbolic pieces from current and upcoming releases"
          description="Every design includes meaning and symbolism documentation, linked to its artist and batch context."
        />
        <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.featuredDesigns.slice(0, 4).map((design) => (
            <RevealStaggerItem key={design._id}>
              <DesignCard design={design} />
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Reveal>

      <Reveal className="space-y-7" delay={0.1}>
        <SectionHeading
          eyebrow="Featured Artists"
          accent="artist"
          title="Creative voices shaping the drop narratives"
          description="Artist profiles include background, quote, design contributions, and batch participation."
        />
        <RevealStagger className="grid gap-4 sm:grid-cols-2">
          {data.featuredArtists.map((artist) => (
            <RevealStaggerItem key={artist._id}>
              <ArtistCard artist={artist} />
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Reveal>

      <Reveal className="space-y-7" delay={0.12}>
        <SectionHeading
          eyebrow="Featured NGO"
          accent="ngo"
          title="The partner behind this impact"
          description="Every batch supports one NGO aligned to the release cause."
        />
        {data.featuredNGO ? (
          <div className="max-w-2xl">
            <NGOCard ngo={data.featuredNGO} />
          </div>
        ) : (
          <EmptyState
            title="No NGO selected"
            description="Create NGO documents in Studio to feature one here."
            action={{label: 'Meet NGOs', href: '/ngos'}}
          />
        )}
      </Reveal>

      <Reveal className="space-y-7" delay={0.14}>
        <SectionHeading
          eyebrow="Impact Stats"
          accent="impact"
          title="Current network footprint"
          description="A snapshot of collaborations, releases, and NGO partnerships."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.stats.map((stat) => (
            <StatTile key={stat.label} label={stat.label} value={stat.value} accent="impact" />
          ))}
        </div>
      </Reveal>

      <CTASection
        title="Join the next ArtEffect drop"
        description="Follow batch releases, artist stories, and product previews built around meaningful causes."
        primary={{label: 'View Shop', href: '/shop'}}
        secondary={{label: 'Read About ArtEffect', href: '/about'}}
      />
    </div>
  )
}
