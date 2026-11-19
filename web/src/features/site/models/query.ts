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
  whatsappMessageEquinotherapy,
  whatsappMessageGeneral,
  ui{
    navItems[]{ href, label, icon },
    contactEyebrow,
    contactTitle,
    contactSubtitle,
    contactFormTitle,
    contactFormSubtitle,
    contactNameLabel,
    contactNamePlaceholder,
    contactPhoneLabel,
    contactPhonePlaceholder,
    contactTopicLabel,
    contactMessageLabel,
    contactMessagePlaceholder,
    contactSubmitLabel,
    topicLabelSchool,
    topicLabelFairs,
    topicLabelVenue,
    topicLabelMembership,
    topicLabelEquinotherapy,
    topicLabelGeneral,
    footerNavHeading,
    footerContactHeading,
    copyrightSuffix,
    directionsVideoLabel,
    heroAddressPrefix,
    "fedequinasImageUrl": fedequinasImage.asset->url,
    "ogImageUrl": ogImage.asset->url
  }
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
  whatsappMessageEquinotherapy?: string;
  whatsappMessageGeneral?: string;
  ui?: {
    navItems?: Array<{ href?: string; label?: string; icon?: string }> | null;
    contactEyebrow?: string;
    contactTitle?: string;
    contactSubtitle?: string;
    contactFormTitle?: string;
    contactFormSubtitle?: string;
    contactNameLabel?: string;
    contactNamePlaceholder?: string;
    contactPhoneLabel?: string;
    contactPhonePlaceholder?: string;
    contactTopicLabel?: string;
    contactMessageLabel?: string;
    contactMessagePlaceholder?: string;
    contactSubmitLabel?: string;
    topicLabelSchool?: string;
    topicLabelFairs?: string;
    topicLabelVenue?: string;
    topicLabelMembership?: string;
    topicLabelEquinotherapy?: string;
    topicLabelGeneral?: string;
    footerNavHeading?: string;
    footerContactHeading?: string;
    copyrightSuffix?: string;
    directionsVideoLabel?: string;
    heroAddressPrefix?: string;
    fedequinasImageUrl?: string | null;
    ogImageUrl?: string | null;
  } | null;
};
