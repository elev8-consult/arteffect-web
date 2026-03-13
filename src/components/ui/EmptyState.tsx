import {Palette} from 'lucide-react'

import {Button} from '@/components/ui/Button'
import {cn} from '@/lib/utils'

interface EmptyStateProps {
  title: string
  description: string
  icon?: React.ReactNode
  action?: {label: string; href: string}
  className?: string
}

export function EmptyState({title, description, icon, action, className}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-dashed border-borderTone/80 bg-base-900/80 p-10 text-center',
        className,
      )}
    >
      <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-base-800 text-gold/70">
        {icon ?? <Palette className="size-7" />}
      </div>
      <p className="font-display text-xl text-ivory">{title}</p>
      <p className="mt-2 text-sm text-textSecondary">{description}</p>
      {action && (
        <div className="mt-6">
          <Button href={action.href} variant="secondary">
            {action.label}
          </Button>
        </div>
      )}
    </div>
  )
}
