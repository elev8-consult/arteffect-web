import {groq} from 'next-sanity'

const ngoSummary = `{
  _id,
  name,
  "slug": slug.current
}`

const artistSummary = `{
  _id,
  name,
  "slug": slug.current
}`

const batchSummary = `{
  _id,
  title,
  "slug": slug.current,
  causeTitle,
  releaseDate,
  status
}`

const designSummary = `{
  _id,
  name,
  "slug": slug.current
}`

const productSummary = `{
  _id,
  title,
  "slug": slug.current,
  color,
  price,
  productType,
  sizes,
  status
}`

export const BATCHES_QUERY = groq`*[_type == "batch"] | order(releaseDate desc) {
  _id,
  title,
  "slug": slug.current,
  batchNumber,
  causeTitle,
  releaseDate,
  status,
  heroImage,
  overview,
  whyThisBatchExists,
  "ngo": ngo->${ngoSummary},
  "artists": artists[]->${artistSummary},
  "designs": designs[]->${designSummary},
  "products": *[_type == "product" && references(^.designs[]._ref)]${productSummary}
}`

export const BATCH_QUERY = groq`*[_type == "batch" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  batchNumber,
  causeTitle,
  releaseDate,
  status,
  heroImage,
  overview,
  whyThisBatchExists,
  "ngo": ngo->${ngoSummary},
  "artists": artists[]->${artistSummary},
  "designs": designs[]->${designSummary},
  "products": *[_type == "product" && references(^.designs[]._ref)]${productSummary}
}`

export const ARTISTS_QUERY = groq`*[_type == "artist"] | order(name asc) {
  _id,
  name,
  "slug": slug.current,
  profileImage,
  shortBio,
  fullBio,
  instagram,
  portfolioUrl,
  featuredQuote,
  "designs": *[_type == "design" && references(^._id)]${designSummary},
  "batches": *[_type == "batch" && references(^._id)]${batchSummary}
}`

export const ARTIST_QUERY = groq`*[_type == "artist" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  profileImage,
  shortBio,
  fullBio,
  instagram,
  portfolioUrl,
  featuredQuote,
  "designs": *[_type == "design" && references(^._id)]${designSummary},
  "batches": *[_type == "batch" && references(^._id)]${batchSummary}
}`

export const NGOS_QUERY = groq`*[_type == "ngo"] | order(name asc) {
  _id,
  name,
  "slug": slug.current,
  logo,
  shortDescription,
  fullStory,
  mission,
  impactStats,
  website,
  instagram,
  featuredImage,
  "supportedBatches": *[_type == "batch" && ngo._ref == ^._id]${batchSummary}
}`

export const NGO_QUERY = groq`*[_type == "ngo" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  logo,
  shortDescription,
  fullStory,
  mission,
  impactStats,
  website,
  instagram,
  featuredImage,
  "supportedBatches": *[_type == "batch" && ngo._ref == ^._id]${batchSummary}
}`

export const DESIGN_QUERY = groq`*[_type == "design" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  artworkImage,
  galleryImages,
  meaning,
  symbolism,
  availableColors,
  mockups,
  "batch": batch->${batchSummary},
  "artist": artist->${artistSummary},
  "ngo": batch->ngo->${ngoSummary},
  "products": products[]->${productSummary}
}`

export const PRODUCTS_QUERY = groq`*[_type == "product"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  "design": design->${designSummary},
  productType,
  color,
  sizes,
  price,
  sku,
  stock,
  productImages,
  status
}`

export const FEATURED_BATCH_QUERY = groq`*[_type == "batch" && status == "live"] | order(releaseDate desc)[0] {
  _id,
  title,
  "slug": slug.current,
  batchNumber,
  causeTitle,
  releaseDate,
  status,
  heroImage,
  overview,
  whyThisBatchExists,
  "ngo": ngo->${ngoSummary},
  "artists": artists[]->${artistSummary},
  "designs": designs[]->${designSummary},
  "products": *[_type == "product" && references(^.designs[]._ref)]${productSummary}
}`

export const FEATURED_DESIGNS_QUERY = groq`*[_type == "design"] | order(_createdAt desc)[0...4] {
  _id,
  name,
  "slug": slug.current,
  artworkImage,
  meaning,
  symbolism,
  availableColors,
  "batch": batch->${batchSummary},
  "artist": artist->${artistSummary},
  "ngo": batch->ngo->${ngoSummary},
  "products": products[]->${productSummary}
}`

export const FEATURED_ARTISTS_QUERY = groq`*[_type == "artist"] | order(_createdAt desc)[0...2] {
  _id,
  name,
  "slug": slug.current,
  profileImage,
  shortBio,
  fullBio,
  instagram,
  portfolioUrl,
  featuredQuote,
  "designs": *[_type == "design" && references(^._id)]${designSummary},
  "batches": *[_type == "batch" && references(^._id)]${batchSummary}
}`

export const FEATURED_NGO_QUERY = groq`*[_type == "ngo"] | order(_createdAt desc)[0] {
  _id,
  name,
  "slug": slug.current,
  logo,
  shortDescription,
  fullStory,
  mission,
  impactStats,
  website,
  instagram,
  featuredImage,
  "supportedBatches": *[_type == "batch" && ngo._ref == ^._id]${batchSummary}
}`
