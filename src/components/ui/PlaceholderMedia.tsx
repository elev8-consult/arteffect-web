import Image from 'next/image'

import {cn} from '@/lib/utils'

interface PlaceholderMediaProps {
  src?: string
  alt: string
  label: string
  className?: string
  priority?: boolean
  fit?: 'contain' | 'cover'
  gradient?: 'bottom' | 'top' | 'subtle'
  /** Padding when fit="contain" - use "p-6" or "p-8" for logos so they fit within the frame */
  containPadding?: string
  /** Use "ngo-logo" for NGO logos – applies contain fit and extra padding for diverse logo aspect ratios */
  variant?: 'default' | 'ngo-logo'
}

export function PlaceholderMedia({
  src,
  alt,
  label,
  className,
  priority = false,
  fit = 'contain',
  gradient = 'bottom',
  containPadding = 'p-4',
  variant = 'default',
}: PlaceholderMediaProps) {
  const isNgoLogo = variant === 'ngo-logo'
  const effectiveFit = isNgoLogo ? 'contain' : fit
  const effectivePadding = isNgoLogo ? 'p-6' : containPadding

  const gradientClass = {
    bottom: 'bg-gradient-to-t from-base-950/88 via-base-900/10 to-transparent',
    top: 'bg-gradient-to-b from-base-950/60 via-transparent to-transparent',
    subtle: 'bg-gradient-to-t from-base-950/50 via-transparent to-transparent',
  }[gradient]

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl border border-borderTone bg-base-900',
        isNgoLogo && 'placeholdermedia--ngo-logo',
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            'object-cover transition duration-500 group-hover:scale-[1.03]',
            effectiveFit === 'contain' && cn('object-contain group-hover:scale-[1.01]', effectivePadding),
          )}
          priority={priority}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-oceanBlue via-burgundy to-base-950" />
      )}

      <div className={cn('pointer-events-none absolute inset-0', gradientClass)} />
      <span className="absolute bottom-2 right-2 rounded-sm border border-borderTone/60 bg-base-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-textSecondary/90 backdrop-blur-sm">
        {label}
      </span>
    </div>
  )
}
