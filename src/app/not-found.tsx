import {Button} from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-borderTone bg-base-900 p-10 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">404</p>
      <h1 className="font-display text-4xl text-ivory">Story Not Found</h1>
      <p className="text-textSecondary">The page you requested is not available yet, or this story has moved.</p>
      <div className="flex justify-center">
        <Button href="/">Return Home</Button>
      </div>
    </section>
  )
}
