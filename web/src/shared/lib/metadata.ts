import type { Metadata } from "next";

type BuildPageMetadataInput = {
  path: string;
  title: string;
  description: string;
  siteName: string;
  image?: string | null;
  imageAlt?: string;
  /** When true, page is omitted from search indexes (placeholders, studio). */
  noIndex?: boolean;
};

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildPageMetadata({
  path,
  title,
  description,
  siteName,
  image,
  imageAlt,
  noIndex = false,
}: BuildPageMetadataInput): Metadata {
  const canonical = normalizePath(path);
  const ogTitle = title.includes(siteName) ? title : `${title} · ${siteName}`;
  const images = image
    ? [
        {
          url: image,
          alt: imageAlt?.trim() || title,
        },
      ]
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large" as const,
          },
        },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName,
      locale: "es_CO",
      type: "website",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: ogTitle,
      description,
      ...(images ? { images: [images[0].url] } : {}),
    },
  };
}
