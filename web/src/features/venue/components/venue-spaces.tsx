import { Check } from "lucide-react";
import type { VenueSpace } from "@/features/venue/models";
import { SafeImage } from "@/shared/components/safe-image";
import { cn } from "@/shared/lib/utils";

type VenueSpacesProps = {
  spaces: VenueSpace[];
};

export function VenueSpaces({ spaces }: VenueSpacesProps) {
  if (spaces.length === 0) return null;

  return (
    <section className="px-5 py-10 md:px-12 md:py-12">
      <div className="mx-auto max-w-7xl space-y-10 md:space-y-12">
        {spaces.map((space, index) => (
          <SpaceBlock
            key={`${space.title}-${index}`}
            space={space}
            muted={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

function SpaceBlock({
  space,
  muted,
}: {
  space: VenueSpace;
  muted: boolean;
}) {
  const imageOnLeft = space.imagePosition === "left";

  return (
    <article
      className={cn(
        "rounded-2xl px-0 py-0 md:px-2",
        muted && "md:-mx-2 md:bg-muted/35 md:px-8 md:py-10",
      )}
    >
      <div
        className={cn(
          "grid gap-8 lg:items-center lg:gap-12",
          imageOnLeft
            ? "lg:grid-cols-[0.9fr_1.1fr] lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : "lg:grid-cols-[1.1fr_0.9fr]",
        )}
      >
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight text-secondary md:text-2xl">
            {space.title}
          </h3>
          {space.description.trim() ? (
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {space.description}
            </p>
          ) : null}
          {space.highlights.length > 0 ? (
            <ul className="mt-5 space-y-2">
              {space.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-secondary md:text-base"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {space.image ? (
          <SafeImage
            src={space.image.src}
            alt={space.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            wrapperClassName={cn(
              "aspect-[3/2] w-full max-w-lg rounded-xl",
              imageOnLeft ? "lg:mr-auto" : "lg:ml-auto",
            )}
          />
        ) : (
          <div
            className={cn(
              "flex aspect-[3/2] w-full max-w-lg items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-sm text-muted-foreground",
              imageOnLeft ? "lg:mr-auto" : "lg:ml-auto",
            )}
          >
            Foto próximamente
          </div>
        )}
      </div>
    </article>
  );
}
