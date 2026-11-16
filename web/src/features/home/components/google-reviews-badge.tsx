import { Star } from "lucide-react";
import { GoogleIcon } from "@/shared/components/brand-icons";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";

type GoogleReviewsBadgeProps = {
  className?: string;
  tone?: "light" | "dark";
  as?: "div" | "link";
};

export function GoogleReviewsBadge({
  className,
  tone = "light",
  as = "div",
}: GoogleReviewsBadgeProps) {
  const { rating, reviewCount, reviewsUrl } = siteConfig.google;
  const numericRating = Number.parseFloat(rating);
  const fullStars = Math.floor(numericRating);
  const hasHalf = numericRating - fullStars >= 0.3;
  const isDark = tone === "dark";

  const content = (
    <span
      className={cn(
        "inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md px-2.5 md:h-10",
        isDark ? "bg-white/10 backdrop-blur-sm" : "bg-background/90",
        className,
      )}
    >
      <GoogleIcon className="h-4 w-4 shrink-0" />
      <span
        className={cn(
          "font-display text-sm font-bold",
          isDark ? "text-white" : "text-secondary",
        )}
      >
        {rating.replace(".", ",")}
      </span>
      <span className="inline-flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, index) => {
          const filled = index < fullStars || (index === fullStars && hasHalf);
          return (
            <Star
              key={index}
              className={cn(
                "h-3.5 w-3.5",
                filled ? "fill-tertiary text-tertiary" : "text-white/30",
              )}
            />
          );
        })}
      </span>
      <span
        className={cn(
          "text-xs font-semibold",
          isDark ? "text-white/80" : "text-muted-foreground",
        )}
      >
        {reviewCount} opiniones
      </span>
    </span>
  );

  if (as === "link" && reviewsUrl) {
    return (
      <a
        href={reviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex hover:opacity-90"
      >
        {content}
      </a>
    );
  }

  return <div className="inline-flex">{content}</div>;
}
