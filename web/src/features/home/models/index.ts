/**
 * Home feature data layer.
 * Fetches published Sanity singleton `home`, merges into UI model.
 * Missing client / fetch errors → empty shell (no runtime seed copy).
 */
import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { getSiteSettings } from "@/features/site/models";
import { mergeHome } from "./map";
import { homeQuery, type HomeDoc } from "./query";
import type { HomeContent } from "./types";

export type {
  HomeContent,
  HomeCta,
  HomeEssenceItem,
  HomeGalleryPhoto,
  HomeHeroImage,
  HomeReview,
  HomeSectionIntro,
  HomeServiceItem,
  HomeSocialVideo,
  HomeStat,
} from "./types";
export { emptyHomeContent } from "./defaults";
export { homeHeroImageUrl, isHomeContentEmpty } from "./map";

export const fetchHomeContent = cache(async (): Promise<HomeContent> => {
  const settings = await getSiteSettings();
  const reviewCount = settings.google.reviewCount;

  const client = getSanityDataClient();
  if (!client) {
    return mergeHome(null, reviewCount);
  }

  try {
    const doc = await sanityFetch<HomeDoc | null>(client, homeQuery);
    return mergeHome(doc, reviewCount);
  } catch (error) {
    console.error("[sanity] fetchHomeContent failed", error);
    return mergeHome(null, reviewCount);
  }
});
