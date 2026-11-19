/**
 * Shared reviews band. Hides when `reviews` is empty.
 * Used directly by home, events, venue, membership, equinotherapy pages.
 */
import { Star, User } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { sectionPadX, sectionPadY } from "@/shared/lib/section";

export type ReviewItem = {
  name: string;
  place?: string;
  rating: number;
  text: string;
};

export type ReviewsSectionIntro = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

type ReviewsSectionProps = {
  intro?: ReviewsSectionIntro;
  reviews: ReviewItem[];
  tone?: "white" | "muted";
  className?: string;
};

export function ReviewsSection({
  intro,
  reviews,
  tone = "white",
  className,
}: ReviewsSectionProps) {
  if (reviews.length === 0) return null;

  const eyebrow = intro?.eyebrow?.trim() ?? "";
  const title = intro?.title?.trim() ?? "";
  const subtitle = intro?.subtitle?.trim() ?? "";

  return (
    <section
      className={cn(
        tone === "white" ? "bg-background" : "bg-muted/40",
        sectionPadX,
        sectionPadY,
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2
            className={cn(
              "max-w-2xl font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl",
              eyebrow ? "mt-3" : undefined,
            )}
          >
            {title}
          </h2>
        ) : null}
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {subtitle}
          </p>
        ) : null}

        <ul className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 md:pb-0">
          {reviews.map((review) => (
            <li
              key={`${review.name}-${review.place ?? ""}-${review.text.slice(0, 24)}`}
              className="w-[min(85vw,280px)] shrink-0 snap-start md:w-auto"
            >
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: ReviewItem }) {
  const stars = Math.min(5, Math.max(1, Math.round(review.rating)));

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-background p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground"
          aria-hidden
        >
          <User className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-secondary">
            {review.name}
          </p>
          {review.place?.trim() ? (
            <p className="truncate text-xs text-muted-foreground">
              {review.place.trim()}
            </p>
          ) : null}
        </div>
      </div>
      <div
        className="mt-3 flex items-center gap-0.5"
        aria-label={`${stars} de 5 estrellas`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={
              i < stars
                ? "h-3.5 w-3.5 fill-amber-400 text-amber-400"
                : "h-3.5 w-3.5 text-border"
            }
            aria-hidden
          />
        ))}
      </div>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {review.text}
      </p>
    </article>
  );
}
