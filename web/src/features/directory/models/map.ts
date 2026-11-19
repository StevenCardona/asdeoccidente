import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import { emptyDirectoryContent } from "./defaults";
import type { DirectoryDatasetDoc, DirectoryPageDoc } from "./query";
import type { DirectoryDataset, DirectoryPageContent } from "./types";

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function mapDatasets(
  docs: DirectoryDatasetDoc[] | null | undefined,
): DirectoryDataset[] {
  const result: DirectoryDataset[] = [];
  for (const doc of docs ?? []) {
    const title = doc.title?.trim();
    if (!title) continue;
    const headers = (doc.headers ?? [])
      .map((header) => header?.trim() || "")
      .filter(Boolean);
    if (headers.length === 0) continue;

    const rows: string[][] = [];
    for (const row of doc.rows ?? []) {
      const cells = (row?.cells ?? []).map((cell) => String(cell ?? "").trim());
      if (cells.every((cell) => !cell)) continue;
      rows.push(headers.map((_, index) => cells[index] ?? ""));
    }

    const slug =
      doc.slug?.current?.trim() || slugify(title) || `tipo-${result.length + 1}`;

    result.push({
      id: doc._id || slug,
      title,
      slug,
      sortOrder: typeof doc.sortOrder === "number" ? doc.sortOrder : 0,
      headers,
      rows,
      sourceFileUrl: doc.sourceFileUrl?.trim() || "",
    });
  }
  return result;
}

export function mergeDirectory(
  page: DirectoryPageDoc | null,
  datasets: DirectoryDatasetDoc[] | null,
): DirectoryPageContent {
  if (!page && (!datasets || datasets.length === 0)) {
    return { ...emptyDirectoryContent, datasets: [] };
  }

  const hero = page?.hero;
  const resolved = resolveSanityImage(
    hero?.image as SanityImageSource | null | undefined,
    hero?.imageAlt,
  );

  return {
    hero: {
      badge: hero?.badge?.trim() || "",
      title: hero?.title?.trim() || "",
      subtitle: hero?.subtitle?.trim() || "",
      image: resolved.src || "",
      imageAlt: resolved.alt,
    },
    emptyTitle: page?.emptyTitle?.trim() || "",
    emptySubtitle: page?.emptySubtitle?.trim() || "",
    datasets: mapDatasets(datasets),
    seo: {
      title: page?.seo?.title?.trim() || "",
      description: page?.seo?.description?.trim() || "",
    },
  };
}
