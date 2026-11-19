# Spec: Services — registros y trámites (phase 1)

> Status: **in progress** — full-bleed banner; Sanity sections + PDFs  
> Path: `/services`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md) § Registros

## Identification

| Field | Value |
| --- | --- |
| Id | `services` |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/services` |

## Goal

Show trámites in an Occidente-branded layout: shared **PageHero** banner, filterable sections with socio / no socio fees and PDF downloads. Editors create/reorder sections in Sanity. PDFs upload as Sanity file assets.

## Layout (order)

1. **PageHero** — badge + h1 + subtitle + background image (same pattern as other offer pages)
2. **Filter bar** — mobile sticky primary strip; desktop chips
3. **Sections** — icon + title, description, fee table, PDF buttons
4. Shared ContactLocation / Footer

**Not on page:** help WhatsApp block (header WhatsApp is enough).

## Content source

- **Sanity** singleton `servicesPage`: hero (badge, title, subtitle, image) + `sections[]` (icon, title, description, slug, feeRows, PDF downloads)
- Code defaults when there is no doc or no titled sections
- Empty price cells → **—** only
- PDF with file: opens new tab; without file: disabled button

## SEO

`seo.title` / `seo.description` distinct from banner badge; via `buildPageMetadata` + `PageJsonLd`.

## Acceptance

- [x] PageHero banner; icon + title same row
- [x] Filter bar; PDFs via Sanity
- [ ] Association uploads official fees and PDFs
- [ ] Mobile review
