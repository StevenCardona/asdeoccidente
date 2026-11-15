import { Skeleton } from "@/shared/components/ui/skeleton";

export function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-12 md:py-16">
      <p className="text-xs font-bold uppercase tracking-wider text-primary">
        Inicio
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-secondary md:text-5xl">
        Aprende, compite y celebra con el caballo criollo colombiano.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Contenido de la página de inicio en construcción (spec Home). El cascarón
        de navegación, contacto y pie ya está activo.
      </p>
      <div className="mt-10 space-y-3" aria-hidden>
        <Skeleton className="h-40 w-full max-w-3xl" />
        <Skeleton className="h-4 w-2/3 max-w-md" />
        <Skeleton className="h-4 w-1/2 max-w-sm" />
      </div>
    </div>
  );
}
