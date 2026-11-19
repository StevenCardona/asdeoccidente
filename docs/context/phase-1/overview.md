# Phase 1 — Overview

Build the public web app for Asdeoccidente: mobile-first, SEO-first, editable by admins, visually institutional and clean.

**Domain:** [`../knowledge-base/asdeoccidente.md`](../knowledge-base/asdeoccidente.md)  
**Design:** [`../../design/DESIGN.md`](../../design/DESIGN.md)  
**Specs:** [`../../specs/phase-1/`](../../specs/phase-1/)

---

## Goal

A fast Next.js site that feels like a recognized equine association. Clear paths to WhatsApp and email. Admins publish content in Sanity without touching code.

## In scope

| Piece | Spec | Status |
| --- | --- | --- |
| Project bootstrap (packages, config, layout shell) | [`foundation.md`](../../specs/phase-1/foundation.md) | Implemented |
| Home `/` | [`home.md`](../../specs/phase-1/home.md) | Implemented |
| School `/school` | [`school.md`](../../specs/phase-1/school.md) | Implemented |
| Events `/events` + `/events/[slug]` | [`fairs.md`](../../specs/phase-1/fairs.md) | Implemented |
| Services, venue, membership, equinotherapy, directory | respective specs | Implemented |

Shared on every page: Header · page body · **Contact & location** (mailto form + Maps iframe + “how to get there” video dialog) · Footer. Mobile: hamburger drawer. Contact, nav, and form labels live in Sanity `siteSettings` (group Textos de interfaz).

## Deferred

| Item | Notes |
| --- | --- |
| About `/about` | Route and nav item **commented** in foundation; no page yet |
| Chatbot | Phase 2 |
| Extra pages (contact page) | Phase 3 |

## Product principles

- **Mobile-first** — calm, emotional, readable on a phone
- **Institutional prestige** — real horse photography, disciplined crimson/navy/gold, generous whitespace
- **One design system** — same buttons, modals, skeletons everywhere (shadcn + Lucide)
- **English routes & code** — Spanish only for user-facing copy
- **SEO** — one `h1` per page, metadata, sitemap, prioritized hero LCP
- **Sanity-only content** — no runtime seed copy/images; empty CMS → empty/hidden UI
- **Events** — featured banner when a calendar event exists; otherwise `eventsPage` PageHero

## Success

- Foundation boots locally; `/studio` requires auth
- Home → WhatsApp (clase gratis) or `/events` (“Ver el próximo evento”) without friction on mobile
- Admins edit all page documents and `siteSettings` in Studio and **Publicar**
- No invented prices or dates on anything shown to the board
