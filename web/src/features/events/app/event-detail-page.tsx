"use client";

import { EventDetailBody } from "@/features/events/components/event-detail-body";
import { EventDetailHero } from "@/features/events/components/event-detail-hero";
import { EventsEmptyState } from "@/features/events/components/events-empty-state";
import { EventDetailSkeleton } from "@/features/events/components/events-page-skeleton";
import { useEvent } from "@/features/events/hooks/use-events";
import type { Event } from "@/features/events/models";
import type { SiteSettings } from "@/features/site/models";

type EventDetailPageProps = {
  slug: string;
  initialEvent?: Event | null;
  settings: SiteSettings;
};

export function EventDetailPage({
  slug,
  initialEvent,
  settings,
}: EventDetailPageProps) {
  const eventQuery = useEvent(slug, initialEvent);
  const event = eventQuery.data;
  const isBootstrapping = eventQuery.isPending && event === undefined;

  if (isBootstrapping) {
    return <EventDetailSkeleton />;
  }

  if (!event) {
    return (
      <EventsEmptyState
        settings={settings}
        eyebrow="Eventos"
        title="Evento no disponible"
        message="No encontramos este evento. Puede que ya no esté publicado o el enlace haya cambiado."
        whatsappLabel="Consultar por WhatsApp"
      />
    );
  }

  return (
    <div>
      <EventDetailHero event={event} settings={settings} />
      <EventDetailBody event={event} settings={settings} />
    </div>
  );
}
