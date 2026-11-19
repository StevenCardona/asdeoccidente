import type { MembershipContent } from "./types";

const emptyIntro = { eyebrow: "", title: "", subtitle: "" };

export const emptyMembershipContent: MembershipContent = {
  hero: {
    title: "",
    subtitle: "",
    primaryCtaLabel: "",
    image: "",
    imageAlt: "",
  },
  about: {
    eyebrow: "",
    title: "",
    paragraphs: [],
    photos: [],
  },
  missionVision: { pillars: [] },
  memberBenefits: {
    intro: { ...emptyIntro },
    items: [],
    gallery: { intro: { ...emptyIntro }, photos: [] },
  },
  affiliateBenefits: {
    intro: { ...emptyIntro },
    items: [],
  },
  costs: {
    intro: { ...emptyIntro },
    rows: [],
  },
  requirements: {
    intro: { ...emptyIntro },
    items: [],
    formatLabel: "",
    formatFileUrl: "",
  },
  reviewsIntro: { ...emptyIntro },
  reviews: [],
  seo: { title: "", description: "" },
};

/** @deprecated Use emptyMembershipContent */
export const defaultMembershipContent = emptyMembershipContent;
