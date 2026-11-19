import { resolveSanityImageUrl } from "@/shared/lib/resolve-image";
import { toEmbeddableVideoUrl } from "@/shared/lib/video-src";
import { emptySiteSettings, mapEmbedFromAddress } from "./defaults";
import type { SiteSettingsDoc } from "./query";
import type { SiteNavItem, SiteSettings, SiteUiChrome } from "./types";

function text(value: string | undefined | null): string {
  return value?.trim() || "";
}

function mapNavItems(
  items:
    | Array<{ href?: string; label?: string; icon?: string }>
    | null
    | undefined,
): SiteNavItem[] {
  const result: SiteNavItem[] = [];
  for (const item of items ?? []) {
    const href = item?.href?.trim();
    const label = item?.label?.trim();
    if (!href || !label) continue;
    result.push({
      href,
      label,
      icon: item?.icon?.trim() || "Home",
    });
  }
  return result;
}

function mapUi(ui: SiteSettingsDoc["ui"]): SiteUiChrome {
  return {
    navItems: mapNavItems(ui?.navItems),
    contactEyebrow: text(ui?.contactEyebrow),
    contactTitle: text(ui?.contactTitle),
    contactSubtitle: text(ui?.contactSubtitle),
    contactFormTitle: text(ui?.contactFormTitle),
    contactFormSubtitle: text(ui?.contactFormSubtitle),
    contactNameLabel: text(ui?.contactNameLabel),
    contactNamePlaceholder: text(ui?.contactNamePlaceholder),
    contactPhoneLabel: text(ui?.contactPhoneLabel),
    contactPhonePlaceholder: text(ui?.contactPhonePlaceholder),
    contactTopicLabel: text(ui?.contactTopicLabel),
    contactMessageLabel: text(ui?.contactMessageLabel),
    contactMessagePlaceholder: text(ui?.contactMessagePlaceholder),
    contactSubmitLabel: text(ui?.contactSubmitLabel),
    contactTopicLabels: {
      school: text(ui?.topicLabelSchool),
      fairs: text(ui?.topicLabelFairs),
      venue: text(ui?.topicLabelVenue),
      membership: text(ui?.topicLabelMembership),
      equinotherapy: text(ui?.topicLabelEquinotherapy),
      general: text(ui?.topicLabelGeneral),
    },
    footerNavHeading: text(ui?.footerNavHeading),
    footerContactHeading: text(ui?.footerContactHeading),
    copyrightSuffix: text(ui?.copyrightSuffix),
    directionsVideoLabel: text(ui?.directionsVideoLabel),
    heroAddressPrefix: text(ui?.heroAddressPrefix),
    fedequinasImageUrl: text(ui?.fedequinasImageUrl),
    ogImageUrl: text(ui?.ogImageUrl),
  };
}

export function mergeSiteSettings(doc: SiteSettingsDoc | null): SiteSettings {
  if (!doc) return emptySiteSettings;

  const address = text(doc.address);
  const mapFromDoc = text(doc.mapEmbedUrl);
  const mapLooksBroken =
    mapFromDoc.includes("/maps/embed?pb=") &&
    mapFromDoc.includes("4v1794807182929");
  const mapEmbedUrl =
    mapFromDoc && !mapLooksBroken
      ? mapFromDoc
      : mapEmbedFromAddress(address);

  return {
    name: text(doc.name),
    legalName: text(doc.legalName),
    footerBlurb: text(doc.footerBlurb),
    address,
    phonePbx: text(doc.phonePbx),
    phoneMobile: text(doc.phoneMobile),
    phoneMobileAlt: text(doc.phoneMobileAlt),
    whatsappNumber: text(doc.whatsappNumber),
    email: text(doc.email),
    social: {
      instagram: text(doc.instagramUrl),
      youtube: text(doc.youtubeUrl),
      tiktok: text(doc.tiktokUrl),
    },
    mapEmbedUrl,
    directionsVideo: (() => {
      const posterSrc =
        resolveSanityImageUrl(doc.directionsVideoPoster ?? null, 1200) ??
        undefined;
      const fileUrl = text(doc.directionsVideoFileUrl);
      const source = text(doc.directionsVideoSource);
      if (source === "file" || (!source && fileUrl)) {
        return { kind: "file" as const, src: fileUrl, posterSrc };
      }
      const rawUrl = text(doc.directionsVideoUrl);
      return {
        kind: "url" as const,
        src: rawUrl ? toEmbeddableVideoUrl(rawUrl) : "",
        posterSrc,
      };
    })(),
    google: {
      rating: text(doc.googleRating),
      reviewCount: text(doc.googleReviewCount),
      reviewsUrl: text(doc.googleReviewsUrl),
    },
    whatsappMessages: {
      school: text(doc.whatsappMessageSchool),
      fairs: text(doc.whatsappMessageFairs),
      venue: text(doc.whatsappMessageVenue),
      membership: text(doc.whatsappMessageMembership),
      equinotherapy: text(doc.whatsappMessageEquinotherapy),
      general: text(doc.whatsappMessageGeneral),
    },
    ui: mapUi(doc.ui),
  };
}
