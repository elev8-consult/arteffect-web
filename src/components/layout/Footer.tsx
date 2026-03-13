import Link from 'next/link'
import {Instagram, Linkedin, Twitter} from 'lucide-react'

import {BrandLogo} from '@/components/branding/BrandLogo'

const links = [
  {href: '/', label: 'Home'},
  {href: '/batches', label: 'Batches'},
  {href: '/artists', label: 'Artists'},
  {href: '/ngos', label: 'NGOs'},
  {href: '/shop', label: 'Shop'},
  {href: '/about', label: 'About'},
]

const socialLinks = [
  {href: 'https://instagram.com', label: 'Instagram', icon: Instagram},
  {href: 'https://x.com', label: 'X / Twitter', icon: Twitter},
  {href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin},
]

export function Footer() {
  return (
    <footer className="mt-24 border-t border-borderTone bg-burgundy">
      <div className="mx-auto grid w-[min(1200px,92vw)] gap-10 px-4 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <BrandLogo variant="wordmark" className="w-fit" />
          <p className="max-w-xs text-sm text-textSecondary">
            Wearable storytelling at the intersection of art, fashion, and social impact.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.17em] text-gold">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-textSecondary">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-goldHover focus-visible:rounded focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-burgundy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.17em] text-gold">Social</p>
          <ul className="flex gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="text-textSecondary transition hover:text-goldHover focus-visible:rounded focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-burgundy"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-borderTone py-5 text-center text-xs uppercase tracking-[0.12em] text-textSecondary">
        © {new Date().getFullYear()} ArtEffect. All rights reserved.
      </div>
    </footer>
  )
}
