# Spec: Fairs — events (phase 1)

> Status: **open**  
> Paths: `/fairs` (list) · `/fairs/[slug]` (detail)  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md)

## Identification

| Field | Value |
| --- | --- |
| Id | `fairs` |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/fairs` |

## Goal

Treat fairs as an **events** product: many fairs/dates, one featured highlight, cards for the rest, deep detail per fair. Admins publish several events in a month without code.

## Expected result

- `/fairs` shows featured banner + card grid
- `/fairs/[slug]` shows full detail for one fair
- Home teaser can resolve to featured or nearest upcoming slug
- React Query for list + detail; skeletons for both
- “Última actualización” when schedule content exists
- SEO for list and each slug
- Shared layout ContactLocation + Footer

## Scope / out of scope

**In:** list + detail UX, fair CMS model, CTAs (entradas / WhatsApp ferias message), empty states.

**Out:** Online ticket checkout; ICA full bureaucracy dump unless content provided; About; inventing Copa dates.

## Information architecture

```text
/fairs
  ├─ Featured fair (banner) → /fairs/[slug]
  └─ Cards (other upcoming / current) → /fairs/[slug]

/fairs/[slug]
  └─ Detail: dates, place, program, tickets summary, CTAs, updatedAt
```

**Date flexibility:** a fair may use `startDate` + `endDate` and/or an array of session days. Multiple fairs may fall in the same month. Sort cards by start date ascending; featured pinned to banner (if `featured == true`, prefer one; if several, CMS rule: latest edited featured wins — document in Studio).

## List page `/fairs`

### Sections

1. **Page intro** — short h1 (e.g. Ferias y eventos) + one support line
2. **Featured** — large banner image, title, date range, short summary, primary CTA “Ver detalle”
3. **Más ferias** — responsive cards: image, title, dates, place line, badge status (Próxima / En curso) via shared chip styles
4. Empty: calm message if no published fairs

### Mobile / desktop

- Mobile: featured stacked, then vertical cards
- Desktop: featured full width; cards in grid (2–3 cols)

## Detail page `/fairs/[slug]`

### Sections

1. Hero / banner + title (h1) + date range
2. Summary
3. Schedule / program (by day if provided)
4. Tickets / entradas summary (general admission before boxes when applicable)
5. CTAs — WhatsApp ferias message; optional external ticket URL
6. “Última actualización” from `updatedAt` or explicit field
7. Back link to `/fairs`

404 if slug missing/unpublished.

## CMS model `fair`

| Field | Type | Notes |
| --- | --- | --- |
| title | string | ES |
| slug | slug | unique |
| featured | boolean | banner candidate |
| banner | image + alt | |
| startDate | datetime | required |
| endDate | datetime | optional |
| sessions[] | date + label | optional multi-day detail |
| placeLabel | string | short |
| summary | text | |
| body / program | portable text or blocks | |
| ticketNotes | text | |
| whatsAppTopic | default `ferias` | |
| externalTicketUrl | url | optional |
| seo | | |
| published | boolean | |

## React Query

- `useFairs()` — list published, sorted
- `useFair(slug)` — detail
- Mutations only in Studio (no public write)

## SEO

- List: indexable
- Detail: unique title/description per fair; OG from banner
- Include slugs in sitemap when published

## Acceptance criteria

- [ ] Featured banner + at least card navigation to detail
- [ ] Multiple fairs in same month display correctly
- [ ] Date range / sessions render without fake data
- [ ] Home can link to featured or slug
- [ ] Skeletons on list and detail
- [ ] Shared buttons/chips only; institutional calm
- [ ] Unpublished slugs 404
