import Image from "next/image";
import type { MembershipContent } from "@/features/membership/models";
import type { SiteSettings } from "@/features/site/models";
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
    <section className="relative isolate min-h-[min(48dvh,420px)] overflow-hidden bg-secondary text-white md:min-h-[min(58dvh,540px)]">
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

      <div className="relative mx-auto flex min-h-[min(48dvh,420px)] max-w-7xl flex-col justify-center px-4 pb-8 pt-4 md:min-h-[min(58dvh,540px)] md:px-8 md:pb-12 md:pt-6">
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

        <h1 className="mt-5 max-w-3xl font-display text-[1.85rem] font-extrabold leading-[1.15] tracking-tight md:mt-6 md:text-4xl lg:text-5xl">
          {content.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85 md:max-w-3xl md:text-lg">
          {content.subtitle}
        </p>

        <div className="mt-5 flex max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap">
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
      </div>
    </section>
  );
}
