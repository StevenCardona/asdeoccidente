# Phase 1 — Architecture

Why and how the phase-1 app is structured. Delivery checklist lives in [`../../specs/phase-1/foundation.md`](../../specs/phase-1/foundation.md).

---

## Stack

| Layer | Choice | Role |
| --- | --- | --- |
| App | Next.js (App Router) + TypeScript (strict) | Routes, SSR/SSG, SEO |
| UI | Tailwind CSS + shadcn/ui + Lucide | Design-system components, icons |
| Brand icons | Shared SVGs (WhatsApp, Instagram, Google, YouTube, TikTok) | Social / reviews marks |
| Data fetching | TanStack React Query | Client reads against Sanity / defaults |
| URL state | nuqs | Typed search params when needed |
| Client UI state | Zustand | Only if a small global UI need appears; default prefer local state |
| CMS | Sanity (Studio at `/studio`) | Admins edit content; **access control required** |
| Site identity | Sanity `siteSettings` → `getSiteSettings()` | Name, address, phones, WhatsApp, email, map, Google proof (env: site URL + Sanity only) |
| Hosting (later) | Vercel | Deploy + previews |

No separate custom backend in phase 1 beyond Next route handlers / Sanity client. Chatbot and payments are out of scope.

---

## Language rules

| Layer | Language |
| --- | --- |
| File names, components, hooks, models, utils, API keys in code | English |
| URL paths | English (`/school`, `/events`, …) |
| User-visible copy, CMS content, `lang` on pages | Spanish (`es-CO`) |

---

## Routes

| UI label (ES) | Path | Status |
| --- | --- | --- |
| Inicio | `/` | **Implemented** (Home feature) |
| Escuela | `/school` | Implemented (acceptance pending) |
| Eventos | `/events` | Implemented (list + detail) |
| Evento (detalle) | `/events/[slug]` | Implemented |
| Servicios (trámites) | `/services` | In progress — Sanity sections + PDFs |
| Alquiler | `/venue` | Spec / stub |
| Socios | `/membership` | Spec / stub |
| Equinoterapia | `/equinotherapy` | Spec / stub |
| Directorio | `/directory` | Spec / stub (search UI later) |
| Nosotros | `/about` | **Commented / deferred** (`page.tsx.deferred`) |
| Studio | `/studio` | Active + **authenticated** (Sanity login) |

Old Spanish WordPress paths get 301 redirects at launch (document at cutover).

---

## Folder structure

```text
web/
  src/
    app/
      layout.tsx                 # html lang, fonts, providers
      (site)/
        layout.tsx               # SiteShell
        page.tsx                 # Home → features/home (SSR fetch + metadata)
        school/page.tsx          # placeholder
        fairs/
          page.tsx               # list placeholder
          [slug]/page.tsx        # detail placeholder
        # about → page.tsx.deferred
      studio/[[...tool]]/        # Sanity Studio (outside public chrome)
    features/
      home/
        app/                     # HomePage (smart)
        hooks/                   # useHomeContent, useCountUp
        components/              # hero, essence, stats, services, gallery, gaits, videos, …
        models/                  # types, defaults, query, map, fetchHomeContent
        utils/                   # cta, icons
      school/
        app/                     # SchoolPage
        hooks/                   # useSchoolContent
        components/              # hero, method, horses, gallery, staff, fees, faq
        models/                  # types, defaults, query, map, fetchSchoolContent
      site/models/               # getSiteSettings (contact/identity from Sanity)
      fairs/app/                 # FairsListPage + FairDetailPage placeholders
      layout/                    # SiteShell, Header, Footer, ContactLocation, MobileNav, BrandLockup
    shared/
      components/ui/             # Button, Dialog, Skeleton
      components/                # SafeImage, brand-icons
      lib/                       # react-query, utils, sanity-image
      config/site.ts             # siteUrl + WhatsApp helpers + navItems
    sanity/
      schemaTypes/               # objects/, site/, home/, school/, fairs/
      lib/client.ts
```

**Flow:** light route in `app/` → feature `app/` (smart: data / React Query) → feature `components/` (dumb) → `shared/components/ui`.

**Smart / dumb:** smart containers fetch and pass data; dumb components receive props and render. Prefer reuse over one-off page buttons.

---

## Design system & anti–“AI page” rules

Source: [`DESIGN.md`](../../design/DESIGN.md) + [`design-system.png`](../../design/design-system.png).

- Tokens: primary crimson, secondary navy/slate, tertiary amber (sparingly), neutrals, Plus Jakarta Sans (display) + Inter (body)
- Same Button / Dialog / Skeleton everywhere — no per-page restyling
- Lucide for UI icons; brand marks only via shared brand-icons
- **Do:** editorial whitespace, real equestrian photography, restrained hairlines, institutional calm
- **Don’t:** purple gradients, neon glow, emoji rows, floating badge stickers on heroes, multi-layer candy shadows, dashboard chrome, generic startup fluff copy

Mockups under `docs/design/mobile|web/` are atmosphere references, not pixel mandates.

---

## Shared layout

Every public page (`SiteShell`):

1. **Header** — BrandLockup, nav (Inicio · Escuela · Ferias), WhatsApp CTA. Nosotros commented.
2. **Body** — feature content only
3. **Contact & location** — mini form (`mailto`) + Maps iframe + optional directions video dialog
4. **Footer** — address, phones, WhatsApp, email, socials from `getSiteSettings()`
5. **Mobile bottom nav** — Inicio · Escuela · Ferias; Nosotros commented

Skeletons mirror section structure while data loads (Home has `HomePageSkeleton`).

---

## APIs & React Query

- Document endpoints (Sanity queries / defaults) in feature `models`
- Client reads go through React Query hooks in `features/*/hooks` (Home: `useHomeContent` with SSR `initialHome`)
- Skeletons for pending; clear empty and error states

---

## Sanity

- **Embedded** at `/studio` (same deploy as the site)
- Project `h9imk562`, dataset `production` (`NEXT_PUBLIC_SANITY_*`)
- **Access:** Sanity login / project members only
- CORS: allow `http://localhost:3000` and `https://asdeoccidente.vercel.app`
- Schemas (folder per page under `schemaTypes/`):
  - **Configuración general** (`siteSettings`) — identity, contact, socials, map, Google, WhatsApp messages
  - **Inicio** (`home` singleton) — hero, essence, stats, services, gallery, gaits, videos, SEO
  - **Escuela** (`school` singleton) — hero, method, horses, gallery, staff, fees, FAQ, SEO
  - **Feria** (`fair`) — title, slug, banner, dates, featured, summary (expand with fairs feature)

---

## SEO

- `metadataBase`, per-route metadata (`generateMetadata` on Home), single `h1`
- `sitemap.ts`, `robots.ts`
- Hero image prioritized for LCP on mobile
- Spanish content; English URLs with ES titles/descriptions

---

## Naming & quality bar

- Clear English names for functions and variables
- Simple over clever; no deep abstraction for trivial UI
- Strong TypeScript; no `any` for domain models
- Congruent UI: if a modal/button exists in shared, use it
