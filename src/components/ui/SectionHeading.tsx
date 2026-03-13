import {cn} from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  accent?: 'gold' | 'artist' | 'ngo' | 'design' | 'impact' | 'batch'
  accentLine?: boolean
}

const accentClass = {
  gold: 'text-gold',
  artist: 'text-artistBlue',
  ngo: 'text-forest',
  design: 'text-sunflower',
  impact: 'text-coral',
  batch: 'text-lavender',
} as const

const accentBorderClass = {
  gold: 'border-gold',
  artist: 'border-artistBlue',
  ngo: 'border-forest',
  design: 'border-sunflower',
  impact: 'border-coral',
  batch: 'border-lavender',
} as const

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  accent = 'gold',
  accentLine = false,
}: SectionHeadingProps) {
  return (
    <header className={cn('max-w-3xl space-y-3', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <div className="flex items-center gap-3">
          {accentLine && (
            <span
              className={cn('h-px w-8 shrink-0 border-t', accentBorderClass[accent])}
              aria-hidden
            />
          )}
          <p className={cn('text-xs uppercase tracking-[0.28em]', accentClass[accent])}>{eyebrow}</p>
        </div>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-relaxed text-textSecondary">{description}</p> : null}
    </header>
  )
}
