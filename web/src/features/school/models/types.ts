export type SchoolMethodStep = {
  title: string;
  text: string;
};

export type SchoolMethodAxis = {
  title: string;
  text: string;
  icon: "Scale" | "Compass" | "Focus" | "Dumbbell";
};

export type SchoolStaffMember = {
  name: string;
  role: string;
  badge: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export type SchoolHorse = {
  name: string;
  gait: string;
  blurb: string;
  image: string;
  imageAlt: string;
};

export type SchoolGalleryTile = {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  span: "large" | "tall" | "wide" | "small";
};

export type SchoolFeePrices = {
  socio: number;
  noSocio: number;
  hijoMontador: number;
};

export type SchoolFeePlan = {
  id: string;
  classCount: number;
  packageLabel: string;
  title: string;
  description: string;
  prices: SchoolFeePrices;
  featured?: boolean;
  ctaLabel: string;
};

export type SchoolFaqItem = {
  question: string;
  answer: string;
};

export type SchoolSectionIntro = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type SchoolContent = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    image: string;
    imageAlt: string;
  };
  method: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    steps: SchoolMethodStep[];
    axes: SchoolMethodAxis[];
  };
  staff: {
    eyebrow: string;
    title: string;
    subtitle: string;
    members: SchoolStaffMember[];
  };
  horses: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: SchoolHorse[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tiles: SchoolGalleryTile[];
  };
  fees: {
    eyebrow: string;
    title: string;
    subtitle: string;
    plans: SchoolFeePlan[];
    enrollmentNote: string;
    benefitsNote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: SchoolFaqItem[];
  };
  seo: {
    title: string;
    description: string;
  };
};
