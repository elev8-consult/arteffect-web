import Link from 'next/link'

import {PlaceholderMedia} from '@/components/ui/PlaceholderMedia'
import {resolveImageUrl} from '@/lib/sanity/image'
import type {Design} from '@/types/cms'

interface DesignCardProps {
  design: Design
}

export function DesignCard({design}: DesignCardProps) {
  return (
    <Link
      href={`/designs/${design.slug}`}
      className="group block space-y-4 rounded-2xl border border-borderTone bg-base-900 p-4 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-sunflower/50 hover:shadow-panel focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950"
    >
      <PlaceholderMedia
        src={resolveImageUrl(design.artworkImage)}
        alt={design.name}
        label="Design Artwork"
        className="aspect-square"
      />
      <div>
        <h3 className="font-display text-xl text-ivory group-hover:text-goldHover">{design.name}</h3>
        <p className="mt-2 text-sm text-textSecondary">{design.meaning}</p>
      </div>
    </Link>
  )
}
