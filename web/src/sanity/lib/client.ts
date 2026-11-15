import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityConfigured = Boolean(projectId && projectId !== "missing");

export const sanityClient = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: "2025-01-01",
      useCdn: true,
    })
  : null;
