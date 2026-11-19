# Spec: Equine directory (phase 1)

> Status: **implemented** — Excel-per-type in Sanity; table UI with filter / search / sort / download  
> Path: `/directory`  
> Domain: product definition for this page (not the KB “Directorio contacto oficial” staff table)

## Identification

| Field | Value |
| --- | --- |
| Id | `directory` |
| Phase | 1 |
| Depends on | `foundation`, Sanity Studio |
| Feature folder | `features/directory` |

## Goal

Offer a searchable library of contacts related to Asdeoccidente (schools, pesebreras, vets, riders, etc.). Editors upload **one Excel per type**; the public table mirrors the Excel columns exactly.

## Layout

1. **PageHero** — badge + h1 + subtitle + image (**no CTA**)
2. **Toolbar** — type chips · search · sort by column · download Excel (original) and/or CSV
3. **Table** — headers/rows from the active published dataset
4. Empty / no-results states in Spanish
5. Shared ContactLocation / Footer

## CMS model

### `directoryPage` (singleton)

Hero (badge, title, subtitle, image), empty-state copy, SEO.

### `directoryDataset` (one doc = one type)

| Field | Notes |
| --- | --- |
| `title` / `slug` / `sortOrder` / `published` | Type identity and filter order |
| `sourceFile` | Excel (`.xlsx` / `.xls`) asset |
| `processExcel` | Studio control: parse first sheet → `headers` + `rows` |
| `headers` | Column labels (from Excel) |
| `rows[].cells` | Cell values aligned to headers |

Runtime reads **headers/rows** only (does not re-parse Excel on each request). Download can use original file URL and/or client-generated CSV.

```mermaid
flowchart LR
  Excel[Excel por tipo] --> Studio[directoryDataset]
  Studio --> Headers[headers + rows]
  Headers --> Table["/directory tabla"]
  Table --> DL[CSV o Excel]
```

## Content rules

- No invented directory rows in code defaults
- Association uploads real Excels and presses **Procesar Excel** then **Publicar**
- Staff/junta table in KB §1 is **not** this page

## Acceptance

- [x] Spec + feature `features/directory`
- [x] `directoryPage` + `directoryDataset` in Studio
- [x] Banner without CTA; type / search / sort / download
- [ ] Association seeds real Excels (no invented contacts in repo)
- [ ] Mobile review
