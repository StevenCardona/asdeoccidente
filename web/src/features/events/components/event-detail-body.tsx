import {
  CalendarDays,
  Info,
  MapPin,
  MessageCircle,
  Phone,
  Ticket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  EventKindBadge,
  EventStatusBadge,
} from "@/features/events/components/event-status-badge";
import {
  formatEventDateRange,
  resolveDetailSections,
  resolveEventStatus,
  type Event,
  type EventDetailGallerySection,
  type EventDetailInfoSection,
  type EventDetailPricesSection,
} from "@/features/events/models";
import type { SiteSettings } from "@/features/site/models";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { SafeImage } from "@/shared/components/safe-image";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";

type EventDetailBodyProps = {
  event: Event;
  settings: SiteSettings;
};

const CTA_NOTE_ICONS: Record<"message" | "phone" | "ticket" | "info", LucideIcon> =
  {
    message: MessageCircle,
    phone: Phone,
    ticket: Ticket,
    info: Info,
  };

const DEFAULT_GALLERY_TITLE = "Momentos del evento";
const DEFAULT_GALLERY_SUBTITLE =
  "Imágenes de esta cita en la sede y en el calendario del Valle.";

function splitBody(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function InfoSection({
  event,
  section,
  settings,
}: {
  event: Event;
  section: EventDetailInfoSection;
  settings: SiteSettings;
}) {
  const infoTitle = section.title?.trim() || "Información del evento";
  const eyebrow = section.eyebrow?.trim() || "";
  const imageOnLeft = section.imagePosition === "left";
  const paragraphs = splitBody(section.body);
  const hasSessions = event.sessions.some(
    (s) => s.date.trim() && s.label.trim(),
  );
  const sectionImage = section.image;
  const status = resolveEventStatus(event);
  const dateLabel = formatEventDateRange(event.startDate, event.endDate);
  const whatsappHref = buildWhatsAppUrl(settings, "fairs");
  const cta = section.cta;
  const ctaNote = section.ctaNote;
  const NoteIcon =
    ctaNote?.icon && CTA_NOTE_ICONS[ctaNote.icon]
      ? CTA_NOTE_ICONS[ctaNote.icon]
      : null;
  const ctaHref =
    cta?.action === "whatsapp"
      ? whatsappHref
      : cta?.action === "link" && cta.href?.trim()
        ? cta.href.trim()
        : null;
  const ctaIsWhatsapp = cta?.action === "whatsapp";
  const showCta = Boolean(cta?.label.trim() && ctaHref && ctaHref !== "#");

  return (
    <section>
      <div
        className={cn(
          "grid gap-8 lg:items-start lg:gap-10",
          imageOnLeft
            ? "lg:grid-cols-[0.85fr_1.15fr] lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : "lg:grid-cols-[1.15fr_0.85fr]",
        )}
      >
        <div>
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={cn(
              "font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl",
              eyebrow && "mt-2",
            )}
          >
            {infoTitle}
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          {!hasSessions ? (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              La programación oficial de este evento se publica con el afiche.
            </p>
          ) : null}

          {showCta && cta && ctaHref ? (
            <div className="mt-6 space-y-3">
              <Button
                asChild
                variant={ctaIsWhatsapp ? "whatsapp" : "primary"}
                size="lg"
              >
                <a
                  href={ctaHref}
                  {...(ctaIsWhatsapp || ctaHref.startsWith("http")
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                >
                  {ctaIsWhatsapp ? (
                    <WhatsAppIcon className="h-4 w-4" />
                  ) : null}
                  {cta.label}
                </a>
              </Button>
              {ctaNote?.text.trim() ? (
                <p className="flex items-start gap-2 text-sm text-muted-foreground">
                  {NoteIcon ? (
                    <NoteIcon
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden
                    />
                  ) : null}
                  <span>{ctaNote.text}</span>
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

        {sectionImage ? (
          <SafeImage
            src={sectionImage.src}
            alt={sectionImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 36vw"
            wrapperClassName={cn(
              "aspect-[4/3] w-full max-w-md rounded-lg",
              imageOnLeft ? "lg:mr-auto" : "lg:ml-auto",
            )}
          />
        ) : (
          <aside
            className={cn(
              "max-w-md space-y-4 border-l-2 border-primary pl-5",
              imageOnLeft ? "lg:mr-auto" : "lg:ml-auto",
            )}
          >
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
              Datos del evento
            </p>
            <ul className="space-y-3 text-sm text-secondary md:text-base">
              <li className="flex items-start gap-2">
                <CalendarDays
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden
                />
                <span>{dateLabel}</span>
              </li>
              {event.placeLabel.trim() ? (
                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>{event.placeLabel}</span>
                </li>
              ) : null}
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              <EventStatusBadge status={status} />
              {event.kind ? <EventKindBadge kind={event.kind} /> : null}
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}

function PricesSection({ section }: { section: EventDetailPricesSection }) {
  const rows = section.rows.filter(
    (row) => row.label.trim() && row.amountLabel.trim(),
  );
  if (rows.length === 0) return null;

  return (
    <section id="entradas" className="scroll-mt-24">
      <h2 className="font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
        {section.title?.trim() || "Entradas"}
      </h2>
      <ul className="mt-6 max-w-xl divide-y divide-border rounded-lg border border-border">
        {rows.map((row) => (
          <li
            key={`${row.label}-${row.amountLabel}`}
            className="flex items-baseline justify-between gap-4 px-4 py-3"
          >
            <span className="font-medium text-secondary">{row.label}</span>
            <span className="shrink-0 font-semibold text-primary">
              {row.amountLabel}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GallerySection({ section }: { section: EventDetailGallerySection }) {
  const photos = section.images.filter((p) => p.src.trim());
  if (photos.length === 0) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
        {section.title?.trim() || DEFAULT_GALLERY_TITLE}
      </h2>
      {(section.subtitle?.trim() || DEFAULT_GALLERY_SUBTITLE) ? (
        <p className="mt-2 text-base text-muted-foreground">
          {section.subtitle?.trim() || DEFAULT_GALLERY_SUBTITLE}
        </p>
      ) : null}
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <li key={`${photo.src}-${photo.alt}`}>
            <SafeImage
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              wrapperClassName="aspect-[4/3] rounded-lg"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function EventDetailBody({ event, settings }: EventDetailBodyProps) {
  const sections = resolveDetailSections(event);
  const legacyPrices =
    !sections.some((s) => s.type === "prices") &&
    (event.ticketPrices?.length ?? 0) > 0
      ? event.ticketPrices
      : null;

  return (
    <div className="bg-background px-5 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl space-y-14">
        {sections.map((section, index) => {
          if (section.type === "info") {
            return (
              <InfoSection
                key={`info-${index}`}
                event={event}
                section={section}
                settings={settings}
              />
            );
          }
          if (section.type === "prices") {
            return <PricesSection key={`prices-${index}`} section={section} />;
          }
          return (
            <GallerySection key={`gallery-${index}`} section={section} />
          );
        })}

        {legacyPrices ? (
          <PricesSection section={{ type: "prices", rows: legacyPrices }} />
        ) : null}
      </div>
    </div>
  );
}
