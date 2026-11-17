import type { SanityImageSource } from "@sanity/image-url";
import type { WhatsappTopic } from "@/features/site/models";

export type HomeCta = {
  label: string;
  href?: string;
  whatsappTopic?: WhatsappTopic;
};

export type HomeEssenceItem = {
  title: string;
  text: string;
  icon?: string;
};

export type HomeStatIcon = "CalendarDays" | "GraduationCap" | "Users" | "Google";

export type HomeStat = {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  icon?: HomeStatIcon | string;
};

export type HomeSocialVideo = {
  kind: "url" | "file";
  /** Embed/page URL for kind=url, or CDN file URL for kind=file. */
  src: string;
  label?: string;
};

export type HomeHeroImage = {
  source: SanityImageSource;
  alt: string;
};

export type HomeServiceItem = {
  title: string;
  description: string;
  cta: string;
  /** Internal path when the card should link (e.g. /school). */
  href?: string;
  image: string;
  imageAlt: string;
};

export type HomeGalleryPhoto = {
  src: string;
  alt: string;
};

export type HomeGait = {
  id: string;
  tab: string;
  tag: string;
  sound: string;
  title: string;
  text: string;
  image: string;
};

export type HomeSectionIntro = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
  culturalLabel: string;
  heroImage: HomeHeroImage | null;
  primaryCta: HomeCta;
  secondaryCta: HomeCta;
  essence: {
    intro: HomeSectionIntro;
    items: HomeEssenceItem[];
    photos: HomeGalleryPhoto[];
  };
  showStats: boolean;
  statsIntro: HomeSectionIntro;
  stats: HomeStat[];
  services: {
    intro: HomeSectionIntro;
    items: HomeServiceItem[];
  };
  gallery: {
    intro: HomeSectionIntro;
    photos: HomeGalleryPhoto[];
  };
  gaits: {
    intro: HomeSectionIntro;
    items: HomeGait[];
  };
  videosIntro: HomeSectionIntro;
  socialVideos: HomeSocialVideo[];
  seoTitle: string;
  seoDescription: string;
};
