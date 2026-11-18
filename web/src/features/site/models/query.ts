import type { SanityImageSource } from "@sanity/image-url";

export const siteSettingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  name,
  legalName,
  footerBlurb,
  address,
  phonePbx,
  phoneMobile,
  phoneMobileAlt,
  whatsappNumber,
  email,
  instagramUrl,
  youtubeUrl,
  tiktokUrl,
  mapEmbedUrl,
  directionsVideoSource,
  directionsVideoUrl,
  "directionsVideoFileUrl": directionsVideoFile.asset->url,
  directionsVideoPoster,
  googleRating,
  googleReviewCount,
  googleReviewsUrl,
  whatsappMessageSchool,
  whatsappMessageFairs,
  whatsappMessageVenue,
  whatsappMessageMembership,
  whatsappMessageGeneral
}`;

export type SiteSettingsDoc = {
  name?: string;
  legalName?: string;
  footerBlurb?: string;
  address?: string;
  phonePbx?: string;
  phoneMobile?: string;
  phoneMobileAlt?: string;
  whatsappNumber?: string;
  email?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  tiktokUrl?: string;
  mapEmbedUrl?: string;
  directionsVideoSource?: string;
  directionsVideoUrl?: string;
  directionsVideoFileUrl?: string | null;
  directionsVideoPoster?: (SanityImageSource & { alt?: string }) | null;
  googleRating?: string;
  googleReviewCount?: string;
  googleReviewsUrl?: string;
  whatsappMessageSchool?: string;
  whatsappMessageFairs?: string;
  whatsappMessageVenue?: string;
  whatsappMessageMembership?: string;
  whatsappMessageGeneral?: string;
};
