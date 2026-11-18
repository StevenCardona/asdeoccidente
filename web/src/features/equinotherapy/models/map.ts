import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import { defaultEquinotherapyContent } from "./defaults";
import type { EquinotherapyPageDoc } from "./query";
import type {
  EquinotherapyContent,
  EquinotherapyFaqItem,
  EquinotherapyImage,
  EquinotherapyReview,
  EquinotherapySectionIntro,
  EquinotherapyStory,
} from "./types";

type ImageDoc = SanityImageSource & { alt?: string };

function mapImage(
  image: ImageDoc | null | undefined,
  altFallback: string,
  fallbackSrc?: string,
): EquinotherapyImage | null {
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
  intro:
    | { eyebrow?: string; title?: string; subtitle?: string }
    | null
    | undefined,
  fallback: EquinotherapySectionIntro,
): EquinotherapySectionIntro {
  return {
    eyebrow: intro?.eyebrow?.trim() || fallback.eyebrow,
    title: intro?.title?.trim() || fallback.title,
    subtitle: intro?.subtitle?.trim() || fallback.subtitle,
  };
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
  fallback: EquinotherapyStory,
  defaultPosition: "left" | "right",
  options?: { includeBenefits?: boolean },
): EquinotherapyStory {
  const paragraphs = mapParagraphs(story?.paragraphs);
  const includeBenefits = options?.includeBenefits === true;
  const benefits = includeBenefits
    ? mapBenefits(story?.benefits)
    : [];
  const image =
    mapImage(
      story?.image,
      fallback.image?.alt || fallback.title,
      fallback.image?.src,
    ) ?? fallback.image;

  const position =
    story?.imagePosition === "left" || story?.imagePosition === "right"
      ? story.imagePosition
      : fallback.imagePosition || defaultPosition;

  return {
    eyebrow: story?.eyebrow?.trim() || fallback.eyebrow,
    title: story?.title?.trim() || fallback.title,
    paragraphs: paragraphs.length > 0 ? paragraphs : [...fallback.paragraphs],
    benefits: includeBenefits
      ? benefits.length > 0
        ? benefits
        : [...fallback.benefits]
      : [],
    image,
    imagePosition: position,
  };
}

function mapPhotos(
  photos: ImageDoc[] | null | undefined,
): EquinotherapyImage[] {
  const result: EquinotherapyImage[] = [];
  for (const photo of photos ?? []) {
    const mapped = mapImage(
      photo,
      photo?.alt?.trim() || "Foto de equinoterapia",
    );
    if (mapped) result.push(mapped);
  }
  return result;
}

function mapReviews(
  reviews: EquinotherapyPageDoc["reviews"],
): EquinotherapyReview[] {
  const result: EquinotherapyReview[] = [];
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

function mapFaqItems(
  items:
    | Array<{ question?: string; answer?: string }>
    | null
    | undefined,
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

function cloneDefaults(): EquinotherapyContent {
  const d = defaultEquinotherapyContent;
  return {
    ...d,
    hero: { ...d.hero },
    storyIntro: {
      ...d.storyIntro,
      paragraphs: [...d.storyIntro.paragraphs],
      benefits: [...d.storyIntro.benefits],
      image: d.storyIntro.image ? { ...d.storyIntro.image } : null,
    },
    gallery: {
      intro: { ...d.gallery.intro },
      photos: d.gallery.photos.map((photo) => ({ ...photo })),
    },
    storyBenefits: {
      ...d.storyBenefits,
      paragraphs: [...d.storyBenefits.paragraphs],
      benefits: [...d.storyBenefits.benefits],
      image: d.storyBenefits.image ? { ...d.storyBenefits.image } : null,
    },
    reviewsIntro: { ...d.reviewsIntro },
    reviews: d.reviews.map((review) => ({ ...review })),
    faq: {
      eyebrow: d.faq.eyebrow,
      title: d.faq.title,
      subtitle: d.faq.subtitle,
      items: d.faq.items.map((item) => ({ ...item })),
    },
    seo: { ...d.seo },
  };
}

/** Prefer code seed until Studio publishes at least one intro paragraph. */
export function mergeEquinotherapy(
  doc: EquinotherapyPageDoc | null,
): EquinotherapyContent {
  if (!doc) return cloneDefaults();

  const introParagraphs = mapParagraphs(doc.storyIntro?.paragraphs);
  if (introParagraphs.length === 0) return cloneDefaults();

  const defaults = defaultEquinotherapyContent;
  const heroImage = mapImage(
    doc.hero?.image,
    defaults.hero.imageAlt,
    defaults.hero.image,
  );

  const galleryPhotos = mapPhotos(doc.gallery?.photos);
  const reviews = mapReviews(doc.reviews);
  const faqItems = mapFaqItems(doc.faq?.items);

  return {
    hero: {
      badge: doc.hero?.badge?.trim() || defaults.hero.badge,
      title: doc.hero?.title?.trim() || defaults.hero.title,
      subtitle: doc.hero?.subtitle?.trim() || defaults.hero.subtitle,
      primaryCtaLabel:
        doc.hero?.primaryCtaLabel?.trim() || defaults.hero.primaryCtaLabel,
      image: heroImage?.src || defaults.hero.image,
      imageAlt: heroImage?.alt || defaults.hero.imageAlt,
    },
    storyIntro: mapStory(doc.storyIntro, defaults.storyIntro, "right"),
    gallery: {
      intro: mapIntro(doc.gallery?.intro, defaults.gallery.intro),
      photos:
        galleryPhotos.length > 0
          ? galleryPhotos
          : defaults.gallery.photos.map((photo) => ({ ...photo })),
    },
    storyBenefits: mapStory(
      doc.storyBenefits,
      defaults.storyBenefits,
      "left",
      { includeBenefits: true },
    ),
    reviewsIntro: mapIntro(doc.reviewsIntro, defaults.reviewsIntro),
    reviews:
      reviews.length > 0
        ? reviews
        : defaults.reviews.map((review) => ({ ...review })),
    faq: {
      eyebrow: doc.faq?.intro?.eyebrow?.trim() || defaults.faq.eyebrow,
      title: doc.faq?.intro?.title?.trim() || defaults.faq.title,
      subtitle: doc.faq?.intro?.subtitle?.trim() || defaults.faq.subtitle,
      items:
        faqItems.length > 0
          ? faqItems
          : defaults.faq.items.map((item) => ({ ...item })),
    },
    seo: {
      title: doc.seo?.title?.trim() || defaults.seo.title,
      description: doc.seo?.description?.trim() || defaults.seo.description,
    },
  };
}
