import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { defaultServicesContent } from "./defaults";
import { mergeServices } from "./map";
import { servicesPageQuery, type ServicesPageDoc } from "./query";
import type { ServicesContent } from "./types";

export type {
  ServicesContent,
  ServicesDownload,
  ServicesFeeRow,
  ServicesHelp,
  ServicesSection,
  ServicesSectionIntro,
} from "./types";
export { defaultServicesContent, REGISTROS_WHATSAPP_TEXT } from "./defaults";
export { formatCop } from "@/features/school/models/format";

export const fetchServicesContent = cache(async (): Promise<ServicesContent> => {
  // Layout phase: prefer static old-site seed. If Studio later publishes sections, merge wins.
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
