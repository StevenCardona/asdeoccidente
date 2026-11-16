# Spec: Foundation (phase 1)

> Status: **implemented** — `web/` boots with shared chrome; Home body implemented; School/Fairs route placeholders.

## Identification

| Field | Value |
| --- | --- |
| Id | `foundation` |
| Phase | 1 |
| Depends on | — |
| Project root | `web/` |

## Goal

Next.js app shell: packages, config, feature folders, design tokens, shared layout, embedded Sanity Studio, base SEO. Contact and social identity from env (`siteConfig`), never hardcoded in components.

## Expected result

- `web/` starts locally (`npm run dev`)
- TypeScript strict; Tailwind + shadcn + Lucide wired
- React Query + nuqs providers in root layout
- `(site)` layout via `SiteShell`: Header · outlet · ContactLocation · Footer · mobile bottom nav
- Routes: `/` (Home feature), `/school`, `/fairs`, `/fairs/[slug]` (School/Fairs placeholder bodies)
- `/about` deferred (file `page.tsx.deferred`; nav entry commented)
- `/studio` embedded — Sanity login; project `h9imk562` / dataset `production`
- CSS variables / tokens from design system
- `.env.example` / `.env` with site-wide name, address, phones, WhatsApp, email, social URLs, map/video embeds, Google proof, home video URLs, Sanity ids
- `sitemap` / `robots` / `metadataBase` baseline

## Scope

**In:** bootstrap, shared UI primitives, layout chrome, `siteSettings` + `home` + minimal `fair` schemas, Studio access, navigable shell.

**Out:** School / Fairs page bodies (their specs); About page; chatbot; production DNS.

## Packages

| Package | Purpose |
| --- | --- |
| `next`, `react`, `react-dom` | App |
| `typescript`, strict tsconfig | Typing |
| `tailwindcss` + shadcn/ui | UI system |
| `lucide-react` | Icons |
| `@tanstack/react-query` | Data fetching |
| `nuqs` | URL state |
| `zustand` | Optional global UI state |
| `next-sanity`, `sanity`, `@sanity/vision` | CMS + Studio |

Prefer current stable versions; pin in lockfile.

## Folder tree

See [`../../context/phase-1/architecture.md`](../../context/phase-1/architecture.md). Features: `home` (full), `school` / `fairs` (placeholder pages), `layout` (chrome). Shared: `components/ui`, `lib`, `config`.

## Layout & navigation

**Header (desktop):** BrandLockup · Inicio `/` · Escuela `/school` · Ferias `/fairs` · WhatsApp CTA.  
`{/* Nosotros /about — deferred */}`

**Mobile bottom nav:** Inicio · Escuela · Ferias (Lucide). Nosotros commented.

**ContactLocation (every public page, above footer):**

- Heading: Contacto y ubicación / “Escríbenos y ubica la sede”
- Left: Google Maps iframe (`mapEmbedUrl`); optional “Cómo llegar” control → Dialog with video iframe when `directionsVideoUrl` is set
- Right: mini form (nombre, teléfono, motivo, mensaje) → `mailto:` `NEXT_PUBLIC_EMAIL`
- Address, phones, and WhatsApp are **not** duplicated here; they live in the Footer

**Footer:** BrandLockup (dark), legal name line, nav links, full address, PBX/WhatsApp/email, social icons from env, copyright.

## Design tokens

Map [`DESIGN.md`](../../design/DESIGN.md) into CSS variables / Tailwind theme: primary crimson, secondary navy, tertiary amber, neutrals, radii, spacing, fonts (Plus Jakarta Sans + Inter).

Institutional look: clean, prestigious.

## Sanity

- Studio embedded at `/studio` (same Next app)
- Project `h9imk562`, dataset `production`
- Sanity login / project membership only — **no anonymous access**
- CORS: `http://localhost:3000` + `https://asdeoccidente.vercel.app` in manage → API
- Documents: singleton **Configuración general** (`siteSettings`), singleton **Inicio** (`home`), document type **Feria** (`fair` — minimal fields until fairs feature)
- **UI contact/social today read from env** via `siteConfig` (`web/src/shared/config/site.ts`). `siteSettings` is editable in Studio for future wiring.

## SEO base

- `lang="es-CO"`
- `metadataBase` from env
- Default title template; Home uses `generateMetadata` from CMS/defaults
- `sitemap.ts`, `robots.ts` (disallow studio; allow public routes)

## Mobile / desktop

Same shell; mobile gets bottom nav and tighter gutters. Desktop max width ~`1280px` (`max-w-7xl`).

## Acceptance criteria

- [x] `npm run dev` serves the shell
- [x] Unauthenticated users cannot edit Studio content (Sanity login)
- [x] Nav reaches `/`, `/school`, `/fairs` without About visible
- [x] ContactLocation shows map + video slot (placeholder when URL empty) + mailto form
- [x] Shared Button / Skeleton / Dialog exist and are used by the shell
- [x] Brand logos + favicon in `public/brand/`
