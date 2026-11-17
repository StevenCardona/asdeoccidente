import type { QueryParams, SanityClient } from "next-sanity";

/** Cap Sanity waits so a DNS/network failure does not stall TTFB for tens of seconds. */
export const SANITY_FETCH_TIMEOUT_MS = 2500;

/**
 * GROQ fetch with a hard timeout. Throws on timeout or network error
 * (callers catch and return defaults).
 */
export async function sanityFetch<T>(
  client: SanityClient,
  query: string,
  params: QueryParams = {},
): Promise<T> {
  return client.fetch<T>(query, params, {
    signal: AbortSignal.timeout(SANITY_FETCH_TIMEOUT_MS),
  });
}
