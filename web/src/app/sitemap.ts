import type { MetadataRoute } from "next";
import { siteConfig } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const lastModified = new Date();
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
    // /fairs omitted while placeholder (noindex) — add when fairs content ships
  ];
}
