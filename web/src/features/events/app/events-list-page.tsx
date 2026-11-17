"use client";

import { EventsCalendar } from "@/features/events/components/events-calendar";
import { EventsEmptyState } from "@/features/events/components/events-empty-state";
import { EventsFaq } from "@/features/events/components/events-faq";
import { EventsFeaturedHero } from "@/features/events/components/events-featured-hero";
import { EventsGallery } from "@/features/events/components/events-gallery";
import { EventsPageSkeleton } from "@/features/events/components/events-page-skeleton";
import { EventsReviews } from "@/features/events/components/events-reviews";
import { useEventsContent } from "@/features/events/hooks/use-events";
import {
  getFeaturedEvent,
  isEventsContentEmpty,
  type EventsContent,
} from "@/features/events/models";
import type { SiteSettings } from "@/features/site/models";

type EventsListPageProps = {
  initialContent?: EventsContent;
  settings: SiteSettings;
};

export function EventsListPage({
  initialContent,
  settings,
}: EventsListPageProps) {
  const eventsQuery = useEventsContent(initialContent);
  const content = eventsQuery.data;
  const isBootstrapping = eventsQuery.isPending && !content;

  if (isBootstrapping || !content) {
    return <EventsPageSkeleton />;
  }

  if (isEventsContentEmpty(content)) {
    return (
      <EventsEmptyState
        settings={settings}
        message={content.list.emptyCalendarMessage}
      />
    );
  }

  const featured = getFeaturedEvent(content.events);

  return (
    <div>
      {featured ? <EventsFeaturedHero event={featured} /> : null}
      <EventsCalendar
        events={content.events}
        intro={content.list.calendarIntro}
        emptyMessage={content.list.emptyCalendarMessage}
      />
      <EventsReviews
        intro={content.list.reviewsIntro}
        reviews={content.list.reviews}
      />
      <EventsGallery
        intro={content.list.galleryIntro}
        photos={content.list.gallery}
      />
      <EventsFaq intro={content.list.faqIntro} items={content.list.faq} />
    </div>
  );
}
