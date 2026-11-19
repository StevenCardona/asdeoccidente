import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import {
  mapReviewItems,
  mapSectionIntro,
} from "@/shared/sanity/map-content";
import { emptyMembershipContent } from "./defaults";
import type { MembershipPageDoc } from "./query";
import type {
  MembershipBenefit,
  MembershipContent,
  MembershipCostRow,
  MembershipImage,
  MembershipPillar,
} from "./types";

type ImageDoc = SanityImageSource & { alt?: string };

function mapImage(
  image: ImageDoc | null | undefined,
  altFallback: string,
): MembershipImage | null {
  const resolved = resolveSanityImage(
    image ?? null,
    image?.alt,
    undefined,
    altFallback,
  );
  if (!resolved.src) return null;
  return { src: resolved.src, alt: resolved.alt || altFallback };
}

function mapPhotos(
  photos: ImageDoc[] | null | undefined,
  altFallback: string,
): MembershipImage[] {
  const result: MembershipImage[] = [];
  for (const photo of photos ?? []) {
    const mapped = mapImage(photo, photo?.alt?.trim() || altFallback);
    if (mapped) result.push(mapped);
  }
  return result;
}

function mapBenefits(
  items: Array<{ title?: string; text?: string }> | null | undefined,
): MembershipBenefit[] {
  const result: MembershipBenefit[] = [];
  for (const item of items ?? []) {
    const title = item?.title?.trim();
    if (!title) continue;
    result.push({ title, text: item?.text?.trim() || "" });
  }
  return result;
}

function mapPillars(
  pillars: NonNullable<MembershipPageDoc["missionVision"]>["pillars"],
): MembershipPillar[] {
  const result: MembershipPillar[] = [];
  for (const pillar of pillars ?? []) {
    const title = pillar?.title?.trim();
    if (!title) continue;
    result.push({
      title,
      text: pillar?.text?.trim() || "",
      image: mapImage(pillar?.image, title),
    });
  }
  return result;
}

function mapCostRows(
  rows: NonNullable<MembershipPageDoc["costs"]>["rows"],
): MembershipCostRow[] {
  const result: MembershipCostRow[] = [];
  for (const row of rows ?? []) {
    const label = row?.label?.trim();
    if (!label) continue;
    result.push({
      label,
      cuotaDisplay: row?.cuotaDisplay?.trim() || "",
      valorDisplay: row?.valorDisplay?.trim() || "",
    });
  }
  return result;
}

export function mergeMembership(
  doc: MembershipPageDoc | null,
): MembershipContent {
  if (!doc) return emptyMembershipContent;

  const heroImage = mapImage(
    doc.hero?.image,
    (doc.hero?.image as { alt?: string } | null | undefined)?.alt?.trim() || "",
  );
  const aboutParagraphs = (doc.about?.paragraphs ?? [])
    .map((paragraph) => paragraph?.trim())
    .filter((paragraph): paragraph is string => Boolean(paragraph));
  const requirementItems = (doc.requirements?.items ?? [])
    .map((item) => item?.trim())
    .filter((item): item is string => Boolean(item));

  return {
    hero: {
      title: doc.hero?.title?.trim() || "",
      subtitle: doc.hero?.subtitle?.trim() || "",
      primaryCtaLabel: doc.hero?.primaryCtaLabel?.trim() || "",
      image: heroImage?.src || "",
      imageAlt: heroImage?.alt || "",
    },
    about: {
      eyebrow: doc.about?.eyebrow?.trim() || "",
      title: doc.about?.title?.trim() || "",
      paragraphs: aboutParagraphs,
      photos: mapPhotos(doc.about?.photos, ""),
    },
    missionVision: {
      pillars: mapPillars(doc.missionVision?.pillars),
    },
    memberBenefits: {
      intro: mapSectionIntro(doc.memberBenefits?.intro),
      items: mapBenefits(doc.memberBenefits?.items),
      gallery: {
        intro: mapSectionIntro(doc.memberBenefits?.gallery?.intro),
        photos: mapPhotos(doc.memberBenefits?.gallery?.photos, ""),
      },
    },
    affiliateBenefits: {
      intro: mapSectionIntro(doc.affiliateBenefits?.intro),
      items: mapBenefits(doc.affiliateBenefits?.items),
    },
    costs: {
      intro: mapSectionIntro(doc.costs?.intro),
      rows: mapCostRows(doc.costs?.rows),
    },
    requirements: {
      intro: mapSectionIntro(doc.requirements?.intro),
      items: requirementItems,
      formatLabel: doc.requirements?.formatLabel?.trim() || "",
      formatFileUrl: doc.requirements?.formatFileUrl?.trim() || "",
    },
    reviewsIntro: mapSectionIntro(doc.reviewsIntro),
    reviews: mapReviewItems(doc.reviews),
    seo: {
      title: doc.seo?.title?.trim() || "",
      description: doc.seo?.description?.trim() || "",
    },
  };
}

export function isMembershipContentEmpty(content: MembershipContent): boolean {
  return (
    !content.hero.title.trim() &&
    !content.hero.image &&
    content.memberBenefits.items.length === 0 &&
    content.about.paragraphs.length === 0
  );
}
