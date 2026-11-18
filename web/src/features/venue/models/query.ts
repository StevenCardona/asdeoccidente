import type { SanityImageSource } from "@sanity/image-url";

type IntroDoc = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

type ImageDoc = SanityImageSource & { alt?: string };

export type VenuePageDoc = {
  hero?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    primaryCtaLabel?: string;
    image?: ImageDoc | null;
    contactLine?: string;
  } | null;
  intro?: {
    eyebrow?: string;
    title?: string;
    paragraphs?: string[] | null;
  } | null;
  spaces?: Array<{
    title?: string;
    description?: string;
    highlights?: string[] | null;
    image?: ImageDoc | null;
    imagePosition?: string;
  }> | null;
  gallery?: {
    intro?: IntroDoc | null;
    photos?: ImageDoc[] | null;
  } | null;
  reviewsIntro?: IntroDoc | null;
  reviews?: Array<{
    name?: string;
    place?: string;
    rating?: number;
    text?: string;
  }> | null;
  /** Legacy field; only contactLine is read if hero.contactLine is empty. */
  quote?: {
    contactLine?: string;
  } | null;
  seo?: {
    title?: string;
    description?: string;
  } | null;
};

export const venuePageQuery = `*[_type == "venuePage" && _id == "venuePage"][0]{
  hero{
    badge,
    title,
    subtitle,
    primaryCtaLabel,
    image,
    "imageAlt": image.alt,
    contactLine
  },
  intro{
    eyebrow,
    title,
    paragraphs
  },
  spaces[]{
    title,
    description,
    highlights,
    image,
    "imageAlt": image.alt,
    imagePosition
  },
  gallery{
    intro{ eyebrow, title, subtitle },
    photos[]{ ..., alt }
  },
  reviewsIntro{ eyebrow, title, subtitle },
  reviews[]{ name, place, rating, text },
  quote{ contactLine },
  seo{ title, description }
}`;
