import {cache} from 'react'

import {
  aboutContent,
  artists as mockArtists,
  batches as mockBatches,
  designs as mockDesigns,
  ngos as mockNgos,
  products as mockProducts,
} from '@/content/mock-data'
import {isSanityConfigured, sanityClient} from '@/lib/sanity/client'
import {
  ARTIST_QUERY,
  ARTISTS_QUERY,
  BATCH_QUERY,
  BATCHES_QUERY,
  DESIGN_QUERY,
  FEATURED_ARTISTS_QUERY,
  FEATURED_BATCH_QUERY,
  FEATURED_DESIGNS_QUERY,
  FEATURED_NGO_QUERY,
  NGO_QUERY,
  NGOS_QUERY,
  PRODUCTS_QUERY,
} from '@/lib/sanity/queries'
import type {Artist, Batch, Design, HomeData, NGO, Product} from '@/types/cms'

function asArray<T>(value: T[] | null | undefined): T[] {
  return Array.isArray(value) ? value : []
}

function normalizeBatch(batch: Batch): Batch {
  return {
    ...batch,
    artists: asArray(batch.artists),
    designs: asArray(batch.designs),
    products: asArray(batch.products),
  }
}

function normalizeArtist(artist: Artist): Artist {
  return {
    ...artist,
    designs: asArray(artist.designs),
    batches: asArray(artist.batches),
  }
}

function normalizeNgo(ngo: NGO): NGO {
  return {
    ...ngo,
    impactStats: asArray(ngo.impactStats),
    supportedBatches: asArray(ngo.supportedBatches),
  }
}

function normalizeDesign(design: Design): Design {
  return {
    ...design,
    galleryImages: asArray(design.galleryImages),
    availableColors: asArray(design.availableColors),
    mockups: asArray(design.mockups),
    products: asArray(design.products),
  }
}

function normalizeProduct(product: Product): Product {
  return {
    ...product,
    sizes: asArray(product.sizes),
    productImages: asArray(product.productImages),
  }
}

async function fetchWithFallback<T>(
  query: string,
  fallback: T,
  params?: Record<string, string>,
): Promise<T> {
  if (!isSanityConfigured) return fallback

  try {
    const result = await sanityClient.fetch<T>(query, params ?? {}, {next: {revalidate: 120}})
    if (result == null) return fallback
    if (Array.isArray(result) && result.length === 0) return fallback
    return result
  } catch {
    return fallback
  }
}

export const getBatches = cache(async () => {
  const result = await fetchWithFallback<Batch[]>(BATCHES_QUERY, mockBatches)
  return result.map(normalizeBatch)
})

export const getBatchBySlug = cache(async (slug: string) => {
  const fallback = mockBatches.find((batch) => batch.slug === slug) ?? null
  const result = await fetchWithFallback<Batch | null>(BATCH_QUERY, fallback, {slug})
  return result ? normalizeBatch(result) : null
})

export const getArtists = cache(async () => {
  const result = await fetchWithFallback<Artist[]>(ARTISTS_QUERY, mockArtists)
  return result.map(normalizeArtist)
})

export const getArtistBySlug = cache(async (slug: string) => {
  const fallback = mockArtists.find((artist) => artist.slug === slug) ?? null
  const result = await fetchWithFallback<Artist | null>(ARTIST_QUERY, fallback, {slug})
  return result ? normalizeArtist(result) : null
})

export const getNgos = cache(async () => {
  const result = await fetchWithFallback<NGO[]>(NGOS_QUERY, mockNgos)
  return result.map(normalizeNgo)
})

export const getNgoBySlug = cache(async (slug: string) => {
  const fallback = mockNgos.find((ngo) => ngo.slug === slug) ?? null
  const result = await fetchWithFallback<NGO | null>(NGO_QUERY, fallback, {slug})
  return result ? normalizeNgo(result) : null
})

export const getDesignBySlug = cache(async (slug: string) => {
  const fallback = mockDesigns.find((design) => design.slug === slug) ?? null
  const result = await fetchWithFallback<Design | null>(DESIGN_QUERY, fallback, {slug})
  return result ? normalizeDesign(result) : null
})

export const getProducts = cache(async () => {
  const result = await fetchWithFallback<Product[]>(PRODUCTS_QUERY, mockProducts)
  return result.map(normalizeProduct)
})

export const getHomeData = cache(async (): Promise<HomeData> => {
  const [featuredBatch, featuredDesigns, featuredArtists, featuredNGO, batches, artists, ngos] =
    await Promise.all([
      fetchWithFallback<Batch | undefined>(FEATURED_BATCH_QUERY, mockBatches[0]).then((item) =>
        item ? normalizeBatch(item) : undefined,
      ),
      fetchWithFallback<Design[]>(FEATURED_DESIGNS_QUERY, mockDesigns.slice(0, 4)).then((items) =>
        items.map(normalizeDesign),
      ),
      fetchWithFallback<Artist[]>(FEATURED_ARTISTS_QUERY, mockArtists.slice(0, 2)).then((items) =>
        items.map(normalizeArtist),
      ),
      fetchWithFallback<NGO | undefined>(FEATURED_NGO_QUERY, mockNgos[0]).then((item) =>
        item ? normalizeNgo(item) : undefined,
      ),
      getBatches(),
      getArtists(),
      getNgos(),
    ])

  const designCount = new Set(
    batches.flatMap((batch) => asArray(batch.designs).map((design) => design.slug)),
  ).size

  return {
    featuredBatch,
    featuredDesigns,
    featuredArtists,
    featuredNGO,
    stats: [
      {label: 'Total Batches', value: String(batches.length)},
      {label: 'Artists Collaborated', value: String(artists.length)},
      {label: 'Designs Released', value: String(designCount || featuredDesigns.length)},
      {label: 'NGOs Supported', value: String(ngos.length)},
    ],
  }
})

export const getAboutData = cache(async () => aboutContent)
