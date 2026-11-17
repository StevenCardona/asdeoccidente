export type WhatsappTopic = "school" | "fairs" | "general";

export type WhatsappMessages = Record<WhatsappTopic, string>;

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
  /** Directions video for Contact & location; empty src means none. */
  directionsVideo: {
    kind: "url" | "file";
    src: string;
    /** Optional cover shown on the trigger and as HTML video poster. */
    posterSrc?: string;
  };
  google: {
    rating: string;
    reviewCount: string;
    reviewsUrl: string;
  };
  whatsappMessages: WhatsappMessages;
};
