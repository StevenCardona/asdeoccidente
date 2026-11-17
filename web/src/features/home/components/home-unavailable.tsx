"use client";

import Image from "next/image";
import { Button } from "@/shared/components/ui/button";

type HomeUnavailableProps = {
  siteName: string;
};

export function HomeUnavailable({ siteName }: HomeUnavailableProps) {
  return (
    <section
      className="flex min-h-[min(70dvh,560px)] flex-col items-center justify-center bg-background px-5 py-16 text-center"
      aria-live="polite"
    >
      <span className="relative mb-6 h-20 w-20 overflow-hidden md:h-24 md:w-24">
        <Image
          src="/brand/logo.jpg"
          alt=""
          fill
          className="object-contain"
          sizes="96px"
          priority
        />
      </span>
      <p className="font-display text-lg font-extrabold uppercase tracking-[0.04em] text-secondary md:text-xl">
        {siteName}
      </p>
      <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">
        No pudimos cargar el contenido en este momento. Intenta de nuevo o
        escríbenos desde la sección de contacto.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button type="button" onClick={() => window.location.reload()}>
          Reintentar
        </Button>
        <Button asChild variant="outline">
          <a href="#contacto">Ir a contacto</a>
        </Button>
      </div>
    </section>
  );
}
