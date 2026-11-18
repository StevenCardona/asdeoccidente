# Spec: Services — registros y trámites (phase 1)

> Status: **in progress** — compact layout + Occidente branding; static seed; Sanity fill later  
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

Show trámites in a compact Occidente-branded layout: section title, short text, socio / no socio fees, download buttons. PDF opens in a **new tab** when a file exists.

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

## Content source (now)

- Code defaults from previous Asdeoccidente site
- Empty price cells → **—** only (no “por confirmar” / “Consultar”)
- Sanity later overrides when published with sections

## PDF buttons

- Label always visible; `primary` red
- With file URL: new tab (`target="_blank"`)
- Without file: disabled, same style

## Acceptance

- [x] Compact intro; icon stacked above content
- [x] Filter bar with scroll affordance (web + mobile)
- [x] Primary on filter/buttons; navy table headers; price separators
- [x] No help WhatsApp section
- [ ] Association uploads PDFs in Studio
- [ ] Mobile review
