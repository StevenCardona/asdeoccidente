import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import { emptyServicesContent } from "./defaults";
import type { ServicesPageDoc } from "./query";
import type {
  ServicesContent,
  ServicesDownload,
  ServicesFeeRow,
  ServicesSection,
} from "./types";

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parsePrice(value: number | undefined): number | null {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return null;
  }
  return value;
}

function mapFeeRows(
  rows:
    | Array<{
        concepto?: string;
        priceSocio?: number;
        priceNoSocio?: number;
      }>
    | null
    | undefined,
): ServicesFeeRow[] {
  const result: ServicesFeeRow[] = [];
  for (const row of rows ?? []) {
    const concepto = row?.concepto?.trim();
    if (!concepto) continue;
    result.push({
      concepto,
      priceSocio: parsePrice(row?.priceSocio),
      priceNoSocio: parsePrice(row?.priceNoSocio),
    });
  }
  return result;
}

function mapDownloads(
  items: Array<{ label?: string; fileUrl?: string | null }> | null | undefined,
): ServicesDownload[] {
  const result: ServicesDownload[] = [];
  for (const item of items ?? []) {
    const label = item?.label?.trim();
    if (!label) continue;
    result.push({
      label,
      fileUrl: item?.fileUrl?.trim() || "",
    });
  }
  return result;
}

function mapSections(
  sections: ServicesPageDoc["sections"],
): ServicesSection[] {
  const result: ServicesSection[] = [];
  for (const section of sections ?? []) {
    const title = section?.title?.trim();
    if (!title) continue;
    const slug =
      section?.slug?.current?.trim() ||
      slugify(title) ||
      `seccion-${result.length + 1}`;
    result.push({
      title,
      slug,
      description: section?.description?.trim() || "",
      icon: section?.icon?.trim() || "",
      feeRows: mapFeeRows(section?.feeRows),
      downloads: mapDownloads(section?.downloads),
    });
  }
  return result;
}

export function mergeServices(doc: ServicesPageDoc | null): ServicesContent {
  if (!doc) return { ...emptyServicesContent, sections: [] };

  const hero = doc.hero;
  const legacy = hero?.intro;
  const resolved = resolveSanityImage(
    hero?.image as SanityImageSource | null | undefined,
    hero?.imageAlt,
  );

  return {
    hero: {
      badge: hero?.badge?.trim() || legacy?.eyebrow?.trim() || "",
      title: hero?.title?.trim() || legacy?.title?.trim() || "",
      subtitle: hero?.subtitle?.trim() || legacy?.subtitle?.trim() || "",
      image: resolved.src || "",
      imageAlt: resolved.alt,
    },
    sections: mapSections(doc.sections),
    seo: {
      title: doc.seo?.title?.trim() || "",
      description: doc.seo?.description?.trim() || "",
    },
  };
}

export function isServicesContentEmpty(content: ServicesContent): boolean {
  return (
    !content.hero.title.trim() &&
    !content.hero.image &&
    content.sections.length === 0
  );
}
