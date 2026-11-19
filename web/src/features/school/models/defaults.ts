import type { SchoolContent } from "./types";

/** Empty school shell — content only from Sanity. */
export const emptySchoolContent: SchoolContent = {
  hero: {
    badge: "",
    title: "",
    subtitle: "",
    primaryCtaLabel: "",
    secondaryCtaLabel: "",
    image: "",
    imageAlt: "",
  },
  method: {
    eyebrow: "",
    title: "",
    subtitle: "",
    image: "",
    imageAlt: "",
    steps: [],
    axes: [],
  },
  staff: {
    eyebrow: "",
    title: "",
    subtitle: "",
    members: [],
  },
  horses: {
    eyebrow: "",
    title: "",
    subtitle: "",
    items: [],
  },
  gallery: {
    eyebrow: "",
    title: "",
    subtitle: "",
    tiles: [],
  },
  fees: {
    eyebrow: "",
    title: "",
    subtitle: "",
    plans: [],
    enrollmentNote: "",
    benefitsNote: "",
  },
  faq: {
    eyebrow: "",
    title: "",
    subtitle: "",
    items: [],
  },
  seo: {
    title: "",
    description: "",
  },
};

/** @deprecated Use emptySchoolContent */
