import { SafeImage } from "@/shared/components/safe-image";
import { cn } from "@/shared/lib/utils";
import type { SchoolContent } from "@/features/school/models/school";

type SchoolGalleryProps = {
  content: SchoolContent["gallery"];
};

const spanClass: Record<SchoolContent["gallery"]["tiles"][number]["span"], string> = {
  large: "md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-0",
  tall: "min-h-[200px]",
  wide: "md:col-span-2 min-h-[180px]",
  small: "min-h-[180px]",
};

export function SchoolGallery({ content }: SchoolGalleryProps) {
  return (
    <section className="bg-surface px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {content.subtitle}
        </p>

        <ul className="mt-10 grid auto-rows-[minmax(200px,auto)] gap-3 md:grid-cols-3 md:gap-4">
          {content.tiles.map((tile) => (
            <li
              key={`${tile.badge}-${tile.title}`}
              className={cn(
                "group relative overflow-hidden rounded-xl",
                spanClass[tile.span],
              )}
            >
              <SafeImage
                src={tile.image}
                alt={tile.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                wrapperClassName="absolute inset-0 h-full w-full rounded-xl"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-secondary/98 via-secondary/70 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground/90 md:text-xs">
                  <span className="rounded bg-primary px-2 py-0.5">
                    {tile.badge}
                  </span>
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-white md:text-xl">
                  {tile.title}
                </h3>
                <p className="mt-1 text-sm text-white/80">{tile.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
