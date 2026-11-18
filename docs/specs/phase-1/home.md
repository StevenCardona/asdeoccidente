# Spec: Home (phase 1)

> Status: **implemented**  
> Path: `/`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md)  
> Feature: `web/src/features/home`

## Identification

| Field | Value |
| --- | --- |
| Id | `home` |
| Phase | 1 |
| Depends on | `foundation` |
| Feature folder | `features/home` |

## Goal

Prestigious, human Home: horse, method, culture. CTAs to free class (WhatsApp) and fairs. Mobile-first. Progressive image load with reserved space (`SafeImage`).

## Section order

Rendered by `HomePage` after shared Header; ContactLocation + Footer come from the site shell.

1. **Hero** — full-bleed banner (`/imgs/banner.png` or CMS `heroImage`); Google reviews badge + Fedequinas logo; `h1` + subtitle; primary CTA WhatsApp (clase gratis) · secondary CTA `/events`; **sede address** under CTAs (small, muted white, ≈ CTA row width; no separate tall band below the banner)
2. **Esencia** — four beats (title, text, Lucide icon) + 2×2 photo mosaic (`/imgs/escuela*.jpg`)
3. **Cifras** — navy slab, count-up with icons: **1975** · **+200** alumnos · Google opiniones · **+180** socios
4. **Servicios** — photo cards in **`md:grid-cols-3`** (offers + escuela); CTAs link to stub/live routes when `href` is set
5. **Galería** — horizontal carousel (`SafeImage`, 2-up mobile / 4-up desktop)
6. **Cuatro andares** — tabs (Paso Fino, Trocha, Trocha y Galope, Trote y Galope) on crimson section
7. **Videos** — four fixed slots, **all 9:16**; desktop one row; mobile 1-up carousel; Instagram/TikTok embeds (URLs from CMS or `NEXT_PUBLIC_HOME_VIDEO_URL_*`)

Shared after the feature body (not inside `HomePage`):

8. **ContactLocation** — map + optional “Cómo llegar” video (dialog) · mini form → `mailto:` site email  
9. **Footer** — full address, phones, WhatsApp, socials from env

Not rendered on the page: “¿Qué quieres hacer?” entry cards (field may exist in Sanity/model for later; UI does not mount it).

## Default copy (code fallbacks)

| Element | Value |
| --- | --- |
| Hero title | Aprende, compite y celebra con el caballo criollo colombiano. |
| Hero subtitle | Clases de chalanería personalizadas para niños y adultos, y ferias en el Valle del Cauca. Te acompañamos desde el primer paso. |
| Primary CTA | Quiero mi clase gratis → WhatsApp topic `school` |
| Secondary CTA | Ver el próximo evento → `/events` |
| Stats | 1975 · +200 · Google review count · +180 socios |

## Videos (defaults)

Four Instagram reel URLs (overridable via env / CMS). Display aspect is always **9:16**.

| Slot | Default URL |
| --- | --- |
| 1 | `https://www.instagram.com/linaje_equino/reel/Deae7fnRIX0/` |
| 2 | `https://www.instagram.com/asdeoccidente.oficial/reel/DfLdlWOi7bS/` |
| 3 | `https://www.instagram.com/asdeoccidente.oficial/reel/DfKvIoeCawv/` |
| 4 | `https://www.instagram.com/asdeoccidente.oficial/reel/DfIJvrnCVkk/` |

## CMS (`home` singleton)

Editable in Studio and merged with `defaultHomeContent`:

| Field | Used on page |
| --- | --- |
| `heroTitle`, `heroSubtitle`, `heroImage` | Yes |
| `primaryCta`, `secondaryCta` | Yes |
| `essenceItems[]` | Yes |
| `showStats`, `stats[]` | Yes |
| `socialVideos[]` (max 4) | Yes |
| `seoTitle`, `seoDescription` | Yes (`generateMetadata`) |
| `culturalLabel`, `entryCards[]` | In schema/model; **not rendered** |

## Loading & media

- Hero image `priority`; below-fold `SafeImage` lazy + muted fallback + aspect boxes
- Video iframes `loading="lazy"`
- Brand: `/brand/fedeequinas.png`; Google rating/count from `NEXT_PUBLIC_GOOGLE_*`

## Address

Canonical sede from Sanity `siteSettings.address` (KB UI line). Shown under hero CTAs and in the Footer — not as a tall band under the banner.

## Acceptance

- [x] Address under hero CTAs (mobile + desktop) and full line in footer
- [x] Hero shows Google reviews + Fedequinas
- [x] Brand lockup subtitle one line (“Fomento equino del Valle · 1975”)
- [x] No “¿Qué quieres hacer?” section on the page
- [x] Four stats with icons (1975 · +200 · Google · +180 socios)
- [x] Servicios grid three columns on desktop
- [x] Four video slots at 9:16 (desktop row / mobile carousel)
- [x] Contact is mini-form (`mailto`); contact details in footer
- [ ] Mobile review pass + directions video URL when available
