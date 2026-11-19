import { formatEventDateRange } from "./format";
import type {
  Event,
  EventDetailSection,
  EventImage,
  EventInput,
} from "./types";

function teaserFromSummary(summary: string, max = 90): string {
  const clean = summary.trim().replace(/\s+/g, " ");
  if (!clean) return "";
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max);
  const cut = slice.lastIndexOf(" ");
  return `${(cut > 40 ? slice.slice(0, cut) : slice).trim()}…`;
}

export function normalizeEvent(input: EventInput): Event {
  const summary = input.summary?.trim() ?? "";
  const teaser =
    input.teaser?.trim() || teaserFromSummary(summary) || input.title;
  const seoTitle = input.seo?.title?.trim() || input.title;
  const seoDescription = input.seo?.description?.trim() || "";
  const range = formatEventDateRange(input.startDate, input.endDate);

  return {
    title: input.title.trim(),
    slug: input.slug.trim(),
    featured: input.featured ?? false,
    banner: input.banner ?? null,
    highlightImage: input.highlightImage,
    teaser,
    startDate: input.startDate,
    endDate: input.endDate,
    placeLabel: input.placeLabel.trim(),
    summary,
    detailSections: input.detailSections,
    ticketNotes: input.ticketNotes?.trim() ?? "",
    ticketPrices: input.ticketPrices,
    sessions: input.sessions ?? [],
    kind: input.kind,
    status: input.status,
    seo: {
      title: seoTitle,
      description:
        seoDescription ||
        (range ? `${input.title.trim()}. ${range}.` : input.title.trim()),
    },
  };
}

export function resolveDetailSections(event: Event): EventDetailSection[] {
  if (event.detailSections && event.detailSections.length > 0) {
    return event.detailSections;
  }

  const body = event.summary.trim();
  if (!body) return [];

  return [
    {
      type: "info",
      title: "",
      body,
      imagePosition: "right",
    },
  ];
}

export function eventHasTicketPrices(event: Event): boolean {
  if ((event.ticketPrices?.length ?? 0) > 0) return true;
  return (event.detailSections ?? []).some(
    (section) =>
      section.type === "prices" &&
      section.rows.some((row) => row.label.trim() && row.amountLabel.trim()),
  );
}
