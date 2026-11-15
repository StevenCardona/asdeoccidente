# Spec: Foundation (phase 1)

> Status: **implemented (shell)** — `web/` boots; page bodies still stubs.

## Identification

| Field | Value |
| --- | --- |
| Id | `foundation` |
| Phase | 1 |
| Depends on | — |
| Project root | `web/` (to create) |

## Goal

Bootstrap the Next.js app so the team can start features: packages, config, feature folders, design tokens, shared layout shell, protected Sanity Studio, base SEO. No full page bodies yet.

## Expected result

- `web/` starts locally (`dev` script)
- TypeScript strict; Tailwind + shadcn + Lucide wired
- React Query + nuqs providers in root layout
- `(site)` layout: Header · outlet · ContactLocation · Footer · mobile bottom nav
- Routes stubs: `/`, `/school`, `/fairs`, `/fairs/[slug]` (placeholder bodies OK)
- `/about` **commented** (file and nav entry) for later
- `/studio` embedded in Next (same app) — Sanity login only; project `h9imk562` / dataset `production`
- CSS variables / tokens from design system
- `.env.example` / `.env` with **site-wide** name, address, phones, WhatsApp, social URLs, map/video embeds, plus Sanity project id — **never hardcode** contact in components (see root `AGENTS.md`)
- `sitemap` / `robots` / `metadataBase` baseline

## Scope

**In:** bootstrap, shared UI primitives, layout chrome, site settings schema (minimal), auth gate for Studio, empty navigable shell.

**Out:** Home / School / Fairs content (their specs); About page; chatbot; real production DNS.

## Packages (document for install when coding)

| Package | Purpose |
| --- | --- |
| `next`, `react`, `react-dom` | App |
| `typescript`, strict tsconfig | Typing |
| `tailwindcss` + shadcn/ui | UI system |
| `lucide-react` | Icons |
| `@tanstack/react-query` | Data fetching |
| `nuqs` | URL state |
| `zustand` | Optional global UI state |
| `next-sanity`, `sanity`, `@sanity/vision` (as needed) | CMS + Studio |

Prefer current stable versions at install time; pin in lockfile.

## Folder tree (must match architecture)

See [`../../context/phase-1/architecture.md`](../../context/phase-1/architecture.md). Create `features/{home,school,fairs,layout}` and `shared/{components/ui,lib,config}` even if feature bodies are stubs.

## Layout & navigation

**Header (desktop):** logo · Inicio `/` · Escuela `/school` · Ferias `/fairs` · WhatsApp CTA (Lucide).  
`{/* Nosotros /about — deferred */}`

**Mobile bottom nav:** Inicio · Escuela · Ferias (active states via Lucide). Comment Nosotros.

**ContactLocation (every page, above footer):**

- Heading in Spanish (e.g. Contacto y ubicación)
- Address, phones, WhatsApp from `siteSettings`
- Google Maps iframe (`mapEmbedUrl`)
- Video embed / iframe “Cómo llegar a la sede” (`directionsVideoUrl`)
- Skeleton while settings load

**Footer:** identical sitewide (name, short line, legal links placeholders, copyright).

## Design tokens

Map [`DESIGN.md`](../../design/DESIGN.md) into CSS variables / Tailwind theme: primary crimson, secondary navy, tertiary amber, neutrals, radii, spacing, fonts (Plus Jakarta Sans + Inter).

Institutional look: clean, prestigious, not “AI generic”.

## Sanity access

- Studio embedded at `/studio` (same Next app — not a sibling folder)
- Project `h9imk562`, dataset `production`
- Sanity login / project membership only — **no anonymous access**
- CORS: `localhost:3000` + production domain in manage → API
- Document `siteSettings` (singleton): venue name, address, phones, WhatsApp, map embed URL, directions video URL, social links
- Fair schema lands with the fairs feature work

## SEO base

- `lang="es-CO"`
- `metadataBase` from env
- Default title template
- `sitemap.ts`, `robots.ts` (disallow studio; allow public routes)

## Mobile / desktop

Same shell; mobile gets bottom nav and tighter gutters (`1.25rem`). Desktop max width ~`1280px`.

## Acceptance criteria

- [ ] `npm run dev` (or pnpm) serves the shell
- [ ] Unauthenticated users cannot edit Studio content
- [ ] Nav reaches `/`, `/school`, `/fairs` without About visible
- [ ] ContactLocation shows map + video slots (placeholders OK if URLs pending)
- [ ] Shared Button / Skeleton / Dialog exist and are used by the shell
- [ ] No feature page content required beyond placeholders
