# Phase 1 — Build plan

Sequence only. Detail in specs under [`../../specs/phase-1/`](../../specs/phase-1/).

## Order

1. **Foundation** — [`foundation.md`](../../specs/phase-1/foundation.md)  
   App boots, tokens, layout shell, Sanity auth, SEO base, shared UI.  
   **Gate met:** local run + protected studio + navigable shell.
2. **Home** — [`home.md`](../../specs/phase-1/home.md)  
   Depends on foundation.  
   **Gate met:** mobile hero → CTAs → WhatsApp / fairs; sections through videos + shared contact/footer.
3. **School** — [`school.md`](../../specs/phase-1/school.md) — **next**  
   Gate: free-class path clear; no invented fees. Route exists as placeholder today.
4. **Fairs** — [`fairs.md`](../../specs/phase-1/fairs.md)  
   List (featured + cards) + `[slug]` detail. Gate: open a fair from card; Home secondary CTA resolves to list/detail. Routes exist as placeholders today.
5. **About** — later  
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
