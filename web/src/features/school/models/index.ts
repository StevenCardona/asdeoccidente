import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { emptySchoolContent } from "./defaults";
import { isSchoolContentEmpty, mergeSchool } from "./map";
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
export { emptySchoolContent } from "./defaults";
export { isSchoolContentEmpty } from "./map";
export { formatCop } from "./format";

export const fetchSchoolContent = cache(async (): Promise<SchoolContent> => {
  const client = getSanityDataClient();
  if (!client) return emptySchoolContent;
  try {
    const doc = await sanityFetch<SchoolDoc | null>(client, schoolQuery);
    return mergeSchool(doc);
  } catch (error) {
    console.error("[sanity] fetchSchoolContent failed", error);
    return emptySchoolContent;
  }
});
