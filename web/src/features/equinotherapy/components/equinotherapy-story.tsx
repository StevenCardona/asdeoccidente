import { Check } from "lucide-react";
import type { EquinotherapyStory } from "@/features/equinotherapy/models";
import { SafeImage } from "@/shared/components/safe-image";
import { cn } from "@/shared/lib/utils";

type EquinotherapyStoryProps = {
  content: EquinotherapyStory;
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

  return (
    <section
      className={cn(
        "px-5 py-10 md:px-12 md:py-14",
        muted ? "bg-muted/35" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "grid gap-8 lg:items-center lg:gap-12",
            imageOnLeft
              ? "lg:grid-cols-[0.9fr_1.1fr] lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
              : "lg:grid-cols-[1.1fr_0.9fr]",
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
            {content.benefits.length > 0 ? (
              <ul className="mt-6 space-y-3">
                {content.benefits.map((benefit) => (
                  <li
                    key={benefit.slice(0, 48)}
                    className="flex items-start gap-2 text-sm text-secondary md:text-base"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{benefit}</span>
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
          ) : (
            <div
              className={cn(
                "aspect-[4/3] w-full max-w-lg rounded-xl bg-muted",
                imageOnLeft ? "lg:mr-auto" : "lg:ml-auto",
              )}
              aria-hidden
            />
          )}
        </div>
      </div>
    </section>
  );
}
