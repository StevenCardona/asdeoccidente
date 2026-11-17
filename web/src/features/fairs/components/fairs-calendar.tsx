"use client";

import { useMemo, useState } from "react";
import { FairCard } from "@/features/fairs/components/fair-card";
import {
  fairKindLabel,
  kindsPresent,
  sortFairsByStart,
  type Fair,
  type FairKind,
  type FairsListContent,
} from "@/features/fairs/models";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

const PREVIEW_LIMIT = 8;

type FairsCalendarProps = {
  fairs: Fair[];
  intro: FairsListContent["calendarIntro"];
  emptyMessage: string;
};

type FilterValue = "all" | FairKind;

export function FairsCalendar({
  fairs,
  intro,
  emptyMessage,
}: FairsCalendarProps) {
  const kinds = useMemo(() => kindsPresent(fairs), [fairs]);
  const [filter, setFilter] = useState<FilterValue>("all");
  const [showAll, setShowAll] = useState(false);

  const sorted = useMemo(() => sortFairsByStart(fairs), [fairs]);
  const filtered = useMemo(() => {
    if (filter === "all") return sorted;
    return sorted.filter((fair) => fair.kind === filter);
  }, [filter, sorted]);

  const visible = showAll ? filtered : filtered.slice(0, PREVIEW_LIMIT);
  const hasMore = filtered.length > PREVIEW_LIMIT;
  const showFilters = kinds.length > 0;

  return (
    <section className="bg-background px-5 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {intro.eyebrow.trim() ? (
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                {intro.eyebrow}
              </p>
            ) : null}
            {intro.title.trim() ? (
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
                {intro.title}
              </h2>
            ) : null}
            {intro.subtitle.trim() ? (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {intro.subtitle}
              </p>
            ) : null}
          </div>

          {showFilters ? (
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filtrar ferias por tipo"
            >
              <FilterTab
                active={filter === "all"}
                onClick={() => {
                  setFilter("all");
                  setShowAll(false);
                }}
                label={`Todas (${fairs.length})`}
              />
              {kinds.map((kind) => {
                const count = fairs.filter((f) => f.kind === kind).length;
                return (
                  <FilterTab
                    key={kind}
                    active={filter === kind}
                    onClick={() => {
                      setFilter(kind);
                      setShowAll(false);
                    }}
                    label={`${fairKindLabel(kind)} (${count})`}
                  />
                );
              })}
            </div>
          ) : null}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
            {emptyMessage}
          </p>
        ) : (
          <>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visible.map((fair) => (
                <li key={fair.slug}>
                  <FairCard fair={fair} />
                </li>
              ))}
            </ul>
            {hasMore ? (
              <div className="mt-10 flex justify-center">
                <Button
                  type="button"
                  variant={showAll ? "outline" : "primary"}
                  onClick={() => setShowAll((v) => !v)}
                >
                  {showAll
                    ? "Ver menos"
                    : `Ver todos (${filtered.length})`}
                </Button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}

function FilterTab({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-muted-foreground hover:text-secondary",
      )}
    >
      {label}
    </button>
  );
}
