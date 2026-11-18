import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import { defaultMembershipContent } from "./defaults";
import type { MembershipPageDoc } from "./query";
import type {
  MembershipBenefit,
  MembershipContent,
  MembershipCostRow,
  MembershipImage,
  MembershipPillar,
  MembershipReview,
  MembershipSectionIntro,
} from "./types";

type ImageDoc = SanityImageSource & { alt?: string };

function mapImage(
  image: ImageDoc | null | undefined,
  altFallback: string,
  fallbackSrc?: string,
): MembershipImage | null {
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
  fallback: MembershipSectionIntro,
): MembershipSectionIntro {
  return {
    eyebrow: intro?.eyebrow?.trim() || fallback.eyebrow,
    title: intro?.title?.trim() || fallback.title,
    subtitle: intro?.subtitle?.trim() || fallback.subtitle,
  };
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
    result.push({
      title,
      text: item?.text?.trim() || "",
    });
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
      cuotaDisplay: row?.cuotaDisplay?.trim() || "—",
      valorDisplay: row?.valorDisplay?.trim() || "—",
    });
  }
  return result;
}

function mapReviews(
  reviews: MembershipPageDoc["reviews"],
): MembershipReview[] {
  const result: MembershipReview[] = [];
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

function cloneDefaults(): MembershipContent {
  const d = defaultMembershipContent;
  return {
    ...d,
    hero: { ...d.hero },
    about: {
      ...d.about,
      paragraphs: [...d.about.paragraphs],
      photos: d.about.photos.map((photo) => ({ ...photo })),
    },
    missionVision: {
      pillars: d.missionVision.pillars.map((pillar) => ({
        ...pillar,
        image: pillar.image ? { ...pillar.image } : null,
      })),
    },
    memberBenefits: {
      intro: { ...d.memberBenefits.intro },
      items: d.memberBenefits.items.map((item) => ({ ...item })),
      gallery: {
        intro: { ...d.memberBenefits.gallery.intro },
        photos: d.memberBenefits.gallery.photos.map((photo) => ({ ...photo })),
      },
    },
    affiliateBenefits: {
      intro: { ...d.affiliateBenefits.intro },
      items: d.affiliateBenefits.items.map((item) => ({ ...item })),
    },
    costs: {
      intro: { ...d.costs.intro },
      rows: d.costs.rows.map((row) => ({ ...row })),
    },
    requirements: {
      ...d.requirements,
      intro: { ...d.requirements.intro },
      items: [...d.requirements.items],
    },
    reviewsIntro: { ...d.reviewsIntro },
    reviews: d.reviews.map((review) => ({ ...review })),
    seo: { ...d.seo },
  };
}

/** Prefer code seed until Studio publishes at least one benefit title. */
export function mergeMembership(doc: MembershipPageDoc | null): MembershipContent {
  if (!doc) return cloneDefaults();

  const memberItems = mapBenefits(doc.memberBenefits?.items);
  if (memberItems.length === 0) return cloneDefaults();

  const defaults = defaultMembershipContent;
  const heroImage = mapImage(
    doc.hero?.image,
    defaults.hero.imageAlt,
    defaults.hero.image,
  );

  const aboutParagraphs = (doc.about?.paragraphs ?? [])
    .map((paragraph) => paragraph?.trim())
    .filter((paragraph): paragraph is string => Boolean(paragraph));

  const aboutPhotos = mapPhotos(doc.about?.photos, "Foto Asdeoccidente");
  const pillars = mapPillars(doc.missionVision?.pillars);
  const affiliateItems = mapBenefits(doc.affiliateBenefits?.items);
  const costRows = mapCostRows(doc.costs?.rows);
  const galleryPhotos = mapPhotos(
    doc.memberBenefits?.gallery?.photos,
    "Foto de la asociación",
  );
  const requirementItems = (doc.requirements?.items ?? [])
    .map((item) => item?.trim())
    .filter((item): item is string => Boolean(item));
  const reviews = mapReviews(doc.reviews);

  return {
    hero: {
      title: doc.hero?.title?.trim() || defaults.hero.title,
      subtitle: doc.hero?.subtitle?.trim() || defaults.hero.subtitle,
      primaryCtaLabel:
        doc.hero?.primaryCtaLabel?.trim() || defaults.hero.primaryCtaLabel,
      image: heroImage?.src || defaults.hero.image,
      imageAlt: heroImage?.alt || defaults.hero.imageAlt,
    },
    about: {
      eyebrow: doc.about?.eyebrow?.trim() || defaults.about.eyebrow,
      title: doc.about?.title?.trim() || defaults.about.title,
      paragraphs:
        aboutParagraphs.length > 0
          ? aboutParagraphs
          : [...defaults.about.paragraphs],
      photos:
        aboutPhotos.length > 0
          ? aboutPhotos
          : defaults.about.photos.map((photo) => ({ ...photo })),
    },
    missionVision: {
      pillars:
        pillars.length > 0
          ? pillars
          : defaults.missionVision.pillars.map((pillar) => ({
              ...pillar,
              image: pillar.image ? { ...pillar.image } : null,
            })),
    },
    memberBenefits: {
      intro: mapIntro(doc.memberBenefits?.intro, defaults.memberBenefits.intro),
      items: memberItems,
      gallery: {
        intro: mapIntro(
          doc.memberBenefits?.gallery?.intro,
          defaults.memberBenefits.gallery.intro,
        ),
        photos:
          galleryPhotos.length > 0
            ? galleryPhotos
            : defaults.memberBenefits.gallery.photos.map((photo) => ({
                ...photo,
              })),
      },
    },
    affiliateBenefits: {
      intro: mapIntro(
        doc.affiliateBenefits?.intro,
        defaults.affiliateBenefits.intro,
      ),
      items:
        affiliateItems.length > 0
          ? affiliateItems
          : defaults.affiliateBenefits.items.map((item) => ({ ...item })),
    },
    costs: {
      intro: mapIntro(doc.costs?.intro, defaults.costs.intro),
      rows:
        costRows.length > 0
          ? costRows
          : defaults.costs.rows.map((row) => ({ ...row })),
    },
    requirements: {
      intro: mapIntro(doc.requirements?.intro, defaults.requirements.intro),
      items:
        requirementItems.length > 0
          ? requirementItems
          : [...defaults.requirements.items],
      formatLabel:
        doc.requirements?.formatLabel?.trim() ||
        defaults.requirements.formatLabel,
      formatFileUrl:
        doc.requirements?.formatFileUrl?.trim() ||
        defaults.requirements.formatFileUrl,
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
