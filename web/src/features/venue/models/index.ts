import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { emptyVenueContent } from "./defaults";
import { isVenueContentEmpty, mergeVenue } from "./map";
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
export { emptyVenueContent, defaultVenueContent } from "./defaults";
export { isVenueContentEmpty } from "./map";

export const fetchVenueContent = cache(async (): Promise<VenueContent> => {
  const client = getSanityDataClient();
  if (!client) return emptyVenueContent;
  try {
    const doc = await sanityFetch<VenuePageDoc | null>(client, venuePageQuery);
    return mergeVenue(doc);
  } catch (error) {
    console.error("[sanity] fetchVenueContent failed", error);
    return emptyVenueContent;
  }
});
