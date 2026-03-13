'use client'

import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {Menu, X} from 'lucide-react'

import {BrandLogo} from '@/components/branding/BrandLogo'
import {cn} from '@/lib/utils'

const navItems = [
  {href: '/', label: 'Home'},
  {href: '/batches', label: 'Batches'},
  {href: '/artists', label: 'Artists'},
  {href: '/ngos', label: 'NGOs'},
  {href: '/shop', label: 'Shop'},
  {href: '/about', label: 'About'},
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-borderTone bg-base-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-[min(1200px,92vw)] items-center justify-between px-4">
        <BrandLogo priority />

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm tracking-wide text-textSecondary transition hover:text-goldHover focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950',
                    isActive && 'bg-base-900 text-gold',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-gold transition hover:bg-base-900 hover:text-goldHover focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950 md:hidden"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-20 border-b border-borderTone bg-base-950/98 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block rounded-md px-4 py-3 text-base font-medium transition',
                      isActive ? 'bg-base-900 text-gold' : 'text-textSecondary hover:bg-base-900 hover:text-goldHover',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
