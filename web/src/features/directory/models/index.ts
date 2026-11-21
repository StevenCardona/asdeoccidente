import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { emptyDirectoryContent } from "./defaults";
import { mergeDirectory } from "./map";
import {
  directoryDatasetsQuery,
  directoryPageQuery,
  type DirectoryDatasetDoc,
  type DirectoryPageDoc,
} from "./query";
import type { DirectoryPageContent } from "./types";

export type {
  DirectoryDataset,
  DirectoryHero,
  DirectoryPageContent,
} from "./types";
export type {
  DirectoryContactMember,
  DirectoryContactTeam,
} from "./contact-team";
export { directoryContactTeam } from "./contact-team";
export { emptyDirectoryContent, defaultDirectoryContent } from "./defaults";

export const fetchDirectoryContent = cache(
  async (): Promise<DirectoryPageContent> => {
    const client = getSanityDataClient();
    if (!client) return { ...emptyDirectoryContent, datasets: [] };

    try {
      const [page, datasets] = await Promise.all([
        sanityFetch<DirectoryPageDoc | null>(client, directoryPageQuery),
        sanityFetch<DirectoryDatasetDoc[]>(client, directoryDatasetsQuery),
      ]);
      return mergeDirectory(page, datasets);
    } catch (error) {
      console.error("[sanity] fetchDirectoryContent failed", error);
      return { ...emptyDirectoryContent, datasets: [] };
    }
  },
);
