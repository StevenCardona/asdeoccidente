import { formatFairDateRange } from "./format";
import type {
  Fair,
  FairDetailSection,
  FairImage,
  FairInput,
} from "./types";

export const DEFAULT_FAIR_TICKET_NOTES =
  "Entrada general, palcos e inscripción de ejemplares por WhatsApp.";

export const DEFAULT_FAIR_GALLERY: FairImage[] = [
  {
    src: "/imgs/banner3.webp",
    alt: "Público y pista en feria equina",
  },
  {
    src: "/imgs/banner2.jpg",
    alt: "Ejemplar en exposición",
  },
  {
    src: "/imgs/lugar.webp",
    alt: "Instalaciones de la sede Asdeoccidente",
  },
  {
    src: "/imgs/lugar-1.jpg",
    alt: "Espacios de la sede para eventos",
  },
  {
    src: "/imgs/lugar-2.jpg",
    alt: "Ambiente campestre de la sede",
  },
  {
    src: "/imgs/lugar-3.jpg",
    alt: "Sede lista para feria y exposición",
  },
];

const DEFAULT_BANNER: FairImage = {
  src: "/imgs/banner3.webp",
  alt: "Ambiente de feria equina en Asdeoccidente",
};

const DEFAULT_HIGHLIGHT: FairImage = {
  src: "/imgs/banner2.jpg",
  alt: "Momento de pista en exposición",
};

function teaserFromSummary(summary: string, max = 90): string {
  const clean = summary.trim().replace(/\s+/g, " ");
  if (!clean) return "";
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max);
  const cut = slice.lastIndexOf(" ");
  return `${(cut > 40 ? slice.slice(0, cut) : slice).trim()}…`;
}

function defaultSeo(
  title: string,
  startDate: string,
  endDate?: string,
): Fair["seo"] {
  const range = formatFairDateRange(startDate, endDate);
  return {
    title,
    description: `${title}. ${range}.`,
  };
}

/** Fill authoring gaps so editors only set calendar essentials. */
export function normalizeFair(input: FairInput): Fair {
  const summary = input.summary?.trim() ?? "";
  const teaser =
    input.teaser?.trim() || teaserFromSummary(summary) || input.title;
  const seoTitle = input.seo?.title?.trim() || input.title;
  const seoDescription =
    input.seo?.description?.trim() ||
    defaultSeo(input.title, input.startDate, input.endDate).description;

  return {
    title: input.title.trim(),
    slug: input.slug.trim(),
    featured: input.featured ?? false,
    banner: input.banner ?? DEFAULT_BANNER,
    highlightImage: input.highlightImage ?? DEFAULT_HIGHLIGHT,
    teaser,
    startDate: input.startDate,
    endDate: input.endDate,
    placeLabel: input.placeLabel.trim(),
    summary,
    detailSections: input.detailSections,
    ticketNotes: input.ticketNotes?.trim() || DEFAULT_FAIR_TICKET_NOTES,
    ticketPrices: input.ticketPrices,
    sessions: input.sessions ?? [],
    gallery: input.gallery?.length ? input.gallery : [...DEFAULT_FAIR_GALLERY],
    kind: input.kind,
    status: input.status,
    updatedAt: input.updatedAt,
    seo: {
      title: seoTitle,
      description: seoDescription,
    },
  };
}

/** Resolve detail blocks; invent a simple info section when none provided. */
export function resolveDetailSections(fair: Fair): FairDetailSection[] {
  if (fair.detailSections && fair.detailSections.length > 0) {
    return fair.detailSections;
  }

  const body = [fair.summary.trim()].filter(Boolean);
  if (body.length === 0) return [];

  return [
    {
      type: "info",
      title: "Información de la feria",
      body,
      imagePosition: "right",
    },
  ];
}

export function fairHasTicketPrices(fair: Fair): boolean {
  if ((fair.ticketPrices?.length ?? 0) > 0) return true;
  return (fair.detailSections ?? []).some(
    (section) =>
      section.type === "prices" &&
      section.rows.some((row) => row.label.trim() && row.amountLabel.trim()),
  );
}
