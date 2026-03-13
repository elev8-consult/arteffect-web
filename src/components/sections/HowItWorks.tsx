'use client'

import {HeartHandshake, Package, Palette, Sparkles} from 'lucide-react'

import {RevealStagger, RevealStaggerItem} from '@/components/ui/Reveal'
import {cn} from '@/lib/utils'

interface HowItWorksItem {
  title: string
  description: string
}

interface HowItWorksProps {
  items: HowItWorksItem[]
}

const stepIcons = [Palette, Package, HeartHandshake, Sparkles]

export function HowItWorks({items}: HowItWorksProps) {
  return (
    <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
      {/* Connecting line - visible on larger screens */}
      <div
        className="absolute left-1/2 top-8 hidden h-px w-[calc(100%-4rem)] -translate-x-1/2 border-t border-dashed border-gold/30 lg:block"
        aria-hidden
      />
      <RevealStagger className="col-span-full contents">
        {items.map((item, index) => {
          const Icon = stepIcons[index % stepIcons.length]
          return (
            <RevealStaggerItem key={item.title} as="li"
                className={cn(
                  'relative rounded-xl border bg-base-900 p-5 transition duration-300 hover:border-gold/40',
                  index === 0 && 'border-gold/30',
                  index === 1 && 'border-lavender/30',
                  index === 2 && 'border-forest/30',
                  index === 3 && 'border-coral/30',
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-base-800 text-gold">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">0{index + 1}</p>
                    <h3 className="mt-1 font-display text-xl text-ivory">{item.title}</h3>
                    <p className="mt-2 text-sm text-textSecondary">{item.description}</p>
                  </div>
                </div>
              </RevealStaggerItem>
          )
        })}
      </RevealStagger>
    </ol>
  )
}
