"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export default function StudioPage() {
  if (!projectId) {
    return (
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col justify-center gap-4 px-6 text-center">
        <h1 className="font-display text-2xl font-bold text-secondary">
          Sanity Studio
        </h1>
        <p className="text-sm text-muted-foreground">
          Falta el project id. Crea o abre un proyecto en{" "}
          <a
            href="https://www.sanity.io/manage"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            sanity.io/manage
          </a>
          , copia el Project ID y ponlo en{" "}
          <code className="rounded bg-muted px-1">web/.env</code>:
        </p>
        <pre className="rounded-lg border border-border bg-surface p-4 text-left text-xs text-secondary">
          {`NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production`}
        </pre>
        <p className="text-sm text-muted-foreground">
          Reinicia <code className="rounded bg-muted px-1">npm run dev</code> y
          vuelve a <code className="rounded bg-muted px-1">/studio</code>. El
          acceso queda protegido por tu cuenta Sanity (sin edición anónima).
        </p>
        <p className="text-xs text-muted-foreground">
          CLI:{" "}
          <code className="rounded bg-muted px-1">
            npx sanity login
          </code>{" "}
          luego{" "}
          <code className="rounded bg-muted px-1">
            npx sanity projects list
          </code>
        </p>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
