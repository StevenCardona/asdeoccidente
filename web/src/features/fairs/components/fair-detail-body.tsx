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
  FairKindBadge,
  FairStatusBadge,
} from "@/features/fairs/components/fair-status-badge";
import {
  formatFairDateRange,
  formatUpdatedAt,
  resolveDetailSections,
  resolveFairStatus,
  type Fair,
  type FairDetailGallerySection,
  type FairDetailInfoSection,
  type FairDetailPricesSection,
} from "@/features/fairs/models";
import type { SiteSettings } from "@/features/site/models";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { SafeImage } from "@/shared/components/safe-image";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";

type FairDetailBodyProps = {
  fair: Fair;
  settings: SiteSettings;
};

const CTA_NOTE_ICONS: Record<"message" | "phone" | "ticket" | "info", LucideIcon> =
  {
    message: MessageCircle,
    phone: Phone,
    ticket: Ticket,
    info: Info,
  };

const DEFAULT_GALLERY_TITLE = "Momentos de ediciones anteriores";
const DEFAULT_GALLERY_SUBTITLE =
  "Imágenes de ferias pasadas en la sede y en el calendario del Valle.";

function InfoSection({
  fair,
  section,
  settings,
}: {
  fair: Fair;
  section: FairDetailInfoSection;
  settings: SiteSettings;
}) {
  const infoTitle = section.title?.trim() || "Información de la feria";
  const eyebrow = section.eyebrow?.trim() || "";
  const imageOnLeft = section.imagePosition === "left";
  const body = section.body.map((p) => p.trim()).filter(Boolean);
  const hasSessions = fair.sessions.some(
    (s) => s.date.trim() && s.label.trim(),
  );
  const leadImage = fair.gallery[0];
  const status = resolveFairStatus(fair);
  const dateLabel = formatFairDateRange(fair.startDate, fair.endDate);
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
            {body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          {!hasSessions ? (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              La programación oficial de esta feria se publica con el afiche del
              evento.
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

          {fair.updatedAt ? (
            <p className="mt-6 text-sm text-muted-foreground">
              Última actualización: {formatUpdatedAt(fair.updatedAt)}
            </p>
          ) : null}
        </div>

        {leadImage ? (
          <SafeImage
            src={leadImage.src}
            alt={leadImage.alt}
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
              Datos de la feria
            </p>
            <ul className="space-y-3 text-sm text-secondary md:text-base">
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
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              <FairStatusBadge status={status} />
              {fair.kind ? <FairKindBadge kind={fair.kind} /> : null}
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}

function PricesSection({ section }: { section: FairDetailPricesSection }) {
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

function GallerySection({
  fair,
  section,
  skipFirst,
}: {
  fair: Fair;
  section: FairDetailGallerySection;
  skipFirst: boolean;
}) {
  const photos = skipFirst ? fair.gallery.slice(1) : fair.gallery;
  if (photos.length === 0) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
        {section.title?.trim() || DEFAULT_GALLERY_TITLE}
      </h2>
      <p className="mt-2 text-base text-muted-foreground">
        {section.subtitle?.trim() || DEFAULT_GALLERY_SUBTITLE}
      </p>
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

export function FairDetailBody({ fair, settings }: FairDetailBodyProps) {
  const sections = resolveDetailSections(fair);
  const hasInfoWithImage = sections.some((s) => s.type === "info");
  const hasExplicitGallery = sections.some((s) => s.type === "gallery");
  const legacyPrices =
    !sections.some((s) => s.type === "prices") &&
    (fair.ticketPrices?.length ?? 0) > 0
      ? fair.ticketPrices
      : null;

  return (
    <div className="bg-background px-5 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl space-y-14">
        {sections.map((section, index) => {
          if (section.type === "info") {
            return (
              <InfoSection
                key={`info-${index}`}
                fair={fair}
                section={section}
                settings={settings}
              />
            );
          }
          if (section.type === "prices") {
            return <PricesSection key={`prices-${index}`} section={section} />;
          }
          return (
            <GallerySection
              key={`gallery-${index}`}
              fair={fair}
              section={section}
              skipFirst={hasInfoWithImage}
            />
          );
        })}

        {legacyPrices ? (
          <PricesSection
            section={{ type: "prices", rows: legacyPrices }}
          />
        ) : null}

        {!hasExplicitGallery && fair.gallery.length > (hasInfoWithImage ? 1 : 0) ? (
          <GallerySection
            fair={fair}
            section={{ type: "gallery" }}
            skipFirst={hasInfoWithImage}
          />
        ) : null}
      </div>
    </div>
  );
}
