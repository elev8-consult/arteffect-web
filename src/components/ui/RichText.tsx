import {PortableText, type PortableTextBlock} from '@portabletext/react'

interface RichTextProps {
  value?: unknown
}

export function RichText({value}: RichTextProps) {
  if (!value) return null

  if (typeof value === 'string') {
    return (
      <div className="space-y-4 text-textSecondary">
        {value.split('\n').map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    )
  }

  if (Array.isArray(value)) {
    return (
      <div className="prose prose-invert max-w-none prose-p:text-textSecondary prose-headings:text-ivory prose-a:text-gold">
        <PortableText value={value as PortableTextBlock[]} />
      </div>
    )
  }

  return null
}
