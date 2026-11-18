# Phase 1 — Progress

| Area | Status |
| --- | --- |
| Context docs (overview, architecture, build-plan, workflow) | Done |
| Spec foundation | Done (implemented) |
| Spec home | Done (implemented) |
| Spec school | In progress — Sanity schema + page (acceptance pending) |
| Spec fairs / events | In progress — `/events` Sanity-backed |
| Spec services (registros/trámites) | In progress — Sanity + page |
| Spec venue (alquiler sede) | In progress — Sanity + full page |
| Spec membership | In progress — Sanity + full page |
| Specs equinotherapy, directory | Spec / stub |
| Spec about | Deferred (route commented) |
| App `web/` foundation shell | Done |
| Sanity Studio (embedded `/studio`) | Wired — project `h9imk562` / `production` |
| App Home `/` | Done |
| App School `/school` | In progress |
| App Events `/events`, `/events/[slug]` | In progress |
| App Services `/services` | In progress |
| App Venue `/venue` | In progress |
| App Membership `/membership` | In progress |
| Offer stubs `/equinotherapy` `/directory` | Stub |
| Confirmed 2026 school fees | Pending association |

## Foundation checklist

- [x] Next.js + TS + Tailwind in `web/`
- [x] Feature folders + shared UI (Button, Skeleton, Dialog)
- [x] Layout: Header, ContactLocation (mailto + map + video dialog), Footer, MobileNav
- [x] Routes `/`, `/school`, `/events`, `/events/[slug]`
- [x] Offer stub routes (five)
- [x] `/about` deferred
- [x] Contact/social from Sanity `siteSettings` (env: site URL + Sanity credentials only)
- [x] Brand logos + favicon + Fedequinas asset
- [x] `/studio` embedded — project id `h9imk562`
- [x] SEO: metadata, sitemap, robots

## Home checklist

- [x] Hero banner + Google reviews + Fedequinas
- [x] Address line inside hero under CTAs (no tall band below banner)
- [x] Esencia with photo mosaic
- [x] Cifras count-up with icons (1975 · +200 · Google · +180 socios)
- [x] Servicios (`md:grid-cols-3`) + galería + andares tabs
- [x] Four social video slots (9:16; desktop row / mobile carousel)
- [x] Contact = mini form `mailto`; footer = datos + dirección completa
- [x] SafeImage lazy + reserved space
- [ ] Acceptance: mobile review + directions video URL when available

## School checklist

- [x] Hero + WhatsApp clase gratis (subtitle corto; sin línea de matrícula)
- [x] Google reviews + stats under CTAs (compact)
- [x] Cómo es la clase (pasos + foto + ejes en cards)
- [x] Galería → caballos → profesores
- [x] Tarifas (tabs grupales/personalizadas + cards)
- [x] Qué llevar + FAQ accordion
- [x] Sanity `school` document schema (content editable in Studio; defaults until published)
- [ ] Acceptance: mobile review + fee sign-off 2026

## Events checklist

- [x] Spec + `/events` list and detail
- [ ] Acceptance: mobile review + confirmed Copa data

## Services checklist

- [x] Spec for registros/trámites + abstract Sanity sections
- [x] Sanity `servicesPage` + fee rows + PDF downloads
- [x] Page UI (hero, nav, tables, downloads, WhatsApp)
- [ ] Association fills official fees and PDFs
- [ ] Acceptance: mobile review

## Venue checklist

- [x] Spec for alquiler sede + spaces/measures
- [x] Sanity `venuePage` + WhatsApp topic `venue`
- [x] Page UI (hero + contactLine, intro, spaces, gallery, reviews)
- [ ] Association uploads venue photos / reviews in Studio
- [ ] Acceptance: mobile review

## Membership checklist

- [x] Spec for socios / afiliación
- [x] Sanity `membershipPage` + WhatsApp topic `membership`
- [x] Page UI (hero, quiénes somos, misión/visión, socio, afiliado, costos, requisitos)
- [ ] Association uploads photos / formato PDF in Studio
- [ ] Acceptance: mobile review

## Offer stubs checklist

- [x] Specs for equinotherapy, directory
- [x] Stub pages + nav (desktop + mobile full set; mobile active shows label)
- [ ] Full page build (equinotherapy)
- [ ] Directory Sanity schemas + search UI

## Next

1. Finish School / Events / Services / Venue / Membership acceptance
2. Full build of equinotherapy as prioritized
3. Directory CMS + search UI per `directory.md`
