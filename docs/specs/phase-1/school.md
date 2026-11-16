# Spec: School (phase 1)

> Status: **in progress** — `/school` body implemented with static content; Sanity CMS deferred  
> Path: `/school`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md) § Escuela

## Identification

| Field | Value |
| --- | --- |
| Id | `school` |
| Phase | 1 |
| Depends on | `foundation` (ideally after `home`) |
| Feature folder | `features/school` |

## Goal

Convert interest into a free first class via WhatsApp. Explain personalized teaching and what the school provides — with institutional clarity.

## Expected result

- Page `/school` with sections below
- Primary CTA: Quiero mi clase gratis → WhatsApp school template
- Fee cards personalizadas (1/2/3/4) with Socio / No socio / Hijo montador
- Carousels with arrows + dots (Home pattern) for method axes, horses, staff
- Shared UI; layout ContactLocation/Footer unchanged
- SEO for `/school`
- Content in `features/school/models/school.ts` (static). **Sanity deferred.**

## Scope / out of scope

**In:** method, horses (dark band), gallery, staff, fees, FAQ (6 clave).

**Out:** About, map duplicate, sticky CTA, “Antes de venir”, grupales tabs, Sanity school doc (later).

## Sections (order)

1. **Hero** — GoogleReviewsBadge (`tone="dark"`, link) encima de “Clase de cortesía”
2. **Cómo es la clase** — steps + axes carousel (icon beside text; flechas/puntos)
3. **Caballos** — fondo `bg-secondary`; same cards as staff; carousel controls
4. **Galería** — bento + degradado oscuro tipo banner
5. **Profesores** — carousel controls
6. **Tarifas** — personalizadas only; notas matrícula
7. **FAQ** — 6 preguntas (gratis+agenda, equipo, matrícula+eventos, qué llevar, socio, sede)

## Matrícula (bajo tarifas)

1. Matrícula $190.000: incluye póliza, gorra y buzo de la escuela.
2. Con ella tienes beneficios en eventos: entrada gratuita o descuentos.

## Fees

No-socio: 1→$90.000 · 2→$180.000 · 3→$280.000 · 4→$370.000 (socio/hijo promediados en model).

## Data source

| Field | Notes |
| --- | --- |
| All page copy | `web/src/features/school/models/school.ts` |
| CMS | Deferred |

## Acceptance criteria

- [x] WhatsApp clase gratis
- [x] Caballos antes de galería, fondo oscuro
- [x] Carousels con flechas y puntos
- [x] FAQ reducido a dudas no obvias; sin sección “Antes de venir”
- [x] Google reviews en hero
- [x] ContactLocation no duplicado
- [ ] Sanity school document (later)
