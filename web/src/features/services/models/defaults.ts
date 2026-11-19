import type { ServicesContent } from "./types";

/** Empty services shell — content only from Sanity. */
export const emptyServicesContent: ServicesContent = {
  hero: {
    badge: "",
    title: "",
    subtitle: "",
    image: "",
    imageAlt: "",
  },
  sections: [],
  seo: {
    title: "",
    description: "",
  },
};

/** @deprecated Use emptyServicesContent */
export const defaultServicesContent = emptyServicesContent;
