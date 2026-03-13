import Link from 'next/link'

import {PlaceholderMedia} from '@/components/ui/PlaceholderMedia'
import {resolveImageUrl} from '@/lib/sanity/image'
import {formatDate} from '@/lib/utils'
import type {Batch} from '@/types/cms'

interface BatchCardProps {
  batch: Batch
}

const statusStyles = {
  live: 'border-gold/55 text-gold',
  upcoming: 'border-lavender/55 text-lavender',
  archived: 'border-borderTone text-textSecondary',
} as const

export function BatchCard({batch}: BatchCardProps) {
  return (
    <Link
      href={`/batches/${batch.slug}`}
      className="group grid gap-4 rounded-2xl border border-borderTone bg-base-900 p-4 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-lavender/45 hover:shadow-panel focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950 md:grid-cols-[1.3fr_1fr]"
    >
      <PlaceholderMedia
        src={resolveImageUrl(batch.heroImage)}
        alt={batch.title}
        label="Batch Hero"
        className="aspect-[16/10]"
      />

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl text-ivory group-hover:text-goldHover">{batch.title}</h3>
          <span className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.15em] ${statusStyles[batch.status]}`}>
            {batch.status}
          </span>
        </div>
        <p className="text-sm uppercase tracking-[0.13em] text-gold">{batch.causeTitle}</p>
        <p className="text-sm text-textSecondary">NGO: {batch.ngo?.name ?? 'TBA'}</p>
        <p className="text-sm text-textSecondary">Release: {formatDate(batch.releaseDate)}</p>

        <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-textSecondary">
          <p>{batch.artists.length} artist(s)</p>
          <p>{batch.designs.length} design(s)</p>
        </div>
      </div>
    </Link>
  )
}
