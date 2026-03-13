import type {
  Artist,
  ArtistSummary,
  Batch,
  BatchSummary,
  Design,
  DesignSummary,
  NGO,
  NGOSummary,
  Product,
  ProductSummary,
} from '@/types/cms'

const ngoSummary = (ngo: NGO): NGOSummary => ({_id: ngo._id, name: ngo.name, slug: ngo.slug})
const artistSummary = (artist: Artist): ArtistSummary => ({_id: artist._id, name: artist.name, slug: artist.slug})
const batchSummary = (batch: Batch): BatchSummary => ({
  _id: batch._id,
  title: batch.title,
  slug: batch.slug,
  causeTitle: batch.causeTitle,
  status: batch.status,
  releaseDate: batch.releaseDate,
})
const designSummary = (design: Design): DesignSummary => ({
  _id: design._id,
  name: design.name,
  slug: design.slug,
})
const productSummary = (product: Product): ProductSummary => ({
  _id: product._id,
  title: product.title,
  slug: product.slug,
  color: product.color,
  price: product.price,
  productType: product.productType,
  sizes: product.sizes,
  status: product.status,
})

const ngosBase: NGO[] = [
  {
    _id: 'ngo-cccl',
    name: 'Children Cancer Center Lebanon',
    slug: 'children-cancer-center-lebanon',
    logo: '/images/ngos/ngo-logo.svg',
    featuredImage: '/images/ngos/ngo-logo.svg',
    shortDescription:
      'A pediatric cancer center providing life-saving treatment and psychosocial support for children and families in Lebanon.',
    mission:
      'To offer every child with cancer in Lebanon access to advanced treatment, dignity-centered care, and family support regardless of financial background.',
    fullStory:
      'Children Cancer Center Lebanon was founded to ensure no child is denied cancer treatment because of cost. The center combines medical care, emotional support, family counseling, and long-term follow-up.',
    impactStats: [
      {label: 'Children Supported', value: '3,200+'},
      {label: 'Treatment Programs', value: '18'},
      {label: 'Volunteer Network', value: '640+'},
    ],
    website: 'https://www.cccl.org.lb',
    instagram: 'https://www.instagram.com/ccclebanon',
  },
  {
    _id: 'ngo-bcri',
    name: 'Beirut Community Relief Initiative',
    slug: 'beirut-community-relief-initiative',
    logo: '/images/ngos/ngo-logo.svg',
    featuredImage: '/images/ngos/ngo-logo.svg',
    shortDescription:
      'A local NGO focused on restoring homes, neighborhood services, and social dignity through community-led rebuilding.',
    mission:
      'To rebuild neighborhoods through transparent aid, direct family support, and long-term community infrastructure programs.',
    fullStory:
      'Beirut Community Relief Initiative began as a grassroots network and evolved into a structured nonprofit delivering housing rehabilitation and local-business grants.',
    impactStats: [
      {label: 'Homes Repaired', value: '1,150+'},
      {label: 'Families Assisted', value: '4,800+'},
      {label: 'Community Hubs', value: '12'},
    ],
    website: 'https://www.bcri.org',
    instagram: 'https://www.instagram.com/beirutrelief',
  },
]

const artistsBase: Artist[] = [
  {
    _id: 'artist-mira-haddad',
    name: 'Mira Haddad',
    slug: 'mira-haddad',
    profileImage: '/images/artists/artist-portrait.svg',
    shortBio:
      'Lebanese visual artist exploring identity, resilience, and memory through layered portrait systems.',
    fullBio:
      'Mira Haddad is a Beirut-based visual artist whose practice studies fragmented identity and emotional repair, often combining botanical motifs with disrupted portrait structures.',
    instagram: 'https://www.instagram.com/mirahaddadstudio',
    portfolioUrl: 'https://www.mirahaddadstudio.com',
    featuredQuote:
      'Art can hold contradiction: grief and optimism, rupture and continuity, one face and many selves.',
  },
  {
    _id: 'artist-karim-nassar',
    name: 'Karim Nassar',
    slug: 'karim-nassar',
    profileImage: '/images/artists/artist-portrait.svg',
    shortBio:
      'Multidisciplinary artist working with geometry, urban emotion, and abstraction.',
    fullBio:
      'Karim Nassar works across digital composition, mural surfaces, and textile translation. His visual language uses modular geometry to represent city rhythms and emotional pressure.',
    instagram: 'https://www.instagram.com/karimnassar.art',
    portfolioUrl: 'https://www.karimnassar.art',
    featuredQuote: 'Geometry is not cold; it is a way to keep meaning intact when everything else moves.',
  },
]

const batchesBase: Batch[] = [
  {
    _id: 'batch-01',
    title: 'Batch 01',
    slug: 'batch-01-hope-through-healing',
    batchNumber: '01',
    causeTitle: 'Hope Through Healing',
    releaseDate: '2026-01-22',
    status: 'live',
    heroImage: '/images/batches/batch-hero.svg',
    overview:
      'Batch 01 introduces pieces centered on emotional recovery and visible hope through portrait symbolism and geometric stability.',
    whyThisBatchExists:
      'This batch exists to spotlight pediatric cancer support in Lebanon and fund continuity of care through one clear cause/NGO/release identity.',
    artists: [],
    designs: [],
  },
  {
    _id: 'batch-02',
    title: 'Batch 02',
    slug: 'batch-02-community-rebuilding',
    batchNumber: '02',
    causeTitle: 'Community Rebuilding',
    releaseDate: '2026-05-16',
    status: 'upcoming',
    heroImage: '/images/batches/batch-hero.svg',
    overview:
      'Batch 02 focuses on collective restoration and neighborhood continuity, framing rebuilding as material and emotional architecture.',
    whyThisBatchExists:
      'This batch supports long-term community rebuilding projects through one dedicated NGO partnership.',
    artists: [],
    designs: [],
  },
]

const designsBase: Design[] = [
  {
    _id: 'design-sunflower-faces',
    name: 'Sunflower Faces',
    slug: 'sunflower-faces',
    artworkImage: '/images/designs/design-artwork.svg',
    meaning: 'Healing, identity, and emotional growth through layered portrait symbolism.',
    symbolism: 'Sunflowers rising from fragmented faces represent hope through pain.',
    availableColors: ['Black', 'White', 'Charcoal'],
    products: [],
  },
  {
    _id: 'design-soft-geometry',
    name: 'Soft Geometry',
    slug: 'soft-geometry',
    artworkImage: '/images/designs/design-artwork.svg',
    meaning: 'Structure within chaos and continuity under pressure.',
    symbolism: 'Connected forms represent resilience and emotional continuity.',
    availableColors: ['Black', 'Stone', 'Off-white'],
    products: [],
  },
  {
    _id: 'design-memory-bloom',
    name: 'Memory Bloom',
    slug: 'memory-bloom',
    artworkImage: '/images/designs/design-artwork.svg',
    meaning: 'Memory as a process of rebuilding identity from fragments.',
    symbolism: 'Blooming forms emerge from fracture as recovery unfolds.',
    availableColors: ['Black', 'Sand', 'White'],
    products: [],
  },
  {
    _id: 'design-echo-blocks',
    name: 'Echo Blocks',
    slug: 'echo-blocks',
    artworkImage: '/images/designs/design-artwork.svg',
    meaning: 'Collective rebuilding represented as repeating structural rhythm.',
    symbolism: 'Layered blocks and echoes symbolize social momentum.',
    availableColors: ['Black', 'Concrete', 'Night Blue'],
    products: [],
  },
]

const buildProductSet = (design: Design, sku: string): Product[] => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  return [
    {
      _id: `${design.slug}-tee-black`,
      title: `${design.name} Tee`,
      slug: `${design.slug}-tee-black`,
      design: designSummary(design),
      productType: 'tee',
      color: 'Black',
      sizes,
      price: 48,
      sku: `${sku}-TEE-BLK`,
      stock: 120,
      status: 'active',
      productImages: ['/images/products/product-mockup.svg'],
    },
    {
      _id: `${design.slug}-tee-white`,
      title: `${design.name} Tee`,
      slug: `${design.slug}-tee-white`,
      design: designSummary(design),
      productType: 'tee',
      color: 'White',
      sizes,
      price: 48,
      sku: `${sku}-TEE-WHT`,
      stock: 0,
      status: 'sold-out',
      productImages: ['/images/products/product-mockup.svg'],
    },
    {
      _id: `${design.slug}-hoodie-black`,
      title: `${design.name} Hoodie`,
      slug: `${design.slug}-hoodie-black`,
      design: designSummary(design),
      productType: 'hoodie',
      color: 'Black',
      sizes,
      price: 96,
      sku: `${sku}-HD-BLK`,
      stock: 64,
      status: 'active',
      productImages: ['/images/products/product-mockup.svg'],
    },
    {
      _id: `${design.slug}-sweatshirt-black`,
      title: `${design.name} Sweatshirt`,
      slug: `${design.slug}-sweatshirt-black`,
      design: designSummary(design),
      productType: 'sweatshirt',
      color: 'Black',
      sizes,
      price: 82,
      sku: `${sku}-SWT-BLK`,
      stock: 94,
      status: 'coming-soon',
      productImages: ['/images/products/product-mockup.svg'],
    },
  ]
}

const productsBase: Product[] = [
  ...buildProductSet(designsBase[0], 'SF'),
  ...buildProductSet(designsBase[1], 'SG'),
  ...buildProductSet(designsBase[2], 'MB'),
  ...buildProductSet(designsBase[3], 'EB'),
]

const mapping = {
  'sunflower-faces': {batch: 'batch-01-hope-through-healing', artist: 'mira-haddad'},
  'soft-geometry': {batch: 'batch-02-community-rebuilding', artist: 'karim-nassar'},
  'memory-bloom': {batch: 'batch-01-hope-through-healing', artist: 'mira-haddad'},
  'echo-blocks': {batch: 'batch-02-community-rebuilding', artist: 'karim-nassar'},
} as const

const batchNgo: Record<string, string> = {
  'batch-01-hope-through-healing': 'children-cancer-center-lebanon',
  'batch-02-community-rebuilding': 'beirut-community-relief-initiative',
}

const ngoMap = new Map(ngosBase.map((ngo) => [ngo.slug, ngo]))

export const designs: Design[] = designsBase.map((design) => {
  const map = mapping[design.slug as keyof typeof mapping]
  const batch = batchesBase.find((b) => b.slug === map.batch)
  const artist = artistsBase.find((a) => a.slug === map.artist)
  const ngo = batch ? ngoMap.get(batchNgo[batch.slug]) : undefined
  const products = productsBase.filter((product) => product.design?.slug === design.slug)

  return {
    ...design,
    batch: batch ? batchSummary(batch) : undefined,
    artist: artist ? artistSummary(artist) : undefined,
    ngo: ngo ? ngoSummary(ngo) : undefined,
    products: products.map(productSummary),
  }
})

export const batches: Batch[] = batchesBase.map((batch) => {
  const ngo = ngoMap.get(batchNgo[batch.slug])
  const relatedDesigns = designs.filter((design) => design.batch?.slug === batch.slug)
  const relatedArtists = artistsBase.filter((artist) =>
    relatedDesigns.some((design) => design.artist?.slug === artist.slug),
  )
  const relatedProducts = productsBase.filter((product) =>
    relatedDesigns.some((design) => design.slug === product.design?.slug),
  )

  return {
    ...batch,
    ngo: ngo ? ngoSummary(ngo) : undefined,
    artists: relatedArtists.map(artistSummary),
    designs: relatedDesigns.map(designSummary),
    products: relatedProducts.map(productSummary),
  }
})

export const artists: Artist[] = artistsBase.map((artist) => {
  const artistDesigns = designs.filter((design) => design.artist?.slug === artist.slug)
  const artistBatches = batches.filter((batch) => artistDesigns.some((design) => design.batch?.slug === batch.slug))

  return {
    ...artist,
    designs: artistDesigns.map(designSummary),
    batches: artistBatches.map(batchSummary),
  }
})

export const ngos: NGO[] = ngosBase.map((ngo) => ({
  ...ngo,
  supportedBatches: batches.filter((batch) => batch.ngo?.slug === ngo.slug).map(batchSummary),
}))

export const products: Product[] = productsBase

export const aboutContent = {
  brandStory:
    'ArtEffect is a fashion and art storytelling platform where every release is shaped around a single cause and NGO partnership. We collaborate with artists to transform symbolic narratives into wearable pieces that generate direct social impact.',
  howItWorks: [
    {
      title: 'Artist Creates',
      description:
        'Artists develop original visual language rooted in identity, resilience, and social context.',
    },
    {
      title: 'Batch Released',
      description:
        'Each batch is defined by one cause + one NGO + one release, then expressed through multiple designs.',
    },
    {
      title: 'NGO Supported',
      description:
        'A portion of each piece supports transparent NGO programs tied directly to the batch cause.',
    },
    {
      title: 'Impact Created',
      description:
        'Each collection extends beyond aesthetics and contributes to measurable social outcomes.',
    },
  ],
  mission:
    'To make wearable art a direct bridge between cultural expression and accountable social impact.',
  philosophy:
    'Fashion is treated as a storytelling medium, not a trend cycle. Every release should carry intention and real-world effect.',
}
