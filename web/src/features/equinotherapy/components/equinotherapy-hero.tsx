import Image from "next/image";
import type { EquinotherapyContent } from "@/features/equinotherapy/models";
import type { SiteSettings } from "@/features/site/models";
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
  const address = settings.address.trim();

  return (
    <section className="relative isolate min-h-[min(68dvh,560px)] overflow-hidden bg-secondary text-white md:min-h-[min(78dvh,680px)]">
      <Image
        src={content.image}
        alt={content.imageAlt}
        fill
        priority
        fetchPriority="high"
        quality={75}
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-secondary/40"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[min(68dvh,560px)] max-w-7xl flex-col justify-end px-4 pb-12 pt-10 md:min-h-[min(78dvh,680px)] md:justify-center md:px-8 md:pb-16 md:pt-12">
        <span className="inline-flex w-fit items-center rounded-md bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground">
          {content.badge}
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-[1.85rem] font-extrabold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
          {content.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:max-w-3xl md:text-lg">
          {content.subtitle}
        </p>

        <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap">
          {whatsappHref !== "#" ? (
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
          )}
        </div>

        {address ? (
          <p className="mt-6 max-w-3xl text-xs leading-snug text-white/55 md:text-sm">
            {address}
          </p>
        ) : null}
      </div>
    </section>
  );
}
