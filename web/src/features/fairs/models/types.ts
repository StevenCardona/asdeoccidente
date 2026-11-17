export type FairStatus =
  | "proxima"
  | "en_curso"
  | "inscripciones"
  | "boleteria"
  | "finalizada";

/** Optional taxonomy — filters only when present on data. */
export type FairKind =
  | "grado-a"
  | "grado-aa"
  | "grado-b"
  | "exposicion"
  | "festival"
  | "remate";

export type FairSession = {
  date: string;
  /** Free-text day / activity title (gait, clinic, remate, etc.). */
  label: string;
  /** Optional time note (e.g. Inicia a las 9 a.m.). */
  time?: string;
};

export type FairImage = {
  src: string;
  alt: string;
};

export type FairInfoCta = {
  label: string;
  /** "whatsapp" uses site WhatsApp ferias; "link" uses href. */
  action: "whatsapp" | "link";
  href?: string;
};

export type FairInfoCtaNote = {
  text: string;
  icon?: "message" | "phone" | "ticket" | "info";
};

export type FairDetailInfoSection = {
  type: "info";
  eyebrow?: string;
  title?: string;
  body: string[];
  imagePosition?: "left" | "right";
  cta?: FairInfoCta;
  ctaNote?: FairInfoCtaNote;
};

export type FairDetailPricesSection = {
  type: "prices";
  title?: string;
  rows: { label: string; amountLabel: string }[];
};

export type FairDetailGallerySection = {
  type: "gallery";
  title?: string;
  subtitle?: string;
};

export type FairDetailSection =
  | FairDetailInfoSection
  | FairDetailPricesSection
  | FairDetailGallerySection;

/** Normalized fair used by the UI. */
export type Fair = {
  title: string;
  slug: string;
  featured: boolean;
  banner: FairImage;
  highlightImage?: FairImage;
  teaser: string;
  startDate: string;
  endDate?: string;
  placeLabel: string;
  summary: string;
  /** Optional detail body blocks (info / prices / gallery). */
  detailSections?: FairDetailSection[];
  ticketNotes: string;
  /** Confirmed ticket prices only; prefer detailSections prices when present. */
  ticketPrices?: { label: string; amountLabel: string }[];
  sessions: FairSession[];
  gallery: FairImage[];
  kind?: FairKind;
  status?: FairStatus;
  updatedAt?: string;
  seo: {
    title: string;
    description: string;
  };
};

/**
 * Authoring input: only calendar essentials required.
 * Media, teaser, ticketNotes, seo, sessions filled by normalizeFair.
 */
export type FairInput = {
  title: string;
  slug: string;
  startDate: string;
  placeLabel: string;
  endDate?: string;
  featured?: boolean;
  kind?: FairKind;
  summary?: string;
  teaser?: string;
  ticketNotes?: string;
  ticketPrices?: Fair["ticketPrices"];
  sessions?: FairSession[];
  detailSections?: FairDetailSection[];
  banner?: FairImage;
  highlightImage?: FairImage;
  gallery?: FairImage[];
  status?: FairStatus;
  updatedAt?: string;
  seo?: {
    title?: string;
    description?: string;
  };
};

export type FairFaqItem = {
  question: string;
  answer: string;
};

export type FairReview = {
  name: string;
  place: string;
  rating: number;
  text: string;
};

export type FairsListContent = {
  calendarIntro: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  reviewsIntro: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  reviews: FairReview[];
  galleryIntro: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  gallery: FairImage[];
  faqIntro: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  faq: FairFaqItem[];
  emptyCalendarMessage: string;
};

export type FairsContent = {
  fairs: Fair[];
  list: FairsListContent;
};
