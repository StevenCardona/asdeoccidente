"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ServicesSection } from "@/features/services/models";
import { cn } from "@/shared/lib/utils";

type ServicesSectionNavProps = {
  sections: ServicesSection[];
  activeSlug: "all" | string;
  onSelect: (slug: "all" | string) => void;
};

export function ServicesSectionNav({
  sections,
  activeSlug,
  onSelect,
}: ServicesSectionNavProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateOverflow = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(max > 4 && el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateOverflow();
    el.addEventListener("scroll", updateOverflow, { passive: true });
    const ro = new ResizeObserver(updateOverflow);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateOverflow);
      ro.disconnect();
    };
  }, [sections, updateOverflow]);

  const scrollByAmount = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 220, behavior: "smooth" });
  };

  if (sections.length === 0) return null;

  const chips: Array<{ slug: "all" | string; label: string }> = [
    { slug: "all", label: "Todos" },
    ...sections.map((section) => ({
      slug: section.slug,
      label: section.title,
    })),
  ];

  return (
    <nav
      className="sticky top-16 z-30 border-b border-primary bg-primary text-primary-foreground md:border-border md:bg-background md:text-foreground"
      aria-label="Filtrar trámites"
    >
      <div className="relative mx-auto max-w-7xl">
        {canScrollLeft ? (
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-primary to-transparent md:w-14 md:from-background"
            aria-hidden
          />
        ) : null}
        {canScrollRight ? (
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-primary to-transparent md:w-14 md:from-background"
            aria-hidden
          />
        ) : null}

        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          className={cn(
            "absolute left-1 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-muted text-secondary md:flex",
            !canScrollLeft && "invisible",
          )}
          aria-label="Ver filtros anteriores"
          tabIndex={canScrollLeft ? 0 : -1}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          className={cn(
            "absolute right-1 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-muted text-secondary md:flex",
            !canScrollRight && "invisible",
          )}
          aria-label="Ver más filtros"
          tabIndex={canScrollRight ? 0 : -1}
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>

        <ul
          ref={scrollerRef}
          className="flex gap-2 overflow-x-auto scroll-smooth px-4 py-2.5 [scrollbar-width:none] md:px-12 [&::-webkit-scrollbar]:hidden"
        >
          {chips.map((chip) => {
            const active = activeSlug === chip.slug;
            return (
              <li key={chip.slug} className="shrink-0">
                <button
                  type="button"
                  onClick={() => onSelect(chip.slug)}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex rounded-md px-3 py-1.5 text-xs font-semibold transition-colors",
                    active
                      ? "bg-white text-primary md:bg-primary md:text-primary-foreground"
                      : "bg-transparent text-white/90 hover:bg-white/15 md:text-secondary md:hover:bg-muted",
                  )}
                >
                  {chip.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
