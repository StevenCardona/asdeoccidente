import { CalendarDays } from "lucide-react";
import type { SiteSettings } from "@/features/site/models";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";

type EventsEmptyStateProps = {
  settings: SiteSettings;
  eyebrow?: string;
  title?: string;
  message?: string;
  whatsappLabel?: string;
};

export function EventsEmptyState({
  settings,
  eyebrow = "Calendario",
  title = "Próximos eventos",
  message = "Estamos armando el calendario. Escríbenos por WhatsApp si quieres cupos o fechas.",
  whatsappLabel = "Escribir por WhatsApp",
}: EventsEmptyStateProps) {
  const whatsappHref = buildWhatsAppUrl(settings, "fairs");
  const showWhatsApp = whatsappHref !== "#";

  return (
    <section
      className="bg-background px-5 py-12 md:px-12 md:py-16"
      aria-live="polite"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          {eyebrow.trim() ? (
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
            {title}
          </h1>
          <p className="mt-3 flex gap-2 text-base leading-relaxed text-muted-foreground">
            <CalendarDays
              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              aria-hidden
            />
            <span>{message}</span>
          </p>
          {showWhatsApp ? (
            <div className="mt-6">
              <Button asChild variant="whatsapp" size="lg">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {whatsappLabel}
                </a>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
