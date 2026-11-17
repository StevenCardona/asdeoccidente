import type { MetadataRoute } from "next";
import { fetchEventSlugs } from "@/features/events/models";
import { siteConfig } from "@/shared/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.siteUrl;
  const lastModified = new Date();
  const eventSlugs = await fetchEventSlugs();
  const eventEntries = eventSlugs.map((slug) => ({
    url: `${base}/events/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/school`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/events`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...eventEntries,
  ];
}
