import type { VenueContent } from "@/features/venue/models";
import type { SiteSettings } from "@/features/site/models";
import { PageHero } from "@/shared/components/page-hero";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";

type VenueHeroProps = {
  content: VenueContent["hero"];
  settings: SiteSettings;
};

export function VenueHero({ content, settings }: VenueHeroProps) {
  const whatsappHref = buildWhatsAppUrl(settings, "venue");
  const commercialLine = content.contactLine.trim();

  return (
    <PageHero
      size="compact"
      badge={content.badge}
      title={content.title}
      subtitle={content.subtitle}
      imageUrl={content.image}
      imageAlt={content.imageAlt}
      actions={
        whatsappHref !== "#" ? (
          <Button asChild variant="primary" size="lg">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              {content.primaryCtaLabel}
            </a>
          </Button>
        ) : (
          <Button variant="primary" size="lg" disabled>
            {content.primaryCtaLabel}
          </Button>
        )
      }
      meta={
        commercialLine ? (
          <p className="text-xs leading-snug text-white/55 md:text-sm">
            Para mayor información: {commercialLine}
          </p>
        ) : null
      }
    />
  );
}
