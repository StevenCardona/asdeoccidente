# Spec: Equinotherapy (phase 1)

> Status: **spec / stub** — route and nav wired; full page later  
> Path: `/equinotherapy`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md) § Ofertas / Equinoterapia

## Identification

| Field | Value |
| --- | --- |
| Id | `equinotherapy` |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/offers` (stub) → later `features/equinotherapy` |

## Goal

Present equinotherapy carefully for families seeking therapeutic support with the horse — institutional and warm, **without cure promises**.

## Expected result

- Page `/equinotherapy` with Spanish UI
- Language validated later by therapists; until then keep generic and mark gaps `[por confirmar]`
- CTA → WhatsApp general (or dedicated topic when confirmed)
- Shared layout; SEO

## Scope / out of scope

**In (full build later):** who it is for, session overview, team, how to enquire.

**Out until confirmed:** clinical claims, prices, schedule, named therapists without approval, medical guarantees.

**Hard rule:** **Sin promesas de cura**; no lenguaje médico inventado.

**Stub now:** title, careful short blurb, Próximamente, WhatsApp.

## Sections (full build order)

1. **Hero** — positioning + enquire CTA
2. **Para quién** — audience (KB: familia con necesidad terapéutica) once confirmed in detail
3. **Cómo es una sesión** — `[por confirmar]`
4. **Equipo** — quién dirige `[por confirmar]`
5. FAQ — only therapist-approved answers

## Default copy (KB-aligned)

| Element | Value |
| --- | --- |
| Title | Equinoterapia |
| Subtitle | Espacio terapéutico con el caballo, con acompañamiento profesional. Sin promesas de cura. |
| Primary CTA | Quiero información → WhatsApp |
| Home card | Same careful wording as Home servicios |

## Open with association (KB §6)

A quién va, sesión tipo, precio, quién dirige — all `[por confirmar]`.

## CMS

Deferred.

## Acceptance

- [x] Spec written; stub `/equinotherapy` exists
- [ ] No cure promises in shipped copy
- [ ] Clinical/ops detail only after association + therapists sign-off
