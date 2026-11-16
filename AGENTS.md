# Agent guide — Asdeoccidente

Read these files **in order** before implementing any phase-1 spec. Do not invent product data, prices, or contact details.

## Required reading order

1. [`docs/context/phase-1/overview.md`](docs/context/phase-1/overview.md) — scope and goals
2. [`docs/context/phase-1/architecture.md`](docs/context/phase-1/architecture.md) — stack, folders, routes, UI rules
3. [`docs/context/phase-1/workflow.md`](docs/context/phase-1/workflow.md) — how to work a spec
4. [`docs/context/phase-1/build-plan.md`](docs/context/phase-1/build-plan.md) — delivery order and gates
5. **The open spec** under [`docs/specs/phase-1/`](docs/specs/phase-1/) (e.g. `foundation.md`, `home.md`, `school.md`, `fairs.md`)
6. [`docs/context/knowledge-base/asdeoccidente.md`](docs/context/knowledge-base/asdeoccidente.md) — domain facts and copy
7. [`docs/design/DESIGN.md`](docs/design/DESIGN.md) — design system (and `docs/design/design-system.png` for UI work)
8. [`.env.example`](.env.example) / local `.env` — **site-wide** name, address, phones, WhatsApp, social URLs

Also check [`docs/context/phase-1/progress.md`](docs/context/phase-1/progress.md) and the index [`docs/specs/phase-1/site-pages.md`](docs/specs/phase-1/site-pages.md).

## Non-negotiables

- **No invented data.** Unconfirmed facts stay `[por confirmar]` or omitted.
- **Contact and socials** come from env (`NEXT_PUBLIC_*`). Never hardcode Instagram, phones, address, or org name in components.
- **English** for code and URL paths; **Spanish** for user-facing copy.
- **One design system** — shared Button, Dialog, Skeleton, Lucide only. Institutional, clean; not a generic “AI landing”.
- **Shared layout** on every page: Header → body → Contact & location (map + directions video) → Footer (+ mobile nav).
- **`/about` is deferred** — keep route and nav item commented until an About spec exists.
- **Fairs** are an events list (`/fairs`) plus detail (`/fairs/[slug]`).
- Keep code simple; Smart/Dumb features; React Query for API reads/mutations when coding.

## Spec order

`foundation` → `home` → `school` → `fairs` → (about later)
