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
| Alquiler | `/venue` | In progress — Sanity `venuePage` |
| Socios | `/membership` | In progress — Sanity `membershipPage` |
| Equinoterapia | `/equinotherapy` | In progress — Sanity `equinotherapyPage` |
| Directorio | `/directory` | Implemented — Excel por tipo + tabla |
| Nosotros | `/about` | **Commented / deferred** (`page.tsx.deferred`) |
| Studio | `/studio` | Active + **authenticated** (Sanity login) |

Public routes use English paths only (`/school`, `/events`, …). **No Next.js redirects** — do not add `/fairs` or Spanish path aliases.

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
        components/              # hero, essence, stats, services, gallery, reviews, videos, …
        models/                  # types, defaults, query, map, fetchHomeContent
        utils/                   # cta, icons
      school/
        app/                     # SchoolPage
        hooks/                   # useSchoolContent
        components/              # hero, method, horses, gallery, staff, fees, faq
        models/                  # types, defaults, query, map, fetchSchoolContent
      venue/
        app/                     # VenuePage
        components/              # hero, intro, spaces, gallery, reviews
        models/                  # types, defaults, query, map, fetchVenueContent
      membership/
        app/                     # MembershipPage
        components/              # hero, about, mission-vision, benefits, gallery, costs, requirements
        models/                  # types, defaults, query, map, fetchMembershipContent
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

Source: [`DESIGN.md`](../../design/DESIGN.md) and mockups under `docs/design/`.

- Tokens: primary crimson, secondary navy/slate, tertiary amber (sparingly), neutrals, Plus Jakarta Sans (display) + Inter (body)
- Same Button / Dialog / Skeleton everywhere — no per-page restyling
- Lucide for UI icons; brand marks only via shared brand-icons
- **Do:** editorial whitespace, real equestrian photography, restrained hairlines, institutional calm
- **Don’t:** purple gradients, neon glow, emoji rows, floating badge stickers on heroes, multi-layer candy shadows, dashboard chrome, generic startup fluff copy

Mockups under `docs/design/mobile|web/` are atmosphere references, not pixel mandates.

---

## Shared layout

Every public page (`SiteShell`):

1. **Header** — BrandLockup; desktop `navItems`; mobile **hamburguesa + drawer** (sin bottom bar); WhatsApp CTA
2. **Body** — feature content only
3. **Contact & location** — mini form (`mailto`) + Maps iframe + optional directions video dialog
4. **Footer** — address, phones, WhatsApp, email, socials from `getSiteSettings()`

### Shared UI patterns

- **`PageHero`** — full-bleed LCP banner (`next/image` priority); sizes `home` | `standard` | `compact`
- **`ReviewsSection`** — shared testimonials (`tone`: white | muted)
- **Section padding** — `shared/lib/section.ts` (`sectionPadX` / `sectionPadY`)
- **Images** — heroes via `PageHero`; below-fold via `SafeImage` — **no `/imgs` runtime fallbacks**
- Skeletons: Home dedicated; others use `PageHeroSkeleton` / feature skeletons as needed

### Content policy (Sanity-only)

- Runtime **empty shells** when CMS missing — never invent copy, fees, reviews, or images in code
- `siteSettings.ui` owns nav labels, contact block, form labels, Fedequinas/OG images
- Studio `initialValue` helps editors fill new docs; production site shows **only published** fields

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
  - **Inicio** (`home`) — hero, essence, stats, services, gallery, **reviews**, videos, SEO (Andares removed)
  - **Escuela** (`school`) — hero (badge = cifra alumnos), method, horses, gallery, staff, fees, FAQ, SEO
  - **Servicios** (`servicesPage`) — PageHero + trámites + **PDF** downloads
  - **Alquiler** (`venuePage`) — hero without address line; intro, spaces, gallery, reviews, SEO
  - **Socios** (`membershipPage`) — hero, benefits, costs, requirements (+ PDF), reviews, SEO
  - **Equinoterapia** (`equinotherapyPage`) — hero without address; story, gallery, reviews, FAQ, SEO
  - **Eventos** (`eventsPage` + `event`)
  - **Directorio** (`directoryPage` + `directoryDataset`) — un Excel por tipo → headers/rows; Studio «Procesar Excel»

---

## SEO

- `metadataBase`, per-route `generateMetadata` via `buildPageMetadata`, single `h1`
- `PageJsonLd` on pages; `sitemap.ts`, `robots.ts`
- SEO title/description distinct from badge; Spanish content; English URLs

---

## Naming & quality bar

- Clear English names for functions and variables
- Simple over clever; no deep abstraction for trivial UI
- Strong TypeScript; no `any` for domain models
- Congruent UI: if a modal/button exists in shared, use it
