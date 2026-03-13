import type {MetadataRoute} from 'next'

import {getArtists, getBatches, getNgos} from '@/lib/sanity/fetchers'
import {siteUrl} from '@/lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [artists, batches, ngos] = await Promise.all([getArtists(), getBatches(), getNgos()])
  const designSlugs = Array.from(new Set(batches.flatMap((batch) => batch.designs.map((design) => design.slug))))

  return [
    {url: `${siteUrl}/`, lastModified: new Date()},
    {url: `${siteUrl}/about`, lastModified: new Date()},
    {url: `${siteUrl}/batches`, lastModified: new Date()},
    {url: `${siteUrl}/artists`, lastModified: new Date()},
    {url: `${siteUrl}/ngos`, lastModified: new Date()},
    {url: `${siteUrl}/shop`, lastModified: new Date()},
    ...batches.map((batch) => ({url: `${siteUrl}/batches/${batch.slug}`, lastModified: new Date()})),
    ...artists.map((artist) => ({url: `${siteUrl}/artists/${artist.slug}`, lastModified: new Date()})),
    ...ngos.map((ngo) => ({url: `${siteUrl}/ngos/${ngo.slug}`, lastModified: new Date()})),
    ...designSlugs.map((slug) => ({url: `${siteUrl}/designs/${slug}`, lastModified: new Date()})),
  ]
}
