import Link from 'next/link'

import {cn} from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

const styles: Record<Variant, string> = {
  primary:
    'border-gold bg-gold text-base-950 hover:border-goldHover hover:bg-goldHover hover:text-base-950 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950',
  secondary:
    'border-gold bg-transparent text-gold hover:bg-gold hover:text-base-950 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950',
  ghost:
    'border-gold/45 bg-transparent text-gold hover:border-goldHover hover:bg-gold/10 hover:text-goldHover focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-4 text-base',
}

export function Button({href, children, variant = 'primary', size = 'md', className}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-md border font-semibold tracking-wide transition duration-300',
        styles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </Link>
  )
}
