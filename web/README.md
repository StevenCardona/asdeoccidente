# Asdeoccidente web

Phase-1 Next.js app. See root [`AGENTS.md`](../AGENTS.md) and [`docs/specs/phase-1/foundation.md`](../docs/specs/phase-1/foundation.md).

## Setup

```bash
cd web
cp .env.example .env   # if needed
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Sanity Studio

1. Create a Sanity project and set `NEXT_PUBLIC_SANITY_PROJECT_ID` (+ dataset) in `.env`.
2. Open `/studio` and sign in with an authorized Sanity account (no anonymous edit).
3. Until the project id is set, `/studio` shows a setup message; the public site still runs on env contact data.
