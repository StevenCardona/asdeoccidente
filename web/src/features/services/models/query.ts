import type { SanityImageSource } from "@sanity/image-url";

export type ServicesPageDoc = {
  hero?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    image?: SanityImageSource | null;
    imageAlt?: string;
    /** Legacy compact intro — used as fallback if title is empty. */
    intro?: {
      eyebrow?: string;
      title?: string;
      subtitle?: string;
    } | null;
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
  seo?: {
    title?: string;
    description?: string;
  } | null;
};

export const servicesPageQuery = `*[_type == "servicesPage" && _id == "servicesPage"][0]{
  hero{
    badge,
    title,
    subtitle,
    image,
    "imageAlt": image.alt,
    intro{ eyebrow, title, subtitle }
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
  seo{ title, description }
}`;
