# Phase 1 — Workflow

How humans and agents work through phase-1 docs and (later) code.

## Before any change

1. Read [`overview.md`](overview.md) → [`architecture.md`](architecture.md) → this file → the **open spec** → [`progress.md`](progress.md)
2. Domain facts only from [`../knowledge-base/asdeoccidente.md`](../knowledge-base/asdeoccidente.md). Do not invent prices, dates, or names.
3. Visual rules from [`../../design/DESIGN.md`](../../design/DESIGN.md). Prefer institutional calm over “AI landing” tropes.

## Spec discipline

- One spec file = one delivery unit (`foundation` → `home` → `school` → `fairs`)
- Do not start the next feature until the previous gate in [`build-plan.md`](build-plan.md) is met (when coding)
- Update [`progress.md`](progress.md) when a spec closes

## UI congruence checklist

- [ ] Button from `shared/components/ui` (no one-off colors)
- [ ] Modal/Dialog from shared
- [ ] Lucide icons only
- [ ] Skeleton matches final layout structure
- [ ] Contact & location + Footer unchanged
- [ ] Spanish copy; English code and routes

## When coding later — industry skills / practices

Use project skills as relevant (do not install during docs-only work):

- React / Next best practices (App Router, server vs client boundaries)
- Vercel guidance when deploying
- Keep features thin; prefer composition over new frameworks

## About route

Keep `/about` commented in nav and app tree until an About spec exists. Do not add Home links to Nosotros early.
