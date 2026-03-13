import Image from 'next/image'
import Link from 'next/link'

import {cn} from '@/lib/utils'

type BrandLogoVariant = 'wordmark' | 'lockup'

interface BrandLogoProps {
  variant?: BrandLogoVariant
  href?: string
  className?: string
  priority?: boolean
}

const logoConfig: Record<BrandLogoVariant, {src: string; width: number; height: number}> = {
  wordmark: {
    src: '/images/brand/arteffect-wordmark.png',
    width: 988,
    height: 166,
  },
  lockup: {
    src: '/images/brand/arteffect-logo.png',
    width: 1563,
    height: 1563,
  },
}

export function BrandLogo({variant = 'wordmark', href = '/', className, priority = false}: BrandLogoProps) {
  const logo = logoConfig[variant]

  return (
    <Link href={href} aria-label="ArtEffect home" className={cn('inline-flex items-center', className)}>
      <Image
        src={logo.src}
        alt="ArtEffect"
        width={logo.width}
        height={logo.height}
        priority={priority}
        className={cn('h-auto w-full max-w-[180px] sm:max-w-[220px]', variant === 'lockup' && 'max-w-[240px]')}
      />
    </Link>
  )
}
