import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { mergeVenue } from "./map";
import { venuePageQuery, type VenuePageDoc } from "./query";
import type { VenueContent } from "./types";

export type {
  VenueContent,
  VenueHero,
  VenueImage,
  VenueIntro,
  VenueReview,
  VenueSectionIntro,
  VenueSpace,
} from "./types";
export { defaultVenueContent } from "./defaults";

export const fetchVenueContent = cache(async (): Promise<VenueContent> => {
  const client = getSanityDataClient();
  if (!client) return mergeVenue(null);
  try {
    const doc = await sanityFetch<VenuePageDoc | null>(client, venuePageQuery);
    return mergeVenue(doc);
  } catch (error) {
    console.error("[sanity] fetchVenueContent failed", error);
    return mergeVenue(null);
  }
});
