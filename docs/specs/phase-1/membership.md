# Spec: Membership (phase 1)

> Status: **in progress** — full page + Sanity `membershipPage`  
> Path: `/membership`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md) § Socios / afiliación

## Identification

| Field | Value |
| --- | --- |
| Id | `membership` |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/membership` |

## Goal

Invite creators and exhibitors to join as socios or afiliados with a clear “Quiero ser socio” path — quiénes somos, misión/visión, beneficios, costos, requisitos y formato.

## Expected result

- Page `/membership` with Spanish UI and Occidente ADN (crimson/navy)
- Primary CTA: WhatsApp topic `membership` — `Hola, quiero información para ser socio de Asdeoccidente.`
- Sanity singleton `membershipPage`; code defaults until published
- Shared layout; SEO
- Voice: **“Quiero ser socio”** (not “Postular como socio”)

## Scope / out of scope

**In:** hero banner, quiénes somos, misión/visión, ser socio (cards + gallery), ser afiliado (cards), tabla de costos, requisitos + botón de formato PDF, WhatsApp CTA.

**Out:** portal socios, formulario online de postulación (solo PDF + WhatsApp), sidebar vertical de mockups legacy.

**Note:** School socio vs no-socio **class packs** live on `/school`. Services trámite fees live on `/services`.

## Layout (order)

1. **Hero** — PageHero; Fedequinas; título ≠ CTA; subtítulo claro; WhatsApp “Quiero ser socio”
2. **Quiénes somos**
3. **Misión y Visión**
4. **Ser socio** — cards + galería
5. **Ser afiliado** — cards; **fondo blanco**
6. **Costos** — tabla / mobile cards
7. **Requisitos / Cómo unirme** — **cards** + PDF Sanity; **fondo blanco**
8. **Reseñas** — shared ReviewsSection; **fondo blanco**
9. Shared ContactLocation / Footer

## Default copy (KB-aligned)

| Element | Value |
| --- | --- |
| Hero mark | Fedequinas (`/brand/fedeequinas.png`) above title |
| Hero title | Quiero ser socio |
| Hero subtitle | Únete a la casa del caballo criollo colombiano. Beneficios, voz en la asociación y comunidad. |
| Primary CTA | Quiero ser socio → WhatsApp `membership` |
| Quiénes somos eyebrow | Quiénes somos |
| Quiénes somos title | Fundada en 1975, más de 45 años trabajando en pro del caballo criollo colombiano. |
| Costos seed | Afiliado / Socio $0·$0; Socio afiliado $1.500.000·$5.000.000; Socio vitalicio $1.500.000·Traspasable |
| Formato CTA | Descargar formato |

## CMS

Singleton `membershipPage` (`_id: "membershipPage"`). Studio sidebar: **Socios**.

Fields: `hero`, `about`, `missionVision` (pillars only), `memberBenefits` (+ gallery), `affiliateBenefits`, `costs`, `requirements` (+ PDF file), `reviewsIntro` + `reviews[]`, `seo`.

`siteSettings.whatsappMessageMembership` + topic `membership`.

## Acceptance

- [x] Spec written; stub `/membership` existed
- [x] Full page: hero, quiénes somos, misión/visión, socio, afiliado, costos, requisitos
- [x] WhatsApp topic `membership` in siteSettings
- [x] Studio: Socios singleton editable
- [x] Formato PDF opens in new tab when uploaded (disabled until file exists)
- [x] Voice matches KB table
