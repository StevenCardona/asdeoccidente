import type { SanityImageSource } from "@sanity/image-url";

type IntroDoc = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

type ImageDoc = SanityImageSource & { alt?: string };

type StoryDoc = {
  eyebrow?: string;
  title?: string;
  paragraphs?: string[] | null;
  benefits?: string[] | null;
  image?: ImageDoc | null;
  imagePosition?: string;
};

export type EquinotherapyPageDoc = {
  hero?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    primaryCtaLabel?: string;
    image?: ImageDoc | null;
  } | null;
  storyIntro?: StoryDoc | null;
  gallery?: {
    intro?: IntroDoc | null;
    photos?: ImageDoc[] | null;
  } | null;
  storyBenefits?: StoryDoc | null;
  reviewsIntro?: IntroDoc | null;
  reviews?: Array<{
    name?: string;
    place?: string;
    rating?: number;
    text?: string;
  }> | null;
  faq?: {
    intro?: IntroDoc | null;
    items?: Array<{
      question?: string;
      answer?: string;
    }> | null;
  } | null;
  seo?: {
    title?: string;
    description?: string;
  } | null;
};

export const equinotherapyPageQuery = `*[_type == "equinotherapyPage" && _id == "equinotherapyPage"][0]{
  hero{
    badge,
    title,
    subtitle,
    primaryCtaLabel,
    image,
    "imageAlt": image.alt
  },
  storyIntro{
    eyebrow,
    title,
    paragraphs,
    benefits,
    image,
    "imageAlt": image.alt,
    imagePosition
  },
  gallery{
    intro{ eyebrow, title, subtitle },
    photos[]{ ..., alt }
  },
  storyBenefits{
    eyebrow,
    title,
    paragraphs,
    benefits,
    image,
    "imageAlt": image.alt,
    imagePosition
  },
  reviewsIntro{ eyebrow, title, subtitle },
  reviews[]{ name, place, rating, text },
  faq{
    intro{ eyebrow, title, subtitle },
    items[]{ question, answer }
  },
  seo{ title, description }
}`;
