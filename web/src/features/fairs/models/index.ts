import { defaultFairsContent } from "./defaults";
import type { Fair, FairsContent } from "./types";

export type {
  Fair,
  FairDetailGallerySection,
  FairDetailInfoSection,
  FairDetailPricesSection,
  FairDetailSection,
  FairFaqItem,
  FairImage,
  FairInfoCta,
  FairInfoCtaNote,
  FairInput,
  FairKind,
  FairReview,
  FairSession,
  FairStatus,
  FairsContent,
  FairsListContent,
} from "./types";

export {
  fairKindLabel,
  fairStatusLabel,
  formatFairDateRange,
  formatFairMonthYear,
  formatUpdatedAt,
  getFeaturedFair,
  kindsPresent,
  resolveFairStatus,
  sortFairsByStart,
} from "./format";

export {
  DEFAULT_FAIR_GALLERY,
  DEFAULT_FAIR_TICKET_NOTES,
  fairHasTicketPrices,
  normalizeFair,
  resolveDetailSections,
} from "./normalize";

export { defaultFairsContent } from "./defaults";

/** Phase A: static content only (Sanity deferred). */
export function getFairsContent(): FairsContent {
  return defaultFairsContent;
}

export function getFairBySlug(slug: string): Fair | null {
  return (
    defaultFairsContent.fairs.find((fair) => fair.slug === slug) ?? null
  );
}

export function getFairSlugs(): string[] {
  return defaultFairsContent.fairs.map((fair) => fair.slug);
}
