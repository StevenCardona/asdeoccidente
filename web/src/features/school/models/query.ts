import type { SanityImageSource } from "@sanity/image-url";

type IntroDoc = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

type ImageDoc = SanityImageSource & { alt?: string };

export const schoolQuery = `*[_type == "school" && _id == "school"][0]{
  hero{
    badge,
    title,
    subtitle,
    primaryCtaLabel,
    secondaryCtaLabel,
    image,
    "imageAlt": image.alt
  },
  method{
    intro{ eyebrow, title, subtitle },
    image,
    "imageAlt": image.alt,
    steps[]{ title, text },
    axes[]{ title, text, icon }
  },
  horses{
    intro{ eyebrow, title, subtitle },
    items[]{
      name,
      gait,
      blurb,
      image,
      "imageAlt": image.alt
    }
  },
  gallery{
    intro{ eyebrow, title, subtitle },
    tiles[]{
      badge,
      title,
      subtitle,
      span,
      image,
      "imageAlt": image.alt
    }
  },
  staff{
    intro{ eyebrow, title, subtitle },
    members[]{
      name,
      role,
      badge,
      bio,
      image,
      "imageAlt": image.alt
    }
  },
  fees{
    intro{ eyebrow, title, subtitle },
    plans[]{
      id,
      classCount,
      packageLabel,
      title,
      description,
      priceSocio,
      priceNoSocio,
      priceHijoMontador,
      featured,
      ctaLabel
    },
    enrollmentNote,
    benefitsNote
  },
  faq{
    intro{ eyebrow, title, subtitle },
    items[]{ question, answer }
  },
  seo{ title, description }
}`;

export type SchoolDoc = {
  hero?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    primaryCtaLabel?: string;
    secondaryCtaLabel?: string;
    image?: ImageDoc | null;
    imageAlt?: string;
  } | null;
  method?: {
    intro?: IntroDoc | null;
    image?: ImageDoc | null;
    imageAlt?: string;
    steps?: Array<{ title?: string; text?: string }> | null;
    axes?: Array<{ title?: string; text?: string; icon?: string }> | null;
  } | null;
  horses?: {
    intro?: IntroDoc | null;
    items?: Array<{
      name?: string;
      gait?: string;
      blurb?: string;
      image?: ImageDoc | null;
      imageAlt?: string;
    }> | null;
  } | null;
  gallery?: {
    intro?: IntroDoc | null;
    tiles?: Array<{
      badge?: string;
      title?: string;
      subtitle?: string;
      span?: string;
      image?: ImageDoc | null;
      imageAlt?: string;
    }> | null;
  } | null;
  staff?: {
    intro?: IntroDoc | null;
    members?: Array<{
      name?: string;
      role?: string;
      badge?: string;
      bio?: string;
      image?: ImageDoc | null;
      imageAlt?: string;
    }> | null;
  } | null;
  fees?: {
    intro?: IntroDoc | null;
    plans?: Array<{
      id?: string;
      classCount?: number;
      packageLabel?: string;
      title?: string;
      description?: string;
      priceSocio?: number;
      priceNoSocio?: number;
      priceHijoMontador?: number;
      featured?: boolean;
      ctaLabel?: string;
    }> | null;
    enrollmentNote?: string;
    benefitsNote?: string;
  } | null;
  faq?: {
    intro?: IntroDoc | null;
    items?: Array<{ question?: string; answer?: string }> | null;
  } | null;
  seo?: {
    title?: string;
    description?: string;
  } | null;
};
