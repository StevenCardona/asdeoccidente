import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import {
  mapReviewItems,
  mapSectionIntro,
} from "@/shared/sanity/map-content";
import { emptyEquinotherapyContent } from "./defaults";
import type { EquinotherapyPageDoc } from "./query";
import type {
  EquinotherapyContent,
  EquinotherapyFaqItem,
  EquinotherapyImage,
  EquinotherapyStory,
} from "./types";

type ImageDoc = SanityImageSource & { alt?: string };

function mapImage(
  image: ImageDoc | null | undefined,
  altFallback: string,
): EquinotherapyImage | null {
  const resolved = resolveSanityImage(
    image ?? null,
    image?.alt,
    undefined,
    altFallback,
  );
  if (!resolved.src) return null;
  return { src: resolved.src, alt: resolved.alt || altFallback };
}

function mapParagraphs(paragraphs: string[] | null | undefined): string[] {
  return (paragraphs ?? [])
    .map((paragraph) => paragraph?.trim())
    .filter((paragraph): paragraph is string => Boolean(paragraph));
}

function mapBenefits(benefits: string[] | null | undefined): string[] {
  return (benefits ?? [])
    .map((item) => item?.trim())
    .filter((item): item is string => Boolean(item));
}

function mapStory(
  story: EquinotherapyPageDoc["storyIntro"],
  defaultPosition: "left" | "right",
  includeBenefits: boolean,
): EquinotherapyStory {
  const position =
    story?.imagePosition === "left" || story?.imagePosition === "right"
      ? story.imagePosition
      : defaultPosition;

  return {
    eyebrow: story?.eyebrow?.trim() || "",
    title: story?.title?.trim() || "",
    paragraphs: mapParagraphs(story?.paragraphs),
    benefits: includeBenefits ? mapBenefits(story?.benefits) : [],
    image: mapImage(story?.image, story?.title?.trim() || ""),
    imagePosition: position,
  };
}

function mapPhotos(
  photos: ImageDoc[] | null | undefined,
): EquinotherapyImage[] {
  const result: EquinotherapyImage[] = [];
  for (const photo of photos ?? []) {
    const mapped = mapImage(photo, photo?.alt?.trim() || "");
    if (mapped) result.push(mapped);
  }
  return result;
}

function mapFaqItems(
  items: Array<{ question?: string; answer?: string }> | null | undefined,
): EquinotherapyFaqItem[] {
  const result: EquinotherapyFaqItem[] = [];
  for (const item of items ?? []) {
    const question = item?.question?.trim();
    const answer = item?.answer?.trim();
    if (!question || !answer) continue;
    result.push({ question, answer });
  }
  return result;
}

export function mergeEquinotherapy(
  doc: EquinotherapyPageDoc | null,
): EquinotherapyContent {
  if (!doc) return emptyEquinotherapyContent;

  const heroImage = mapImage(
    doc.hero?.image,
    (doc.hero?.image as { alt?: string } | null | undefined)?.alt?.trim() || "",
  );

  return {
    hero: {
      badge: doc.hero?.badge?.trim() || "",
      title: doc.hero?.title?.trim() || "",
      subtitle: doc.hero?.subtitle?.trim() || "",
      primaryCtaLabel: doc.hero?.primaryCtaLabel?.trim() || "",
      image: heroImage?.src || "",
      imageAlt: heroImage?.alt || "",
    },
    storyIntro: mapStory(doc.storyIntro, "right", false),
    gallery: {
      intro: mapSectionIntro(doc.gallery?.intro),
      photos: mapPhotos(doc.gallery?.photos),
    },
    storyBenefits: mapStory(doc.storyBenefits, "left", true),
    reviewsIntro: mapSectionIntro(doc.reviewsIntro),
    reviews: mapReviewItems(doc.reviews),
    faq: {
      eyebrow: doc.faq?.intro?.eyebrow?.trim() || "",
      title: doc.faq?.intro?.title?.trim() || "",
      subtitle: doc.faq?.intro?.subtitle?.trim() || "",
      items: mapFaqItems(doc.faq?.items),
    },
    seo: {
      title: doc.seo?.title?.trim() || "",
      description: doc.seo?.description?.trim() || "",
    },
  };
}

export function isEquinotherapyContentEmpty(
  content: EquinotherapyContent,
): boolean {
  return (
    !content.hero.title.trim() &&
    !content.hero.image &&
    content.storyIntro.paragraphs.length === 0 &&
    content.gallery.photos.length === 0
  );
}
