# Spec: Equinotherapy (phase 1)

> Status: **in progress** — full page + Sanity  
> Path: `/equinotherapy`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md) § Ofertas / Equinoterapia

## Identification

| Field | Value |
| --- | --- |
| Id | `equinotherapy` |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/equinotherapy` |

## Goal

Present equinotherapy carefully for families seeking therapeutic support with the horse — institutional, warm, human, and connection-oriented, **without cure promises**. Copy is editable in Sanity; code ships thoughtful defaults composed from KB + approved draft sources.

## Expected result

- Page `/equinotherapy` with Spanish UI
- Sanity singleton `equinotherapyPage` (hero, stories, gallery, reviews, FAQ, SEO)
- CTA → WhatsApp topic `equinotherapy`
- Shared layout; SEO + FAQ JSON-LD
- Hard rule: **Sin promesas de cura**; no lenguaje médico inventado como garantía clínica

## Sections (build order)

1. **Hero** — PageHero; badge/title/subtitle congruentes (**sin dirección**); WhatsApp CTA
2. **Story intro** — párrafos + imagen; fondo blanco
3. **Gallery** — photo carousel
4. **Story benefits** — copy + **beneficios en cards** sobre sección **gris**
5. **Reviews** — ReviewsSection; **fondo blanco**
6. **FAQ** — accordion

## Default copy (KB + draft sources)

| Element | Value |
| --- | --- |
| Title | Equinoterapia |
| Hero subtitle | Espacio terapéutico con el caballo, con acompañamiento profesional. Sin promesas de cura. |
| Primary CTA | Quiero información → WhatsApp |
| Home card | Same careful wording as Home servicios |

Body defaults fuse KB positioning with competitor/legacy themes (aporte terapéutico físico-emocional-mental, caballo motivacional, modalidades individual/pareja/familiar, listado de beneficios). Association can rewrite everything in Studio.

## Open with association (KB §6)

A quién va (detalle), sesión tipo, precio, quién dirige — still refine in Studio when confirmed. Prices stay omitted until official.

## CMS

Sanity document `equinotherapyPage` (`_id`: `equinotherapyPage`). Defaults in code until published.

## Acceptance

- [x] Spec written; route `/equinotherapy` exists
- [x] Full page UI (hero → stories → gallery → reviews → FAQ)
- [x] Sanity schema + fetch/merge with defaults
- [x] No cure promises in shipped default copy
- [ ] Clinical/ops detail refined after association + therapists sign-off
- [ ] Acceptance: mobile review + real therapy photos
