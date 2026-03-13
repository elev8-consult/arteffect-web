import Link from 'next/link'

import {PlaceholderMedia} from '@/components/ui/PlaceholderMedia'
import {resolveImageUrl} from '@/lib/sanity/image'
import type {NGO} from '@/types/cms'

interface NGOCardProps {
  ngo: NGO
}

export function NGOCard({ngo}: NGOCardProps) {
  return (
    <Link
      href={`/ngos/${ngo.slug}`}
      className="group block space-y-4 rounded-2xl border border-borderTone bg-base-900 p-4 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-forest/55 hover:shadow-panel focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950"
    >
      <PlaceholderMedia
        src={resolveImageUrl(ngo.logo)}
        alt={ngo.name}
        label="NGO Logo"
        className="aspect-[16/9]"
        variant="ngo-logo"
      />
      <div>
        <h3 className="font-display text-2xl text-ivory group-hover:text-goldHover">{ngo.name}</h3>
        <p className="mt-2 text-sm text-textSecondary">{ngo.shortDescription}</p>
      </div>
    </Link>
  )
}
