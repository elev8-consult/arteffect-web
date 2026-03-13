import type {Metadata} from 'next'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

interface MetadataInput {
  title: string
  description?: string
  path?: string
}

const defaultDescription =
  'ArtEffect is a storytelling-first fashion platform connecting artists, causes, and NGOs through curated releases.'

export function buildMetadata({title, description = defaultDescription, path = '/'}: MetadataInput): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title,
      description,
      url: new URL(path, siteUrl).toString(),
      siteName: 'ArtEffect',
      type: 'website',
      images: [
        {
          url: '/images/og-placeholder.svg',
          width: 1200,
          height: 630,
          alt: 'ArtEffect',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-placeholder.svg'],
    },
  }
}
