import type { Fair, FairKind, FairStatus } from "./types";

const STATUS_LABELS: Record<FairStatus, string> = {
  proxima: "Próxima",
  en_curso: "En curso",
  inscripciones: "Inscripciones abiertas",
  boleteria: "Boletería",
  finalizada: "Finalizada",
};

const KIND_LABELS: Record<FairKind, string> = {
  "grado-a": "Grado A",
  "grado-aa": "Grado AA",
  "grado-b": "Grado B",
  exposicion: "Exposición",
  festival: "Festival",
  remate: "Remate",
};

export function fairStatusLabel(status: FairStatus): string {
  return STATUS_LABELS[status];
}

export function fairKindLabel(kind: FairKind): string {
  return KIND_LABELS[kind];
}

/** Derive status from dates when not set explicitly. */
export function resolveFairStatus(fair: Fair, now = new Date()): FairStatus {
  if (fair.status) return fair.status;

  const start = parseDay(fair.startDate);
  const end = parseDay(fair.endDate || fair.startDate);
  if (!start || !end) return "proxima";

  const today = startOfDay(now);
  if (today < start) return "proxima";
  if (today > end) return "finalizada";
  return "en_curso";
}

export function formatFairDateRange(
  startDate: string,
  endDate?: string,
  locale = "es-CO",
): string {
  const start = parseDay(startDate);
  if (!start) return startDate;

  const end = endDate ? parseDay(endDate) : null;
  const sameDay =
    end &&
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth() &&
    start.getDate() === end.getDate();

  if (!end || sameDay) {
    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(start);
  }

  const sameMonth =
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth();

  if (sameMonth) {
    const dayStart = new Intl.DateTimeFormat(locale, { day: "numeric" }).format(
      start,
    );
    const dayEnd = new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(end);
    return `${dayStart} al ${dayEnd}`;
  }

  const left = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
  }).format(start);
  const right = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(end);
  return `${left} al ${right}`;
}

export function formatFairMonthYear(
  startDate: string,
  locale = "es-CO",
): string {
  const start = parseDay(startDate);
  if (!start) return "";
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  })
    .format(start)
    .replace(/^\w/, (c) => c.toUpperCase());
}

export function formatUpdatedAt(iso: string, locale = "es-CO"): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export function sortFairsByStart(fairs: Fair[]): Fair[] {
  return [...fairs].sort((a, b) => b.startDate.localeCompare(a.startDate));
}

export function getFeaturedFair(fairs: Fair[]): Fair | null {
  const featured = sortFairsByStart(fairs.filter((f) => f.featured));
  if (featured[0]) return featured[0];
  return sortFairsByStart(fairs)[0] ?? null;
}

export function kindsPresent(fairs: Fair[]): FairKind[] {
  const set = new Set<FairKind>();
  for (const fair of fairs) {
    if (fair.kind) set.add(fair.kind);
  }
  return [...set];
}

function parseDay(value: string): Date | null {
  // Treat YYYY-MM-DD as local calendar day
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(value.trim());
  if (!m) {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : startOfDay(d);
  }
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return startOfDay(d);
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
