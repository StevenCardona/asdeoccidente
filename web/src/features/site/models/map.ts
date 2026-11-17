import { resolveSanityImageUrl } from "@/shared/lib/resolve-image";
import { toEmbeddableVideoUrl } from "@/shared/lib/video-src";
import {
  defaultSiteSettings,
  mapEmbedFromAddress,
} from "./defaults";
import type { SiteSettingsDoc } from "./query";
import type { SiteSettings } from "./types";

function pick(
  value: string | undefined,
  fallback: string,
): string {
  const trimmed = value?.trim();
  return trimmed || fallback;
}

export function mergeSiteSettings(doc: SiteSettingsDoc | null): SiteSettings {
  if (!doc) return defaultSiteSettings;

  const address = pick(doc.address, defaultSiteSettings.address);
  const mapFromDoc = doc.mapEmbedUrl?.trim() ?? "";
  // Prefer CMS value unless it's an empty/broken legacy embed?pb= that Google rejects with 400.
  const mapLooksBroken =
    mapFromDoc.includes("/maps/embed?pb=") &&
    mapFromDoc.includes("4v1794807182929");
  const mapEmbedUrl =
    mapFromDoc && !mapLooksBroken
      ? mapFromDoc
      : defaultSiteSettings.mapEmbedUrl || mapEmbedFromAddress(address);

  return {
    name: pick(doc.name, defaultSiteSettings.name),
    legalName: pick(doc.legalName, defaultSiteSettings.legalName),
    footerBlurb: pick(doc.footerBlurb, defaultSiteSettings.footerBlurb),
    address,
    phonePbx: pick(doc.phonePbx, defaultSiteSettings.phonePbx),
    phoneMobile: pick(doc.phoneMobile, defaultSiteSettings.phoneMobile),
    phoneMobileAlt: pick(
      doc.phoneMobileAlt,
      defaultSiteSettings.phoneMobileAlt,
    ),
    whatsappNumber: pick(
      doc.whatsappNumber,
      defaultSiteSettings.whatsappNumber,
    ),
    email: pick(doc.email, defaultSiteSettings.email),
    social: {
      instagram: pick(
        doc.instagramUrl,
        defaultSiteSettings.social.instagram,
      ),
      youtube: pick(doc.youtubeUrl, defaultSiteSettings.social.youtube),
      tiktok: pick(doc.tiktokUrl, defaultSiteSettings.social.tiktok),
    },
    mapEmbedUrl,
    directionsVideo: (() => {
      const posterSrc =
        resolveSanityImageUrl(doc.directionsVideoPoster ?? null, 1200) ??
        undefined;
      const fileUrl = doc.directionsVideoFileUrl?.trim() || "";
      const source = doc.directionsVideoSource?.trim();
      if (source === "file" || (!source && fileUrl)) {
        return { kind: "file" as const, src: fileUrl, posterSrc };
      }
      const rawUrl = doc.directionsVideoUrl?.trim() || "";
      return {
        kind: "url" as const,
        src: rawUrl ? toEmbeddableVideoUrl(rawUrl) : "",
        posterSrc,
      };
    })(),
    google: {
      rating: pick(doc.googleRating, defaultSiteSettings.google.rating),
      reviewCount: pick(
        doc.googleReviewCount,
        defaultSiteSettings.google.reviewCount,
      ),
      reviewsUrl:
        doc.googleReviewsUrl?.trim() ??
        defaultSiteSettings.google.reviewsUrl,
    },
    whatsappMessages: {
      school: pick(
        doc.whatsappMessageSchool,
        defaultSiteSettings.whatsappMessages.school,
      ),
      fairs: pick(
        doc.whatsappMessageFairs,
        defaultSiteSettings.whatsappMessages.fairs,
      ),
      general: pick(
        doc.whatsappMessageGeneral,
        defaultSiteSettings.whatsappMessages.general,
      ),
    },
  };
}
