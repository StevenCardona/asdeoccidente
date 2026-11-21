"use client";

import { useMemo, useState } from "react";
import { Download, Search } from "lucide-react";
import type { DirectoryDataset } from "@/features/directory/models";
import { Button } from "@/shared/components/ui/button";
import { sectionPadX, sectionPadY } from "@/shared/lib/section";
import { cn } from "@/shared/lib/utils";

type DirectoryTableProps = {
  datasets: DirectoryDataset[];
  emptyTitle: string;
  emptySubtitle: string;
};

function downloadCsv(dataset: DirectoryDataset) {
  const escape = (value: string) => `"${value.replace(/"/g, '""')}"`;
  const lines = [
    dataset.headers.map(escape).join(","),
    ...dataset.rows.map((row) => row.map(escape).join(",")),
  ];
  const blob = new Blob([lines.join("\n")], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${dataset.slug || "directorio"}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function DirectoryTable({
  datasets,
  emptyTitle,
  emptySubtitle,
}: DirectoryTableProps) {
  const [activeSlug, setActiveSlug] = useState(datasets[0]?.slug ?? "");
  const [query, setQuery] = useState("");
  const [sortIndex, setSortIndex] = useState(0);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const active =
    datasets.find((dataset) => dataset.slug === activeSlug) ?? datasets[0];

  const filteredRows = useMemo(() => {
    if (!active) return [];
    const needle = query.trim().toLowerCase();
    let rows = active.rows;
    if (needle) {
      rows = rows.filter((row) =>
        row.some((cell) => cell.toLowerCase().includes(needle)),
      );
    }
    const col = Math.min(Math.max(sortIndex, 0), active.headers.length - 1);
    return [...rows].sort((a, b) => {
      const left = (a[col] ?? "").toLocaleLowerCase("es");
      const right = (b[col] ?? "").toLocaleLowerCase("es");
      const cmp = left.localeCompare(right, "es", { sensitivity: "base" });
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [active, query, sortDir, sortIndex]);

  if (datasets.length === 0) {
    return (
      <section className={`bg-background ${sectionPadX} ${sectionPadY}`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-secondary">
            {emptyTitle}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">{emptySubtitle}</p>
        </div>
      </section>
    );
  }

  if (!active) return null;

  return (
    <section className={`bg-background ${sectionPadX} ${sectionPadY}`}>
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-wrap gap-2">
          {datasets.map((dataset) => {
            const selected = dataset.slug === active.slug;
            return (
              <button
                key={dataset.id}
                type="button"
                onClick={() => {
                  setActiveSlug(dataset.slug);
                  setSortIndex(0);
                  setQuery("");
                }}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                  selected
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-secondary hover:bg-muted/80",
                )}
              >
                {dataset.title}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <label className="relative flex min-w-0 flex-1 items-center">
            <Search
              className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar en la tabla…"
              className="h-11 w-full rounded-md border border-border bg-background pl-10 pr-3 text-sm text-secondary outline-none ring-primary focus:ring-2"
            />
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              Ordenar por
              <select
                value={sortIndex}
                onChange={(event) =>
                  setSortIndex(Number.parseInt(event.target.value, 10) || 0)
                }
                className="h-11 rounded-md border border-border bg-background px-3 text-sm text-secondary"
              >
                {active.headers.map((header, index) => (
                  <option key={`${header}-${index}`} value={index}>
                    {header}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={() =>
                setSortDir((current) => (current === "asc" ? "desc" : "asc"))
              }
              className="h-11 rounded-md border border-border px-3 text-sm font-semibold text-secondary hover:bg-muted"
            >
              {sortDir === "asc" ? "A → Z" : "Z → A"}
            </button>
            {active.sourceFileUrl ? (
              <Button asChild variant="outline" size="lg">
                <a
                  href={active.sourceFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Excel
                </a>
              </Button>
            ) : (
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => downloadCsv(active)}
              >
                <Download className="h-4 w-4" />
                CSV
              </Button>
            )}
            {active.sourceFileUrl ? (
              <Button
                type="button"
                variant="primary"
                size="lg"
                onClick={() => downloadCsv(active)}
              >
                <Download className="h-4 w-4" />
                CSV
              </Button>
            ) : null}
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          {filteredRows.length}{" "}
          {filteredRows.length === 1 ? "resultado" : "resultados"} · {active.title}
        </p>

        <div className="max-h-[32rem] overflow-auto rounded-md border border-border">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="sticky top-0 z-10 bg-muted">
              <tr>
                {active.headers.map((header, index) => (
                  <th
                    key={`${header}-${index}`}
                    scope="col"
                    className="whitespace-nowrap px-3 py-3 font-semibold text-secondary"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.length === 0 ? (
                <tr>
                  <td
                    colSpan={active.headers.length}
                    className="px-3 py-8 text-center text-muted-foreground"
                  >
                    No hay resultados para esta búsqueda.
                  </td>
                </tr>
              ) : (
                filteredRows.map((row, rowIndex) => (
                  <tr
                    key={`${active.slug}-${rowIndex}-${row[0]}`}
                    className="border-t border-border odd:bg-background even:bg-muted/20"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${rowIndex}-${cellIndex}`}
                        className="whitespace-nowrap px-3 py-2.5 text-secondary"
                      >
                        {cell || "—"}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
