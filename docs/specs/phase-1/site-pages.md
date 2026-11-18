# Phase 1 — Specs index

Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md)  
Architecture: [`../../context/phase-1/architecture.md`](../../context/phase-1/architecture.md)  
Build order: [`../../context/phase-1/build-plan.md`](../../context/phase-1/build-plan.md)  
Progress: [`../../context/phase-1/progress.md`](../../context/phase-1/progress.md)

## Specs (build order)

| # | Spec | Path(s) | File | Status |
| --- | --- | --- | --- | --- |
| 1 | Foundation | shell + `/studio` | [`foundation.md`](foundation.md) | Implemented |
| 2 | Home | `/` | [`home.md`](home.md) | Implemented |
| 3 | School | `/school` | [`school.md`](school.md) | In progress |
| 4 | Fairs / Events | `/events`, `/events/[slug]` | [`fairs.md`](fairs.md) | In progress |
| 5 | Services (registros/trámites) | `/services` | [`services.md`](services.md) | In progress |
| 6 | Venue | `/venue` | [`venue.md`](venue.md) | In progress |
| 7 | Membership | `/membership` | [`membership.md`](membership.md) | In progress |
| 8 | Equinotherapy | `/equinotherapy` | [`equinotherapy.md`](equinotherapy.md) | Spec / stub |
| 9 | Directory | `/directory` | [`directory.md`](directory.md) | Spec / stub (search UI later) |

## Deferred

| Item | Notes |
| --- | --- |
| About | Path `/about` and nav item **commented** until a future spec |
| Directory search UI + Sanity schemas | Specced in [`directory.md`](directory.md); implement later |
| Phase 2 | Chatbot |
| Phase 3 | Contact page, refinements, full builds of stub offers |

## Shared chrome (all active pages)

Header · **page body** · Contact & location (mailto form + Maps + directions video dialog) · Footer · mobile bottom nav  

Labels in Spanish; routes in English. Contact details (address, phones, WhatsApp, socials) from Sanity `siteSettings` in the Footer.
