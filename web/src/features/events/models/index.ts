/**
 * Events list + detail. Loads `eventsPage` chrome and `event` documents.
 * List page uses featured event hero when available; otherwise `eventsPage.hero`.
 */
import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  buildEventsContent,
  emptyEventsContent,
  emptyEventsListContent,
  mapEvent,
  mapEventsPage,
} from "./map";
import {
  eventBySlugQuery,
  eventSlugsQuery,
  eventsPageQuery,
  eventsQuery,
  type EventDoc,
  type EventsPageDoc,
} from "./query";
import type { Event, EventsContent } from "./types";

export type {
  Event,
  EventDetailGallerySection,
  EventDetailInfoSection,
  EventDetailPricesSection,
  EventDetailSection,
  EventFaqItem,
  EventImage,
  EventInfoCta,
  EventInfoCtaNote,
  EventInput,
  EventKind,
  EventReview,
  EventSession,
  EventStatus,
  EventsContent,
  EventsListContent,
  EventsPageHero,
} from "./types";

export {
  eventKindLabel,
  eventStatusLabel,
  formatEventDateRange,
  formatEventMonthYear,
  getFeaturedEvent,
  kindsPresent,
  resolveEventStatus,
  sortEventsByStart,
} from "./format";

export {
  eventHasTicketPrices,
  normalizeEvent,
  resolveDetailSections,
} from "./normalize";

export {
  buildEventsContent,
  emptyEventsContent,
  emptyEventsListContent,
  mapEvent,
  mapEventsPage,
} from "./map";

export function isEventsContentEmpty(content: EventsContent): boolean {
  return content.events.length === 0;
}

export const fetchEventsContent = cache(async (): Promise<EventsContent> => {
  const client = getSanityDataClient();
  if (!client) {
    return emptyEventsContent();
  }

  try {
    const [pageDoc, eventDocs] = await Promise.all([
      sanityFetch<EventsPageDoc | null>(client, eventsPageQuery),
      sanityFetch<EventDoc[]>(client, eventsQuery),
    ]);
    const list = mapEventsPage(pageDoc);
    const events = (eventDocs ?? [])
      .map((doc) => mapEvent(doc))
      .filter((event): event is Event => Boolean(event));
    return buildEventsContent(events, list);
  } catch (error) {
    console.error("[sanity] fetchEventsContent failed", error);
    return emptyEventsContent();
  }
});

export const fetchEventBySlug = cache(
  async (slug: string): Promise<Event | null> => {
    const trimmed = slug.trim();
    if (!trimmed) return null;

    const client = getSanityDataClient();
    if (!client) return null;

    try {
      const doc = await sanityFetch<EventDoc | null>(client, eventBySlugQuery, {
        slug: trimmed,
      });
      return mapEvent(doc);
    } catch (error) {
      console.error("[sanity] fetchEventBySlug failed", error);
      return null;
    }
  },
);

export const fetchEventSlugs = cache(async (): Promise<string[]> => {
  const client = getSanityDataClient();
  if (!client) return [];

  try {
    const slugs = await sanityFetch<Array<string | null>>(
      client,
      eventSlugsQuery,
    );
    return (slugs ?? [])
      .map((slug) => slug?.trim() || "")
      .filter(Boolean);
  } catch (error) {
    console.error("[sanity] fetchEventSlugs failed", error);
    return [];
  }
});

export const fetchEventsPageList = cache(async () => {
  const client = getSanityDataClient();
  if (!client) return emptyEventsListContent();
  try {
    const doc = await sanityFetch<EventsPageDoc | null>(
      client,
      eventsPageQuery,
    );
    return mapEventsPage(doc);
  } catch (error) {
    console.error("[sanity] fetchEventsPageList failed", error);
    return emptyEventsListContent();
  }
});
