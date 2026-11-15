import { Skeleton } from "@/shared/components/ui/skeleton";

export function FairsListPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-12 md:py-16">
      <p className="text-xs font-bold uppercase tracking-wider text-primary">
        Ferias
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-secondary md:text-5xl">
        Ferias y eventos
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Listado de ferias (destacada + cards) en construcción.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden>
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  );
}
