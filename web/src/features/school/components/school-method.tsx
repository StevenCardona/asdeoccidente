"use client";

import { SafeImage } from "@/shared/components/safe-image";
import type { SchoolContent } from "@/features/school/models/school";
import { resolveSchoolIcon } from "@/features/school/utils/icons";
import {
  SchoolCarouselArrows,
  SchoolCarouselDots,
  SchoolCarouselItem,
  schoolCarouselTrackClass,
  useSchoolSnapCarousel,
} from "@/features/school/components/school-snap-carousel";

type SchoolMethodProps = {
  content: SchoolContent["method"];
};

export function SchoolMethod({ content }: SchoolMethodProps) {
  const { scrollerRef, activePage, pageCount, scrollByPage, scrollToPage } =
    useSchoolSnapCarousel(content.axes.length, 1);

  return (
    <section className="bg-background px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {content.eyebrow}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              {content.subtitle}
            </p>

            <ol className="mt-8 space-y-5">
              {content.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-secondary">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <SafeImage
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            wrapperClassName="aspect-[4/5] w-full rounded-xl md:aspect-[5/4]"
          />
        </div>

        <div className="mt-10 flex items-end justify-between gap-4">
          <p className="text-sm font-semibold text-secondary md:text-base">
            Lo que trabajamos en cada clase
          </p>
          <SchoolCarouselArrows
            className="hidden sm:flex"
            onPrev={() => scrollByPage(-1)}
            onNext={() => scrollByPage(1)}
            prevLabel="Ejes anteriores"
            nextLabel="Ejes siguientes"
          />
        </div>

        <ul ref={scrollerRef} className={schoolCarouselTrackClass}>
          {content.axes.map((axis) => {
            const Icon = resolveSchoolIcon(axis.icon);
            return (
              <SchoolCarouselItem
                key={axis.title}
                className="w-[85%] md:w-[calc(25%-1.125rem)]"
              >
                <div className="flex h-full gap-3 rounded-xl border border-border bg-surface p-5 shadow-sm">
                  {Icon ? (
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </span>
                  ) : null}
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-secondary">
                      {axis.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {axis.text}
                    </p>
                  </div>
                </div>
              </SchoolCarouselItem>
            );
          })}
        </ul>

        <SchoolCarouselDots
          pageCount={pageCount}
          activePage={activePage}
          onGo={scrollToPage}
          onPrev={() => scrollByPage(-1)}
          onNext={() => scrollByPage(1)}
          label="Ejes de la clase"
        />
      </div>
    </section>
  );
}
