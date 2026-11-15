# Phase 1 — Overview

Build the public web app for Asdeoccidente: mobile-first, SEO-first, editable by admins, visually institutional and clean.

**Domain:** [`../knowledge-base/asdeoccidente.md`](../knowledge-base/asdeoccidente.md)  
**Design:** [`../../design/DESIGN.md`](../../design/DESIGN.md) · [`../../design/design-system.png`](../../design/design-system.png)  
**Specs:** [`../../specs/phase-1/`](../../specs/phase-1/)

---

## Goal

A fast Next.js site that feels like a recognized equine association — not a generic “AI landing”. Clear paths to WhatsApp. Admins publish content in Sanity without touching code.

## In scope

| Piece | Spec |
| --- | --- |
| Project bootstrap (packages, config, layout shell) | [`foundation.md`](../../specs/phase-1/foundation.md) |
| Home `/` | [`home.md`](../../specs/phase-1/home.md) |
| School `/school` | [`school.md`](../../specs/phase-1/school.md) |
| Fairs list `/fairs` + detail `/fairs/[slug]` | [`fairs.md`](../../specs/phase-1/fairs.md) |

Shared on every page: Header · page body · **Contact & location** (Maps iframe + “how to get there” video) · Footer. Mobile bottom nav.

## Deferred

| Item | Notes |
| --- | --- |
| About `/about` | Route and nav item **commented** in foundation; no page yet |
| Chatbot | Phase 2 |
| Extra pages (membership, records, venue, contact page, equinotherapy) | Phase 3 |
| Dense mockup blocks (trámites grid, portal socios, full rental) | Not on Home phase 1 |

## Product principles

- **Mobile-first** — calm, emotional, readable on a phone
- **Institutional prestige** — real horse photography, disciplined crimson/navy/gold, generous whitespace; no purple gradients, glow, emoji clutter, or dashboard chrome
- **One design system** — same buttons, modals, cards, skeletons everywhere (shadcn + Lucide)
- **English routes & code** — Spanish only for user-facing copy
- **SEO** — one `h1` per page, metadata, sitemap, prioritized hero LCP
- **Fairs as events** — featured banner + cards + per-fair detail

## Success

- Foundation boots locally; `/studio` requires auth
- Home → School or Fairs → WhatsApp without friction on mobile
- Admins edit texts, phones, map, video, and fairs in Studio
- No invented prices or dates on anything shown to the board
