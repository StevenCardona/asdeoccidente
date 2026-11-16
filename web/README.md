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

Site contact, map, Google proof, and home video URLs come from `NEXT_PUBLIC_*` (see `.env.example`). Do not hardcode them in components.

## What’s in the app

| Path | Status |
| --- | --- |
| `/` | Home — full sections |
| `/school` | Placeholder |
| `/fairs`, `/fairs/[slug]` | Placeholder |
| `/about` | Deferred |
| `/studio` | Sanity Studio |

Shared chrome: Header · page body · Contact (mailto form + map + directions video) · Footer · mobile nav.

## Sanity Studio (embedded)

Studio lives **inside this app** at [http://localhost:3000/studio](http://localhost:3000/studio) — same path in production (`https://asdeoccidente.vercel.app/studio`).

| | |
| --- | --- |
| Project ID | `h9imk562` |
| Dataset | `production` |

Already set in `.env.example`. Copy to `.env` if missing, then restart `npm run dev`.

1. Open `/studio` and sign in with your Sanity account (invite editors in [sanity.io/manage](https://www.sanity.io/manage)).
2. In manage → API → **CORS origins**, add `http://localhost:3000` and `https://asdeoccidente.vercel.app` with credentials allowed.
3. In Vercel project env, set `NEXT_PUBLIC_SITE_URL=https://asdeoccidente.vercel.app` (local `.env` stays on `http://localhost:3000`).
4. Edit **Inicio** (`home`), **Configuración general** (`siteSettings`), and **Feria** documents. The public UI reads contact/social from env via `siteConfig` today.

Production preview: [https://asdeoccidente.vercel.app](https://asdeoccidente.vercel.app).

Do not commit `web/.env`. Do not run a separate `studio-asdeoccidente` folder for day-to-day use.
