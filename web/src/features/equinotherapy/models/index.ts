import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { emptyEquinotherapyContent } from "./defaults";
import { isEquinotherapyContentEmpty, mergeEquinotherapy } from "./map";
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
export {
  emptyEquinotherapyContent,
  defaultEquinotherapyContent,
} from "./defaults";
export { isEquinotherapyContentEmpty } from "./map";

export const fetchEquinotherapyContent = cache(
  async (): Promise<EquinotherapyContent> => {
    const client = getSanityDataClient();
    if (!client) return emptyEquinotherapyContent;
    try {
      const doc = await sanityFetch<EquinotherapyPageDoc | null>(
        client,
        equinotherapyPageQuery,
      );
      return mergeEquinotherapy(doc);
    } catch (error) {
      console.error("[sanity] fetchEquinotherapyContent failed", error);
      return emptyEquinotherapyContent;
    }
  },
);
