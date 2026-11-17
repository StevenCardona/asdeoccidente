import { createClient, type SanityClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2025-01-01";

export const sanityConfigured = Boolean(projectId && projectId !== "missing");

/**
 * Public CDN client — published documents only.
 * No token / drafts: the site only shows admin-approved published content.
 */
export const sanityClient: SanityClient | null = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
      /** Fail fast on DNS/network issues instead of long retry storms. */
      maxRetries: 1,
    })
  : null;

/**
 * Server data client for site reads. Same as published CDN client.
 * Do not import this into client components.
 */
export function getSanityDataClient(): SanityClient | null {
  return sanityClient;
}
