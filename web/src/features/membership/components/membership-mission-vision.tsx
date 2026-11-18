"use client";

import type { MembershipContent } from "@/features/membership/models";
import {
  SchoolCarouselArrows,
  SchoolCarouselDots,
  schoolCarouselTrackClass,
  useSchoolSnapCarousel,
} from "@/features/school/components/school-snap-carousel";
import { SafeImage } from "@/shared/components/safe-image";

type MembershipMissionVisionProps = {
  pillars: MembershipContent["missionVision"]["pillars"];
};

function PillarCard({
  title,
  text,
  image,
}: MembershipContent["missionVision"]["pillars"][number]) {
  return (
    <article className="mx-auto flex h-full w-full max-w-sm flex-col">
      {image ? (
        <SafeImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 90vw, 280px"
          wrapperClassName="aspect-[4/3] rounded-lg"
        />
      ) : null}
      <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-secondary md:text-2xl">
        {title}
      </h3>
      {text.trim() ? (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
          {text}
        </p>
      ) : null}
    </article>
  );
}

export function MembershipMissionVision({
  pillars,
}: MembershipMissionVisionProps) {
  const {
    scrollerRef,
    activePage,
    pageCount,
    scrollByPage,
    scrollToPage,
  } = useSchoolSnapCarousel(pillars.length, 1);

  if (pillars.length === 0) return null;

  return (
    <section className="border-y border-border bg-surface px-4 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:justify-items-center md:gap-8 lg:gap-12">
          {pillars.slice(0, 2).map((pillar, index) => (
            <div key={pillar.title} className="contents">
              {index === 1 ? (
                <div className="w-px self-stretch bg-border" aria-hidden />
              ) : null}
              <PillarCard {...pillar} />
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="mb-3 flex justify-end">
            <SchoolCarouselArrows
              tone="light"
              className="flex"
              onPrev={() => scrollByPage(-1)}
              onNext={() => scrollByPage(1)}
              prevLabel="Anterior"
              nextLabel="Siguiente"
            />
          </div>
          <ul ref={scrollerRef} className={schoolCarouselTrackClass}>
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="w-full shrink-0 snap-start px-0.5"
              >
                <PillarCard {...pillar} />
              </li>
            ))}
          </ul>
          <SchoolCarouselDots
            pageCount={pageCount}
            activePage={activePage}
            onGo={scrollToPage}
            onPrev={() => scrollByPage(-1)}
            onNext={() => scrollByPage(1)}
            tone="light"
            label="Misión y visión"
          />
        </div>
      </div>
    </section>
  );
}
