import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import { emptySchoolContent } from "./defaults";
import type { SchoolDoc } from "./query";
import type {
  SchoolContent,
  SchoolFeePlan,
  SchoolGalleryTile,
  SchoolHorse,
  SchoolMethodAxis,
  SchoolStaffMember,
} from "./types";

const AXIS_ICONS = new Set(["Scale", "Compass", "Focus", "Dumbbell"]);
const TILE_SPANS = new Set(["large", "tall", "wide", "small"]);

function text(value: string | undefined): string {
  return value?.trim() || "";
}

export function mergeSchool(doc: SchoolDoc | null): SchoolContent {
  if (!doc) return { ...emptySchoolContent };

  const heroImage = resolveSanityImage(
    doc.hero?.image as SanityImageSource | null | undefined,
    doc.hero?.imageAlt,
  );
  const methodImage = resolveSanityImage(
    doc.method?.image as SanityImageSource | null | undefined,
    doc.method?.imageAlt,
  );

  const axes: SchoolMethodAxis[] = [];
  for (const axis of doc.method?.axes ?? []) {
    if (!axis?.title?.trim()) continue;
    const icon =
      axis.icon && AXIS_ICONS.has(axis.icon)
        ? (axis.icon as SchoolMethodAxis["icon"])
        : "Scale";
    axes.push({
      title: axis.title.trim(),
      text: text(axis.text),
      icon,
    });
  }

  const horses: SchoolHorse[] = [];
  for (const item of doc.horses?.items ?? []) {
    if (!item?.name?.trim()) continue;
    const image = resolveSanityImage(
      item.image as SanityImageSource | null | undefined,
      item.imageAlt,
      undefined,
      item.name,
    );
    if (!image.src) continue;
    horses.push({
      name: item.name.trim(),
      gait: text(item.gait),
      blurb: text(item.blurb),
      image: image.src,
      imageAlt: image.alt,
    });
  }

  const tiles: SchoolGalleryTile[] = [];
  for (const tile of doc.gallery?.tiles ?? []) {
    if (!tile?.title?.trim()) continue;
    const image = resolveSanityImage(
      tile.image as SanityImageSource | null | undefined,
      tile.imageAlt,
      undefined,
      tile.title,
    );
    if (!image.src) continue;
    const span =
      tile.span && TILE_SPANS.has(tile.span)
        ? (tile.span as SchoolGalleryTile["span"])
        : "small";
    tiles.push({
      badge: text(tile.badge),
      title: tile.title.trim(),
      subtitle: text(tile.subtitle),
      image: image.src,
      imageAlt: image.alt,
      span,
    });
  }

  const members: SchoolStaffMember[] = [];
  for (const member of doc.staff?.members ?? []) {
    if (!member?.name?.trim()) continue;
    const image = resolveSanityImage(
      member.image as SanityImageSource | null | undefined,
      member.imageAlt,
      undefined,
      member.name,
    );
    if (!image.src) continue;
    members.push({
      name: member.name.trim(),
      role: text(member.role),
      badge: text(member.badge),
      bio: text(member.bio),
      image: image.src,
      imageAlt: image.alt,
    });
  }

  const plans: SchoolFeePlan[] = [];
  for (const plan of doc.fees?.plans ?? []) {
    if (!plan?.id?.trim() || !plan.title?.trim()) continue;
    plans.push({
      id: plan.id.trim(),
      classCount: plan.classCount ?? 1,
      packageLabel: text(plan.packageLabel),
      title: plan.title.trim(),
      description: text(plan.description),
      prices: {
        socio: plan.priceSocio ?? 0,
        noSocio: plan.priceNoSocio ?? 0,
        hijoMontador: plan.priceHijoMontador ?? 0,
      },
      featured: plan.featured ?? false,
      ctaLabel: text(plan.ctaLabel),
    });
  }

  const faqItems =
    doc.faq?.items
      ?.filter((item) => item?.question?.trim() && item?.answer?.trim())
      .map((item) => ({
        question: item!.question!.trim(),
        answer: item!.answer!.trim(),
      })) ?? [];

  const steps =
    doc.method?.steps
      ?.filter((step) => step?.title?.trim())
      .map((step) => ({
        title: step!.title!.trim(),
        text: text(step!.text),
      })) ?? [];

  return {
    hero: {
      badge: text(doc.hero?.badge),
      title: text(doc.hero?.title),
      subtitle: text(doc.hero?.subtitle),
      primaryCtaLabel: text(doc.hero?.primaryCtaLabel),
      secondaryCtaLabel: text(doc.hero?.secondaryCtaLabel),
      image: heroImage.src || "",
      imageAlt: heroImage.alt,
    },
    method: {
      eyebrow: text(doc.method?.intro?.eyebrow),
      title: text(doc.method?.intro?.title),
      subtitle: text(doc.method?.intro?.subtitle),
      image: methodImage.src || "",
      imageAlt: methodImage.alt,
      steps,
      axes,
    },
    horses: {
      eyebrow: text(doc.horses?.intro?.eyebrow),
      title: text(doc.horses?.intro?.title),
      subtitle: text(doc.horses?.intro?.subtitle),
      items: horses,
    },
    gallery: {
      eyebrow: text(doc.gallery?.intro?.eyebrow),
      title: text(doc.gallery?.intro?.title),
      subtitle: text(doc.gallery?.intro?.subtitle),
      tiles,
    },
    staff: {
      eyebrow: text(doc.staff?.intro?.eyebrow),
      title: text(doc.staff?.intro?.title),
      subtitle: text(doc.staff?.intro?.subtitle),
      members,
    },
    fees: {
      eyebrow: text(doc.fees?.intro?.eyebrow),
      title: text(doc.fees?.intro?.title),
      subtitle: text(doc.fees?.intro?.subtitle),
      plans,
      enrollmentNote: text(doc.fees?.enrollmentNote),
      benefitsNote: text(doc.fees?.benefitsNote),
    },
    faq: {
      eyebrow: text(doc.faq?.intro?.eyebrow),
      title: text(doc.faq?.intro?.title),
      subtitle: text(doc.faq?.intro?.subtitle),
      items: faqItems,
    },
    seo: {
      title: text(doc.seo?.title),
      description: text(doc.seo?.description),
    },
  };
}

export function isSchoolContentEmpty(content: SchoolContent): boolean {
  return (
    !content.hero.title.trim() &&
    !content.hero.image &&
    content.method.steps.length === 0 &&
    content.horses.items.length === 0 &&
    content.gallery.tiles.length === 0 &&
    content.staff.members.length === 0 &&
    content.fees.plans.length === 0 &&
    content.faq.items.length === 0
  );
}
