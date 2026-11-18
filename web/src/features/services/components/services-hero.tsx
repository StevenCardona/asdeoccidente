import type { ServicesContent } from "@/features/services/models";

type ServicesHeroProps = {
  hero: ServicesContent["hero"];
};

/** Compact page intro — no full-bleed banner. */
export function ServicesHero({ hero }: ServicesHeroProps) {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">
        {hero.eyebrow.trim() ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {hero.eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 max-w-3xl font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
          {hero.title}
        </h1>
        {hero.subtitle.trim() ? (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {hero.subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
