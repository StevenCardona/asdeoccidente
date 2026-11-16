"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramIcon } from "@/shared/components/brand-icons";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";

type SocialVideo = {
  url: string;
  label?: string;
  orientation?: "vertical" | "horizontal";
};

type HomeSocialVideosProps = {
  videos?: SocialVideo[];
};

function detectPlatform(url: string): "instagram" | "tiktok" | "unknown" {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    if (host.includes("instagram.com")) return "instagram";
    if (host.includes("tiktok.com")) return "tiktok";
  } catch {
    return "unknown";
  }
  return "unknown";
}

function toEmbedSrc(url: string): string | null {
  const platform = detectPlatform(url);
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split("/").filter(Boolean);

    if (platform === "instagram") {
      const reelIndex = parts.findIndex(
        (part) => part === "reel" || part === "p" || part === "tv",
      );
      if (reelIndex >= 0 && parts[reelIndex + 1]) {
        const kind = parts[reelIndex];
        const code = parts[reelIndex + 1];
        return `https://www.instagram.com/${kind}/${code}/embed`;
      }
    }

    if (platform === "tiktok") {
      const match = parsed.pathname.match(/\/video\/(\d+)/);
      if (match?.[1]) {
        return `https://www.tiktok.com/embed/v2/${match[1]}`;
      }
    }
  } catch {
    return null;
  }
  return null;
}

function VideoSlot({
  item,
  index,
}: {
  item: SocialVideo | null;
  index: number;
}) {
  const embed = item ? toEmbedSrc(item.url) : null;

  return (
    <div
      className={cn(
        "relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black",
        "shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-black/10",
      )}
    >
      {embed ? (
        <iframe
          title={item?.label || `Video ${index + 1}`}
          src={embed}
          className="absolute inset-x-0 top-0 h-[175%] w-full origin-top scale-[1.06] border-0"
          loading="lazy"
          allow="encrypted-media; picture-in-picture; clipboard-write"
          allowFullScreen
        />
      ) : item?.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center"
        >
          <InstagramIcon className="h-8 w-8 text-primary" />
          <span className="text-sm font-semibold text-primary underline-offset-2 hover:underline">
            Ver en Instagram
          </span>
        </a>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <InstagramIcon className="h-7 w-7 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Espacio para reel</p>
        </div>
      )}
    </div>
  );
}

export function HomeSocialVideos({ videos }: HomeSocialVideosProps) {
  const fromProps = videos?.filter((item) => Boolean(item.url?.trim())) ?? [];
  const defaults = siteConfig.homeVideos;
  const items: SocialVideo[] =
    fromProps.length > 0
      ? fromProps.map((item, index) => ({
          ...item,
          orientation:
            item.orientation ?? defaults[index]?.orientation ?? "vertical",
        }))
      : defaults;

  const slots = Array.from({ length: 4 }, (_, index) => items[index] ?? null);
  const count = slots.length;
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const node = scrollerRef.current;
    if (!node || count === 0) return;
    const next = ((index % count) + count) % count;
    setActiveIndex(next);
    node.scrollTo({ left: next * node.clientWidth, behavior: "smooth" });
  };

  const scrollBy = (direction: -1 | 1) => {
    scrollToIndex(activeIndex + direction);
  };

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const updateActive = () => {
      const width = node.clientWidth || 1;
      const next = Math.round(node.scrollLeft / width);
      setActiveIndex(((next % count) + count) % count);
    };

    updateActive();
    node.addEventListener("scroll", updateActive, { passive: true });
    const observer = new ResizeObserver(updateActive);
    observer.observe(node);

    return () => {
      node.removeEventListener("scroll", updateActive);
      observer.disconnect();
    };
  }, [count]);

  return (
    <section className="bg-surface px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            En movimiento
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
            Videos de la comunidad
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Reels de escuela y feria — Instagram en vivo, sin salir del ritmo de
            la página.
          </p>
        </div>

        {/* Desktop: 4 equal in one row */}
        <ul className="mt-10 hidden gap-3 md:grid md:grid-cols-4 md:gap-4">
          {slots.map((item, index) => (
            <li key={item?.url ?? `slot-${index}`}>
              <VideoSlot item={item} index={index} />
            </li>
          ))}
        </ul>

        {/* Mobile: 1-up carousel */}
        <div className="mt-10 md:hidden">
          <ul
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slots.map((item, index) => (
              <li
                key={item?.url ?? `slot-mobile-${index}`}
                className="w-full min-w-full shrink-0 snap-start"
              >
                <div className="mx-auto w-full max-w-[min(100%,22rem)]">
                  <VideoSlot item={item} index={index} />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-secondary hover:bg-primary hover:text-primary-foreground"
              aria-label="Video anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Videos"
            >
              {slots.map((item, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={item?.url ?? `dot-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-label={`Ir al video ${index + 1}`}
                    aria-current={selected ? "true" : undefined}
                    onClick={() => scrollToIndex(index)}
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
              onClick={() => scrollBy(1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-secondary hover:bg-primary hover:text-primary-foreground"
              aria-label="Video siguiente"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
