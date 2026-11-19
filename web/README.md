# Asdeoccidente web

Phase-1 Next.js app. See root [`AGENTS.md`](../AGENTS.md) and [`docs/specs/phase-1/site-pages.md`](../docs/specs/phase-1/site-pages.md).

## Setup

```bash
cd web
cp .env.example .env   # infra only — same vars as root .env.example
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Studio: [/studio](http://localhost:3000/studio).

Brand marks in `public/brand/` (logo header/footer, favicon). Fedequinas / OG images are uploaded in Sanity (`siteSettings` → Textos de interfaz).

Contact, socials, map, nav, page copy, and CTAs come from Sanity. Env is **infra only**.

## Environment

| Variable | Local | Production |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | production URL |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | project id | same |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | same |

Published CDN reads only — no token required for the public site. Do not commit `.env`.

## Routes

| Path | Content |
| --- | --- |
| `/` | Home |
| `/school` | Escuela de chalanería |
| `/events` | Eventos list (page banner or featured event hero) |
| `/events/[slug]` | Event detail |
| `/services` | Trámites |
| `/venue` | Alquiler de sede |
| `/membership` | Socios |
| `/equinotherapy` | Equinoterapia |
| `/directory` | Directorio (Excel por tipo) |
| `/about` | Deferred (not in nav) |
| `/studio` | Sanity Studio (noindex) |

Shared chrome: Header → page → Contact & location → Footer. Mobile uses a hamburger drawer (no bottom nav). **No route redirects** in `next.config` — use English paths (`/school`, `/events`, …).

## Publishing

1. Open `/studio` and sign in.
2. Edit singletons (Configuración general, Inicio, Escuela, Eventos → Página, …) or documents (Eventos → Calendario, Directorio → Tipos).
3. Click **Publicar**. Wait ~1 minute or hard-refresh.

Home secondary CTA must be **Ver el próximo evento** with href **`/events`** (never `/fairs`).
