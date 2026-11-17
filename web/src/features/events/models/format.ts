import type { Event, EventKind, EventStatus } from "./types";

const STATUS_LABELS: Record<EventStatus, string> = {
  proxima: "Próxima",
  en_curso: "En curso",
  inscripciones: "Inscripciones abiertas",
  boleteria: "Boletería",
  finalizada: "Finalizada",
};

const KIND_LABELS: Record<EventKind, string> = {
  "grado-a": "Grado A",
  "grado-aa": "Grado AA",
  "grado-b": "Grado B",
  exposicion: "Exposición",
  festival: "Festival",
  remate: "Remate",
};

export function eventStatusLabel(status: EventStatus): string {
  return STATUS_LABELS[status];
}

export function eventKindLabel(kind: EventKind): string {
  return KIND_LABELS[kind];
}

export function resolveEventStatus(
  event: Event,
  now = new Date(),
): EventStatus {
  if (event.status) return event.status;

  const start = parseDay(event.startDate);
  const end = parseDay(event.endDate || event.startDate);
  if (!start || !end) return "proxima";

  const today = startOfDay(now);
  if (today < start) return "proxima";
  if (today > end) return "finalizada";
  return "en_curso";
}

export function formatEventDateRange(
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

export function formatEventMonthYear(
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

export function sortEventsByStart(events: Event[]): Event[] {
  return [...events].sort((a, b) => b.startDate.localeCompare(a.startDate));
}

export function getFeaturedEvent(events: Event[]): Event | null {
  const featured = sortEventsByStart(events.filter((e) => e.featured));
  if (featured[0]) return featured[0];
  return sortEventsByStart(events)[0] ?? null;
}

export function kindsPresent(events: Event[]): EventKind[] {
  const set = new Set<EventKind>();
  for (const event of events) {
    if (event.kind) set.add(event.kind);
  }
  return [...set];
}

function parseDay(value: string): Date | null {
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
