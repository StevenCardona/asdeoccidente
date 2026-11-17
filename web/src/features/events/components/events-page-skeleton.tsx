import { Skeleton } from "@/shared/components/ui/skeleton";

export function EventsPageSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite">
      <div className="border-b border-border bg-background px-5 py-10 md:px-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-10 w-full max-w-md" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="mt-4 h-20 w-full max-w-lg" />
            <div className="flex gap-3 pt-2">
              <Skeleton className="h-11 w-40" />
              <Skeleton className="h-11 w-36" />
            </div>
          </div>
          <Skeleton className="aspect-[4/3] w-full" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-12 md:py-16">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="mt-3 h-8 w-56" />
        <Skeleton className="mt-2 h-4 w-full max-w-xl" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <Skeleton className="aspect-[16/10] w-full" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EventDetailSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite">
      <div className="border-b border-border bg-background px-5 py-8 md:px-12 md:py-12">
        <div className="mx-auto max-w-7xl">
          <Skeleton className="h-4 w-32" />
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-10 w-full max-w-lg" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-24 w-full max-w-md" />
              <div className="flex gap-3 pt-2">
                <Skeleton className="h-11 w-44" />
              </div>
            </div>
            <Skeleton className="aspect-[4/3] w-full" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl space-y-6 px-5 py-12 md:px-12">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  );
}
