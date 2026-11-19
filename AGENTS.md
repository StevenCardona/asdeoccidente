# Agent guide — Asdeoccidente

Read these files **in order** before implementing any phase-1 spec. Do not invent product data, prices, or contact details.

## Required reading order

1. [`docs/context/phase-1/overview.md`](docs/context/phase-1/overview.md) — scope and goals
2. [`docs/context/phase-1/architecture.md`](docs/context/phase-1/architecture.md) — stack, folders, routes, UI rules
3. [`docs/context/phase-1/workflow.md`](docs/context/phase-1/workflow.md) — how to work a spec
4. [`docs/context/phase-1/build-plan.md`](docs/context/phase-1/build-plan.md) — delivery order and gates
5. **The open spec** under [`docs/specs/phase-1/`](docs/specs/phase-1/) (`foundation`, `home`, `school`, events, services, venue, membership, equinotherapy, directory are implemented)
6. [`docs/context/knowledge-base/asdeoccidente.md`](docs/context/knowledge-base/asdeoccidente.md) — domain facts and copy
7. [`docs/design/DESIGN.md`](docs/design/DESIGN.md) — design system (mockups under `docs/design/`)
8. [`.env.example`](.env.example) / local `.env` — **infra only**: `NEXT_PUBLIC_SITE_URL`, Sanity project/dataset (site reads published CDN content; no token required)

Also check [`docs/context/phase-1/progress.md`](docs/context/phase-1/progress.md) and the index [`docs/specs/phase-1/site-pages.md`](docs/specs/phase-1/site-pages.md).

## Non-negotiables

- **No invented data.** Unconfirmed facts stay `[por confirmar]` or omitted.
- **Sanity-only content.** No runtime seed copy/images/fees in `defaults.ts` — empty shells only. Contact, socials, nav labels, and page copy come from Sanity (`siteSettings` / page documents). Env holds only site URL and Sanity credentials. Never hardcode Instagram, phones, address, or org name in components.
- **English** for code and URL paths; **Spanish** for user-facing copy.
- **One design system** — shared Button, Dialog, Skeleton, Lucide for UI icons; brand marks via shared brand-icons. Institutional, clean.
- **Shared layout** on every page: Header → body → Contact & location (mailto mini-form + map + directions video dialog) → Footer. Mobile: hamburger drawer (no bottom nav). Contact details live in the Footer.
- **Home** does not render a “¿Qué quieres hacer?” entry-card section. Hero CTAs (including “Ver el próximo evento” → `/events`) come from Sanity.
- **`/about` is deferred** — keep route and nav item commented until an About spec exists.
- **Events** are a list (`/events`) plus detail (`/events/[slug]`). No `/fairs` routes or redirects.
- Keep code simple; Smart/Dumb features; React Query for API reads when coding.

## Spec order

`foundation` (done) → `home` (done) → `school` (done) → `events` (done) → `services` / `venue` / `membership` / `equinotherapy` / `directory` (done) → (about later)
