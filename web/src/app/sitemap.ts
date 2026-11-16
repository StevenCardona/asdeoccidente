import type { MetadataRoute } from "next";
import { siteConfig } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/school`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/fairs`, changeFrequency: "daily", priority: 0.9 },
  ];
}
