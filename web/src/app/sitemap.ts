import type { MetadataRoute } from "next";
import { getFairSlugs } from "@/features/fairs/models";
import { siteConfig } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const lastModified = new Date();
  const fairEntries = getFairSlugs().map((slug) => ({
    url: `${base}/fairs/${slug}`,
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
      url: `${base}/fairs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...fairEntries,
  ];
}
