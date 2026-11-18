import { Star, User } from "lucide-react";
import type {
  EquinotherapyReview,
  EquinotherapySectionIntro,
} from "@/features/equinotherapy/models";

type EquinotherapyReviewsProps = {
  intro: EquinotherapySectionIntro;
  reviews: EquinotherapyReview[];
};

export function EquinotherapyReviews({
  intro,
  reviews,
}: EquinotherapyReviewsProps) {
  if (reviews.length === 0) return null;

  return (
    <section className="border-t border-border bg-muted/40 px-5 py-10 md:px-12 md:py-12">
      <div className="mx-auto max-w-7xl">
        {intro.eyebrow.trim() ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {intro.eyebrow}
          </p>
        ) : null}
        {intro.title.trim() ? (
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
            {intro.title}
          </h2>
        ) : null}
        {intro.subtitle.trim() ? (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {intro.subtitle}
          </p>
        ) : null}

        <ul className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 md:pb-0">
          {reviews.map((review) => (
            <li
              key={`${review.name}-${review.place}`}
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

function ReviewCard({ review }: { review: EquinotherapyReview }) {
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
          {review.place.trim() ? (
            <p className="truncate text-xs text-muted-foreground">
              {review.place}
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
      <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
        {review.text}
      </p>
    </article>
  );
}
