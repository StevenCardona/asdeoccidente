import { Skeleton } from "@/shared/components/ui/skeleton";

export function HomePageSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite">
      <div className="relative min-h-[min(88dvh,760px)] bg-secondary px-5 pb-14 pt-24 md:px-12 md:pt-28">
        <Skeleton className="h-4 w-40 bg-white/15" />
        <Skeleton className="mt-6 h-12 w-full max-w-2xl bg-white/15 md:h-16" />
        <Skeleton className="mt-4 h-12 w-full max-w-xl bg-white/10 md:h-16" />
        <Skeleton className="mt-6 h-5 w-full max-w-md bg-white/10" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Skeleton className="h-12 w-52 bg-white/20" />
          <Skeleton className="h-12 w-48 bg-white/10" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-12">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="mt-4 h-8 w-64" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-16 w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="border-y border-border bg-surface px-5 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    </div>
  );
}
