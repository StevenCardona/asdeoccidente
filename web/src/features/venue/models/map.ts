import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import { defaultVenueContent } from "./defaults";
import type { VenuePageDoc } from "./query";
import type {
  VenueContent,
  VenueImage,
  VenueReview,
  VenueSectionIntro,
  VenueSpace,
} from "./types";

type ImageDoc = SanityImageSource & { alt?: string };

function mapImage(
  image: ImageDoc | null | undefined,
  altFallback: string,
  fallbackSrc?: string,
): VenueImage | null {
  const resolved = resolveSanityImage(
    image ?? null,
    image?.alt,
    fallbackSrc,
    altFallback,
  );
  if (!resolved.src) return null;
  return { src: resolved.src, alt: resolved.alt || altFallback };
}

function mapIntro(
  intro: { eyebrow?: string; title?: string; subtitle?: string } | null | undefined,
  fallback: VenueSectionIntro,
): VenueSectionIntro {
  return {
    eyebrow: intro?.eyebrow?.trim() || fallback.eyebrow,
    title: intro?.title?.trim() || fallback.title,
    subtitle: intro?.subtitle?.trim() || fallback.subtitle,
  };
}

function mapSpaces(
  spaces: VenuePageDoc["spaces"],
): VenueSpace[] {
  const result: VenueSpace[] = [];
  for (const space of spaces ?? []) {
    const title = space?.title?.trim();
    if (!title) continue;
    const highlights = (space?.highlights ?? [])
      .map((item) => item?.trim())
      .filter((item): item is string => Boolean(item));
    const image = mapImage(space?.image, title);
    result.push({
      title,
      description: space?.description?.trim() || "",
      highlights,
      image,
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

function mapPhotos(
  photos: ImageDoc[] | null | undefined,
): VenueImage[] {
  const result: VenueImage[] = [];
  for (const photo of photos ?? []) {
    const mapped = mapImage(photo, photo?.alt?.trim() || "Foto de la sede");
    if (mapped) result.push(mapped);
  }
  return result;
}

function mapReviews(
  reviews: VenuePageDoc["reviews"],
): VenueReview[] {
  const result: VenueReview[] = [];
  for (const review of reviews ?? []) {
    const name = review?.name?.trim();
    const text = review?.text?.trim();
    if (!name || !text) continue;
    const rating =
      typeof review?.rating === "number" && Number.isFinite(review.rating)
        ? Math.min(5, Math.max(1, Math.round(review.rating)))
        : 5;
    result.push({
      name,
      place: review?.place?.trim() || "",
      rating,
      text,
    });
  }
  return result;
}

function cloneDefaults(): VenueContent {
  return {
    ...defaultVenueContent,
    hero: { ...defaultVenueContent.hero },
    intro: {
      ...defaultVenueContent.intro,
      paragraphs: [...defaultVenueContent.intro.paragraphs],
    },
    spaces: defaultVenueContent.spaces.map((space) => ({
      ...space,
      highlights: [...space.highlights],
      image: space.image ? { ...space.image } : null,
    })),
    gallery: {
      intro: { ...defaultVenueContent.gallery.intro },
      photos: defaultVenueContent.gallery.photos.map((photo) => ({ ...photo })),
    },
    reviewsIntro: { ...defaultVenueContent.reviewsIntro },
    reviews: defaultVenueContent.reviews.map((review) => ({ ...review })),
    seo: { ...defaultVenueContent.seo },
  };
}

/** Prefer code seed until Studio publishes at least one titled space. */
export function mergeVenue(doc: VenuePageDoc | null): VenueContent {
  if (!doc) return cloneDefaults();

  const spaces = mapSpaces(doc.spaces);
  if (spaces.length === 0) return cloneDefaults();

  const defaults = defaultVenueContent;
  const heroImage = mapImage(
    doc.hero?.image,
    defaults.hero.imageAlt,
    defaults.hero.image,
  );

  const galleryPhotos = mapPhotos(doc.gallery?.photos);
  const reviews = mapReviews(doc.reviews);

  const introParagraphs = (doc.intro?.paragraphs ?? [])
    .map((paragraph) => paragraph?.trim())
    .filter((paragraph): paragraph is string => Boolean(paragraph));

  const contactLine =
    doc.hero?.contactLine?.trim() ||
    doc.quote?.contactLine?.trim() ||
    defaults.hero.contactLine;

  return {
    hero: {
      badge: doc.hero?.badge?.trim() || defaults.hero.badge,
      title: doc.hero?.title?.trim() || defaults.hero.title,
      subtitle: doc.hero?.subtitle?.trim() || defaults.hero.subtitle,
      primaryCtaLabel:
        doc.hero?.primaryCtaLabel?.trim() || defaults.hero.primaryCtaLabel,
      image: heroImage?.src || defaults.hero.image,
      imageAlt: heroImage?.alt || defaults.hero.imageAlt,
      contactLine,
    },
    intro: {
      eyebrow: doc.intro?.eyebrow?.trim() || defaults.intro.eyebrow,
      title: doc.intro?.title?.trim() || defaults.intro.title,
      paragraphs:
        introParagraphs.length > 0
          ? introParagraphs
          : [...defaults.intro.paragraphs],
    },
    spaces,
    gallery: {
      intro: mapIntro(doc.gallery?.intro, defaults.gallery.intro),
      photos:
        galleryPhotos.length > 0
          ? galleryPhotos
          : defaults.gallery.photos.map((photo) => ({ ...photo })),
    },
    reviewsIntro: mapIntro(doc.reviewsIntro, defaults.reviewsIntro),
    reviews:
      reviews.length > 0
        ? reviews
        : defaults.reviews.map((review) => ({ ...review })),
    seo: {
      title: doc.seo?.title?.trim() || defaults.seo.title,
      description: doc.seo?.description?.trim() || defaults.seo.description,
    },
  };
}
