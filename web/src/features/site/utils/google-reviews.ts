import type { SiteSettings } from "@/features/site/models";

/** True when Google rating or review count is published in siteSettings. */
export function hasGoogleReviews(settings: SiteSettings): boolean {
  return Boolean(
    settings.google.rating.trim() || settings.google.reviewCount.trim(),
  );
}
