import imageUrlBuilder from '@sanity/image-url'

import {sanityClient} from '@/lib/sanity/client'

const builder = imageUrlBuilder(sanityClient)

type SanityImage =
  | string
  | {
      asset?: {
        _ref?: string
      }
    }
  | null
  | undefined

export function resolveImageUrl(image: SanityImage): string | undefined {
  if (!image) return undefined
  if (typeof image === 'string') return image
  if (image.asset?._ref) {
    return builder.image(image).width(1600).auto('format').url()
  }
  return undefined
}
