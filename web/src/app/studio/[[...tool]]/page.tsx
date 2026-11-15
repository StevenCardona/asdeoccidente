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
          Configura <code className="rounded bg-muted px-1">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{" "}
          en <code className="rounded bg-muted px-1">web/.env</code> y reinicia el servidor.
          El acceso al Studio queda protegido por la cuenta Sanity del proyecto (sin edición
          anónima).
        </p>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
