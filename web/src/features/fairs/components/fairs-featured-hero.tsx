import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import {
  FairFeaturedBadge,
  FairKindBadge,
  FairStatusBadge,
} from "@/features/fairs/components/fair-status-badge";
import {
  formatFairDateRange,
  resolveFairStatus,
  type Fair,
} from "@/features/fairs/models";
import { Button } from "@/shared/components/ui/button";

type FairsFeaturedHeroProps = {
  fair: Fair;
};

export function FairsFeaturedHero({ fair }: FairsFeaturedHeroProps) {
  const status = resolveFairStatus(fair);
  const dateLabel = formatFairDateRange(fair.startDate, fair.endDate);
  const detailHref = `/fairs/${fair.slug}`;
  const media = fair.highlightImage ?? fair.banner;

  return (
    <section className="relative isolate overflow-hidden bg-secondary text-white">
      <Image
        src={fair.banner.src}
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={75}
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/55"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center md:gap-10 md:px-12 md:py-10">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <FairStatusBadge status={status} tone="dark" />
            <FairFeaturedBadge tone="dark" />
            {fair.kind ? <FairKindBadge kind={fair.kind} tone="dark" /> : null}
          </div>

          <h1 className="mt-4 max-w-2xl font-display text-[1.85rem] font-extrabold leading-[1.12] tracking-tight md:text-4xl lg:text-[2.75rem]">
            {fair.title}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
            {fair.teaser || fair.summary}
          </p>

          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="border-l border-white/25 pl-3">
              <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                Fechas
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-white">
                {dateLabel}
              </dd>
            </div>
            {fair.placeLabel.trim() ? (
              <div className="border-l border-white/25 pl-3">
                <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  Sede
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">
                  {fair.placeLabel}
                </dd>
              </div>
            ) : null}
          </dl>

          <div className="mt-6">
            <Button asChild variant="primary" size="lg">
              <Link href={detailHref}>
                Ver detalle
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden border border-white/20 shadow-lg md:mx-0 md:max-w-none">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 40vw"
            quality={75}
          />
        </div>
      </div>
    </section>
  );
}
