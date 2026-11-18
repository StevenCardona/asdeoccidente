# Spec: Venue rental (phase 1)

> Status: **spec / stub** — route and nav wired; full page later  
> Path: `/venue`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md) § Ofertas / Sede

## Identification

| Field | Value |
| --- | --- |
| Id | `venue` |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/offers` (stub) → later `features/venue` |

## Goal

Let organizers request a quote to rent the association venue for fairs, events, and gatherings — clear path to WhatsApp, no invented capacity or prices.

## Expected result

- Page `/venue` with Spanish UI
- Primary CTA: WhatsApp with sede template: `Hola, quiero cotizar un evento en la sede.`
- Show canonical sede address from `siteSettings` (not hardcoded)
- Shared layout; SEO

## Scope / out of scope

**In (full build later):** hero, what the venue is for, photo(s) when confirmed, quote CTA, FAQ if association provides answers.

**Out until confirmed:** capacity, room list, catering, price list, availability calendar.

**Stub now:** title, short blurb, Próximamente, WhatsApp cotización.

## Sections (full build order)

1. **Hero** — title + subtitle + WhatsApp quote CTA
2. **Uso de la sede** — ferias, eventos, encuentros (no install detail dump)
3. **Cómo cotizar** — steps ending in WhatsApp
4. FAQ (only confirmed answers)

## Default copy (KB-aligned)

| Element | Value |
| --- | --- |
| Title | Alquila la sede para tu evento |
| Subtitle | Sede campestre para ferias, eventos y encuentros. Cotiza por WhatsApp. |
| Primary CTA | Quiero cotizar → WhatsApp sede template |
| Address | From `siteSettings.address` (KB: Transversal 5 # 1 - 60, Recta Cali-Palmira, Corregimiento La Dolores, Palmira – Valle del Cauca) |

## Open with association

Capacity, spaces, rules, pricing — all `[por confirmar]`.

## CMS

Deferred.

## Acceptance

- [x] Spec written; stub `/venue` exists
- [ ] Full page + WhatsApp topic wired in siteSettings if needed
- [ ] No invented venue prices
