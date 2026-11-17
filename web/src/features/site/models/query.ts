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
  directionsVideoUrl,
  googleRating,
  googleReviewCount,
  googleReviewsUrl,
  whatsappMessageSchool,
  whatsappMessageFairs,
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
  directionsVideoUrl?: string;
  googleRating?: string;
  googleReviewCount?: string;
  googleReviewsUrl?: string;
  whatsappMessageSchool?: string;
  whatsappMessageFairs?: string;
  whatsappMessageGeneral?: string;
};
