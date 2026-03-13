import {CTASection} from '@/components/sections/CTASection'
import {HowItWorks} from '@/components/sections/HowItWorks'
import {Reveal} from '@/components/ui/Reveal'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {getAboutData} from '@/lib/sanity/fetchers'
import {buildMetadata} from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'About | ArtEffect',
  description:
    'Learn how ArtEffect connects artists, causes, and NGO partnerships through mission-driven storytelling batches.',
  path: '/about',
})

export default async function AboutPage() {
  const about = await getAboutData()

  return (
    <div className="space-y-16 pb-10">
      <Reveal>
        <SectionHeading
          eyebrow="About ArtEffect"
          title="A mission-driven fashion and art storytelling platform"
          description={about.brandStory}
        />
      </Reveal>

      <Reveal className="space-y-6" delay={0.04}>
        <SectionHeading
          eyebrow="How ArtEffect Works"
          title="One cause. One NGO. One release."
          description="This rule defines every batch identity and keeps impact accountability clear."
        />
        <HowItWorks items={about.howItWorks} />
      </Reveal>

      <Reveal className="grid gap-6 md:grid-cols-2" delay={0.08}>
        <article className="rounded-2xl border border-borderTone bg-base-900 p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Mission</p>
          <p className="mt-4 text-lg leading-relaxed text-textSecondary">{about.mission}</p>
        </article>

        <article className="rounded-2xl border border-borderTone bg-base-900 p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Philosophy</p>
          <p className="mt-4 text-lg leading-relaxed text-textSecondary">{about.philosophy}</p>
        </article>
      </Reveal>

      <CTASection
        title="Explore the current narratives"
        description="Discover batches, artists, and NGO partnerships shaping the ArtEffect story map."
        primary={{label: 'Explore Batches', href: '/batches'}}
        secondary={{label: 'Meet NGOs', href: '/ngos'}}
      />
    </div>
  )
}
