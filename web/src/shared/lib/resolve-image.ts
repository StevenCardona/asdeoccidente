import type { SanityImageSource } from "@sanity/image-url";
import { urlForImage } from "@/shared/lib/sanity-image";

export type ResolvedImage = {
  /** Null when the Sanity image has no asset or URL build failed. */
  src: string | null;
  alt: string;
};

function hasImageAsset(image: SanityImageSource | null | undefined): boolean {
  if (!image || typeof image !== "object") return false;
  const asset = (image as { asset?: { _ref?: string; _id?: string } }).asset;
  return Boolean(asset?._ref || asset?._id);
}

function buildImageUrl(
  image: SanityImageSource,
  width = 1600,
  quality = 75,
): string | null {
  try {
    return urlForImage(image)?.width(width).quality(quality).url() ?? null;
  } catch {
    return null;
  }
}

/**
 * Resolve a Sanity image to a URL. Never throws.
 * Does not invent local `/imgs` fallbacks — callers decide what to do with null.
 * Optional `fallbackSrc` kept for school (out of home scope) until that feature is migrated.
 */
export function resolveSanityImage(
  image: SanityImageSource | null | undefined,
  alt: string | null | undefined,
  fallbackSrc?: string,
  fallbackAlt?: string,
): ResolvedImage {
  const resolvedAlt = alt?.trim() || fallbackAlt?.trim() || "";

  if (!hasImageAsset(image)) {
    return { src: fallbackSrc?.trim() || null, alt: resolvedAlt };
  }

  const url = buildImageUrl(image!);
  if (url) {
    return { src: url, alt: resolvedAlt };
  }

  return { src: fallbackSrc?.trim() || null, alt: resolvedAlt };
}

export function resolveSanityImageUrl(
  image: SanityImageSource | null | undefined,
  width = 1600,
  quality = 75,
): string | null {
  if (!hasImageAsset(image)) return null;
  return buildImageUrl(image!, width, quality);
}
