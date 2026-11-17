import {
  fairKindLabel,
  fairStatusLabel,
  type FairKind,
  type FairStatus,
} from "@/features/fairs/models";
import { cn } from "@/shared/lib/utils";

type FairStatusBadgeProps = {
  status: FairStatus;
  tone?: "light" | "dark";
  className?: string;
};

export function FairStatusBadge({
  status,
  tone = "light",
  className,
}: FairStatusBadgeProps) {
  const styles: Record<FairStatus, string> =
    tone === "dark"
      ? {
          proxima: "bg-amber-400/20 text-amber-100 ring-1 ring-amber-200/40",
          en_curso: "bg-amber-400/25 text-amber-50 ring-1 ring-amber-200/50",
          inscripciones: "bg-primary text-primary-foreground",
          boleteria: "bg-primary/90 text-primary-foreground",
          finalizada: "bg-white/15 text-white/85 ring-1 ring-white/25",
        }
      : {
          proxima: "bg-amber-50 text-amber-900 ring-1 ring-amber-200",
          en_curso: "bg-amber-100 text-amber-950 ring-1 ring-amber-300",
          inscripciones: "bg-red-50 text-red-800 ring-1 ring-red-200",
          boleteria: "bg-red-50 text-red-900 ring-1 ring-red-200",
          finalizada: "bg-muted text-muted-foreground ring-1 ring-border",
        };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em]",
        styles[status],
        className,
      )}
    >
      {fairStatusLabel(status)}
    </span>
  );
}

type FairKindBadgeProps = {
  kind: FairKind;
  tone?: "light" | "dark";
  className?: string;
};

export function FairKindBadge({
  kind,
  tone = "light",
  className,
}: FairKindBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em]",
        tone === "dark"
          ? "bg-white text-secondary"
          : "bg-secondary text-white",
        className,
      )}
    >
      {fairKindLabel(kind)}
    </span>
  );
}

type FairFeaturedBadgeProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function FairFeaturedBadge({
  tone = "light",
  className,
}: FairFeaturedBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em]",
        tone === "dark"
          ? "bg-white text-secondary"
          : "bg-secondary text-white",
        className,
      )}
    >
      Destacada
    </span>
  );
}
