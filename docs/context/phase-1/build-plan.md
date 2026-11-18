# Phase 1 — Build plan

Sequence only. Detail in specs under [`../../specs/phase-1/`](../../specs/phase-1/).

## Order

1. **Foundation** — [`foundation.md`](../../specs/phase-1/foundation.md)  
   App boots, tokens, layout shell, Sanity auth, SEO base, shared UI.  
   **Gate met:** local run + protected studio + navigable shell.
2. **Home** — [`home.md`](../../specs/phase-1/home.md)  
   Depends on foundation.  
   **Gate met:** mobile hero → CTAs → WhatsApp / events; sections through videos + shared contact/footer.
3. **School** — [`school.md`](../../specs/phase-1/school.md)  
   Gate: free-class path clear; no invented fees.
4. **Fairs / Events** — [`fairs.md`](../../specs/phase-1/fairs.md)  
   List (featured + cards) + `[slug]` detail. Routes: `/events`, `/events/[slug]`.
5. **Offer stubs (specs)** — services, venue, membership, equinotherapy, directory  
   Specs + stub routes + nav/home cards. Full page builds and directory search UI later.  
   - [`services.md`](../../specs/phase-1/services.md) `/services` (in progress)  
   - [`venue.md`](../../specs/phase-1/venue.md) `/venue` (in progress — Sanity + full page)  
   - [`membership.md`](../../specs/phase-1/membership.md) `/membership`  
   - [`equinotherapy.md`](../../specs/phase-1/equinotherapy.md) `/equinotherapy`  
   - [`directory.md`](../../specs/phase-1/directory.md) `/directory` (CMS model documented; implement later)
6. **About** — later  
   Uncomment `/about` route and nav when spec exists.

## Gates (every feature)

- Mobile-first review before desktop polish
- Skeletons on load
- Same shared Button / Dialog / layout chrome
- Copy and numbers match knowledge base or marked `[por confirmar]`
- SEO metadata present

## After phase-1 pages

- 301s from old Spanish URLs
- Board review, admin training on Studio
- DNS / Search Console / analytics at launch
