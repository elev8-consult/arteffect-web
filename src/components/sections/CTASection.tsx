import {Button} from '@/components/ui/Button'
import {cn} from '@/lib/utils'

interface CTASectionProps {
  title: string
  description: string
  primary: {label: string; href: string}
  secondary?: {label: string; href: string}
  variant?: 'burgundy' | 'dark'
}

export function CTASection({
  title,
  description,
  primary,
  secondary,
  variant = 'burgundy',
}: CTASectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-2xl border p-8 sm:p-12',
        variant === 'burgundy' &&
          'border-borderTone bg-burgundy [background-image:radial-gradient(rgba(230,211,163,0.08)_1px,transparent_1px)] [background-size:24px_24px]',
        variant === 'dark' && 'border-gold/30 bg-base-900',
      )}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Next Release</p>
          <h2 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">{title}</h2>
          <p className="mt-3 text-textSecondary">{description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href={primary.href}>{primary.label}</Button>
          {secondary ? (
            <Button href={secondary.href} variant="secondary">
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
