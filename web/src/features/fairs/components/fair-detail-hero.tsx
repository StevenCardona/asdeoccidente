import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  ListOrdered,
  MapPin,
  Ticket,
} from "lucide-react";
import {
  FairFeaturedBadge,
  FairKindBadge,
  FairStatusBadge,
} from "@/features/fairs/components/fair-status-badge";
import {
  fairHasTicketPrices,
  formatFairDateRange,
  resolveFairStatus,
  type Fair,
} from "@/features/fairs/models";
import type { SiteSettings } from "@/features/site/models";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";

type FairDetailHeroProps = {
  fair: Fair;
  settings: SiteSettings;
};

export function FairDetailHero({ fair, settings }: FairDetailHeroProps) {
  const status = resolveFairStatus(fair);
  const dateLabel = formatFairDateRange(fair.startDate, fair.endDate);
  const whatsappHref = buildWhatsAppUrl(settings, "fairs");
  const media = fair.highlightImage ?? fair.banner;
  const sessions = fair.sessions.filter(
    (s) => s.date.trim() && s.label.trim(),
  );
  const hasTicketPrices = fairHasTicketPrices(fair);
  const ticketNote = fair.ticketNotes.trim();

  return (
    <section className="border-b border-border bg-background px-5 py-8 md:px-12 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/fairs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Volver a ferias
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <FairStatusBadge status={status} />
              {fair.featured ? <FairFeaturedBadge /> : null}
              {fair.kind ? <FairKindBadge kind={fair.kind} /> : null}
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-secondary md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {fair.title}
            </h1>

            <ul className="mt-5 space-y-3 text-sm text-secondary md:text-base">
              <li className="flex items-start gap-2">
                <CalendarDays
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden
                />
                <span>{dateLabel}</span>
              </li>
              {fair.placeLabel.trim() ? (
                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>{fair.placeLabel}</span>
                </li>
              ) : null}
              {sessions.length > 0 ? (
                <li className="flex items-start gap-2">
                  <ListOrdered
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Programación</p>
                    <ul className="mt-1.5 divide-y divide-border border-t border-border">
                      {sessions.map((session) => {
                        const dayLabel = formatFairDateRange(session.date);
                        const activity = session.label.trim();
                        const timeLabel = session.time?.trim() ?? "";
                        return (
                          <li
                            key={`${session.date}-${session.label}`}
                            className="grid grid-cols-1 gap-0.5 py-1.5 sm:grid-cols-[10.5rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-3"
                          >
                            <p
                              className="truncate text-sm text-muted-foreground"
                              title={dayLabel}
                            >
                              {dayLabel}
                            </p>
                            <p
                              className="truncate text-sm font-semibold text-secondary"
                              title={activity}
                            >
                              {activity}
                            </p>
                            {timeLabel ? (
                              <p
                                className="truncate text-xs text-muted-foreground sm:text-sm sm:text-right"
                                title={timeLabel}
                              >
                                {timeLabel}
                              </p>
                            ) : (
                              <span className="hidden sm:block" aria-hidden />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              ) : null}
            </ul>

            {ticketNote ? (
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                {ticketNote}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {whatsappHref !== "#" ? (
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Más información
                  </a>
                </Button>
              ) : (
                <Button variant="whatsapp" size="lg" disabled>
                  Más información
                </Button>
              )}
              {hasTicketPrices ? (
                <Button asChild variant="primary" size="lg">
                  <a href="#entradas">
                    <Ticket className="h-4 w-4" aria-hidden />
                    Ver entradas
                  </a>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
            <Image
              src={media.src}
              alt={media.alt}
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
