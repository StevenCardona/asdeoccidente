"use client";

import { useState } from "react";
import type { HomeGait, HomeSectionIntro } from "@/features/home/models";
import { SafeImage } from "@/shared/components/safe-image";
import { cn } from "@/shared/lib/utils";

type HomeGaitsProps = {
  intro: HomeSectionIntro;
  items: HomeGait[];
};

export function HomeGaits({ intro, items }: HomeGaitsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((gait) => gait.id === activeId) ?? items[0];

  if (!active) return null;

  return (
    <section className="bg-primary px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        {intro.eyebrow.trim() ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/90">
            {intro.eyebrow}
          </p>
        ) : null}
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {intro.title.trim() ? (
              <h2 className="font-display text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
                {intro.title}
              </h2>
            ) : null}
            {intro.subtitle.trim() ? (
              <p className="mt-3 text-base leading-relaxed text-white/80">
                {intro.subtitle}
              </p>
            ) : null}
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Andares"
          >
            {items.map((gait) => {
              const selected = gait.id === active.id;
              return (
                <button
                  key={gait.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(gait.id)}
                  className={cn(
                    "rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors md:text-sm",
                    selected
                      ? "bg-white text-primary"
                      : "border border-white/40 text-white hover:bg-white/10",
                  )}
                >
                  {gait.tab}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          className="mt-8 grid overflow-hidden rounded-sm border border-white/50 bg-background lg:grid-cols-2"
        >
          <SafeImage
            src={active.image}
            alt={active.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            wrapperClassName="aspect-[4/3] lg:aspect-auto lg:min-h-[360px]"
          />
          <div className="flex flex-col justify-center p-6 md:p-10">
            {active.tag.trim() ? (
              <p className="inline-flex w-fit bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                {active.tag}
              </p>
            ) : null}
            {active.sound.trim() ? (
              <p className="mt-4 text-sm italic text-muted-foreground">
                “{active.sound}”
              </p>
            ) : null}
            <h3 className="mt-3 font-display text-2xl font-bold text-secondary">
              {active.title}
            </h3>
            {active.text.trim() ? (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {active.text}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
