# Phase 1 — Progress

| Area | Status |
| --- | --- |
| Context docs (overview, architecture, build-plan, workflow) | Done |
| Spec foundation | Done (implemented) — hamburger mobile nav |
| Spec home | Done — reviews replace Andares; PageHero |
| Spec school | In progress — badge = alumnos; acceptance pending |
| Spec fairs / events | Done — `/events` + `eventsPage.hero` fallback banner |
| Spec services | In progress — PageHero + PDFs |
| Spec venue | In progress — no address in hero |
| Spec membership | In progress — requirements cards; white section bgs |
| Spec equinotherapy | In progress — benefit cards; white reviews |
| Spec directory | Done (Excel-per-type + table scroll + fixed contact team) |
| Spec about | Deferred (route commented) |
| App `web/` foundation shell | Done |
| Sanity Studio (embedded `/studio`) | Wired — project `h9imk562` / `production` |
| Shared PageHero / ReviewsSection / section pad | Done |
| App Home `/` | Done |
| App School `/school` | In progress |
| App Events `/events`, `/events/[slug]` | In progress |
| App Services `/services` | In progress |
| App Venue `/venue` | In progress |
| App Membership `/membership` | In progress |
| App Equinotherapy `/equinotherapy` | In progress |
| App Directory `/directory` | Done (scroll + contact cards; awaiting Excel uploads) |

## Sanity-only content

- [x] Removed runtime seeds (`defaults` empty shells) for school/services/venue/membership/equino/directory/events/home services/site
- [x] `siteSettings.ui` for nav + contact chrome
- [ ] Association: re-publish singletons so public pages are not empty
- [x] Home CTA docs: `Ver el próximo evento` → `/events` (no redirects / no `/fairs`)
- [x] Events list page banner when no featured event (`eventsPage.hero`)

## Next

1. Association: publish all page docs + siteSettings.ui + Home CTA `/events` + eventsPage banner + PDFs + directory Excels
2. Acceptance mobile review on all offer pages
3. Confirmed 2026 school fees
