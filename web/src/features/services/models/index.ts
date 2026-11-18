import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { mergeServices } from "./map";
import { servicesPageQuery, type ServicesPageDoc } from "./query";
import type { ServicesContent } from "./types";

export type {
  ServicesContent,
  ServicesDownload,
  ServicesFeeRow,
  ServicesSection,
  ServicesSectionIntro,
} from "./types";
export { defaultServicesContent } from "./defaults";
export { formatCop } from "@/features/school/models/format";

export const fetchServicesContent = cache(async (): Promise<ServicesContent> => {
  // Prefer code seed until Studio publishes at least one section; then Sanity wins.
  const client = getSanityDataClient();
  if (!client) return mergeServices(null);
  try {
    const doc = await sanityFetch<ServicesPageDoc | null>(
      client,
      servicesPageQuery,
    );
    return mergeServices(doc);
  } catch (error) {
    console.error("[sanity] fetchServicesContent failed", error);
    return mergeServices(null);
  }
});
