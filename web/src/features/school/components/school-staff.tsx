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

type SchoolStaffProps = {
  content: SchoolContent["staff"];
};

export function SchoolStaff({ content }: SchoolStaffProps) {
  const { scrollerRef, activePage, pageCount, scrollByPage, scrollToPage } =
    useSchoolSnapCarousel(content.members.length, 1);

  return (
    <section className="bg-surface px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {content.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              {content.title}
            </h2>
            <p className="mt-2 whitespace-nowrap text-sm text-muted-foreground sm:hidden">
              {content.subtitle}
            </p>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <p className="shrink-0 whitespace-nowrap text-sm text-muted-foreground md:text-base">
              {content.subtitle}
            </p>
            <SchoolCarouselArrows
              className="hidden sm:flex"
              onPrev={() => scrollByPage(-1)}
              onNext={() => scrollByPage(1)}
              prevLabel="Maestros anteriores"
              nextLabel="Maestros siguientes"
            />
          </div>
        </div>

        <ul ref={scrollerRef} className={schoolCarouselTrackClass}>
          {content.members.map((member) => (
            <SchoolCarouselItem
              key={member.name}
              className="w-[85%] overflow-hidden rounded-lg border border-border bg-background shadow-sm md:w-[calc(25%-1.125rem)]"
            >
              <div className="relative">
                <SafeImage
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 768px) 85vw, 25vw"
                  wrapperClassName="aspect-[5/6]"
                />
                <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                  {member.badge}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-display text-lg font-bold text-secondary">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-tertiary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </SchoolCarouselItem>
          ))}
        </ul>

        <SchoolCarouselDots
          pageCount={pageCount}
          activePage={activePage}
          onGo={scrollToPage}
          onPrev={() => scrollByPage(-1)}
          onNext={() => scrollByPage(1)}
          label="Maestros"
        />
      </div>
    </section>
  );
}
