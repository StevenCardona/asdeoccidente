/**
 * Full-bleed marketing banner shared by most public pages.
 * Renders nothing when title/subtitle/image/badge/actions are all empty.
 * Missing image → solid `bg-secondary` (no invented `/imgs` fallback).
 */
import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

export type PageHeroSize = "home" | "standard" | "compact";

const sizeClasses: Record<
  PageHeroSize,
  { section: string; inner: string; title: string }
> = {
  home: {
    section: "min-h-[min(78dvh,640px)] md:min-h-[min(88dvh,760px)]",
    inner:
      "min-h-[min(78dvh,640px)] justify-end pb-14 pt-5 md:min-h-[min(88dvh,760px)] md:justify-center md:pb-16 md:pt-12",
    title:
      "text-[2.25rem] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]",
  },
  standard: {
    section: "min-h-[min(58dvh,520px)] md:min-h-[min(68dvh,620px)]",
    inner:
      "min-h-[min(58dvh,520px)] justify-end pb-12 pt-10 md:min-h-[min(68dvh,620px)] md:justify-center md:pb-16 md:pt-12",
    title: "text-[1.85rem] md:text-4xl lg:text-5xl",
  },
  compact: {
    section: "min-h-[min(48dvh,420px)] md:min-h-[min(58dvh,540px)]",
    inner:
      "min-h-[min(48dvh,420px)] justify-center pb-8 pt-4 md:min-h-[min(58dvh,540px)] md:pb-12 md:pt-6",
    title: "text-[1.85rem] md:text-4xl lg:text-5xl",
  },
};

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  imageUrl?: string | null;
  imageAlt?: string;
  size?: PageHeroSize;
  eyebrowSlot?: ReactNode;
  actions?: ReactNode;
  meta?: ReactNode;
  className?: string;
};

export function PageHero({
  title,
  subtitle = "",
  badge,
  imageUrl,
  imageAlt = "",
  size = "standard",
  eyebrowSlot,
  actions,
  meta,
  className,
}: PageHeroProps) {
  const sizes = sizeClasses[size];
  const alt = imageAlt.trim() || title.trim() || "";

  if (!title.trim() && !subtitle.trim() && !imageUrl && !badge && !actions) {
    return null;
  }

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-secondary text-white",
        sizes.section,
        className,
      )}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          quality={75}
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-secondary" aria-hidden />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-secondary/40"
        aria-hidden
      />

      <div
        className={cn(
          "relative mx-auto flex max-w-7xl flex-col px-4 md:px-8",
          sizes.inner,
        )}
      >
        {eyebrowSlot}

        {badge?.trim() ? (
          <span
            className={cn(
              "inline-flex w-fit items-center rounded-md bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground",
              eyebrowSlot ? "mt-4" : undefined,
            )}
          >
            {badge.trim()}
          </span>
        ) : null}

        {title.trim() ? (
          <h1
            className={cn(
              "max-w-3xl font-display font-extrabold leading-[1.15] tracking-tight",
              sizes.title,
              badge?.trim() || eyebrowSlot ? "mt-5" : undefined,
            )}
          >
            {title.trim()}
          </h1>
        ) : null}

        {subtitle.trim() ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:max-w-3xl md:text-lg">
            {subtitle.trim()}
          </p>
        ) : null}

        {actions ? (
          <div className="mt-7 flex max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions}
          </div>
        ) : null}

        {meta ? <div className="mt-4 max-w-3xl">{meta}</div> : null}
      </div>
    </section>
  );
}
