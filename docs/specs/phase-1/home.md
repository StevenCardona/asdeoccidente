# Spec: Home (phase 1)

> Status: **in progress**  
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

Prestigious, human Home: horse, method, culture. CTAs to free class and fairs. Mobile-first. Progressive image load with reserved space.

## Section order

1. **Hero** — banner1 / CMS; Google reviews + Fedequinas logo; h1; CTAs WhatsApp / ferias  
2. **Esencia** — beats + photo mosaic  
3. **Cifras** — count-up with icons: 1975 · +200 · Google opiniones · 4 andares  
4. **Servicios** — 4 cards with photo; CTA inert  
5. **Galería** — horizontal carousel  
6. **Cuatro andares** — tabs  
7. **Videos** — 4 fixed slots (2 vertical 9:16, 2 horizontal 16:9) Instagram reels  
8. **ContactLocation** — mini form → WhatsApp; map/video right  
9. Layout **Footer** — full address (quoted env so `#` is not truncated)

Removed: “Qué quieres hacer”; school/fair teasers.

## Videos (defaults)

| Orient. | URL |
| --- | --- |
| Vertical | `https://www.instagram.com/linaje_equino/reel/Deae7fnRIX0/` |
| Vertical | `https://www.instagram.com/asdeoccidente.oficial/reel/DfLdlWOi7bS/` |
| Horizontal | `https://www.instagram.com/asdeoccidente.oficial/reel/DfKvIoeCawv/` |
| Horizontal | `https://www.instagram.com/asdeoccidente.oficial/reel/DfIJvrnCVkk/` |

## Loading

- Hero `priority`; below-fold `SafeImage` lazy + `bg-muted` fallback + aspect boxes  
- Iframes `loading="lazy"`

## Address

Env must quote: `NEXT_PUBLIC_SITE_ADDRESS="Transversal 5 # 1 - 60, ..."` (KB canonical UI).

## Acceptance

- [ ] Address shows full Transversal 5 line (not truncated at `#`)
- [ ] Hero shows Google + Fedequinas (not Asdeoccidente/Valle eyebrows)
- [ ] Lockup subtitle one line
- [ ] No “Qué quieres hacer”
- [ ] Four stats with icons; videos occupy 4 slots with correct aspects
- [ ] Contact is mini-form; data details in footer
