export type MembershipSectionIntro = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type MembershipImage = {
  src: string;
  alt: string;
};

export type MembershipHero = {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  image: string;
  imageAlt: string;
};

export type MembershipAbout = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  photos: MembershipImage[];
};

export type MembershipPillar = {
  title: string;
  text: string;
  image: MembershipImage | null;
};

export type MembershipBenefit = {
  title: string;
  text: string;
};

export type MembershipBenefitBlock = {
  intro: MembershipSectionIntro;
  items: MembershipBenefit[];
};

export type MembershipCostRow = {
  label: string;
  cuotaDisplay: string;
  valorDisplay: string;
};

export type MembershipCosts = {
  intro: MembershipSectionIntro;
  rows: MembershipCostRow[];
};

export type MembershipRequirements = {
  intro: MembershipSectionIntro;
  items: string[];
  formatLabel: string;
  formatFileUrl: string;
};

export type MembershipReview = {
  name: string;
  place: string;
  rating: number;
  text: string;
};

export type MembershipContent = {
  hero: MembershipHero;
  about: MembershipAbout;
  missionVision: {
    pillars: MembershipPillar[];
  };
  memberBenefits: MembershipBenefitBlock & {
    gallery: {
      intro: MembershipSectionIntro;
      photos: MembershipImage[];
    };
  };
  affiliateBenefits: MembershipBenefitBlock;
  costs: MembershipCosts;
  requirements: MembershipRequirements;
  reviewsIntro: MembershipSectionIntro;
  reviews: MembershipReview[];
  seo: {
    title: string;
    description: string;
  };
};
