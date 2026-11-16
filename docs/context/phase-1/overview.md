# Phase 1 — Overview

Build the public web app for Asdeoccidente: mobile-first, SEO-first, editable by admins, visually institutional and clean.

**Domain:** [`../knowledge-base/asdeoccidente.md`](../knowledge-base/asdeoccidente.md)  
**Design:** [`../../design/DESIGN.md`](../../design/DESIGN.md) · [`../../design/design-system.png`](../../design/design-system.png)  
**Specs:** [`../../specs/phase-1/`](../../specs/phase-1/)

---

## Goal

A fast Next.js site that feels like a recognized equine association. Clear paths to WhatsApp and email. Admins publish content in Sanity without touching code.

## In scope

| Piece | Spec | Status |
| --- | --- | --- |
| Project bootstrap (packages, config, layout shell) | [`foundation.md`](../../specs/phase-1/foundation.md) | Implemented |
| Home `/` | [`home.md`](../../specs/phase-1/home.md) | Implemented |
| School `/school` | [`school.md`](../../specs/phase-1/school.md) | Open (placeholder route) |
| Fairs list `/fairs` + detail `/fairs/[slug]` | [`fairs.md`](../../specs/phase-1/fairs.md) | Open (placeholder routes) |

Shared on every page: Header · page body · **Contact & location** (mailto form + Maps iframe + “how to get there” video dialog) · Footer. Mobile bottom nav. Contact details live in the Footer (env).

## Deferred

| Item | Notes |
| --- | --- |
| About `/about` | Route and nav item **commented** in foundation; no page yet |
| Chatbot | Phase 2 |
| Extra pages (membership, records, venue, contact page, equinotherapy) | Phase 3 |
| Dense mockup blocks (trámites grid, portal socios, full rental) | Not on Home phase 1 (services cards are informational only) |

## Product principles

- **Mobile-first** — calm, emotional, readable on a phone
- **Institutional prestige** — real horse photography, disciplined crimson/navy/gold, generous whitespace
- **One design system** — same buttons, modals, skeletons everywhere (shadcn + Lucide)
- **English routes & code** — Spanish only for user-facing copy
- **SEO** — one `h1` per page, metadata, sitemap, prioritized hero LCP
- **Fairs as events** — featured banner + cards + per-fair detail (when fairs feature lands)

## Success

- Foundation boots locally; `/studio` requires auth
- Home → WhatsApp (clase gratis) or `/fairs` without friction on mobile
- Admins edit Home texts, stats, videos, and (later) school/fairs in Studio
- Contact identity from env; no invented prices or dates on anything shown to the board
