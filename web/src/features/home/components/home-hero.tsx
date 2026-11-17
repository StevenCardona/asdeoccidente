import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GoogleReviewsBadge } from "@/features/home/components/google-reviews-badge";
import type { HomeCta, HomeHeroImage } from "@/features/home/models";
import { isExternalCta, resolveCtaHref } from "@/features/home/utils/cta";
import type { SiteSettings } from "@/features/site/models";
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

  if (
    !title.trim() &&
    !subtitle.trim() &&
    !imageUrl &&
    !hasCtas &&
    !hasReviews
  ) {
    return null;
  }

  return (
    <section className="relative isolate min-h-[min(78dvh,640px)] overflow-hidden bg-secondary text-white md:min-h-[min(88dvh,760px)]">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          loading="eager"
          fetchPriority="high"
          quality={75}
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-secondary" aria-hidden />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-secondary/35"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[min(78dvh,640px)] max-w-7xl flex-col justify-end px-4 pb-14 pt-5 md:min-h-[min(88dvh,760px)] md:justify-center md:px-8 md:pb-16 md:pt-12">
        {hasReviews ? (
          <div className="flex flex-wrap items-center gap-2">
            <GoogleReviewsBadge
              tone="dark"
              rating={settings.google.rating}
              reviewCount={settings.google.reviewCount}
              reviewsUrl={settings.google.reviewsUrl}
            />
            <div className="relative h-9 w-[96px] shrink-0 overflow-hidden rounded-md bg-white md:h-10 md:w-[110px]">
              <Image
                src="/brand/fedeequinas.png"
                alt="Fedequinas"
                fill
                className="object-contain p-1"
                sizes="110px"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="relative h-9 w-[96px] shrink-0 overflow-hidden rounded-md bg-white md:h-10 md:w-[110px]">
            <Image
              src="/brand/fedeequinas.png"
              alt="Fedequinas"
              fill
              className="object-contain p-1"
              sizes="110px"
              loading="lazy"
            />
          </div>
        )}

        {title.trim() ? (
          <h1 className="mt-6 max-w-3xl font-display text-[2.25rem] font-extrabold leading-[1.15] tracking-tight md:mt-6 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            {title}
          </h1>
        ) : null}
        {subtitle.trim() ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:mt-5 md:text-lg">
            {subtitle}
          </p>
        ) : null}

        {hasCtas ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
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
          </div>
        ) : null}
      </div>
    </section>
  );
}
