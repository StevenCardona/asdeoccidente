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
  HomeGait,
  HomeGalleryPhoto,
  HomeHeroImage,
  HomeSectionIntro,
  HomeServiceItem,
  HomeSocialVideo,
  HomeStat,
} from "./types";
export { defaultHomeContent, emptyHomeContent } from "./defaults";
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
