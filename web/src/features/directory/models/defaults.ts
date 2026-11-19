import type { DirectoryPageContent } from "./types";

export const emptyDirectoryContent: DirectoryPageContent = {
  hero: {
    badge: "",
    title: "",
    subtitle: "",
    image: "",
    imageAlt: "",
  },
  emptyTitle: "",
  emptySubtitle: "",
  datasets: [],
  seo: {
    title: "",
    description: "",
  },
};

/** @deprecated Use emptyDirectoryContent */
export const defaultDirectoryContent = emptyDirectoryContent;
