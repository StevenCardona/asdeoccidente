/**
 * Site-wide settings from Sanity `siteSettings` (contact, WhatsApp, ui chrome).
 * Used by SiteShell header / contact / footer. Empty shell when CMS unavailable.
 */
import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { emptySiteSettings } from "./defaults";
import { mergeSiteSettings } from "./map";
import { siteSettingsQuery, type SiteSettingsDoc } from "./query";
import type { SiteSettings } from "./types";

export type {
  SiteNavItem,
  SiteSettings,
  SiteUiChrome,
  WhatsappMessages,
  WhatsappTopic,
} from "./types";
export { emptySiteSettings } from "./defaults";

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const client = getSanityDataClient();
  if (!client) return emptySiteSettings;
  try {
    const doc = await sanityFetch<SiteSettingsDoc | null>(
      client,
      siteSettingsQuery,
    );
    return mergeSiteSettings(doc);
  } catch (error) {
    console.error("[sanity] getSiteSettings failed", error);
    return emptySiteSettings;
  }
});
