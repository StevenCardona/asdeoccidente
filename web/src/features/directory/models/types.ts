export type DirectoryHero = {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export type DirectoryDataset = {
  id: string;
  title: string;
  slug: string;
  sortOrder: number;
  headers: string[];
  rows: string[][];
  /** Original Excel CDN URL when available. */
  sourceFileUrl: string;
};

export type DirectoryPageContent = {
  hero: DirectoryHero;
  emptyTitle: string;
  emptySubtitle: string;
  datasets: DirectoryDataset[];
  seo: {
    title: string;
    description: string;
  };
};
