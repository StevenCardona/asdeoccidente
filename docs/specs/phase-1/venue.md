# Spec: Venue rental (phase 1)

> Status: **in progress** — full page + Sanity `venuePage`  
> Path: `/venue`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md) § Alquiler sede

## Identification

| Field | Value |
| --- | --- |
| Id | `venue` |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/venue` |

## Goal

Let organizers explore sede spaces and request a quote via WhatsApp — clear CTA, no invented prices.

## Expected result

- Page `/venue` with Spanish UI and Occidente ADN (crimson/navy)
- Primary CTA: WhatsApp topic `venue` — `Hola, quiero cotizar un evento en la sede.`
- Canonical address from `siteSettings` (not hardcoded)
- Sanity singleton `venuePage`; code defaults until published
- Shared layout; SEO

## Scope / out of scope

**In:** hero full-bleed (WhatsApp CTA + address + commercial contact line Steet Achury), intro copy, alternating space blocks (title, description, highlights, image, left/right), mid-page gallery, reviews.

**Out:** price list, availability calendar, catering packages, FAQ without confirmed answers.

## Layout (order)

1. **Hero** — compact full-bleed (más aire en desktop), title, subtitle, WhatsApp “Quiero cotizar”, address + línea comercial Steet Achury
2. **Intro** — eyebrow + title + body paragraphs (ancho completo `max-w-7xl`)
3. **Galería** — carousel (home pattern); hidden if no photos
4. **Espacios (primeros 2)** — `spaces.slice(0, 2)` with `imagePosition` left|right
5. **Espacios restantes** — `spaces.slice(2)`
6. **Reseñas** — cards (events pattern) al final; hidden if empty
7. Shared ContactLocation / Footer

**Nota:** sin bloque Cotización al final — CTA WhatsApp y contacto Steet viven en el hero.

## Default copy (KB-aligned)

| Element | Value |
| --- | --- |
| Hero title | Alquila la sede para tu evento |
| Hero subtitle | Sede campestre para ferias, eventos y encuentros. Cotiza por WhatsApp. |
| Primary CTA | Quiero cotizar → WhatsApp `venue` |
| Address | From `siteSettings.address` |
| Quote contact line | Steet Achury Mendoza · (+57) 300 322 0606 · comercial@asdeoccidente.org.co |

### Espacios (medidas confirmadas + descripción UI corta)

| Lugar | Highlight | Descripción seed |
| --- | --- | --- |
| Coliseo Principal | 1250 m² | Escenario amplio para ferias, competencias y eventos de gran formato. |
| Coliseo Alterno | 546 m² | Espacio versátil para competencias, ensayos y encuentros de menor escala. |
| Salón Nelson Garcés | 425 m² | Salón cerrado para reuniones, celebraciones y eventos empresariales. |
| Parqueadero | ~800 vehículos | Amplio parqueadero para recibir invitados con comodidad. |
| Zonas verdes | ~600 m² c/u | Áreas verdes para ambientación, descanso y actividades al aire libre. |

## CMS

Singleton `venuePage` (`_id: "venuePage"`). Studio sidebar: **Alquiler**.

Fields: `hero` (incluye `contactLine` comercial), `intro`, `spaces[]` (`venueSpace`), `gallery`, `reviewsIntro` + `reviews[]`, `seo`. Sin grupo Cotización en Studio (línea Steet vive en el hero).

`siteSettings.whatsappMessageVenue` + topic `venue`.

## Acceptance

- [x] Spec written; stub `/venue` existed
- [x] Full page: hero (CTA + Steet), intro, spaces L/R, gallery, reviews
- [x] WhatsApp topic `venue` in siteSettings
- [x] No invented venue prices
- [x] Studio: Alquiler singleton editable
- [ ] Mobile review
- [ ] Association replaces example reviews / uploads final photos in Studio
