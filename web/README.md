# Asdeoccidente web

Phase-1 Next.js app. See root [`AGENTS.md`](../AGENTS.md) and [`docs/specs/phase-1/foundation.md`](../docs/specs/phase-1/foundation.md).

## Setup

```bash
cd web
cp .env.example .env   # if needed
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Brand assets live in `public/brand/` (`logo.jpg` header, `logo-white.png` footer, `favicon.ico` tab icon).

## Sanity Studio (`/studio`)

The setup screen appears until `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `web/.env`.

1. Sign in at [sanity.io/manage](https://www.sanity.io/manage) (or `npx sanity login` in this folder).
2. Create a project (dataset `production`) or open an existing one.
3. Copy the **Project ID** into `web/.env`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Restart `npm run dev` and open `/studio`.
5. Sign in with the same Sanity account (no anonymous edit).

Do not commit `web/.env`.
