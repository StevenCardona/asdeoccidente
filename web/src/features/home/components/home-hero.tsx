import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GoogleReviewsBadge } from "@/shared/components/google-reviews-badge";
import type { HomeCta, HomeHeroImage } from "@/features/home/models";
import { isExternalCta, resolveCtaHref } from "@/features/home/utils/cta";
import type { SiteSettings } from "@/features/site/models";
import { PageHero } from "@/shared/components/page-hero";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { resolveSanityImageUrl } from "@/shared/lib/resolve-image";

type HomeHeroProps = {
  title: string;
  subtitle: string;
  primaryCta: HomeCta;
  secondaryCta: HomeCta;
  heroImage: HomeHeroImage | null;
  settings: SiteSettings;
};

function CtaButton({
  cta,
  variant,
  icon,
  settings,
}: {
  cta: HomeCta;
  variant: "primary" | "outline";
  icon: "whatsapp" | "arrow";
  settings: SiteSettings;
}) {
  if (!cta.label.trim()) return null;

  const href = resolveCtaHref(cta, settings);
  const external = isExternalCta(cta);
  const className =
    variant === "outline"
      ? "border-white/40 bg-transparent text-white hover:bg-white/10"
      : undefined;

  const content = (
    <>
      {icon === "whatsapp" ? (
        <WhatsAppIcon className="h-4 w-4" />
      ) : (
        <ArrowRight className="h-4 w-4" aria-hidden />
      )}
      {cta.label}
    </>
  );

  if (external) {
    return (
      <Button asChild variant={variant} size="lg" className={className}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} size="lg" className={className}>
      <Link href={href}>{content}</Link>
    </Button>
  );
}

export function HomeHero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  heroImage,
  settings,
}: HomeHeroProps) {
  const imageUrl = heroImage
    ? resolveSanityImageUrl(heroImage.source, 1600, 75)
    : null;
  const imageAlt = heroImage?.alt?.trim() || title.trim() || "";
  const hasCtas = Boolean(primaryCta.label.trim() || secondaryCta.label.trim());
  const hasReviews = Boolean(
    settings.google.rating.trim() || settings.google.reviewCount.trim(),
  );

  return (
    <PageHero
      size="home"
      title={title}
      subtitle={subtitle}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      eyebrowSlot={
        <div className="flex flex-wrap items-center gap-2">
          {hasReviews ? (
            <GoogleReviewsBadge
              tone="dark"
              rating={settings.google.rating}
              reviewCount={settings.google.reviewCount}
              reviewsUrl={settings.google.reviewsUrl}
            />
          ) : null}
          {settings.ui.fedequinasImageUrl.trim() ? (
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
          ) : null}
        </div>
      }
      actions={
        hasCtas ? (
          <>
            <CtaButton
              cta={primaryCta}
              variant="primary"
              icon="whatsapp"
              settings={settings}
            />
            <CtaButton
              cta={secondaryCta}
              variant="outline"
              icon="arrow"
              settings={settings}
            />
          </>
        ) : null
      }
      meta={
        settings.address.trim() ? (
          <p className="text-xs leading-snug text-white/55 md:text-sm">
            {settings.ui.heroAddressPrefix.trim()}
            {settings.address.trim()}
            {settings.ui.heroAddressPrefix.trim() ? "." : ""}
          </p>
        ) : null
      }
    />
  );
}
