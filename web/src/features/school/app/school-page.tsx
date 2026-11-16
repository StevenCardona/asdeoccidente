import { Skeleton } from "@/shared/components/ui/skeleton";

export function SchoolPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-12 md:py-16">
      <p className="text-xs font-bold uppercase tracking-wider text-primary">
        Escuela
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-secondary md:text-5xl">
        Escuela de chalanería
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Página en construcción. El detalle llega con el spec School.
      </p>
      <div className="mt-10 space-y-3" aria-hidden>
        <Skeleton className="h-32 w-full max-w-2xl" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
