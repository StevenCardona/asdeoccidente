import type { SanityImageSource } from "@sanity/image-url";

type IntroDoc = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

type ImageDoc = SanityImageSource & { alt?: string };

export type MembershipPageDoc = {
  hero?: {
    title?: string;
    subtitle?: string;
    primaryCtaLabel?: string;
    image?: ImageDoc | null;
  } | null;
  about?: {
    eyebrow?: string;
    title?: string;
    paragraphs?: string[] | null;
    photos?: ImageDoc[] | null;
  } | null;
  missionVision?: {
    pillars?: Array<{
      title?: string;
      text?: string;
      image?: ImageDoc | null;
    }> | null;
  } | null;
  memberBenefits?: {
    intro?: IntroDoc | null;
    items?: Array<{ title?: string; text?: string }> | null;
    gallery?: {
      intro?: IntroDoc | null;
      photos?: ImageDoc[] | null;
    } | null;
  } | null;
  affiliateBenefits?: {
    intro?: IntroDoc | null;
    items?: Array<{ title?: string; text?: string }> | null;
  } | null;
  costs?: {
    intro?: IntroDoc | null;
    rows?: Array<{
      label?: string;
      cuotaDisplay?: string;
      valorDisplay?: string;
    }> | null;
  } | null;
  requirements?: {
    intro?: IntroDoc | null;
    items?: string[] | null;
    formatLabel?: string;
    formatFileUrl?: string | null;
  } | null;
  reviewsIntro?: IntroDoc | null;
  reviews?: Array<{
    name?: string;
    place?: string;
    rating?: number;
    text?: string;
  }> | null;
  seo?: {
    title?: string;
    description?: string;
  } | null;
};

export const membershipPageQuery = `*[_type == "membershipPage" && _id == "membershipPage"][0]{
  hero{
    title,
    subtitle,
    primaryCtaLabel,
    image,
    "imageAlt": image.alt
  },
  about{
    eyebrow,
    title,
    paragraphs,
    photos[]{ ..., alt }
  },
  missionVision{
    pillars[]{
      title,
      text,
      image,
      "imageAlt": image.alt
    }
  },
  memberBenefits{
    intro{ eyebrow, title, subtitle },
    items[]{ title, text },
    gallery{
      intro{ eyebrow, title, subtitle },
      photos[]{ ..., alt }
    }
  },
  affiliateBenefits{
    intro{ eyebrow, title, subtitle },
    items[]{ title, text }
  },
  costs{
    intro{ eyebrow, title, subtitle },
    rows[]{ label, cuotaDisplay, valorDisplay }
  },
  requirements{
    intro{ eyebrow, title, subtitle },
    items,
    formatLabel,
    "formatFileUrl": formatFile.asset->url
  },
  reviewsIntro{ eyebrow, title, subtitle },
  reviews[]{ name, place, rating, text },
  seo{ title, description }
}`;
