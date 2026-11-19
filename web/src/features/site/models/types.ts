export type WhatsappTopic =
  | "school"
  | "fairs"
  | "venue"
  | "membership"
  | "equinotherapy"
  | "general";

export type WhatsappMessages = Record<WhatsappTopic, string>;

export type SiteNavItem = {
  href: string;
  label: string;
  icon: string;
};

export type SiteUiChrome = {
  navItems: SiteNavItem[];
  contactEyebrow: string;
  contactTitle: string;
  contactSubtitle: string;
  contactFormTitle: string;
  contactFormSubtitle: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactPhoneLabel: string;
  contactPhonePlaceholder: string;
  contactTopicLabel: string;
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactSubmitLabel: string;
  contactTopicLabels: Record<WhatsappTopic, string>;
  footerNavHeading: string;
  footerContactHeading: string;
  copyrightSuffix: string;
  directionsVideoLabel: string;
  /** Prefix before address in home hero, e.g. "Nuestra sede está en ". */
  heroAddressPrefix: string;
  fedequinasImageUrl: string;
  ogImageUrl: string;
};

export type SiteSettings = {
  name: string;
  legalName: string;
  footerBlurb: string;
  address: string;
  phonePbx: string;
  phoneMobile: string;
  phoneMobileAlt: string;
  whatsappNumber: string;
  email: string;
  social: {
    instagram: string;
    youtube: string;
    tiktok: string;
  };
  mapEmbedUrl: string;
  directionsVideo: {
    kind: "url" | "file";
    src: string;
    posterSrc?: string;
  };
  google: {
    rating: string;
    reviewCount: string;
    reviewsUrl: string;
  };
  whatsappMessages: WhatsappMessages;
  ui: SiteUiChrome;
};
