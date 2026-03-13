import {Button} from '@/components/ui/Button'
import {Reveal} from '@/components/ui/Reveal'

interface HeroSectionProps {
  title: string
  subtitle: string
}

export function HeroSection({title, subtitle}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-borderTone bg-burgundy px-6 py-14 sm:px-10 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,211,163,0.24),transparent_35%)]" />

      <Reveal className="relative z-10 max-w-4xl space-y-6">
        <p className="text-xs uppercase tracking-[0.26em] text-gold">Wear The Effect</p>
        <h1 className="font-display text-4xl font-bold leading-tight text-ivory sm:text-6xl">{title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-textSecondary">{subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <Button href="/batches">Explore Batches</Button>
          <Button href="/artists" variant="secondary">
            Explore Artists
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
