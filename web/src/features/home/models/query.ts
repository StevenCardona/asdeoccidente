import type { SanityImageSource } from "@sanity/image-url";
import type { HomeCta, HomeEssenceItem } from "./types";

export const homeQuery = `*[_type == "home" && _id == "home"][0]{
  hero{
    title,
    subtitle,
    culturalLabel,
    image,
    "imageAlt": image.alt,
    primaryCta,
    secondaryCta
  },
  essence{
    intro{ eyebrow, title, subtitle },
    items[]{ title, text, icon },
    photos[]{
      ...,
      "alt": alt
    }
  },
  stats{
    show,
    intro{ eyebrow, title, subtitle },
    items[]{ value, label, prefix, icon }
  },
  services{
    intro{ eyebrow, title, subtitle },
    items[]{
      title,
      description,
      cta,
      href,
      image,
      "imageAlt": image.alt
    }
  },
  gallery{
    intro{ eyebrow, title, subtitle },
    photos[]{
      ...,
      "alt": alt
    }
  },
  gaits{
    intro{ eyebrow, title, subtitle },
    items[]{
      id,
      tab,
      tag,
      sound,
      title,
      text,
      image,
      "imageAlt": image.alt
    }
  },
  videos{
    intro{ eyebrow, title, subtitle },
    items[]{
      source,
      url,
      label,
      "fileUrl": file.asset->url
    }
  },
  seo{ title, description }
}`;

type IntroDoc = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

type ImageDoc = SanityImageSource & { alt?: string };

export type HomeDoc = {
  hero?: {
    title?: string;
    subtitle?: string;
    culturalLabel?: string;
    image?: SanityImageSource | null;
    imageAlt?: string;
    primaryCta?: Partial<HomeCta> | null;
    secondaryCta?: Partial<HomeCta> | null;
  } | null;
  essence?: {
    intro?: IntroDoc | null;
    items?: HomeEssenceItem[] | null;
    photos?: Array<ImageDoc | null> | null;
  } | null;
  stats?: {
    show?: boolean;
    intro?: IntroDoc | null;
    items?: Array<{
      value?: string;
      label?: string;
      prefix?: string;
      icon?: string;
    }> | null;
  } | null;
  services?: {
    intro?: IntroDoc | null;
    items?: Array<{
      title?: string;
      description?: string;
      cta?: string;
      href?: string;
      image?: ImageDoc | null;
      imageAlt?: string;
    }> | null;
  } | null;
  gallery?: {
    intro?: IntroDoc | null;
    photos?: Array<ImageDoc | null> | null;
  } | null;
  gaits?: {
    intro?: IntroDoc | null;
    items?: Array<{
      id?: string;
      tab?: string;
      tag?: string;
      sound?: string;
      title?: string;
      text?: string;
      image?: ImageDoc | null;
      imageAlt?: string;
    }> | null;
  } | null;
  videos?: {
    intro?: IntroDoc | null;
    items?: Array<{
      source?: string;
      url?: string;
      label?: string;
      fileUrl?: string | null;
    }> | null;
  } | null;
  seo?: {
    title?: string;
    description?: string;
  } | null;
};
