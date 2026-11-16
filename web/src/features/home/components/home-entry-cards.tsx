import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GoogleReviewsBadge } from "@/features/home/components/google-reviews-badge";
import type { HomeEntryCard } from "@/features/home/models/home";
import { resolveLucideIcon } from "@/features/home/utils/icons";

type HomeEntryCardsProps = {
  cards: HomeEntryCard[];
};

export function HomeEntryCards({ cards }: HomeEntryCardsProps) {
  if (cards.length === 0) return null;

  return (
    <section className="border-y border-border bg-surface px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
          Empieza aquí
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
          ¿Qué quieres hacer?
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          Elige tu camino: aprender a montar o vivir la próxima feria.
        </p>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((card) => {
            const Icon = resolveLucideIcon(card.icon);
            return (
              <li key={card.href}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col border border-border bg-background p-6 transition-shadow hover:shadow-[0_12px_24px_-6px_rgba(197,22,29,0.08),0_4px_12px_-2px_rgba(15,23,42,0.05)] md:p-8"
                >
                  <span className="h-0.5 w-10 bg-primary" aria-hidden />
                  {Icon ? (
                    <Icon
                      className="mt-5 h-7 w-7 text-secondary"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  ) : null}
                  <h3 className="mt-4 font-display text-xl font-semibold text-secondary">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <GoogleReviewsBadge />
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Ir
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
