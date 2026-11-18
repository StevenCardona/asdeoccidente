import Image from "next/image";
import { GoogleReviewsBadge } from "@/features/home/components/google-reviews-badge";
import type { SchoolContent } from "@/features/school/models";
import type { SiteSettings } from "@/features/site/models";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";

type SchoolHeroProps = {
  content: SchoolContent["hero"];
  settings: SiteSettings;
};

export function SchoolHero({ content, settings }: SchoolHeroProps) {
  const whatsappHref = buildWhatsAppUrl(settings, "school");
  const hasReviews = Boolean(
    settings.google.rating.trim() || settings.google.reviewCount.trim(),
  );

  return (
    <section className="relative isolate min-h-[min(72dvh,600px)] overflow-hidden bg-secondary text-white md:min-h-[min(80dvh,700px)]">
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

      <div className="relative mx-auto flex min-h-[min(72dvh,600px)] max-w-7xl flex-col justify-end px-4 pb-14 pt-8 md:min-h-[min(80dvh,700px)] md:justify-center md:px-8 md:pb-16">
        <span className="inline-flex w-fit items-center rounded-md bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground">
          {content.badge}
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-[2.1rem] font-extrabold leading-[1.15] tracking-tight md:text-5xl lg:text-[3.25rem]">
          {content.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
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
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/40 bg-transparent text-white hover:bg-white/10"
          >
            <a href="#tarifas">{content.secondaryCtaLabel}</a>
          </Button>
        </div>

        <div className="mt-4 flex max-w-xl flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
          {hasReviews ? (
            <GoogleReviewsBadge
              tone="dark"
              as="link"
              rating={settings.google.rating}
              reviewCount={settings.google.reviewCount}
              reviewsUrl={settings.google.reviewsUrl}
              className="h-7 gap-1.5 px-2 text-xs md:h-8"
            />
          ) : null}
          <p className="text-xs leading-snug text-white/55 md:text-sm">
            <span className="tabular-nums">+200</span> alumnos
            <span className="mx-2 text-white/30" aria-hidden>
              ·
            </span>
            Desde <span className="tabular-nums">1975</span>
          </p>
        </div>
      </div>
    </section>
  );
}
