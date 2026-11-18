# Spec: Membership (phase 1)

> Status: **spec / stub** — route and nav wired; full page later  
> Path: `/membership`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md) § Ofertas / Hazte socio

## Identification

| Field | Value |
| --- | --- |
| Id | `membership` |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/offers` (stub) → later `features/membership` |

## Goal

Invite creators and exhibitors to become members with a clear “Quiero ser socio” path — descuentos y voz en la asociación — without inventing dues or benefit lists.

## Expected result

- Page `/membership` with Spanish UI
- Voice: prefer **“Quiero ser socio”** (not “Postular como socio”)
- CTA → WhatsApp general (or dedicated topic when confirmed)
- Shared layout; SEO

## Scope / out of scope

**In (full build later):** value proposition, how to join, contact path.

**Out until confirmed:** cuota de afiliación, full benefits matrix, online application form, “portal socios”.

**Note:** School socio vs no-socio **class packs** live on `/school` — not membership dues.

**Stub now:** title, short blurb, Próximamente, WhatsApp.

## Sections (full build order)

1. **Hero** — Quiero ser socio + one-line value
2. **Beneficios** — only association-confirmed items
3. **Cómo unirte** — steps + WhatsApp / email
4. FAQ (confirmed only)

## Default copy (KB-aligned)

| Element | Value |
| --- | --- |
| Title | Quiero ser socio |
| Subtitle | Descuentos y voz en la asociación. `[detalle de beneficios por confirmar]` |
| Primary CTA | Quiero ser socio → WhatsApp |
| Home cifra related | +180 socios (provisional on Home stats until association confirms) |

## Open with association

Dues, requirements, benefits list, who approves applications — `[por confirmar]`.

## CMS

Deferred.

## Acceptance

- [x] Spec written; stub `/membership` exists
- [ ] Full page without invented dues
- [ ] Voice matches KB table
