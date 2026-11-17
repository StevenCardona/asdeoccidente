import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import { defaultSchoolContent } from "./defaults";
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

function pick(value: string | undefined, fallback: string): string {
  return value?.trim() || fallback;
}

export function mergeSchool(doc: SchoolDoc | null): SchoolContent {
  if (!doc) return defaultSchoolContent;

  const heroFallback = defaultSchoolContent.hero;
  const heroImage = resolveSanityImage(
    doc.hero?.image as SanityImageSource | null | undefined,
    doc.hero?.imageAlt,
    heroFallback.image,
    heroFallback.imageAlt,
  );
  const heroSrc = heroImage.src ?? heroFallback.image;

  const methodFallback = defaultSchoolContent.method;
  const methodImage = resolveSanityImage(
    doc.method?.image as SanityImageSource | null | undefined,
    doc.method?.imageAlt,
    methodFallback.image,
    methodFallback.imageAlt,
  );
  const methodSrc = methodImage.src ?? methodFallback.image;

  const axes: SchoolMethodAxis[] = [];
  for (const [index, axis] of (doc.method?.axes ?? []).entries()) {
    if (!axis?.title?.trim()) continue;
    const fallback = methodFallback.axes[index];
    const icon =
      axis.icon && AXIS_ICONS.has(axis.icon)
        ? (axis.icon as SchoolMethodAxis["icon"])
        : fallback?.icon ?? "Scale";
    axes.push({
      title: axis.title.trim(),
      text: axis.text?.trim() || fallback?.text || "",
      icon,
    });
  }

  const horses: SchoolHorse[] = [];
  for (const [index, item] of (doc.horses?.items ?? []).entries()) {
    if (!item?.name?.trim()) continue;
    const fallback = defaultSchoolContent.horses.items[index];
    const image = resolveSanityImage(
      item.image as SanityImageSource | null | undefined,
      item.imageAlt,
      fallback?.image ?? "/imgs/escuela1.jpg",
      item.imageAlt?.trim() || fallback?.imageAlt || item.name,
    );
    horses.push({
      name: item.name.trim(),
      gait: item.gait?.trim() || fallback?.gait || "",
      blurb: item.blurb?.trim() || fallback?.blurb || "",
      image: image.src ?? fallback?.image ?? "/imgs/escuela1.jpg",
      imageAlt: image.alt,
    });
  }

  const tiles: SchoolGalleryTile[] = [];
  for (const [index, tile] of (doc.gallery?.tiles ?? []).entries()) {
    if (!tile?.title?.trim()) continue;
    const fallback = defaultSchoolContent.gallery.tiles[index];
    const image = resolveSanityImage(
      tile.image as SanityImageSource | null | undefined,
      tile.imageAlt,
      fallback?.image ?? "/imgs/escuela1.jpg",
      tile.imageAlt?.trim() || fallback?.imageAlt || tile.title,
    );
    const span =
      tile.span && TILE_SPANS.has(tile.span)
        ? (tile.span as SchoolGalleryTile["span"])
        : fallback?.span ?? "small";
    tiles.push({
      badge: tile.badge?.trim() || fallback?.badge || "",
      title: tile.title.trim(),
      subtitle: tile.subtitle?.trim() || fallback?.subtitle || "",
      image: image.src ?? fallback?.image ?? "/imgs/escuela1.jpg",
      imageAlt: image.alt,
      span,
    });
  }

  const members: SchoolStaffMember[] = [];
  for (const [index, member] of (doc.staff?.members ?? []).entries()) {
    if (!member?.name?.trim()) continue;
    const fallback = defaultSchoolContent.staff.members[index];
    const image = resolveSanityImage(
      member.image as SanityImageSource | null | undefined,
      member.imageAlt,
      fallback?.image ?? "/imgs/escuela2.jpg",
      member.imageAlt?.trim() || fallback?.imageAlt || member.name,
    );
    members.push({
      name: member.name.trim(),
      role: member.role?.trim() || fallback?.role || "",
      badge: member.badge?.trim() || fallback?.badge || "",
      bio: member.bio?.trim() || fallback?.bio || "",
      image: image.src ?? fallback?.image ?? "/imgs/escuela2.jpg",
      imageAlt: image.alt,
    });
  }

  const plans: SchoolFeePlan[] = [];
  for (const [index, plan] of (doc.fees?.plans ?? []).entries()) {
    if (!plan?.id?.trim() || !plan.title?.trim()) continue;
    const fallback = defaultSchoolContent.fees.plans[index];
    plans.push({
      id: plan.id.trim(),
      classCount: plan.classCount ?? fallback?.classCount ?? 1,
      packageLabel:
        plan.packageLabel?.trim() || fallback?.packageLabel || "",
      title: plan.title.trim(),
      description: plan.description?.trim() || fallback?.description || "",
      prices: {
        socio: plan.priceSocio ?? fallback?.prices.socio ?? 0,
        noSocio: plan.priceNoSocio ?? fallback?.prices.noSocio ?? 0,
        hijoMontador:
          plan.priceHijoMontador ?? fallback?.prices.hijoMontador ?? 0,
      },
      featured: plan.featured ?? fallback?.featured,
      ctaLabel: plan.ctaLabel?.trim() || fallback?.ctaLabel || "Elegir plan",
    });
  }

  const faqItems =
    doc.faq?.items
      ?.filter((item) => item?.question?.trim() && item?.answer?.trim())
      .map((item) => ({
        question: item!.question!.trim(),
        answer: item!.answer!.trim(),
      })) ?? [];

  return {
    hero: {
      badge: pick(doc.hero?.badge, heroFallback.badge),
      title: pick(doc.hero?.title, heroFallback.title),
      subtitle: pick(doc.hero?.subtitle, heroFallback.subtitle),
      primaryCtaLabel: pick(
        doc.hero?.primaryCtaLabel,
        heroFallback.primaryCtaLabel,
      ),
      secondaryCtaLabel: pick(
        doc.hero?.secondaryCtaLabel,
        heroFallback.secondaryCtaLabel,
      ),
      image: heroSrc,
      imageAlt: heroImage.alt || heroFallback.imageAlt,
    },
    method: {
      eyebrow: pick(doc.method?.intro?.eyebrow, methodFallback.eyebrow),
      title: pick(doc.method?.intro?.title, methodFallback.title),
      subtitle: pick(doc.method?.intro?.subtitle, methodFallback.subtitle),
      image: methodSrc,
      imageAlt: methodImage.alt || methodFallback.imageAlt,
      steps:
        doc.method?.steps && doc.method.steps.length > 0
          ? doc.method.steps
              .filter((step) => step?.title?.trim())
              .map((step, index) => ({
                title: step!.title!.trim(),
                text:
                  step!.text?.trim() ||
                  methodFallback.steps[index]?.text ||
                  "",
              }))
          : methodFallback.steps,
      axes: axes.length > 0 ? axes : methodFallback.axes,
    },
    horses: {
      eyebrow: pick(
        doc.horses?.intro?.eyebrow,
        defaultSchoolContent.horses.eyebrow,
      ),
      title: pick(
        doc.horses?.intro?.title,
        defaultSchoolContent.horses.title,
      ),
      subtitle: pick(
        doc.horses?.intro?.subtitle,
        defaultSchoolContent.horses.subtitle,
      ),
      items: horses.length > 0 ? horses : defaultSchoolContent.horses.items,
    },
    gallery: {
      eyebrow: pick(
        doc.gallery?.intro?.eyebrow,
        defaultSchoolContent.gallery.eyebrow,
      ),
      title: pick(
        doc.gallery?.intro?.title,
        defaultSchoolContent.gallery.title,
      ),
      subtitle: pick(
        doc.gallery?.intro?.subtitle,
        defaultSchoolContent.gallery.subtitle,
      ),
      tiles: tiles.length > 0 ? tiles : defaultSchoolContent.gallery.tiles,
    },
    staff: {
      eyebrow: pick(
        doc.staff?.intro?.eyebrow,
        defaultSchoolContent.staff.eyebrow,
      ),
      title: pick(doc.staff?.intro?.title, defaultSchoolContent.staff.title),
      subtitle: pick(
        doc.staff?.intro?.subtitle,
        defaultSchoolContent.staff.subtitle,
      ),
      members:
        members.length > 0 ? members : defaultSchoolContent.staff.members,
    },
    fees: {
      eyebrow: pick(
        doc.fees?.intro?.eyebrow,
        defaultSchoolContent.fees.eyebrow,
      ),
      title: pick(doc.fees?.intro?.title, defaultSchoolContent.fees.title),
      subtitle: pick(
        doc.fees?.intro?.subtitle,
        defaultSchoolContent.fees.subtitle,
      ),
      plans: plans.length > 0 ? plans : defaultSchoolContent.fees.plans,
      enrollmentNote: pick(
        doc.fees?.enrollmentNote,
        defaultSchoolContent.fees.enrollmentNote,
      ),
      benefitsNote: pick(
        doc.fees?.benefitsNote,
        defaultSchoolContent.fees.benefitsNote,
      ),
    },
    faq: {
      eyebrow: pick(
        doc.faq?.intro?.eyebrow,
        defaultSchoolContent.faq.eyebrow,
      ),
      title: pick(doc.faq?.intro?.title, defaultSchoolContent.faq.title),
      subtitle: pick(
        doc.faq?.intro?.subtitle,
        defaultSchoolContent.faq.subtitle,
      ),
      items: faqItems.length > 0 ? faqItems : defaultSchoolContent.faq.items,
    },
    seo: {
      title: pick(doc.seo?.title, defaultSchoolContent.seo.title),
      description: pick(
        doc.seo?.description,
        defaultSchoolContent.seo.description,
      ),
    },
  };
}
