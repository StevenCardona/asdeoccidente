import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { emptyServicesContent } from "./defaults";
import { isServicesContentEmpty, mergeServices } from "./map";
import { servicesPageQuery, type ServicesPageDoc } from "./query";
import type { ServicesContent } from "./types";

export type {
  ServicesContent,
  ServicesDownload,
  ServicesFeeRow,
  ServicesHero,
  ServicesSection,
} from "./types";
export { emptyServicesContent, defaultServicesContent } from "./defaults";
export { isServicesContentEmpty } from "./map";
export { formatCop } from "@/features/school/models/format";

export const fetchServicesContent = cache(async (): Promise<ServicesContent> => {
  const client = getSanityDataClient();
  if (!client) return emptyServicesContent;
  try {
    const doc = await sanityFetch<ServicesPageDoc | null>(
      client,
      servicesPageQuery,
    );
    return mergeServices(doc);
  } catch (error) {
    console.error("[sanity] fetchServicesContent failed", error);
    return emptyServicesContent;
  }
});
