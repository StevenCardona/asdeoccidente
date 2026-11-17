import type { SanityImageSource } from "@sanity/image-url";
import {
  resolveSanityImage,
  resolveSanityImageUrl,
} from "@/shared/lib/resolve-image";
import { emptyHomeContent } from "./defaults";
import type { HomeDoc } from "./query";
import type {
  HomeContent,
  HomeGait,
  HomeGalleryPhoto,
  HomeSectionIntro,
  HomeServiceItem,
  HomeSocialVideo,
  HomeStat,
} from "./types";

function mergeIntro(
  intro: { eyebrow?: string; title?: string; subtitle?: string } | null | undefined,
): HomeSectionIntro {
  return {
    eyebrow: intro?.eyebrow?.trim() || "",
    title: intro?.title?.trim() || "",
    subtitle: intro?.subtitle?.trim() || "",
  };
}

function parseStats(
  items: Array<{
    value?: string;
    label?: string;
    prefix?: string;
    icon?: string;
  }> | null | undefined,
  show: boolean | undefined,
  googleReviewCount: string,
): { showStats: boolean; stats: HomeStat[] } {
  if (show === false) {
    return { showStats: false, stats: [] };
  }

  const reviewCount = Number.parseInt(googleReviewCount, 10);
  const parsed: HomeStat[] = [];

  for (const item of items ?? []) {
    if (!item.label?.trim()) continue;
    const label = item.label.trim();
    const raw = item.value?.replace(/[^\d.,]/g, "").replace(",", ".") ?? "";
    let target = Number.parseFloat(raw);

    // Allow CMS to drive review count from siteSettings without inventing labels.
    if (
      (!Number.isFinite(target) || target <= 0) &&
      /reseñ|recomiend/i.test(label) &&
      Number.isFinite(reviewCount) &&
      reviewCount > 0
    ) {
      target = reviewCount;
    }

    if (!Number.isFinite(target)) continue;
    parsed.push({
      target,
      label,
      prefix: item.prefix?.trim() || (item.value?.trim().startsWith("+") ? "+" : ""),
      decimals: raw.includes(".") ? 1 : 0,
      icon: item.icon?.trim() || undefined,
    });
  }

  if (parsed.length === 0) {
    return { showStats: false, stats: [] };
  }

  return { showStats: true, stats: parsed };
}

function hasHeroAsset(image: SanityImageSource | null | undefined): boolean {
  if (!image || typeof image !== "object") return false;
  const asset = (image as { asset?: { _ref?: string } }).asset;
  return Boolean(asset?._ref);
}

export function mergeHome(
  doc: HomeDoc | null,
  googleReviewCount = "",
): HomeContent {
  if (!doc) {
    return { ...emptyHomeContent };
  }

  const hero = doc.hero;
  const heroImage =
    hero?.image != null && hasHeroAsset(hero.image)
      ? {
          source: hero.image,
          alt: hero.imageAlt?.trim() || "",
        }
      : null;

  const statsState = parseStats(
    doc.stats?.items,
    doc.stats?.show,
    googleReviewCount,
  );

  const serviceItems: HomeServiceItem[] = [];
  for (const item of doc.services?.items ?? []) {
    if (!item?.title?.trim()) continue;
    const resolved = resolveSanityImage(
      item.image as SanityImageSource | null | undefined,
      item.imageAlt,
      undefined,
      item.title,
    );
    if (!resolved.src) continue;
    const title = item.title.trim();
    const href =
      item.href?.trim() ||
      (title.toLowerCase() === "escuela de chalanería" ? "/school" : undefined);
    serviceItems.push({
      title,
      description: item.description?.trim() || "",
      cta: item.cta?.trim() || "",
      href,
      image: resolved.src,
      imageAlt: resolved.alt || title,
    });
  }

  const galleryPhotos: HomeGalleryPhoto[] = [];
  for (const photo of doc.gallery?.photos ?? []) {
    if (!photo) continue;
    const resolved = resolveSanityImage(
      photo,
      photo.alt,
      undefined,
      photo.alt,
    );
    if (!resolved.src) continue;
    galleryPhotos.push({
      src: resolved.src,
      alt: resolved.alt,
    });
  }

  const gaitItems: HomeGait[] = [];
  for (const item of doc.gaits?.items ?? []) {
    if (!item?.id?.trim() || !item.title?.trim()) continue;
    const resolved = resolveSanityImage(
      item.image as SanityImageSource | null | undefined,
      item.imageAlt,
      undefined,
      item.title,
    );
    if (!resolved.src) continue;
    gaitItems.push({
      id: item.id.trim(),
      tab: item.tab?.trim() || item.title.trim(),
      tag: item.tag?.trim() || "",
      sound: item.sound?.trim() || "",
      title: item.title.trim(),
      text: item.text?.trim() || "",
      image: resolved.src,
    });
  }

  const essenceItems =
    doc.essence?.items
      ?.filter((item) => Boolean(item?.title?.trim()))
      .map((item) => ({
        title: item.title!.trim(),
        text: item.text?.trim() || "",
        icon: item.icon?.trim() || undefined,
      })) ?? [];

  const essencePhotos: HomeGalleryPhoto[] = [];
  for (const photo of doc.essence?.photos ?? []) {
    if (!photo) continue;
    const resolved = resolveSanityImage(
      photo,
      photo.alt,
      undefined,
      photo.alt,
    );
    if (!resolved.src) continue;
    essencePhotos.push({
      src: resolved.src,
      alt: resolved.alt,
    });
  }

  const fromCmsVideos: HomeSocialVideo[] = [];
  for (const item of doc.videos?.items ?? []) {
    const label = item.label?.trim() || undefined;
    const fileUrl = item.fileUrl?.trim() || "";
    const pageUrl = item.url?.trim() || "";
    const source = item.source?.trim();

    if (source === "file" || (!source && fileUrl && !pageUrl)) {
      if (!fileUrl) continue;
      fromCmsVideos.push({ kind: "file", src: fileUrl, label });
      continue;
    }

    if (!pageUrl) continue;
    fromCmsVideos.push({ kind: "url", src: pageUrl, label });
  }

  return {
    heroTitle: hero?.title?.trim() || "",
    heroSubtitle: hero?.subtitle?.trim() || "",
    culturalLabel: hero?.culturalLabel?.trim() || "",
    heroImage,
    primaryCta: {
      label: hero?.primaryCta?.label?.trim() || "",
      href: hero?.primaryCta?.href,
      whatsappTopic: hero?.primaryCta?.whatsappTopic,
    },
    secondaryCta: {
      label: hero?.secondaryCta?.label?.trim() || "",
      href: hero?.secondaryCta?.href?.trim() || "",
      whatsappTopic: hero?.secondaryCta?.whatsappTopic,
    },
    essence: {
      intro: mergeIntro(doc.essence?.intro),
      items: essenceItems,
      photos: essencePhotos,
    },
    showStats: statsState.showStats,
    statsIntro: mergeIntro(doc.stats?.intro),
    stats: statsState.stats,
    services: {
      intro: mergeIntro(doc.services?.intro),
      items: serviceItems,
    },
    gallery: {
      intro: mergeIntro(doc.gallery?.intro),
      photos: galleryPhotos,
    },
    gaits: {
      intro: mergeIntro(doc.gaits?.intro),
      items: gaitItems,
    },
    videosIntro: mergeIntro(doc.videos?.intro),
    socialVideos: fromCmsVideos,
    seoTitle: resolveHomeSeoTitle(
      doc.seo?.title,
      hero?.title,
    ),
    seoDescription: doc.seo?.description?.trim() || "",
  };
}

/** Empty or CMS placeholder "Inicio" → use hero title (no city in titles). */
function resolveHomeSeoTitle(
  seoTitle: string | undefined,
  heroTitle: string | undefined,
): string {
  const trimmed = seoTitle?.trim() || "";
  if (!trimmed || trimmed.toLowerCase() === "inicio") {
    return heroTitle?.trim() || "";
  }
  return trimmed;
}

export function homeHeroImageUrl(
  source: SanityImageSource | null | undefined,
  width = 1600,
): string | null {
  return resolveSanityImageUrl(source, width, 75);
}

/** True when CMS returned nothing usable (failed fetch or unpublished). */
export function isHomeContentEmpty(home: HomeContent): boolean {
  return (
    !home.heroTitle.trim() &&
    !home.heroSubtitle.trim() &&
    !home.heroImage &&
    !home.primaryCta.label.trim() &&
    home.essence.items.length === 0 &&
    home.essence.photos.length === 0 &&
    home.stats.length === 0 &&
    home.services.items.length === 0 &&
    home.gallery.photos.length === 0 &&
    home.gaits.items.length === 0 &&
    home.socialVideos.length === 0
  );
}
