"use client";

import { SafeImage } from "@/shared/components/safe-image";
import type { SchoolContent } from "@/features/school/models/school";
import {
  SchoolCarouselArrows,
  SchoolCarouselDots,
  SchoolCarouselItem,
  schoolCarouselTrackClass,
  useSchoolSnapCarousel,
} from "@/features/school/components/school-snap-carousel";

type SchoolHorsesProps = {
  content: SchoolContent["horses"];
};

export function SchoolHorses({ content }: SchoolHorsesProps) {
  const { scrollerRef, activePage, pageCount, scrollByPage, scrollToPage } =
    useSchoolSnapCarousel(content.items.length, 1);

  return (
    <section className="bg-secondary px-4 py-14 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {content.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              {content.title}
            </h2>
            <p className="mt-2 whitespace-nowrap text-sm text-white/75 sm:hidden">
              {content.subtitle}
            </p>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <p className="shrink-0 whitespace-nowrap text-sm text-white/75 md:text-base">
              {content.subtitle}
            </p>
            <SchoolCarouselArrows
              tone="dark"
              className="hidden sm:flex"
              onPrev={() => scrollByPage(-1)}
              onNext={() => scrollByPage(1)}
              prevLabel="Caballos anteriores"
              nextLabel="Caballos siguientes"
            />
          </div>
        </div>

        <ul ref={scrollerRef} className={schoolCarouselTrackClass}>
          {content.items.map((horse) => (
            <SchoolCarouselItem
              key={horse.name}
              className="w-[85%] overflow-hidden rounded-lg border border-white/15 bg-background text-secondary shadow-sm md:w-[calc(25%-1.125rem)]"
            >
              <div className="relative">
                <SafeImage
                  src={horse.image}
                  alt={horse.imageAlt}
                  fill
                  sizes="(max-width: 768px) 85vw, 25vw"
                  wrapperClassName="aspect-[5/6]"
                />
                <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                  {horse.gait}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-display text-lg font-bold text-secondary">
                  {horse.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-tertiary">
                  {horse.gait}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {horse.blurb}
                </p>
              </div>
            </SchoolCarouselItem>
          ))}
        </ul>

        <SchoolCarouselDots
          tone="dark"
          pageCount={pageCount}
          activePage={activePage}
          onGo={scrollToPage}
          onPrev={() => scrollByPage(-1)}
          onNext={() => scrollByPage(1)}
          label="Caballos"
        />
      </div>
    </section>
  );
}
