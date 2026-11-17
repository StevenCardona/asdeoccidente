# Asdeoccidente web

Phase-1 Next.js app. See root [`AGENTS.md`](../AGENTS.md), [`docs/specs/phase-1/foundation.md`](../docs/specs/phase-1/foundation.md), and [`docs/specs/phase-1/home.md`](../docs/specs/phase-1/home.md).

## Setup

```bash
cd web
cp .env.example .env   # if needed
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Brand assets: `public/brand/` (`logo.jpg` header, `logo-white.png` footer, `favicon.ico` tab icon, `fedeequinas.png` hero).

Contact, socials, map, and page copy come from Sanity (`siteSettings` / page documents). Env holds **infra only**.

## Environment (local + Vercel)

| Variable | Local | Vercel Production / Preview |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | `https://asdeoccidente.vercel.app` |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `h9imk562` | same |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | same |

The public site reads **published** content only via the Sanity CDN. No API token is required for page reads. After changing Vercel env vars, **Redeploy**.

Do not commit `.env` / `web/.env`.

## What’s in the app

| Path | Status |
| --- | --- |
| `/` | Home — full sections from Sanity |
| `/school` | Escuela — from Sanity |
| `/fairs`, `/fairs/[slug]` | Placeholder (noindex until content ships) |
| `/about` | Deferred |
| `/studio` | Sanity Studio (noindex) |

Shared chrome: Header · page body · Contact (mailto form + map + directions video) · Footer · mobile nav.

## Sanity Studio (embedded)

Studio lives **inside this app** at [http://localhost:3000/studio](http://localhost:3000/studio) — same path in production (`https://asdeoccidente.vercel.app/studio`).

1. Open `/studio` and sign in with your Sanity account.
2. Edit **Configuración general**, **Inicio**, **Escuela**. After edits, click **Publicar** (Save alone does not update the public site).
3. CORS: `http://localhost:3000` and managed origin for `https://asdeoccidente.vercel.app`.

Production: [https://asdeoccidente.vercel.app](https://asdeoccidente.vercel.app).
