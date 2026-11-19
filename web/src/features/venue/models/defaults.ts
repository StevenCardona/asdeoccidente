import type { VenueContent } from "./types";

export const emptyVenueContent: VenueContent = {
  hero: {
    badge: "",
    title: "",
    subtitle: "",
    primaryCtaLabel: "",
    image: "",
    imageAlt: "",
    contactLine: "",
  },
  intro: {
    eyebrow: "",
    title: "",
    paragraphs: [],
  },
  spaces: [],
  gallery: {
    intro: { eyebrow: "", title: "", subtitle: "" },
    photos: [],
  },
  reviewsIntro: { eyebrow: "", title: "", subtitle: "" },
  reviews: [],
  seo: { title: "", description: "" },
};

/** @deprecated Use emptyVenueContent */
export const defaultVenueContent = emptyVenueContent;
