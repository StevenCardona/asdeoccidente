# Spec: Services — registros y trámites (phase 1)

> Status: **in progress** — compact layout; Sanity dinámico para secciones; seed de código como fallback  
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

Show trámites in a compact Occidente-branded layout: section title, short text, socio / no socio fees, download buttons. PDF opens in a **new tab** when a file exists. Editors create/reorder/remove sections in Sanity.

## Layout (order)

1. **Compact intro** — eyebrow + h1 + one-line subtitle (no full-bleed banner)
2. **Filter bar** — mobile: sticky primary red strip; desktop: light bar, only active chip solid primary. Horizontal scroll with edge fades + desktop chevrons when overflow
3. **Sections** — icon + title on one row (mobile and web); description, fee table, download buttons below
4. Shared ContactLocation / Footer

**Not on page:** help WhatsApp block (header WhatsApp is enough).

## Branding

- Primary crimson for mobile filter strip, active desktop chip, and download buttons
- Fee table header: light muted (no navy/red fill); faint separators between Socios / No socios
- Icon + title same row; icon compact/rounded-full mobile, rounded-2xl desktop
- Titles/body use secondary navy + muted text

## Content source

- **Sanity** singleton `servicesPage` (Studio sidebar: **Servicios**): hero intro + dynamic `sections[]` (icon, title, description, slug, feeRows, PDF downloads). Empty array = start from scratch; published sections replace the site list wholesale.
- **Code defaults** only when there is no doc or no titled sections (fallback so the public page is not blank).
- Empty price cells → **—** only (no “por confirmar” / “Consultar”)

## Studio hierarchy (site-wide)

Short page names. Nest only when a module has sub-docs:

- Configuración general · Inicio · Escuela · **Eventos** (Página + Calendario) · **Servicios**

## PDF buttons

- Label always visible; `primary` red
- With file URL: new tab (`target="_blank"`)
- Without file: disabled, same style

## Acceptance

- [x] Compact intro; icon + title same row
- [x] Filter bar with scroll affordance (web + mobile)
- [x] Primary on filter/buttons; light table headers; price separators
- [x] No help WhatsApp section / Studio help noise
- [x] Studio: empty sections by default; create trámites dynamically; icon dropdown
- [x] Studio sidebar: short names; Eventos nested
- [ ] Association uploads PDFs in Studio
- [ ] Mobile review
