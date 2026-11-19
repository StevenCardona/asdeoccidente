import type { HomeSectionIntro, HomeServiceItem } from "@/features/home/models";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SafeImage } from "@/shared/components/safe-image";
import { sectionPadX, sectionPadY } from "@/shared/lib/section";

type HomeServicesProps = {
  intro: HomeSectionIntro;
  items: HomeServiceItem[];
};

function ServiceCta({ service }: { service: HomeServiceItem }) {
  if (!service.cta.trim()) return null;

  const className =
    "mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide";

  if (service.href?.trim()) {
    return (
      <Link
        href={service.href.trim()}
        className={`${className} text-primary hover:underline`}
      >
        {service.cta}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    );
  }

  return (
    <span className={`${className} text-primary/70`}>
      {service.cta}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </span>
  );
}

export function HomeServices({ intro, items }: HomeServicesProps) {
  const hasIntro = Boolean(
    intro.eyebrow.trim() || intro.title.trim() || intro.subtitle.trim(),
  );
  if (!hasIntro && items.length === 0) return null;

  return (
    <section className={`bg-background ${sectionPadX} ${sectionPadY}`}>
      <div className="mx-auto max-w-7xl">
        {intro.eyebrow.trim() ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {intro.eyebrow}
          </p>
        ) : null}
        {intro.title.trim() ? (
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
            {intro.title}
          </h2>
        ) : null}
        {intro.subtitle.trim() ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro.subtitle}
          </p>
        ) : null}

        {items.length > 0 ? (
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((service) => (
              <li
                key={`${service.href ?? ""}-${service.title}`}
                className="overflow-hidden border border-border bg-background"
              >
                <SafeImage
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  wrapperClassName="aspect-[16/10] bg-muted"
                />
                <div className="flex flex-col p-5 md:p-6">
                  <h3 className="font-display text-lg font-semibold text-secondary">
                    {service.title}
                  </h3>
                  {service.description.trim() ? (
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  ) : null}
                  <ServiceCta service={service} />
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
