import { Star } from "lucide-react";
import { GoogleIcon } from "@/shared/components/brand-icons";
import { cn } from "@/shared/lib/utils";

type GoogleReviewsBadgeProps = {
  rating: string;
  reviewCount: string;
  reviewsUrl?: string;
  className?: string;
  tone?: "light" | "dark";
  as?: "div" | "link";
};

function formatRatingEs(rating: string): string {
  const numeric = Number.parseFloat(rating.replace(",", "."));
  if (!Number.isFinite(numeric)) return rating.trim();
  return numeric.toLocaleString("es-CO", {
    minimumFractionDigits: Number.isInteger(numeric) ? 0 : 1,
    maximumFractionDigits: 1,
  });
}

export function GoogleReviewsBadge({
  rating,
  reviewCount,
  reviewsUrl = "",
  className,
  tone = "light",
  as = "div",
}: GoogleReviewsBadgeProps) {
  const numericRating = Number.parseFloat(rating.replace(",", "."));
  const fullStars = Number.isFinite(numericRating)
    ? Math.floor(numericRating)
    : 0;
  const hasHalf =
    Number.isFinite(numericRating) && numericRating - fullStars >= 0.3;
  const isDark = tone === "dark";
  const displayRating = formatRatingEs(rating);
  const countLabel = reviewCount.trim()
    ? `${reviewCount.trim()} opiniones`
    : "";

  if (!displayRating && !countLabel) return null;

  const content = (
    <>
      <GoogleIcon className="h-5 w-5 shrink-0" />
      {displayRating ? (
        <span className="font-semibold tabular-nums">{displayRating}</span>
      ) : null}
      <span className="inline-flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }, (_, index) => {
          const filled = index < fullStars || (index === fullStars && hasHalf);
          return (
            <Star
              key={index}
              className={cn(
                "h-3.5 w-3.5",
                filled
                  ? "fill-tertiary text-tertiary"
                  : isDark
                    ? "text-white/35"
                    : "text-muted-foreground/40",
              )}
            />
          );
        })}
      </span>
      {countLabel ? (
        <span
          className={cn(
            "tabular-nums",
            isDark ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {countLabel}
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "inline-flex h-9 w-fit shrink-0 items-center gap-2 rounded-md px-3 text-sm md:h-10",
    isDark
      ? "bg-white/10 text-white backdrop-blur"
      : "border border-border bg-background text-secondary",
    className,
  );

  if (as === "link" && reviewsUrl) {
    return (
      <a
        href={reviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}
