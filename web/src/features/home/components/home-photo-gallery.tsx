"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SafeImage } from "@/shared/components/safe-image";
import { cn } from "@/shared/lib/utils";

const photos = [
  {
    src: "/imgs/banner2.jpg",
    alt: "Ambiente de feria en Asdeoccidente",
  },
  {
    src: "/imgs/banner3.webp",
    alt: "Competencia y público en la sede",
  },
  {
    src: "/imgs/escuela2.jpg",
    alt: "Escuela de chalanería",
  },
  {
    src: "/imgs/escuela4.jpg",
    alt: "Práctica de monta",
  },
  {
    src: "/imgs/escuela5.jpg",
    alt: "Alumnos e instructores",
  },
  {
    src: "/imgs/lugar.webp",
    alt: "Instalaciones de la sede",
  },
] as const;

const MOBILE_VISIBLE = 2;

export function HomePhotoGallery() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const pageCount = Math.ceil(photos.length / MOBILE_VISIBLE);
  const [activePage, setActivePage] = useState(0);

  const getPageCount = () => {
    const node = scrollerRef.current;
    if (!node) return pageCount;
    // Desktop shows 4 per view; mobile 2. Derive pages from item width.
    const first = node.querySelector("li");
    if (!first) return pageCount;
    const itemWidth = first.getBoundingClientRect().width;
    const gap = 12;
    const visible = Math.max(1, Math.round(node.clientWidth / (itemWidth + gap / 2)));
    return Math.max(1, Math.ceil(photos.length / visible));
  };

  const scrollToPage = (page: number) => {
    const node = scrollerRef.current;
    if (!node) return;
    const count = getPageCount();
    const next = ((page % count) + count) % count;
    setActivePage(next);
    const pageWidth = node.clientWidth;
    node.scrollTo({ left: next * pageWidth, behavior: "smooth" });
  };

  const scrollByPage = (direction: -1 | 1) => {
    scrollToPage(activePage + direction);
  };

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const updateActivePage = () => {
      const pageWidth = node.clientWidth || 1;
      const first = node.querySelector("li");
      let count = pageCount;
      if (first) {
        const itemWidth = first.getBoundingClientRect().width;
        const visible = Math.max(
          1,
          Math.round(node.clientWidth / (itemWidth + 6)),
        );
        count = Math.max(1, Math.ceil(photos.length / visible));
      }
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
  }, [pageCount]);

  const mobilePageCount = pageCount;

  return (
    <section className="border-y border-border bg-surface px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Galería
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
              Así se vive Asdeoccidente
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Escuela, ferias y sede: un vistazo a lo que pasa en el Valle.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-secondary hover:bg-primary hover:text-primary-foreground"
              aria-label="Fotos anteriores"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-secondary hover:bg-primary hover:text-primary-foreground"
              aria-label="Fotos siguientes"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ul
          ref={scrollerRef}
          className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:gap-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photo) => (
            <li
              key={photo.src}
              className="w-[calc(50%-0.375rem)] shrink-0 snap-start md:w-[calc(25%-0.75rem)]"
            >
              <SafeImage
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                wrapperClassName="aspect-[3/4] rounded-lg"
              />
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-secondary hover:bg-primary hover:text-primary-foreground"
            aria-label="Fotos anteriores"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Páginas de galería"
          >
            {Array.from({ length: mobilePageCount }, (_, index) => {
              const selected = index === activePage;
              return (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-label={`Ir a página ${index + 1}`}
                  aria-current={selected ? "true" : undefined}
                  onClick={() => scrollToPage(index)}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-colors",
                    selected
                      ? "bg-primary"
                      : "bg-border hover:bg-muted-foreground/40",
                  )}
                />
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-secondary hover:bg-primary hover:text-primary-foreground"
            aria-label="Fotos siguientes"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
