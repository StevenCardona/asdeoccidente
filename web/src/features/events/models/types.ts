export type EventStatus =
  | "proxima"
  | "en_curso"
  | "inscripciones"
  | "boleteria"
  | "finalizada";

export type EventKind =
  | "grado-a"
  | "grado-aa"
  | "grado-b"
  | "exposicion"
  | "festival"
  | "remate";

export type EventSession = {
  date: string;
  label: string;
  time?: string;
};

export type EventImage = {
  src: string;
  alt: string;
};

export type EventInfoCta = {
  label: string;
  action: "whatsapp" | "link";
  href?: string;
};

export type EventInfoCtaNote = {
  text: string;
  icon?: "message" | "phone" | "ticket" | "info";
};

export type EventDetailInfoSection = {
  type: "info";
  eyebrow?: string;
  title?: string;
  /** Full section text; newlines allowed. */
  body: string;
  image?: EventImage;
  imagePosition?: "left" | "right";
  cta?: EventInfoCta;
  ctaNote?: EventInfoCtaNote;
};

export type EventDetailPricesSection = {
  type: "prices";
  title?: string;
  rows: { label: string; amountLabel: string }[];
};

export type EventDetailGallerySection = {
  type: "gallery";
  title?: string;
  subtitle?: string;
  images: EventImage[];
};

export type EventDetailSection =
  | EventDetailInfoSection
  | EventDetailPricesSection
  | EventDetailGallerySection;

export type Event = {
  title: string;
  slug: string;
  featured: boolean;
  banner: EventImage;
  highlightImage?: EventImage;
  teaser: string;
  startDate: string;
  endDate?: string;
  placeLabel: string;
  summary: string;
  detailSections?: EventDetailSection[];
  ticketNotes: string;
  ticketPrices?: { label: string; amountLabel: string }[];
  sessions: EventSession[];
  kind?: EventKind;
  status?: EventStatus;
  seo: {
    title: string;
    description: string;
  };
};

export type EventInput = {
  title: string;
  slug: string;
  startDate: string;
  placeLabel: string;
  endDate?: string;
  featured?: boolean;
  kind?: EventKind;
  summary?: string;
  teaser?: string;
  ticketNotes?: string;
  ticketPrices?: Event["ticketPrices"];
  sessions?: EventSession[];
  detailSections?: EventDetailSection[];
  banner?: EventImage;
  highlightImage?: EventImage;
  status?: EventStatus;
  seo?: {
    title?: string;
    description?: string;
  };
};

export type EventFaqItem = {
  question: string;
  answer: string;
};

export type EventReview = {
  name: string;
  place: string;
  rating: number;
  text: string;
};

export type EventsListContent = {
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
  reviews: EventReview[];
  galleryIntro: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  gallery: EventImage[];
  faqIntro: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  faq: EventFaqItem[];
  emptyCalendarMessage: string;
  seo: {
    title: string;
    description: string;
  };
};

export type EventsContent = {
  events: Event[];
  list: EventsListContent;
};
