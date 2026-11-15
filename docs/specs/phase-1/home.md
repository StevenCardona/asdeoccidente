# Spec: Home (phase 1)

> Status: **open**  
> Path: `/`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md)

## Identification

| Field | Value |
| --- | --- |
| Id | `home` |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/home` |

## Goal

First viewport and short scroll that feel prestigious and human: Criollo horse, teaching method, connection, culture. Clear CTAs to free class and fairs. Mobile-first. Not a dense trámites dashboard.

## Expected result

- Emotional hero with real photography and Spanish copy from KB
- Paths to `/school` and `/fairs` (and WhatsApp for free class)
- Teaser for next/featured fair
- Uses shared layout ContactLocation + Footer (not reimplemented)
- Skeletons for CMS-driven blocks
- SEO metadata for `/`

## Scope / out of scope

**In:** sections below; home CMS document fields; React Query hooks for home + featured fair.

**Out:** About links; trámites prices; portal socios; full venue rental block; chatbot; inventing stats.

## Copy base (KB)

| | |
| --- | --- |
| **Title (h1)** | Aprende, compite y celebra con el caballo criollo colombiano. |
| **Subtitle** | Clases de chalanería personalizadas para niños y adultos, ferias en el Valle del Cauca y trámites para tu ejemplar. Te acompañamos desde el primer paso. |
| **Buttons** | Quiero mi clase gratis · Ver la próxima feria |

Adjust subtitle if “trámites” feels heavy for phase-1 Home — prefer emphasizing school + fairs until records page exists. Keep voice: *tú*, short sentences.

## Sections

### 1. Hero

- Full-bleed or strong photo of horse / chalanería (mobile: image as atmosphere; desktop may split text + image like design reference)
- Optional small cultural label (e.g. Valle del Cauca) — restrained, not sticker spam
- h1 + subtitle + two CTAs (primary → WhatsApp school message or `/school`; secondary → featured fair or `/fairs`)
- Lucide icons on CTAs if used sitewide

### 2. Esencia (3–4 beats)

Short blocks — not a manifesto:

- Caballo criollo / arte de montar
- Metodología personalizada (1:1)
- Conexión humana / maestros
- Cultura y tradición en el Valle

### 3. Qué quieres hacer

Cards to `/school` and `/fairs` only (no About). Same card component as design system.

### 4. Escuela en breve

- One paragraph: clases totalmente personalizadas; escuela pone caballo y equipo; matrícula incluye seguro, gorra y buzo
- CTA: Quiero mi clase gratis

### 5. Próxima feria

- From CMS: featured or soonest upcoming fair
- Name, dates, short line, CTA to `/fairs/[slug]` + link “Ver todas” → `/fairs`
- If none: hide section or calm empty state (no fake Copa data)

### 6. Cifras

- Only confirmed figures. If years/students/capacity unconfirmed, **omit** the strip
- Never invent “+45” / “+200” for board demos

### 7. ContactLocation + Footer

Provided by site layout — Home must not duplicate.

## Mobile

Stack 1→6; fewer words; bottom nav; WhatsApp reachable. Hero uses mobile type scale from design system.

## Desktop

Same story; hero may be split; slightly richer esencia grid; still no phase-3 blocks from mockups.

## CMS

| Field | Notes |
| --- | --- |
| heroTitle, heroSubtitle | ES |
| heroImage | required alt |
| primaryCta / secondaryCta | label + link or WhatsApp topic |
| essenceItems[] | title + short text + optional icon name (Lucide key) |
| entryCards[] | school, fairs |
| schoolTeaser | rich text short |
| showStats / stats[] | optional; empty = hide |

Featured fair comes from fair documents (`featured` or next by date), not duplicated on home.

## SEO

- Title/description in Spanish
- One h1 (hero title)
- OG image from hero
- JSON-LD Organization optional later

## Delivery phases (within this spec)

| Step | Delivery |
| --- | --- |
| H0 | Foundation complete |
| H1 | Hero + CTAs + SEO |
| H2 | Esencia + entry cards |
| H3 | School teaser + fair teaser |
| H4 | Optional stats + skeletons + acceptance |

## Acceptance criteria

- [ ] Mobile first paint reads brand + one clear action
- [ ] Free-class CTA opens WhatsApp with school message (or agreed interim)
- [ ] Fair teaser links to real slug or `/fairs`
- [ ] No About entry; no invented fees/stats
- [ ] Shared buttons/skeletons only
- [ ] Feels institutional and calm — not generic AI landing
