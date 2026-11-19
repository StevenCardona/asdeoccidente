# Spec: Fairs — events (phase 1)

> Status: **implemented** — Sanity `eventsPage` + `event` documents; routes `/events`  
> Paths: `/events` (list) · `/events/[slug]` (detail)  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md)  
> Note: product id remains `fairs` in older docs; **public URL is always `/events`**. No `/fairs` redirects.

## Identification

| Field | Value |
| --- | --- |
| Id | `fairs` (events product) |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/events` |

## Goal

Treat fairs as an **events** product: one featured highlight, a calendar of fairs (upcoming and past), and a rich detail page per fair. The detail page is the product; the list routes and orients.

## Phases

| Phase | In scope | Out |
| --- | --- | --- |
| **A (this work)** | Static models + defaults, list UI, detail UI, KB copy, WhatsApp CTAs | Sanity wiring, React Query |
| **B (later)** | CMS `fair` expansion, `useFairs` / `useFair`, sitemap slugs, Studio rules | Online checkout |

## Expected result (phase A)

- `/fairs` shows featured hero banner → detail CTA, calendar grid (4 cols desktop / 1 mobile) with status badges, short gallery, short FAQ
- `/fairs/[slug]` shows full detail: hero, summary, tickets (general first), CTAs, program or calm empty, updatedAt, back link
- Filters by `kind` only when categories exist in data
- No invented grades, prices, ICA deadlines, or testimonials
- Shared layout ContactLocation + Footer
- Metadata via `buildPageMetadata` (indexable when content is real)

## Scope / out of scope

**In:** list + detail UX, static fair model, status badges, optional kind filters, CTAs (entradas / WhatsApp ferias), empty states, “Última actualización”.

**Out:** Online ticket checkout; inventing Copa dates/prices; fake scarcity pills; review quotes without approval; Sanity connection in phase A.

## Information architecture

```text
/fairs
  1. Featured hero (banner image background + text + CTAs) → /fairs/[slug]
  2. Calendar / list (filters if kinds present; cards 4/1)
  3. Short gallery (how the fair feels)
  4. Short FAQ (generic entradas / palcos / sede)
  → ContactLocation + Footer (shell)

/fairs/[slug]
  1. Hero + dates + badges
  2. Summary
  3. Entradas (general first) + palcos via WhatsApp until prices confirmed
  4. CTAs: Ver entradas · Inscribir mi ejemplar (WhatsApp)
  5. Programa / sessions (or calm empty)
  6. Última actualización
  7. Back to /fairs
```

**Featured rule:** prefer `featured == true`; if several, first by start date ascending for phase A static list.

**Status badges:** `proxima` | `en_curso` | `inscripciones` | `boleteria` | `finalizada` (explicit or derived from dates).

**Kind / grade:** optional controlled string (`grado-a`, `grado-b`, `exposicion`, `festival`, `remate`). UI filters only if at least one fair has a kind.

## List page `/fairs`

### Sections

1. **Featured hero** — full-bleed banner (official afiche or admin photo), overlay, left copy (badges, title, summary, date/place facts), optional secondary media, primary CTA to detail
2. **Calendario** — intro + filter tabs (Todas + kinds present) + cards: image, kind chip, status chip, dates, place, summary, “Ver detalle”
3. **Galería** — 6–8 ambient photos; no invented captions beyond alt
4. **FAQ** — 3–5 generic questions (entradas, palcos, sede, inscripción)
5. Empty calendar: calm message if no fairs

### Mobile / desktop

- Mobile: hero stacked; cards 1 column
- Desktop: hero full width; cards 4 columns

## Detail page `/fairs/[slug]`

### Sections

1. Hero / banner + h1 + date range + status/kind badges
2. Summary
3. Tickets / entradas — general admission first; palcos = WhatsApp ask (no invented box prices)
4. CTAs — WhatsApp ferias message (“Ver entradas”, “Inscribir mi ejemplar”); optional external URL only if real
5. Schedule / program by day if provided; else calm “La programación oficial se publica con el afiche”
6. “Última actualización”
7. Back link to `/fairs`

404 if slug missing.

## Static model (phase A) / CMS later

| Field | Notes |
| --- | --- |
| title, slug, featured, banner+alt | |
| startDate, endDate | ISO date strings |
| sessions[] | optional `{ date, label }` |
| placeLabel, summary, ticketNotes | |
| kind | optional controlled |
| status | explicit or derived |
| updatedAt | ISO datetime for “Última actualización” |
| seo title/description | |
| published | phase B |

## Copy rules (KB)

- Example featured: XXXIV Copa América Equina; dates marked adjustable; entradas desde $10.000 `[por confirmar]`
- Buttons: Ver entradas · Inscribir mi ejemplar
- WhatsApp topic `fairs` from site settings
- Do not invent ICA PDFs, pesebrera counts, or “cupos limitados” without data

## SEO

- List + detail: `buildPageMetadata`; drop `noIndex` when pages have real body copy
- Sitemap: add `/fairs` and published slugs in phase B (or when content ships)

## Acceptance criteria

- [ ] Featured hero CTA navigates to detail
- [ ] Cards link to detail; 4-col desktop / 1-col mobile
- [ ] Status badges render; filters only when kinds exist
- [ ] Detail: tickets order general → palcos CTA; no fake prices
- [ ] Program empty state calm; updatedAt shown when present
- [ ] Unknown slug 404
- [ ] Shared Button / institutional calm; portal tokens (not mock navy/purple)
- [ ] Sanity not required for phase A
