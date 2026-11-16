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

Brand assets: `public/brand/` (`logo.jpg` header, `logo-white.png` footer, `favicon.ico` tab icon).

## Sanity Studio (embedded)

Studio lives **inside this app** at [http://localhost:3000/studio](http://localhost:3000/studio) — one URL for admins after deploy (`tudominio/studio`).

| | |
| --- | --- |
| Project ID | `h9imk562` |
| Dataset | `production` |

Already set in `.env.example`. Copy to `.env` if missing, then restart `npm run dev`.

1. Open `/studio` and sign in with your Sanity account (invite editors in [sanity.io/manage](https://www.sanity.io/manage)).
2. In manage → API → **CORS origins**, add `http://localhost:3000` (and later your Vercel domain) with credentials allowed.
3. Edit **Configuración general** (singleton `siteSettings`).

Do not commit `web/.env`. Do not run a separate `studio-asdeoccidente` folder for day-to-day use.
