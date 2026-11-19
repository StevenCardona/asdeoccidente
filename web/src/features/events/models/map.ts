import type { SanityImageSource } from "@sanity/image-url";
import { resolveSanityImage } from "@/shared/lib/resolve-image";
import { normalizeEvent } from "./normalize";
import type {
  EventDetailSectionDoc,
  EventDoc,
  EventImageDoc,
  EventsPageDoc,
} from "./query";
import type {
  Event,
  EventDetailSection,
  EventImage,
  EventInput,
  EventKind,
  EventsContent,
  EventsListContent,
} from "./types";

const KIND_VALUES: EventKind[] = [
  "grado-a",
  "grado-aa",
  "grado-b",
  "exposicion",
  "festival",
  "remate",
];

function mapImage(
  image: EventImageDoc | SanityImageSource | null | undefined,
  altFallback = "",
): EventImage | null {
  const alt =
    (image && typeof image === "object" && "alt" in image
      ? String((image as EventImageDoc).alt ?? "")
      : "") || altFallback;
  const resolved = resolveSanityImage(image ?? null, alt);
  if (!resolved.src) return null;
  return { src: resolved.src, alt: resolved.alt };
}

function mapKind(value: string | undefined): EventKind | undefined {
  if (!value) return undefined;
  return KIND_VALUES.includes(value as EventKind)
    ? (value as EventKind)
    : undefined;
}

function mapDetailSections(
  sections: EventDetailSectionDoc[] | null | undefined,
): EventDetailSection[] {
  const out: EventDetailSection[] = [];
  for (const section of sections ?? []) {
    const type = section.type?.trim();
    if (type === "info") {
      const body =
        typeof section.body === "string" ? section.body.trim() : "";
      const ctaLabel = section.ctaLabel?.trim();
      const image = mapImage(section.image);
      out.push({
        type: "info",
        eyebrow: section.eyebrow?.trim() || undefined,
        title: section.title?.trim() || undefined,
        body,
        image: image ?? undefined,
        imagePosition:
          section.imagePosition === "left" || section.imagePosition === "right"
            ? section.imagePosition
            : "right",
        cta: ctaLabel
          ? {
              label: ctaLabel,
              action: section.ctaAction === "link" ? "link" : "whatsapp",
              href: section.ctaHref?.trim() || undefined,
            }
          : undefined,
        ctaNote: section.ctaNote?.trim()
          ? {
              text: section.ctaNote.trim(),
              icon:
                section.ctaNoteIcon === "phone" ||
                section.ctaNoteIcon === "ticket" ||
                section.ctaNoteIcon === "info" ||
                section.ctaNoteIcon === "message"
                  ? section.ctaNoteIcon
                  : "message",
            }
          : undefined,
      });
      continue;
    }
    if (type === "prices") {
      const rows = (section.priceRows ?? [])
        .map((row) => ({
          label: row.label?.trim() || "",
          amountLabel: row.amountLabel?.trim() || "",
        }))
        .filter((row) => row.label && row.amountLabel);
      if (rows.length === 0) continue;
      out.push({
        type: "prices",
        title: section.title?.trim() || undefined,
        rows,
      });
      continue;
    }
    if (type === "gallery") {
      const images = (section.images ?? [])
        .map((photo) => mapImage(photo))
        .filter((photo): photo is EventImage => Boolean(photo));
      out.push({
        type: "gallery",
        title: section.title?.trim() || undefined,
        subtitle: section.subtitle?.trim() || undefined,
        images,
      });
    }
  }
  return out;
}

export function mapEvent(doc: EventDoc | null | undefined): Event | null {
  if (!doc) return null;
  const title = doc.title?.trim() || "";
  const slug =
    typeof doc.slug === "string"
      ? doc.slug.trim()
      : doc.slug?.current?.trim() || "";
  const startDate = doc.startDate?.trim() || "";
  const placeLabel = doc.placeLabel?.trim() || "";
  if (!title || !slug || !startDate || !placeLabel) return null;

  const banner = mapImage(doc.banner, title);
  if (!banner) return null;

  const highlight = mapImage(doc.highlightImage);

  const input: EventInput = {
    title,
    slug,
    startDate,
    endDate: doc.endDate?.trim() || undefined,
    placeLabel,
    featured: Boolean(doc.featured),
    kind: mapKind(doc.kind),
    summary: doc.summary?.trim() || "",
    ticketNotes: doc.ticketNotes?.trim() || "",
    sessions: (doc.sessions ?? [])
      .map((session) => ({
        date: session.date?.trim() || "",
        label: session.label?.trim() || "",
        time: session.time?.trim() || undefined,
      }))
      .filter((session) => session.date && session.label),
    detailSections: mapDetailSections(doc.detailSections),
    banner,
    highlightImage: highlight ?? undefined,
    seo: {
      title: doc.seo?.title?.trim() || undefined,
      description: doc.seo?.description?.trim() || undefined,
    },
  };

  return normalizeEvent(input);
}

function mergeIntro(
  intro:
    | { eyebrow?: string; title?: string; subtitle?: string }
    | null
    | undefined,
  fallback: { eyebrow: string; title: string; subtitle: string },
) {
  return {
    eyebrow: intro?.eyebrow?.trim() || fallback.eyebrow,
    title: intro?.title?.trim() || fallback.title,
    subtitle: intro?.subtitle?.trim() || fallback.subtitle,
  };
}

export function emptyEventsListContent(): EventsListContent {
  return {
    hero: {
      badge: "",
      title: "",
      subtitle: "",
      image: "",
      imageAlt: "",
      primaryCtaLabel: "",
    },
    calendarIntro: { eyebrow: "", title: "", subtitle: "" },
    reviewsIntro: { eyebrow: "", title: "", subtitle: "" },
    reviews: [],
    galleryIntro: { eyebrow: "", title: "", subtitle: "" },
    gallery: [],
    faqIntro: { eyebrow: "", title: "", subtitle: "" },
    faq: [],
    emptyCalendarMessage: "",
    seo: { title: "", description: "" },
  };
}

export function mapEventsPage(
  doc: EventsPageDoc | null | undefined,
): EventsListContent {
  const empty = emptyEventsListContent();
  if (!doc) return empty;

  const gallery = (doc.gallery ?? [])
    .map((photo) => mapImage(photo))
    .filter((photo): photo is EventImage => Boolean(photo));

  const reviews = (doc.reviews ?? [])
    .map((review) => ({
      name: review.name?.trim() || "",
      place: review.place?.trim() || "",
      rating:
        typeof review.rating === "number" && Number.isFinite(review.rating)
          ? Math.min(5, Math.max(1, Math.round(review.rating)))
          : 5,
      text: review.text?.trim() || "",
    }))
    .filter((review) => review.name && review.text);

  const faq = (doc.faq ?? [])
    .map((item) => ({
      question: item.question?.trim() || "",
      answer: item.answer?.trim() || "",
    }))
    .filter((item) => item.question && item.answer);

  const heroImage = mapImage(doc.hero?.image);

  return {
    hero: {
      badge: doc.hero?.badge?.trim() || "",
      title: doc.hero?.title?.trim() || "",
      subtitle: doc.hero?.subtitle?.trim() || "",
      image: heroImage?.src || "",
      imageAlt: heroImage?.alt || "",
      primaryCtaLabel: doc.hero?.primaryCtaLabel?.trim() || "",
    },
    calendarIntro: mergeIntro(doc.calendarIntro, empty.calendarIntro),
    reviewsIntro: mergeIntro(doc.reviewsIntro, empty.reviewsIntro),
    reviews,
    galleryIntro: mergeIntro(doc.galleryIntro, empty.galleryIntro),
    gallery,
    faqIntro: mergeIntro(doc.faqIntro, empty.faqIntro),
    faq,
    emptyCalendarMessage:
      doc.emptyCalendarMessage?.trim() || empty.emptyCalendarMessage,
    seo: {
      title: doc.seo?.title?.trim() || empty.seo.title,
      description: doc.seo?.description?.trim() || empty.seo.description,
    },
  };
}

export function emptyEventsContent(): EventsContent {
  return {
    events: [],
    list: emptyEventsListContent(),
  };
}

export function buildEventsContent(
  events: Event[],
  list: EventsListContent,
): EventsContent {
  return { events, list };
}
