import Image from "next/image";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";

type BrandLockupProps = {
  name: string;
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function BrandLockup({
  name,
  variant = "light",
  className,
  priority = false,
}: BrandLockupProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={cn("flex min-w-0 items-center gap-2", className)}
      aria-label={name}
    >
      <span className="relative h-12 w-12 shrink-0 overflow-hidden md:h-[52px] md:w-[52px]">
        <Image
          src={isDark ? "/brand/logo-white.png" : "/brand/logo.jpg"}
          alt=""
          fill
          className="object-contain"
          sizes="52px"
          priority={priority}
        />
      </span>
      <span className="min-w-0 leading-none">
        <span
          className={cn(
            "block font-display text-[15px] font-extrabold uppercase tracking-[0.04em] md:text-base",
            isDark ? "text-white" : "text-secondary",
          )}
        >
          Asdeoccidente
        </span>
        <span
          className={cn(
            "mt-0.5 block whitespace-nowrap text-[10px] font-semibold uppercase leading-none tracking-[0.06em] md:text-[11px]",
            isDark ? "text-white/65" : "text-muted-foreground",
          )}
        >
          Fomento equino del Valle · 1975
        </span>
      </span>
    </Link>
  );
}
