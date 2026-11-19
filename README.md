# Asdeoccidente

Public website for Asociación de Criadores de Caballos de Paso y Fomento Equino del Occidente (Valle del Cauca).

## Stack

- **Next.js** (App Router) in [`web/`](web/)
- **Sanity** CMS (Studio embedded at `/studio`)
- Deploy target: **Vercel**

## Docs for agents and humans

1. [`AGENTS.md`](AGENTS.md) — how to work this repo
2. [`docs/specs/phase-1/site-pages.md`](docs/specs/phase-1/site-pages.md) — page index
3. [`docs/context/phase-1/architecture.md`](docs/context/phase-1/architecture.md) — stack and folders
4. [`docs/design/DESIGN.md`](docs/design/DESIGN.md) — design system
5. [`web/README.md`](web/README.md) — local setup and routes

## Content rule

All marketing copy, images, PDFs, fees, nav labels, and contact details are **published in Sanity**. Code ships empty shells only. Env holds infra (`NEXT_PUBLIC_SITE_URL`, Sanity project/dataset).

After editing in Studio, click **Publicar** — Save alone does not update the public site.

## Quick start

```bash
cd web
cp ../.env.example .env   # or use web/.env.example (same infra vars)
npm install
npm run dev
```

- Site: http://localhost:3000  
- Studio: http://localhost:3000/studio  

## Public routes

`/` · `/school` · `/events` · `/events/[slug]` · `/services` · `/venue` · `/membership` · `/equinotherapy` · `/directory` · `/studio`
