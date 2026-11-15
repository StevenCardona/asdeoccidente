import { Skeleton } from "@/shared/components/ui/skeleton";

export function FairDetailPage({ slug }: { slug: string }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-12 md:py-16">
      <p className="text-xs font-bold uppercase tracking-wider text-primary">
        Detalle de feria
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-secondary md:text-4xl">
        {slug}
      </h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        Detalle pendiente del spec Fairs. Este slug ya es navegable.
      </p>
      <Skeleton className="mt-8 h-56 w-full max-w-3xl" aria-hidden />
    </div>
  );
}
