import type { EquinotherapyContent } from "./types";

const emptyIntro = { eyebrow: "", title: "", subtitle: "" };
const emptyStory = {
  eyebrow: "",
  title: "",
  paragraphs: [] as string[],
  benefits: [] as string[],
  image: null,
  imagePosition: "right" as const,
};

export const emptyEquinotherapyContent: EquinotherapyContent = {
  hero: {
    badge: "",
    title: "",
    subtitle: "",
    primaryCtaLabel: "",
    image: "",
    imageAlt: "",
  },
  storyIntro: { ...emptyStory, imagePosition: "right" },
  gallery: { intro: { ...emptyIntro }, photos: [] },
  storyBenefits: { ...emptyStory, imagePosition: "left", benefits: [] },
  reviewsIntro: { ...emptyIntro },
  reviews: [],
  faq: { ...emptyIntro, items: [] },
  seo: { title: "", description: "" },
};

/** @deprecated Use emptyEquinotherapyContent */
export const defaultEquinotherapyContent = emptyEquinotherapyContent;
