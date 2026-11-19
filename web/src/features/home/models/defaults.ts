import type { HomeContent } from "./types";

/** Empty home shell — no invented copy or `/imgs` assets. */
export const emptyHomeContent: HomeContent = {
  heroTitle: "",
  heroSubtitle: "",
  culturalLabel: "",
  heroImage: null,
  primaryCta: { label: "" },
  secondaryCta: { label: "", href: "" },
  essence: {
    intro: { eyebrow: "", title: "", subtitle: "" },
    items: [],
    photos: [],
  },
  showStats: false,
  statsIntro: { eyebrow: "", title: "", subtitle: "" },
  stats: [],
  services: {
    intro: { eyebrow: "", title: "", subtitle: "" },
    items: [],
  },
  gallery: {
    intro: { eyebrow: "", title: "", subtitle: "" },
    photos: [],
  },
  reviews: {
    intro: { eyebrow: "", title: "", subtitle: "" },
    items: [],
  },
  videosIntro: { eyebrow: "", title: "", subtitle: "" },
  socialVideos: [],
  seoTitle: "",
  seoDescription: "",
};

/** @deprecated Use emptyHomeContent — kept as alias for existing imports. */
