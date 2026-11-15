# Phase 1 — Progress

| Area | Status |
| --- | --- |
| Context docs (overview, architecture, build-plan, workflow) | Done |
| Spec foundation (docs) | Done |
| Spec home / school / fairs (docs) | Done |
| Spec about | Deferred (route commented) |
| App `web/` foundation shell | Done — navigable stubs |
| Sanity project + auth | Studio route ready; needs `NEXT_PUBLIC_SANITY_PROJECT_ID` |
| Confirmed 2026 school fees | Pending association |

## Foundation checklist

- [x] Next.js + TS + Tailwind in `web/`
- [x] Feature folders + shared UI (Button, Skeleton, Dialog)
- [x] Layout: Header, ContactLocation, Footer, MobileNav
- [x] Routes `/`, `/school`, `/fairs`, `/fairs/[slug]`
- [x] `/about` deferred
- [x] Env-driven contact/social (`web/.env`)
- [x] `/studio` with setup gate until project id is set
- [x] SEO: metadata, sitemap, robots
