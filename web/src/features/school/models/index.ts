import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { defaultSchoolContent } from "./defaults";
import { mergeSchool } from "./map";
import { schoolQuery, type SchoolDoc } from "./query";
import type { SchoolContent } from "./types";

export type {
  SchoolContent,
  SchoolFaqItem,
  SchoolFeePlan,
  SchoolFeePrices,
  SchoolGalleryTile,
  SchoolHorse,
  SchoolMethodAxis,
  SchoolMethodStep,
  SchoolSectionIntro,
  SchoolStaffMember,
} from "./types";
export { defaultSchoolContent } from "./defaults";
export { formatCop } from "./format";

export const fetchSchoolContent = cache(async (): Promise<SchoolContent> => {
  const client = getSanityDataClient();
  if (!client) return defaultSchoolContent;
  try {
    const doc = await sanityFetch<SchoolDoc | null>(client, schoolQuery);
    return mergeSchool(doc);
  } catch (error) {
    console.error("[sanity] fetchSchoolContent failed", error);
    return defaultSchoolContent;
  }
});
