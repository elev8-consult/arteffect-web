# ArtEffect Web

Next.js App Router frontend for ArtEffect storytelling.

## Stack

- Next.js + TypeScript
- Tailwind CSS
- Framer Motion
- Sanity via `next-sanity`

## Routes

- /
- /about
- /batches
- /batches/[slug]
- /artists
- /artists/[slug]
- /ngos
- /ngos/[slug]
- /designs/[slug]
- /shop

## Local setup

```bash
cd arteffect-web
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

If Sanity env vars are missing, the app automatically uses local mock data.

## Environment variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-01
SANITY_API_READ_TOKEN=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Sanity integration files

- `src/lib/sanity/client.ts`
- `src/lib/sanity/image.ts`
- `src/lib/sanity/queries.ts`
- `src/lib/sanity/fetchers.ts`
- `src/types/cms.ts`

## Placeholder visuals

Placeholders are under:

- `public/images/batches`
- `public/images/designs`
- `public/images/artists`
- `public/images/ngos`
- `public/images/products`

Replace with real assets later or populate image fields in Sanity.

## Local verification

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Vercel deployment

1. Import this folder (`arteffect-web`) as a Vercel project root.
2. Set required env vars from `.env.example`.
3. Install command: `pnpm install`
4. Build command: `pnpm build`
5. Output: Next.js default output.
6. Ensure `NEXT_PUBLIC_SITE_URL` matches production domain.

No localhost URLs are required in production.
