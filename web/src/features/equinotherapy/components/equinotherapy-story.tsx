import type { EquinotherapyStory } from "@/features/equinotherapy/models";
import { SafeImage } from "@/shared/components/safe-image";
import { sectionPadX, sectionPadY } from "@/shared/lib/section";
import { cn } from "@/shared/lib/utils";

type EquinotherapyStoryProps = {
  content: EquinotherapyStory;
  /** When true, section uses muted/gray background (benefits with cards). */
  muted?: boolean;
};

export function EquinotherapyStorySection({
  content,
  muted = false,
}: EquinotherapyStoryProps) {
  const hasText =
    content.eyebrow.trim() ||
    content.title.trim() ||
    content.paragraphs.some((paragraph) => paragraph.trim()) ||
    content.benefits.length > 0;

  if (!hasText && !content.image) return null;

  const imageOnLeft = content.imagePosition === "left";
  const hasBenefitCards = content.benefits.length > 0;

  return (
    <section
      className={cn(
        sectionPadX,
        sectionPadY,
        muted || hasBenefitCards ? "bg-muted/40" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "grid gap-8 lg:items-start lg:gap-12",
            content.image
              ? imageOnLeft
                ? "lg:grid-cols-[0.9fr_1.1fr] lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                : "lg:grid-cols-[1.1fr_0.9fr]"
              : undefined,
          )}
        >
          <div>
            {content.eyebrow.trim() ? (
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                {content.eyebrow}
              </p>
            ) : null}
            {content.title.trim() ? (
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
                {content.title}
              </h2>
            ) : null}
            {content.paragraphs.length > 0 ? (
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {content.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {hasBenefitCards ? (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {content.benefits.map((benefit, index) => (
                  <li
                    key={benefit.slice(0, 48)}
                    className="border border-border bg-background p-4"
                  >
                    <p className="text-xs font-bold tabular-nums tracking-[0.08em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-secondary md:text-base">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {content.image ? (
            <SafeImage
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              wrapperClassName={cn(
                "aspect-[4/3] w-full max-w-lg rounded-xl",
                imageOnLeft ? "lg:mr-auto" : "lg:ml-auto",
              )}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
