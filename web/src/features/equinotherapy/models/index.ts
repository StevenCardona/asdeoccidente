import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { mergeEquinotherapy } from "./map";
import {
  equinotherapyPageQuery,
  type EquinotherapyPageDoc,
} from "./query";
import type { EquinotherapyContent } from "./types";

export type {
  EquinotherapyContent,
  EquinotherapyFaq,
  EquinotherapyFaqItem,
  EquinotherapyHero,
  EquinotherapyImage,
  EquinotherapyReview,
  EquinotherapySectionIntro,
  EquinotherapyStory,
} from "./types";
export { defaultEquinotherapyContent } from "./defaults";

export const fetchEquinotherapyContent = cache(
  async (): Promise<EquinotherapyContent> => {
    const client = getSanityDataClient();
    if (!client) return mergeEquinotherapy(null);
    try {
      const doc = await sanityFetch<EquinotherapyPageDoc | null>(
        client,
        equinotherapyPageQuery,
      );
      return mergeEquinotherapy(doc);
    } catch (error) {
      console.error("[sanity] fetchEquinotherapyContent failed", error);
      return mergeEquinotherapy(null);
    }
  },
);
