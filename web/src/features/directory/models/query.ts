import type { SanityImageSource } from "@sanity/image-url";

export type DirectoryPageDoc = {
  hero?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    image?: SanityImageSource | null;
    imageAlt?: string;
  } | null;
  emptyTitle?: string;
  emptySubtitle?: string;
  seo?: {
    title?: string;
    description?: string;
  } | null;
};

export type DirectoryDatasetDoc = {
  _id?: string;
  title?: string;
  slug?: { current?: string } | null;
  sortOrder?: number;
  published?: boolean;
  headers?: string[] | null;
  rows?: Array<{ cells?: string[] | null } | null> | null;
  sourceFileUrl?: string | null;
};

export const directoryPageQuery = `*[_type == "directoryPage" && _id == "directoryPage"][0]{
  hero{
    badge,
    title,
    subtitle,
    image,
    "imageAlt": image.alt
  },
  emptyTitle,
  emptySubtitle,
  seo{ title, description }
}`;

export const directoryDatasetsQuery = `*[_type == "directoryDataset" && published != false] | order(sortOrder asc, title asc){
  _id,
  title,
  slug,
  sortOrder,
  published,
  headers,
  rows[]{ cells },
  "sourceFileUrl": sourceFile.asset->url
}`;
