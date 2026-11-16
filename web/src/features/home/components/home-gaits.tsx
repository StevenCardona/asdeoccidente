"use client";

import { useState } from "react";
import { Music2, Shield } from "lucide-react";
import { SafeImage } from "@/shared/components/safe-image";
import { cn } from "@/shared/lib/utils";

const gaits = [
  {
    id: "paso-fino",
    tab: "Paso Fino",
    tag: "Cadencia isócrona en 4 tiempos",
    sound: "Ta-ca-ta-ca-ta-ca-ta-ca",
    title: "Paso Fino Colombiano",
    text: "El andar más suave y elegante: cuatro tiempos iguales, ritmo lateral y presencia de pista.",
    image: "/imgs/escuela1.jpg",
  },
  {
    id: "trocha",
    tab: "Trocha",
    tag: "Ritmo diagonal característico",
    sound: "Tac-tac-tac-tac",
    title: "Trocha",
    text: "Modalidad de brío y compás propio del criollo. Fuerza controlada y cadencia clara.",
    image: "/imgs/escuela2.jpg",
  },
  {
    id: "trocha-galope",
    tab: "Trocha y Galope",
    tag: "Dos aires en una misma prueba",
    sound: "Trocha · Galope",
    title: "Trocha y Galope",
    text: "El jinete muestra transición y dominio entre la trocha y el galope reglamentario.",
    image: "/imgs/escuela3.jpg",
  },
  {
    id: "trote-galope",
    tab: "Trote y Galope",
    tag: "Clásico de pista",
    sound: "Trote · Galope",
    title: "Trote y Galope",
    text: "Combinación de trote y galope que exige equilibrio, conducción y presentación.",
    image: "/imgs/escuela4.jpg",
  },
] as const;

export function HomeGaits() {
  const [activeId, setActiveId] = useState<(typeof gaits)[number]["id"]>(
    "paso-fino",
  );
  const active = gaits.find((gait) => gait.id === activeId) ?? gaits[0];

  return (
    <section className="bg-primary px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/90">
          Patrimonio vivo
        </p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
              Los cuatro andares oficiales
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/80">
              Elige una modalidad para conocer su cadencia y carácter en pista.
            </p>
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Andares"
          >
            {gaits.map((gait) => {
              const selected = gait.id === active.id;
              return (
                <button
                  key={gait.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(gait.id)}
                  className={cn(
                    "rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors md:text-sm",
                    selected
                      ? "bg-white text-primary"
                      : "border border-white/40 text-white hover:bg-white/10",
                  )}
                >
                  {gait.tab}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          className="mt-8 grid overflow-hidden rounded-sm border border-white/50 bg-background lg:grid-cols-2"
        >
          <SafeImage
            src={active.image}
            alt={active.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            wrapperClassName="aspect-[4/3] lg:aspect-auto lg:min-h-[360px]"
          />
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="inline-flex w-fit bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
              {active.tag}
            </p>
            <p className="mt-4 text-sm italic text-muted-foreground">
              “{active.sound}”
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-secondary">
              {active.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {active.text}
            </p>
            <ul className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-secondary">
              <li className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" aria-hidden />
                Tradición criolla
              </li>
              <li className="inline-flex items-center gap-2">
                <Music2 className="h-4 w-4 text-primary" aria-hidden />
                Cadencia de pista
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
