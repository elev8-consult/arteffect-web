export type BatchStatus = 'upcoming' | 'live' | 'archived'
export type ProductType = 'tee' | 'hoodie' | 'sweatshirt'
export type ProductStatus = 'active' | 'coming-soon' | 'sold-out'
export type PortableValue = string | Array<Record<string, unknown>> | null
export type ImageValue = string | {asset?: {_ref?: string}} | null

export interface ImpactStat {
  label: string
  value: string
}

export interface NGOSummary {
  _id: string
  name: string
  slug: string
}

export interface ArtistSummary {
  _id: string
  name: string
  slug: string
}

export interface BatchSummary {
  _id: string
  title: string
  slug: string
  causeTitle: string
  releaseDate?: string
  status: BatchStatus
}

export interface DesignSummary {
  _id: string
  name: string
  slug: string
}

export interface ProductSummary {
  _id: string
  title: string
  slug: string
  color?: string
  price?: number
  productType?: ProductType
  sizes?: string[]
  status?: ProductStatus
}

export interface NGO extends NGOSummary {
  logo?: ImageValue
  shortDescription?: string
  fullStory?: PortableValue
  mission?: string
  impactStats?: ImpactStat[]
  website?: string
  instagram?: string
  featuredImage?: ImageValue
  supportedBatches?: BatchSummary[]
}

export interface Artist extends ArtistSummary {
  profileImage?: ImageValue
  shortBio?: string
  fullBio?: PortableValue
  instagram?: string
  portfolioUrl?: string
  featuredQuote?: string
  designs?: DesignSummary[]
  batches?: BatchSummary[]
}

export interface Batch extends BatchSummary {
  batchNumber?: string
  ngo?: NGOSummary
  heroImage?: ImageValue
  overview?: string
  whyThisBatchExists?: PortableValue
  artists: ArtistSummary[]
  designs: DesignSummary[]
  products?: ProductSummary[]
}

export interface Design extends DesignSummary {
  batch?: BatchSummary
  artist?: ArtistSummary
  ngo?: NGOSummary
  artworkImage?: ImageValue
  galleryImages?: ImageValue[]
  meaning?: string
  symbolism?: string
  availableColors?: string[]
  mockups?: ImageValue[]
  products?: ProductSummary[]
}

export interface Product extends ProductSummary {
  design?: DesignSummary
  sku?: string
  stock?: number
  productImages?: ImageValue[]
}

export interface HomeData {
  featuredBatch?: Batch
  featuredDesigns: Design[]
  featuredArtists: Artist[]
  featuredNGO?: NGO
  stats: ImpactStat[]
}
