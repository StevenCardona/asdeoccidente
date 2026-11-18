# Phase 1 — Workflow

How humans and agents work through phase-1 docs and code.

## Before any change

1. Read [`overview.md`](overview.md) → [`architecture.md`](architecture.md) → this file → the **open spec** → [`progress.md`](progress.md)
2. Domain facts only from [`../knowledge-base/asdeoccidente.md`](../knowledge-base/asdeoccidente.md). Do not invent prices, dates, or names.
3. Visual rules from [`../../design/DESIGN.md`](../../design/DESIGN.md). Prefer institutional calm over “AI landing” tropes.
4. Site-wide contact/social from Sanity `siteSettings` / `getSiteSettings()` — never hardcode in components.

## Spec discipline

- One spec file = one delivery unit (`foundation` → `home` → `school` → `fairs`)
- Do not start the next feature until the previous gate in [`build-plan.md`](build-plan.md) is met
- Update [`progress.md`](progress.md) when a spec closes or status changes
- Keep docs congruent with the running app: describe what exists, mark placeholders honestly

## Current focus

Foundation, Home, and several offer pages are in flight. Current open unit: **Membership** (`docs/specs/phase-1/membership.md`). About stays deferred.

## UI congruence checklist

- [ ] Button from `shared/components/ui` (no one-off colors)
- [ ] Modal/Dialog from shared
- [ ] Lucide for UI icons; brand marks via shared brand-icons
- [ ] Skeleton matches final layout structure
- [ ] Contact & location + Footer unchanged (mailto form; details in footer)
- [ ] Spanish copy; English code and routes

## Coding practices

Use project skills as relevant:

- React / Next best practices (App Router, server vs client boundaries)
- Vercel guidance when deploying
- Keep features thin; prefer composition over new frameworks
- Smart feature `app/` + hooks; dumb `components/`

## About route

Keep `/about` commented in nav and app tree until an About spec exists. Do not add Home links to Nosotros early.
