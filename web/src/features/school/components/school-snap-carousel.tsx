"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";

type Tone = "light" | "dark";

export function useSchoolSnapCarousel(itemCount: number, mobileVisible = 1) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const pageCount = Math.max(1, Math.ceil(itemCount / mobileVisible));
  const [activePage, setActivePage] = useState(0);

  const getPageCount = () => {
    const node = scrollerRef.current;
    if (!node) return pageCount;
    const first = node.querySelector("li");
    if (!first) return pageCount;
    const itemWidth = first.getBoundingClientRect().width;
    const visible = Math.max(
      1,
      Math.round(node.clientWidth / (itemWidth + 6)),
    );
    return Math.max(1, Math.ceil(itemCount / visible));
  };

  const scrollToPage = (page: number) => {
    const node = scrollerRef.current;
    if (!node) return;
    const count = getPageCount();
    const next = ((page % count) + count) % count;
    setActivePage(next);
    node.scrollTo({ left: next * node.clientWidth, behavior: "smooth" });
  };

  const scrollByPage = (direction: -1 | 1) => {
    scrollToPage(activePage + direction);
  };

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const updateActivePage = () => {
      const pageWidth = node.clientWidth || 1;
      const count = getPageCount();
      const next = Math.round(node.scrollLeft / pageWidth);
      setActivePage(((next % count) + count) % count);
    };

    updateActivePage();
    node.addEventListener("scroll", updateActivePage, { passive: true });
    const observer = new ResizeObserver(updateActivePage);
    observer.observe(node);

    return () => {
      node.removeEventListener("scroll", updateActivePage);
      observer.disconnect();
    };
  }, [itemCount, pageCount]);

  return {
    scrollerRef,
    activePage,
    pageCount,
    scrollByPage,
    scrollToPage,
  };
}

const arrowClass = (tone: Tone, size: "sm" | "md") =>
  cn(
    "inline-flex items-center justify-center rounded-md transition-colors",
    size === "md" ? "h-10 w-10" : "h-9 w-9",
    tone === "dark"
      ? "border border-white/30 bg-transparent text-white hover:border-primary hover:bg-primary hover:text-primary-foreground"
      : "border border-border bg-background text-secondary hover:bg-primary hover:text-primary-foreground",
  );

type SchoolCarouselArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
  tone?: Tone;
  className?: string;
  prevLabel?: string;
  nextLabel?: string;
};

export function SchoolCarouselArrows({
  onPrev,
  onNext,
  tone = "light",
  className,
  prevLabel = "Anterior",
  nextLabel = "Siguiente",
}: SchoolCarouselArrowsProps) {
  return (
    <div className={cn("shrink-0 gap-2", className)}>
      <button
        type="button"
        onClick={onPrev}
        className={arrowClass(tone, "md")}
        aria-label={prevLabel}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onNext}
        className={arrowClass(tone, "md")}
        aria-label={nextLabel}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

type SchoolCarouselDotsProps = {
  pageCount: number;
  activePage: number;
  onGo: (page: number) => void;
  onPrev: () => void;
  onNext: () => void;
  tone?: Tone;
  label?: string;
};

export function SchoolCarouselDots({
  pageCount,
  activePage,
  onGo,
  onPrev,
  onNext,
  tone = "light",
  label = "Páginas",
}: SchoolCarouselDotsProps) {
  return (
    <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
      <button
        type="button"
        onClick={onPrev}
        className={arrowClass(tone, "sm")}
        aria-label="Anterior"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-2" role="tablist" aria-label={label}>
        {Array.from({ length: pageCount }, (_, index) => {
          const selected = index === activePage;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={`Ir a página ${index + 1}`}
              aria-current={selected ? "true" : undefined}
              onClick={() => onGo(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                selected
                  ? "bg-primary"
                  : tone === "dark"
                    ? "bg-white/30 hover:bg-white/50"
                    : "bg-border hover:bg-muted-foreground/40",
              )}
            />
          );
        })}
      </div>
      <button
        type="button"
        onClick={onNext}
        className={arrowClass(tone, "sm")}
        aria-label="Siguiente"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export const schoolCarouselTrackClass =
  "mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6";

export function SchoolCarouselItem({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <li className={cn("shrink-0 snap-start", className)}>{children}</li>
  );
}
