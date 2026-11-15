# Phase 1 — Architecture

Why and how the phase-1 app is structured. Delivery checklist lives in [`../../specs/phase-1/foundation.md`](../../specs/phase-1/foundation.md).

---

## Stack

| Layer | Choice | Role |
| --- | --- | --- |
| App | Next.js (App Router) + TypeScript (strict) | Routes, SSR/SSG, SEO |
| UI | Tailwind CSS + shadcn/ui + Lucide | Design-system components, icons |
| Data fetching | TanStack React Query | Reads and mutations against documented APIs |
| URL state | nuqs | Typed search params when needed |
| Client UI state | Zustand | Only if a small global UI need appears; default prefer local state |
| CMS | Sanity (Studio at `/studio`) | Admins edit content; **access control required** |
| Hosting (later) | Vercel | Deploy + previews |

No separate custom backend in phase 1 beyond Next route handlers / Sanity client. Chatbot and payments are out of scope.

---

## Language rules

| Layer | Language |
| --- | --- |
| File names, components, hooks, models, utils, API keys in code | English |
| URL paths | English (`/school`, `/fairs`, …) |
| User-visible copy, CMS content, `lang` on pages | Spanish (`es-CO`) |

---

## Routes

| UI label (ES) | Path | Status |
| --- | --- | --- |
| Inicio | `/` | Active |
| Escuela | `/school` | Active |
| Ferias | `/fairs` | Active |
| Feria (detalle) | `/fairs/[slug]` | Active |
| Nosotros | `/about` | **Commented / deferred** |
| Studio | `/studio` | Active + **authenticated** |

Old Spanish WordPress paths get 301 redirects at launch (document at cutover; not required to block docs).

---

## Folder structure

```text
web/
  src/
    app/
      layout.tsx                 # html lang, fonts, providers
      (site)/
        layout.tsx               # Header + ContactLocation + Footer + mobile nav
        page.tsx                 # Home → features/home
        school/page.tsx
        fairs/
          page.tsx               # list
          [slug]/page.tsx        # detail
        # about/page.tsx         # DEFERRED — keep commented or omitted until spec
      studio/[[...tool]]/        # Sanity Studio (outside public chrome)
    features/
      home/
        app/                     # smart page composition
        hooks/
        components/              # dumb UI
        models/
        utils/
      school/                    # same shape
      fairs/                     # same shape (list + detail)
      layout/                    # Header, Footer, ContactLocation, MobileNav
      # about/                   # deferred
    shared/
      components/ui/             # shadcn primitives (Button, Dialog, Skeleton, …)
      lib/                       # react-query client, nuqs, sanity client, utils
      config/                    # env helpers, constants
```

**Flow:** light route in `app/` → feature `app/` (smart: data / React Query) → feature `components/` (dumb) → `shared/components/ui`.

**Smart / dumb:** smart containers fetch and pass data; dumb components receive props and render. Prefer reuse over one-off page buttons.

---

## Design system & anti–“AI page” rules

Source: [`DESIGN.md`](../../design/DESIGN.md) + [`design-system.png`](../../design/design-system.png).

- Tokens: primary crimson, secondary navy/slate, tertiary amber (sparingly), neutrals, Plus Jakarta Sans (display) + Inter (body)
- Same Button / Dialog / Card / Skeleton everywhere — no per-page restyling
- Lucide only; consistent stroke weight
- **Do:** editorial whitespace, real equestrian photography, restrained hairlines, institutional calm
- **Don’t:** purple gradients, neon glow, emoji rows, floating badge stickers on heroes, multi-layer candy shadows, dashboard chrome, generic startup fluff copy

Mockups under `docs/design/mobile|web/` are atmosphere references, not pixel mandates.

---

## Shared layout

Every public page:

1. **Header** — logo, nav (Inicio · Escuela · Ferias), WhatsApp CTA. Nosotros link commented.
2. **Body** — feature content only
3. **Contact & location** — address, phones/WhatsApp, Google Maps iframe, embed/iframe for “cómo llegar” video
4. **Footer** — identical sitewide
5. **Mobile bottom nav** — Inicio · Escuela · Ferias (+ optional 4th only if needed); Nosotros commented

Skeletons must mirror this shell while data loads.

---

## APIs & React Query

- Document endpoints (Sanity queries / thin Next handlers) in feature `models` or `shared/lib`
- All server reads/mutations from the client go through React Query hooks in `features/*/hooks`
- Skeletons for pending; clear empty and error states (same components sitewide)

---

## Sanity

- **Embedded in the Next app** at `/studio` (same deploy as the site — easiest for admins). Not a sibling Studio folder.
- Project `h9imk562`, dataset `production` (`NEXT_PUBLIC_SANITY_*` in `web/.env`)
- **Access:** Sanity login / project members only — no anonymous edit
- CORS: allow `http://localhost:3000` (and the production domain) in [sanity.io/manage](https://www.sanity.io/manage) → API → CORS origins
- Editable without code: singleton **Configuración general** (`siteSettings`), later home/school copy and **fair** documents
- **Fair model (events):** `slug`, title, banner, `startDate` / `endDate` (optional day list), `featured`, summary, body, CTAs, `updatedAt` for “Última actualización”
- One featured fair for banners (Home teaser + `/fairs` hero); many cards for the rest

---

## SEO

- `metadataBase`, per-route `generateMetadata`, single `h1`
- `sitemap.ts`, `robots.ts`
- Hero image prioritized for LCP on mobile
- Spanish content; English URLs are fine with clear titles/descriptions in ES

---

## Naming & quality bar

- Clear English names for functions and variables
- Simple over clever; no deep abstraction for trivial UI
- Strong TypeScript; no `any` for domain models
- Congruent UI: if a modal/button exists in shared, use it
