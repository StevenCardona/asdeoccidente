import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import {
  mapReviewItems,
  mapSectionIntro,
} from "@/shared/sanity/map-content";
import { emptyVenueContent } from "./defaults";
import type { VenuePageDoc } from "./query";
import type { VenueContent, VenueImage, VenueSpace } from "./types";

type ImageDoc = SanityImageSource & { alt?: string };

function mapImage(
  image: ImageDoc | null | undefined,
  altFallback: string,
): VenueImage | null {
  const resolved = resolveSanityImage(
    image ?? null,
    image?.alt,
    undefined,
    altFallback,
  );
  if (!resolved.src) return null;
  return { src: resolved.src, alt: resolved.alt || altFallback };
}

function mapSpaces(spaces: VenuePageDoc["spaces"]): VenueSpace[] {
  const result: VenueSpace[] = [];
  for (const space of spaces ?? []) {
    const title = space?.title?.trim();
    if (!title) continue;
    const highlights = (space?.highlights ?? [])
      .map((item) => item?.trim())
      .filter((item): item is string => Boolean(item));
    result.push({
      title,
      description: space?.description?.trim() || "",
      highlights,
      image: mapImage(space?.image, title),
      imagePosition:
        space?.imagePosition === "left" || space?.imagePosition === "right"
          ? space.imagePosition
          : result.length % 2 === 0
            ? "right"
            : "left",
    });
  }
  return result;
}

function mapPhotos(photos: ImageDoc[] | null | undefined): VenueImage[] {
  const result: VenueImage[] = [];
  for (const photo of photos ?? []) {
    const mapped = mapImage(photo, photo?.alt?.trim() || "");
    if (mapped) result.push(mapped);
  }
  return result;
}

export function mergeVenue(doc: VenuePageDoc | null): VenueContent {
  if (!doc) {
    return {
      ...emptyVenueContent,
      spaces: [],
      gallery: { intro: { ...emptyVenueContent.gallery.intro }, photos: [] },
      reviews: [],
    };
  }

  const heroImage = mapImage(
    doc.hero?.image,
    (doc.hero?.image as { alt?: string } | null | undefined)?.alt?.trim() || "",
  );
  const introParagraphs = (doc.intro?.paragraphs ?? [])
    .map((paragraph) => paragraph?.trim())
    .filter((paragraph): paragraph is string => Boolean(paragraph));

  return {
    hero: {
      badge: doc.hero?.badge?.trim() || "",
      title: doc.hero?.title?.trim() || "",
      subtitle: doc.hero?.subtitle?.trim() || "",
      primaryCtaLabel: doc.hero?.primaryCtaLabel?.trim() || "",
      image: heroImage?.src || "",
      imageAlt: heroImage?.alt || "",
      contactLine:
        doc.hero?.contactLine?.trim() ||
        doc.quote?.contactLine?.trim() ||
        "",
    },
    intro: {
      eyebrow: doc.intro?.eyebrow?.trim() || "",
      title: doc.intro?.title?.trim() || "",
      paragraphs: introParagraphs,
    },
    spaces: mapSpaces(doc.spaces),
    gallery: {
      intro: mapSectionIntro(doc.gallery?.intro),
      photos: mapPhotos(doc.gallery?.photos),
    },
    reviewsIntro: mapSectionIntro(doc.reviewsIntro),
    reviews: mapReviewItems(doc.reviews),
    seo: {
      title: doc.seo?.title?.trim() || "",
      description: doc.seo?.description?.trim() || "",
    },
  };
}

export function isVenueContentEmpty(content: VenueContent): boolean {
  return (
    !content.hero.title.trim() &&
    !content.hero.image &&
    content.spaces.length === 0 &&
    content.gallery.photos.length === 0
  );
}
