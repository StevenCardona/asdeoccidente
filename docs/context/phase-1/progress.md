# Phase 1 — Progress

| Area | Status |
| --- | --- |
| Context docs (overview, architecture, build-plan, workflow) | Done |
| Spec foundation | Done (implemented) |
| Spec home | Done (implemented) |
| Spec school | In progress — static page on `feature/school` (Sanity deferred) |
| Spec fairs | Open — placeholder routes only |
| Spec about | Deferred (route commented) |
| App `web/` foundation shell | Done |
| Sanity Studio (embedded `/studio`) | Wired — project `h9imk562` / `production` |
| App Home `/` | Done |
| App School `/school` | In progress (static sections) |
| App Fairs `/fairs`, `/fairs/[slug]` | Placeholder |
| Confirmed 2026 school fees | Pending association |

## Foundation checklist

- [x] Next.js + TS + Tailwind in `web/`
- [x] Feature folders + shared UI (Button, Skeleton, Dialog)
- [x] Layout: Header, ContactLocation (mailto + map + video dialog), Footer, MobileNav
- [x] Routes `/`, `/school`, `/fairs`, `/fairs/[slug]`
- [x] `/about` deferred
- [x] Contact/social from Sanity `siteSettings` (env: site URL + Sanity credentials only)
- [x] Brand logos + favicon + Fedequinas asset
- [x] `/studio` embedded — project id `h9imk562`
- [x] SEO: metadata, sitemap, robots

## Home checklist

- [x] Hero banner + Google reviews + Fedequinas
- [x] Esencia with photo mosaic
- [x] Cifras count-up with icons (1975 · +200 · Google · +180 socios)
- [x] Servicios (inert CTAs) + galería + andares tabs
- [x] Four social video slots (9:16; desktop row / mobile carousel)
- [x] Contact = mini form `mailto`; footer = datos + dirección completa
- [x] SafeImage lazy + reserved space
- [ ] Acceptance: mobile review + directions video URL when available

## School checklist

- [x] Hero + WhatsApp clase gratis (subtitle corto; sin línea de matrícula)
- [x] Cómo es la clase (pasos + foto + ejes en cards)
- [x] Galería → caballos → profesores
- [x] Tarifas (tabs grupales/personalizadas + cards)
- [x] Qué llevar + FAQ accordion
- [x] Sanity `school` document schema (content editable in Studio; defaults until published)
- [ ] Acceptance: mobile review + fee sign-off 2026

## Next

1. Finish School acceptance on `feature/school`
2. Implement **Fairs** per [`../../specs/phase-1/fairs.md`](../../specs/phase-1/fairs.md)
