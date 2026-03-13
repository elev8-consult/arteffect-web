import Link from 'next/link'

import {PlaceholderMedia} from '@/components/ui/PlaceholderMedia'
import {resolveImageUrl} from '@/lib/sanity/image'
import {formatCurrency} from '@/lib/utils'
import type {Product} from '@/types/cms'

interface ProductCardProps {
  product: Product
  asLink?: boolean
}

const statusLabel = {
  active: 'Buy Soon',
  'coming-soon': 'Coming Soon',
  'sold-out': 'Request This Piece',
} as const

const statusTone = {
  active: 'border-forest/40 bg-forest/10 text-forest',
  'coming-soon': 'border-terracotta/40 bg-terracotta/10 text-terracotta',
  'sold-out': 'border-coral/40 bg-coral/10 text-coral',
} as const

export function ProductCard({product, asLink = true}: ProductCardProps) {
  const status = product.status ?? 'coming-soon'
  const href = product.design?.slug ? `/designs/${product.design.slug}` : '/shop'

  const cardContent = (
    <>
      <PlaceholderMedia
        src={resolveImageUrl(product.productImages?.[0])}
        alt={product.title}
        label="Product Mockup"
        className="aspect-[3/4]"
      />
      <div className="space-y-3">
        <h3 className="font-display text-xl text-ivory group-hover:text-goldHover">{product.title}</h3>
        <p className="text-lg font-semibold text-gold">{formatCurrency(product.price)}</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-sm border px-2 py-1 text-xs uppercase tracking-[0.15em] ${statusTone[status]}`}>
            {statusLabel[status]}
          </span>
          {product.design?.name && (
            <span className="text-xs text-textSecondary">· {product.design.name}</span>
          )}
        </div>
        <p className="text-xs text-textSecondary">
          {product.productType} · {product.color}
          {product.sizes?.length ? ` · ${product.sizes.join(', ')}` : ''}
        </p>
      </div>
    </>
  )

  const cardClassName =
    'group block space-y-4 rounded-2xl border border-borderTone bg-base-900 p-4 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-gold/35 hover:shadow-panel focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950'

  if (asLink) {
    return <Link href={href} className={cardClassName}>{cardContent}</Link>
  }

  return <article className={cardClassName}>{cardContent}</article>
}
