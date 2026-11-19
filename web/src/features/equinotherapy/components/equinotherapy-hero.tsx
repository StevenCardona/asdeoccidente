import type { EquinotherapyContent } from "@/features/equinotherapy/models";
import type { SiteSettings } from "@/features/site/models";
import { PageHero } from "@/shared/components/page-hero";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";

type EquinotherapyHeroProps = {
  content: EquinotherapyContent["hero"];
  settings: SiteSettings;
};

export function EquinotherapyHero({
  content,
  settings,
}: EquinotherapyHeroProps) {
  const whatsappHref = buildWhatsAppUrl(settings, "equinotherapy");

  return (
    <PageHero
      size="standard"
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
    />
  );
}
