# Spec: School (phase 1)

> Status: **in progress** — Sanity `school` + page; acceptance pending  
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

Convert interest into a free first class via WhatsApp. Explain personalized teaching — institutional clarity, congruent banner copy.

## Sections (order)

1. **Hero** (`PageHero`) — title + subtitle (no repeated badge text) · CTAs · below CTAs: `GoogleReviewsBadge` + **cifra de alumnos** from Sanity `hero.badge` (default `+200 alumnos`). **No** «Desde 1975» in the hero meta line.
2. **Cómo es la clase** — steps + axes
3. **Caballos** — `bg-secondary`
4. **Galería**
5. **Profesores**
6. **Tarifas** — personalizadas; notas matrícula
7. **FAQ**

## Banner copy rules

- `hero.badge` = student count label (shown in meta, not as a crimson chip)
- Title / subtitle / CTA must not repeat each other
- Defaults live in `features/school/models/defaults.ts` and Studio field descriptions

## CMS

Sanity singleton `school` — hero, method, horses, gallery, staff, fees, FAQ, SEO.

## Acceptance

- [x] Hero without «Desde 1975»; alumnos from CMS badge field
- [x] Sanity school document
- [ ] Fee sign-off 2026
- [ ] Mobile review
