import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { defaultSiteSettings } from "./defaults";
import { mergeSiteSettings } from "./map";
import { siteSettingsQuery, type SiteSettingsDoc } from "./query";
import type { SiteSettings } from "./types";

export type { SiteSettings, WhatsappMessages, WhatsappTopic } from "./types";
export { defaultSiteSettings } from "./defaults";

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const client = getSanityDataClient();
  if (!client) return defaultSiteSettings;
  try {
    const doc = await sanityFetch<SiteSettingsDoc | null>(
      client,
      siteSettingsQuery,
    );
    return mergeSiteSettings(doc);
  } catch (error) {
    console.error("[sanity] getSiteSettings failed", error);
    return defaultSiteSettings;
  }
});
