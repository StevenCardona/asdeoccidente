import Image from "next/image";
import type { MembershipContent } from "@/features/membership/models";
import type { SiteSettings } from "@/features/site/models";
import { PageHero } from "@/shared/components/page-hero";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";

type MembershipHeroProps = {
  content: MembershipContent["hero"];
  settings: SiteSettings;
};

export function MembershipHero({ content, settings }: MembershipHeroProps) {
  const whatsappHref = buildWhatsAppUrl(settings, "membership");

  return (
    <PageHero
      size="compact"
      title={content.title}
      subtitle={content.subtitle}
      imageUrl={content.image}
      imageAlt={content.imageAlt}
      eyebrowSlot={
        settings.ui.fedequinasImageUrl.trim() ? (
          <div className="relative h-9 w-[96px] shrink-0 overflow-hidden rounded-md bg-white md:h-10 md:w-[110px]">
            <Image
              src={settings.ui.fedequinasImageUrl}
              alt="Fedequinas"
              fill
              className="object-contain p-1"
              sizes="110px"
              loading="lazy"
            />
          </div>
        ) : null
      }
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
