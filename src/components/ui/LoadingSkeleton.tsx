import {cn} from '@/lib/utils'

interface LoadingSkeletonProps {
  variant?: 'card' | 'card-grid' | 'hero' | 'list'
  className?: string
}

export function LoadingSkeleton({variant = 'card-grid', className}: LoadingSkeletonProps) {
  if (variant === 'hero') {
    return (
      <div className={cn('space-y-6', className)}>
        <div className="h-14 w-3/4 animate-pulse rounded-lg bg-base-800" />
        <div className="h-6 w-1/2 animate-pulse rounded bg-base-800 animate-shimmer" />
        <div className="flex gap-3">
          <div className="h-11 w-32 animate-pulse rounded-md bg-base-800" />
          <div className="h-11 w-32 animate-pulse rounded-md bg-base-800" />
        </div>
      </div>
    )
  }

  if (variant === 'list') {
    return (
      <div className={cn('grid gap-4 sm:grid-cols-2', className)}>
        {Array.from({length: 4}).map((_, i) => (
          <div key={i} className="flex gap-4 rounded-2xl border border-borderTone bg-base-900 p-4">
            <div className="aspect-[16/10] w-1/2 animate-pulse rounded-xl bg-base-800" />
            <div className="flex flex-1 flex-col gap-2">
              <div className="h-6 w-3/4 animate-pulse rounded bg-base-800" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-base-800" />
              <div className="h-4 w-full animate-pulse rounded bg-base-800" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div className={cn('space-y-4 rounded-2xl border border-borderTone bg-base-900 p-4', className)}>
        <div className="aspect-square animate-pulse rounded-xl bg-base-800" />
        <div className="h-6 w-2/3 animate-pulse rounded bg-base-800" />
        <div className="h-4 w-full animate-pulse rounded bg-base-800" />
      </div>
    )
  }

  return (
    <div className={cn('space-y-6', className)}>
      <div className="h-10 w-2/3 animate-pulse rounded-lg bg-base-800" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({length: 8}).map((_, i) => (
          <div key={i} className="space-y-4 rounded-2xl border border-borderTone bg-base-900 p-4">
            <div className="aspect-[3/4] animate-pulse rounded-xl bg-base-800" />
            <div className="h-5 w-3/4 animate-pulse rounded bg-base-800" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-base-800" />
          </div>
        ))}
      </div>
    </div>
  )
}
