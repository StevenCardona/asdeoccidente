import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import {
  EventKindBadge,
  EventStatusBadge,
} from "@/features/events/components/event-status-badge";
import {
  formatEventDateRange,
  resolveEventStatus,
  type Event,
} from "@/features/events/models";
import { SafeImage } from "@/shared/components/safe-image";
import { Button } from "@/shared/components/ui/button";

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  const status = resolveEventStatus(event);
  const dateLabel = formatEventDateRange(event.startDate, event.endDate);
  const href = `/events/${event.slug}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-shadow hover:shadow-md">
      <div className="relative">
        {event.banner ? (
          <SafeImage
            src={event.banner.src}
            alt={event.banner.alt}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            wrapperClassName="aspect-[16/11]"
          />
        ) : (
          <div className="aspect-[16/11] bg-muted" aria-hidden />
        )}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {event.kind ? <EventKindBadge kind={event.kind} /> : null}
          <EventStatusBadge status={status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-secondary">
          <Link href={href} className="hover:underline">
            {event.title}
          </Link>
        </h3>
        {event.teaser.trim() ? (
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {event.teaser}
          </p>
        ) : null}
        <p className="mt-auto flex items-center gap-2 text-sm font-medium text-secondary">
          <CalendarDays className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          <span>{dateLabel}</span>
        </p>
        <Button asChild variant="primary" className="w-full">
          <Link href={href}>
            Ver detalle
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </article>
  );
}
