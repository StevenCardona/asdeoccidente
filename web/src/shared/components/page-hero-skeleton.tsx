import { Skeleton } from "@/shared/components/ui/skeleton";
import type { PageHeroSize } from "@/shared/components/page-hero";
import { cn } from "@/shared/lib/utils";

const heights: Record<PageHeroSize, string> = {
  home: "min-h-[min(78dvh,640px)] md:min-h-[min(88dvh,760px)]",
  standard: "min-h-[min(58dvh,520px)] md:min-h-[min(68dvh,620px)]",
  compact: "min-h-[min(48dvh,420px)] md:min-h-[min(58dvh,540px)]",
};

export function PageHeroSkeleton({
  size = "standard",
}: {
  size?: PageHeroSize;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-end bg-secondary px-4 pb-12 pt-10 md:justify-center md:px-8 md:pb-16",
        heights[size],
      )}
    >
      <div className="mx-auto w-full max-w-7xl space-y-4">
        <Skeleton className="h-6 w-28 bg-white/20" />
        <Skeleton className="h-12 w-full max-w-2xl bg-white/25 md:h-14" />
        <Skeleton className="h-16 w-full max-w-xl bg-white/15" />
        <div className="flex gap-3 pt-2">
          <Skeleton className="h-11 w-40 bg-white/20" />
          <Skeleton className="h-11 w-36 bg-white/10" />
        </div>
      </div>
    </div>
  );
}
