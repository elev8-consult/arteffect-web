import {BarChart3, Heart, Palette, Users} from 'lucide-react'
import {cn} from '@/lib/utils'

interface StatTileProps {
  label: string
  value: string
  accent?: 'gold' | 'artist' | 'ngo' | 'design' | 'impact' | 'batch'
  icon?: React.ReactNode
}

const accentClass = {
  gold: 'text-gold',
  artist: 'text-artistBlue',
  ngo: 'text-forest',
  design: 'text-sunflower',
  impact: 'text-coral',
  batch: 'text-lavender',
} as const

const defaultIcons: Record<string, React.ReactNode> = {
  batches: <BarChart3 className="size-5" />,
  artists: <Users className="size-5" />,
  designs: <Palette className="size-5" />,
  ngos: <Heart className="size-5" />,
}

function getIconForLabel(label: string): React.ReactNode {
  const lower = label.toLowerCase()
  if (lower.includes('batch')) return defaultIcons.batches
  if (lower.includes('artist')) return defaultIcons.artists
  if (lower.includes('design')) return defaultIcons.designs
  if (lower.includes('ngo')) return defaultIcons.ngos
  return defaultIcons.batches
}

export function StatTile({label, value, accent = 'gold', icon}: StatTileProps) {
  const displayIcon = icon ?? getIconForLabel(label)
  return (
    <article className="rounded-xl border border-borderTone bg-base-900 p-5 transition duration-300 hover:border-gold/30">
      <div className="flex items-start gap-3">
        <div className={cn('flex size-10 shrink-0 items-center justify-center rounded-lg bg-base-800', accentClass[accent])}>
          {displayIcon}
        </div>
        <div>
          <p className={cn('font-display text-3xl font-semibold', accentClass[accent])}>{value}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-textSecondary">{label}</p>
        </div>
      </div>
    </article>
  )
}
