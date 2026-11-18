export type EquinotherapySectionIntro = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type EquinotherapyImage = {
  src: string;
  alt: string;
};

export type EquinotherapyHero = {
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  image: string;
  imageAlt: string;
};

export type EquinotherapyStory = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  benefits: string[];
  image: EquinotherapyImage | null;
  imagePosition: "left" | "right";
};

export type EquinotherapyReview = {
  name: string;
  place: string;
  rating: number;
  text: string;
};

export type EquinotherapyFaqItem = {
  question: string;
  answer: string;
};

export type EquinotherapyFaq = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: EquinotherapyFaqItem[];
};

export type EquinotherapyContent = {
  hero: EquinotherapyHero;
  storyIntro: EquinotherapyStory;
  gallery: {
    intro: EquinotherapySectionIntro;
    photos: EquinotherapyImage[];
  };
  storyBenefits: EquinotherapyStory;
  reviewsIntro: EquinotherapySectionIntro;
  reviews: EquinotherapyReview[];
  faq: EquinotherapyFaq;
  seo: {
    title: string;
    description: string;
  };
};
