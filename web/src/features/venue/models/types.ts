export type VenueSectionIntro = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type VenueImage = {
  src: string;
  alt: string;
};

export type VenueSpace = {
  title: string;
  description: string;
  highlights: string[];
  image: VenueImage | null;
  imagePosition: "left" | "right";
};

export type VenueReview = {
  name: string;
  place: string;
  rating: number;
  text: string;
};

export type VenueHero = {
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  image: string;
  imageAlt: string;
  /** Commercial contact shown under address in the hero. */
  contactLine: string;
};

export type VenueIntro = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export type VenueContent = {
  hero: VenueHero;
  intro: VenueIntro;
  spaces: VenueSpace[];
  gallery: {
    intro: VenueSectionIntro;
    photos: VenueImage[];
  };
  reviewsIntro: VenueSectionIntro;
  reviews: VenueReview[];
  seo: {
    title: string;
    description: string;
  };
};
