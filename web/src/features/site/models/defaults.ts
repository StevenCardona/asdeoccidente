import type { SiteSettings } from "./types";

export function mapEmbedFromAddress(address: string): string {
  if (!address.trim()) return "";
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;
}

/** Empty shell — identity/contact/UI only from Sanity. */
export const emptySiteSettings: SiteSettings = {
  name: "",
  legalName: "",
  footerBlurb: "",
  address: "",
  phonePbx: "",
  phoneMobile: "",
  phoneMobileAlt: "",
  whatsappNumber: "",
  email: "",
  social: {
    instagram: "",
    youtube: "",
    tiktok: "",
  },
  mapEmbedUrl: "",
  directionsVideo: { kind: "url", src: "", posterSrc: undefined },
  google: {
    rating: "",
    reviewCount: "",
    reviewsUrl: "",
  },
  whatsappMessages: {
    school: "",
    fairs: "",
    venue: "",
    membership: "",
    equinotherapy: "",
    general: "",
  },
  ui: {
    navItems: [],
    contactEyebrow: "",
    contactTitle: "",
    contactSubtitle: "",
    contactFormTitle: "",
    contactFormSubtitle: "",
    contactNameLabel: "",
    contactNamePlaceholder: "",
    contactPhoneLabel: "",
    contactPhonePlaceholder: "",
    contactTopicLabel: "",
    contactMessageLabel: "",
    contactMessagePlaceholder: "",
    contactSubmitLabel: "",
    contactTopicLabels: {
      school: "",
      fairs: "",
      venue: "",
      membership: "",
      equinotherapy: "",
      general: "",
    },
    footerNavHeading: "",
    footerContactHeading: "",
    copyrightSuffix: "",
    directionsVideoLabel: "",
    heroAddressPrefix: "",
    fedequinasImageUrl: "",
    ogImageUrl: "",
  },
};

/** @deprecated Use emptySiteSettings */
