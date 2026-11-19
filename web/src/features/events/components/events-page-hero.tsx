import type { EventsPageHero as EventsPageHeroContent } from "@/features/events/models";
import type { SiteSettings } from "@/features/site/models";
import { PageHero } from "@/shared/components/page-hero";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";

type EventsPageHeroProps = {
  hero: EventsPageHeroContent;
  settings: SiteSettings;
};

/** Page-level banner for `/events` when no featured calendar event is available. */
export function EventsPageHero({ hero, settings }: EventsPageHeroProps) {
  const whatsappHref = buildWhatsAppUrl(settings, "fairs");
  const label = hero.primaryCtaLabel.trim();
  const showCta = Boolean(label) && whatsappHref !== "#";

  return (
    <PageHero
      size="standard"
      badge={hero.badge}
      title={hero.title}
      subtitle={hero.subtitle}
      imageUrl={hero.image}
      imageAlt={hero.imageAlt}
      actions={
        showCta ? (
          <Button asChild variant="primary" size="lg">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              {label}
            </a>
          </Button>
        ) : null
      }
    />
  );
}
