import type { SanityImageSource } from "@sanity/image-url";

export type EventImageDoc = SanityImageSource & { alt?: string };

export type EventSessionDoc = {
  date?: string;
  label?: string;
  time?: string;
};

export type EventDetailSectionDoc = {
  type?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  image?: EventImageDoc | null;
  imagePosition?: string;
  ctaLabel?: string;
  ctaAction?: string;
  ctaHref?: string;
  ctaNote?: string;
  ctaNoteIcon?: string;
  subtitle?: string;
  images?: EventImageDoc[] | null;
  priceRows?: Array<{ label?: string; amountLabel?: string }>;
};

export type EventDoc = {
  _id?: string;
  title?: string;
  slug?: string | { current?: string };
  summary?: string;
  placeLabel?: string;
  kind?: string;
  featured?: boolean;
  ticketNotes?: string;
  startDate?: string;
  endDate?: string;
  sessions?: EventSessionDoc[];
  detailSections?: EventDetailSectionDoc[];
  banner?: EventImageDoc;
  highlightImage?: EventImageDoc;
  seo?: { title?: string; description?: string };
};

export type EventsPageDoc = {
  hero?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    image?: EventImageDoc | null;
    primaryCtaLabel?: string;
  } | null;
  calendarIntro?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
  } | null;
  emptyCalendarMessage?: string;
  reviewsIntro?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
  } | null;
  reviews?: Array<{
    name?: string;
    place?: string;
    rating?: number;
    text?: string;
  }> | null;
  galleryIntro?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
  } | null;
  gallery?: EventImageDoc[] | null;
  faqIntro?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
  } | null;
  faq?: Array<{ question?: string; answer?: string }> | null;
  seo?: { title?: string; description?: string } | null;
};

const eventFields = `
  _id,
  title,
  "slug": slug.current,
  summary,
  placeLabel,
  kind,
  featured,
  ticketNotes,
  startDate,
  endDate,
  sessions[]{ date, label, time },
  detailSections[]{
    type,
    eyebrow,
    title,
    body,
    image,
    imagePosition,
    ctaLabel,
    ctaAction,
    ctaHref,
    ctaNote,
    ctaNoteIcon,
    subtitle,
    images[],
    priceRows[]{ label, amountLabel }
  },
  banner,
  highlightImage,
  seo{ title, description }
`;

export const eventsQuery = `*[_type == "event" && defined(slug.current) && defined(title) && defined(startDate)] | order(startDate desc) {
  ${eventFields}
}`;

export const eventBySlugQuery = `*[_type == "event" && slug.current == $slug][0]{
  ${eventFields}
}`;

export const eventSlugsQuery = `*[_type == "event" && defined(slug.current)].slug.current`;

export const eventsPageQuery = `*[_type == "eventsPage" && _id == "eventsPage"][0]{
  hero{
    badge,
    title,
    subtitle,
    image,
    "imageAlt": image.alt,
    primaryCtaLabel
  },
  calendarIntro{ eyebrow, title, subtitle },
  emptyCalendarMessage,
  reviewsIntro{ eyebrow, title, subtitle },
  reviews[]{ name, place, rating, text },
  galleryIntro{ eyebrow, title, subtitle },
  gallery[],
  faqIntro{ eyebrow, title, subtitle },
  faq[]{ question, answer },
  seo{ title, description }
}`;
