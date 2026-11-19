import { GoogleReviewsBadge } from "@/shared/components/google-reviews-badge";
import type { SchoolContent } from "@/features/school/models";
import type { SiteSettings } from "@/features/site/models";
import { PageHero } from "@/shared/components/page-hero";
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
  const studentStat = content.badge?.trim() || "";

  return (
    <PageHero
      size="standard"
      title={content.title}
      subtitle={content.subtitle}
      imageUrl={content.image}
      imageAlt={content.imageAlt}
      actions={
        <>
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
        </>
      }
      meta={
        <div className="flex max-w-xl flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
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
          {studentStat ? (
            <p className="text-xs leading-snug text-white/70 md:text-sm">
              <span className="font-semibold tabular-nums text-white">
                {studentStat}
              </span>
            </p>
          ) : null}
        </div>
      }
    />
  );
}
