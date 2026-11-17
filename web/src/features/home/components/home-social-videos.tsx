"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type {
  HomeSectionIntro,
  HomeSocialVideo,
} from "@/features/home/models";
import { InstagramIcon } from "@/shared/components/brand-icons";
import { cn } from "@/shared/lib/utils";

type HomeSocialVideosProps = {
  intro: HomeSectionIntro;
  videos: HomeSocialVideo[];
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
  item: HomeSocialVideo | null;
  index: number;
}) {
  if (!item?.src) return null;

  if (item.kind === "file") {
    return (
      <div
        className={cn(
          "relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black",
          "shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-black/10",
        )}
      >
        <video
          src={item.src}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-label={item.label || `Video ${index + 1}`}
        />
      </div>
    );
  }

  const embed = toEmbedSrc(item.src);

  return (
    <div
      className={cn(
        "relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black",
        "shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-black/10",
      )}
    >
      {embed ? (
        <iframe
          title={item.label || `Video ${index + 1}`}
          src={embed}
          className="absolute inset-x-0 top-0 h-[175%] w-full origin-top scale-[1.06] border-0"
          loading="lazy"
          allow="encrypted-media; picture-in-picture; clipboard-write"
          allowFullScreen
        />
      ) : (
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center"
        >
          <InstagramIcon className="h-8 w-8 text-primary" />
          <span className="text-sm font-semibold text-primary underline-offset-2 hover:underline">
            {item.label?.trim() || "Ver video"}
          </span>
        </a>
      )}
    </div>
  );
}

export function HomeSocialVideos({ intro, videos }: HomeSocialVideosProps) {
  const items = videos.filter((item) => Boolean(item.src?.trim()));
  const count = items.length;
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasIntro = Boolean(
    intro.eyebrow.trim() || intro.title.trim() || intro.subtitle.trim(),
  );

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

  if (count === 0) return null;

  return (
    <section className="bg-surface px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        {hasIntro ? (
          <div className="max-w-2xl">
            {intro.eyebrow.trim() ? (
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                {intro.eyebrow}
              </p>
            ) : null}
            {intro.title.trim() ? (
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
                {intro.title}
              </h2>
            ) : null}
            {intro.subtitle.trim() ? (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {intro.subtitle}
              </p>
            ) : null}
          </div>
        ) : null}
        <ul
          className={cn(
            "hidden gap-3 md:grid md:gap-4",
            hasIntro ? "mt-10" : undefined,
            items.length === 1 && "md:grid-cols-1",
            items.length === 2 && "md:grid-cols-2",
            items.length === 3 && "md:grid-cols-3",
            items.length >= 4 && "md:grid-cols-4",
          )}
        >
          {items.map((item, index) => (
            <li key={`${item.kind}-${item.src}-${index}`}>
              <VideoSlot item={item} index={index} />
            </li>
          ))}
        </ul>

        <div className={cn("md:hidden", hasIntro && "mt-10")}>
          <ul
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, index) => (
              <li
                key={`mobile-${item.kind}-${item.src}-${index}`}
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
              {items.map((item, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={`dot-${item.kind}-${item.src}-${index}`}
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
