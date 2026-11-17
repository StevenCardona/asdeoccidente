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
  directionsVideoUrl: string;
  google: {
    rating: string;
    reviewCount: string;
    reviewsUrl: string;
  };
  whatsappMessages: WhatsappMessages;
};
