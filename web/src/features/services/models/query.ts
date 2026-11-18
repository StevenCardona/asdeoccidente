import type { SanityImageSource } from "@sanity/image-url";

type IntroDoc = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

type ImageDoc = SanityImageSource & { alt?: string };

export type ServicesPageDoc = {
  hero?: {
    intro?: IntroDoc | null;
    image?: ImageDoc | null;
    imageAlt?: string;
  } | null;
  sections?: Array<{
    title?: string;
    slug?: { current?: string } | null;
    description?: string;
    icon?: string;
    feeRows?: Array<{
      concepto?: string;
      priceSocio?: number;
      priceNoSocio?: number;
    }> | null;
    downloads?: Array<{
      label?: string;
      fileUrl?: string | null;
    }> | null;
  }> | null;
  help?: {
    title?: string;
    body?: string;
    ctaLabel?: string;
  } | null;
  seo?: {
    title?: string;
    description?: string;
  } | null;
};

export const servicesPageQuery = `*[_type == "servicesPage" && _id == "servicesPage"][0]{
  hero{
    intro{ eyebrow, title, subtitle },
    image,
    "imageAlt": image.alt
  },
  sections[]{
    title,
    slug,
    description,
    icon,
    feeRows[]{ concepto, priceSocio, priceNoSocio },
    downloads[]{
      label,
      "fileUrl": file.asset->url
    }
  },
  help{ title, body, ctaLabel },
  seo{ title, description }
}`;
