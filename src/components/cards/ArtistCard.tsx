import Link from 'next/link'

import {PlaceholderMedia} from '@/components/ui/PlaceholderMedia'
import {resolveImageUrl} from '@/lib/sanity/image'
import type {Artist} from '@/types/cms'

interface ArtistCardProps {
  artist: Artist
}

export function ArtistCard({artist}: ArtistCardProps) {
  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group block space-y-4 rounded-2xl border border-borderTone bg-base-900 p-4 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-artistBlue/55 hover:shadow-panel focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950"
    >
      <PlaceholderMedia
        src={resolveImageUrl(artist.profileImage)}
        alt={artist.name}
        label="Artist Portrait"
        className="aspect-[4/5]"
      />
      <div>
        <h3 className="font-display text-2xl text-ivory group-hover:text-goldHover">{artist.name}</h3>
        <p className="mt-2 text-sm text-textSecondary">{artist.shortBio}</p>
      </div>
    </Link>
  )
}
