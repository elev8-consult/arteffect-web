import type {Metadata} from 'next'
import {Manrope, Sora} from 'next/font/google'

import {Footer} from '@/components/layout/Footer'
import {Navbar} from '@/components/layout/Navbar'
import {buildMetadata} from '@/lib/seo'

import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({title: 'ArtEffect | Wear the Effect'})

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="bg-base-950 font-sans text-ivory antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(90,0,0,0.22),transparent_42%)]">
          <Navbar />
          <main className="mx-auto w-[min(1200px,92vw)] py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
