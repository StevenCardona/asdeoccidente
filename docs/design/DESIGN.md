---
name: Criollo Prestige Portal
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#5c403d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#916f6b'
  outline-variant: '#e5bdb9'
  surface-tint: '#be0d19'
  primary: '#9c000f'
  on-primary: '#ffffff'
  primary-container: '#c5161d'
  on-primary-container: '#ffd7d3'
  inverse-primary: '#ffb4ac'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#6c4300'
  on-tertiary: '#ffffff'
  tertiary-container: '#8c5800'
  on-tertiary-container: '#ffdab2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses the regal tradition, precision, and athletic elegance of the Colombian Criollo horse, Chalanería (horsemanship), and therapeutic equinotherapy. It synthesizes high-end athletic prestige with institutional governance, catering to horse breeders, equitation athletes, families, and equine therapy participants.

The visual style blends **Corporate Elegance** and **Modern Athletic Minimalism**:
- Pristine, high-contrast layouts anchored by crisp white canvas backgrounds, deep charcoal structural sections, and commanding Crimson Red heritage accents.
- Golden amber touches reserved strictly for awards, active tab indicators, pedigree tiers, and official badges.
- Sharp architectural discipline, restrained framing, subtle hairline dividers, and fluid interactive modules (calculators, registration rosters, event timelines).

## Colors

The palette balances traditional passion with institutional authority:

- **Primary (`#C5161D`)**: Equestrian crimson red derived from competitive rosettes and heritage insignia. Used for primary calls to action, key navigation accents, active tab markers, and high-impact emphasis.
- **Secondary (`#0F172A`)**: Midnight slate/black representing discipline, premium quality, and institutional confidence. Used for global navigation bars, hero headers, footer slabs, and deep text contrast.
- **Tertiary (`#F59E0B`)**: Warm burnished amber gold reflecting championship trophies, golden ribbing, VIP badge designations, and rating stars.
- **Neutral (`#64748B`)**: Balanced cool slate for secondary metadata, subtle borders (`#E2E8F0`), muted backgrounds (`#F8FAFC`), and body text tints.

Background strategy operates on crisp light `#FFFFFF` for data-heavy sections (fee calculators, directories, equinotherapy plans) and deep `#0F172A` / `#111827` contrasting slabs for hero showcases and major tournament banners.

## Typography

The typographic hierarchy combines the geometric, confident presence of **Plus Jakarta Sans** for headers, navigational anchors, and badges with the utilitarian legibility of **Inter** for dense transactional tables, event itineraries, and long-form medical equinotherapy documentation.

- Uppercase tracking (`letter-spacing: 0.05em`) is deployed for category tags (e.g., *PASO FINO COLOMBIANO*, *TROCHA Y GALOPE*, *EQUINOTERAPIA*).
- Heading levels feature tight negative tracking for high-end polish and strong visual hierarchy.
- Numeric displays (fee calculators, tournament countdowns, prize amounts) utilize tabular figures for uniform horizontal alignments.

## Layout & Spacing

A 12-column responsive fluid grid with maximum container width of `1280px` anchors the primary user flow. 

- **Breakpoints**: Mobile (`< 768px`), Tablet (`768px - 1024px`), Desktop (`> 1024px`).
- **Margins & Gutters**: Mobile utilizes `1.25rem` outer gutters with single-column collapse; desktop spans up to `3rem` margins with `1.5rem` internal gutters.
- **Vertical Rhythm**: Generous vertical spacing (`space-xl` to `4rem`) between distinct editorial modules provides breathing room between equine photography cards, event schedules, and service blocks.

## Elevation & Depth

Visual hierarchy leverages architectural layering with low-contrast borders and deep warm-tinted ambient shadows:

- **Level 0 (Flat)**: Crisp `#FFFFFF` canvas or `#0F172A` contrast section with hairline borders (`1px solid #E2E8F0` or `1px solid rgba(255, 255, 255, 0.08)`).
- **Level 1 (Card Rest)**: Cards sit on a soft ambient drop shadow: `0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 1px 3px -1px rgba(15, 23, 42, 0.04)` wrapped in a 1px border (`#E2E8F0`).
- **Level 2 (Hover & Floating Tabs)**: Lifted state for interactive cards and fee calculator sliders: `0 12px 24px -6px rgba(197, 22, 29, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Modals & Sticky Navigation)**: Elevated header and drawer menus: `0 20px 35px -10px rgba(15, 23, 42, 0.25)`.
- **Gold Accent Glow**: On high-prestige championship ribbons or active badges, an ambient ring: `0 0 0 1px #F59E0B, 0 4px 12px rgba(245, 158, 11, 0.2)`.

## Shapes

The shape system adopts **Level 1 (Soft)** roundedness (`rounded = 0.25rem / 4px`, `rounded-lg = 0.5rem / 8px`, `rounded-xl = 0.75rem / 12px`).

- This structured, near-orthogonal architecture communicates institutional stability, heritage, and seriousness suitable for an official equine federation.
- Circular treatment (`rounded-full`) is reserved solely for status indicators, circular rider/horse profile avatars, and carousel arrow controls.

## Components

### Buttons
- **Primary**: Solid crimson red (`#C5161D`), white text, `font-weight: 700`, uppercase styling with subtle tracking. Hover: `#A51217` with `Level 2` elevation.
- **Secondary**: Deep charcoal `#0F172A` fill with white text, or pure white with `#0F172A` outline and text.
- **Gold Badge / Trophy CTA**: Warm amber (`#F59E0B`) background with deep slate text (`#0F172A`) for VIP reservations, trophy registrations, and championship announcements.

### Interactive Fee Calculator Tabs
- Segmented control pills or segmented tab rows with a dark slate background (`#F1F5F9`). Active tab switches with a crisp white container, red indicator bar along the top edge, and bold crimson typography.
- Sliders and numeric fields feature instant recalculation feedback with amber badge highlights for totals.

### Cards & Service Tiles
- Crisp 1px `#E2E8F0` border, white surface, subtle image zoom on hover (`scale(1.03)` with overflow hidden).
- Top accent ribbon: optional 3px solid strip of `#C5161D` (competitions) or `#F59E0B` (accreditations & clinic programs).

### Carousel Sliders
- Full-bleed or padded carousel cards showcasing fair dates, horse pedigrees, and gallery snapshots. Navigation buttons use floating circular white badges with subtle drop shadows and crimson chevron arrows on hover.

### Chips & Badges
- Modality tags (e.g., *Trocha*, *Paso Fino*, *Galope*): Pill or soft rectangular badges with light neutral fill (`#F8FAFC`), dark charcoal text, and a 1px border.
- Status badges: Amber (`#FEF3C7` background with `#92400E` text) for "En Curso / Próxima Feria", and Crimson (`#FEE2E2` background with `#991B1B` text) for "Inscripciones Abiertas".

### Input Fields & Selects
- 1px neutral border (`#CBD5E1`), background `#FFFFFF`, focus ring with 2px stroke in `#C5161D` and zero blur offset.