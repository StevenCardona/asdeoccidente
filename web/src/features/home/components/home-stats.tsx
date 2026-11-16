"use client";

import {
  CalendarDays,
  GraduationCap,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useCountUp } from "@/features/home/hooks/use-count-up";
import type { HomeStat } from "@/features/home/models/home";
import { GoogleIcon } from "@/shared/components/brand-icons";
import { siteConfig } from "@/shared/config/site";

type HomeStatsProps = {
  show: boolean;
  stats: HomeStat[];
};

type StatDisplay = HomeStat & {
  icon: LucideIcon;
  googleIcon?: boolean;
  line1: string;
  line2: string;
};

const defaultStats: StatDisplay[] = [
  {
    target: 1975,
    label: "Trabajando por ustedes desde",
    prefix: "",
    icon: CalendarDays,
    line1: "Trabajando por",
    line2: "ustedes desde",
  },
  {
    target: 200,
    label: "Alumnos de chalanería",
    prefix: "+",
    icon: GraduationCap,
    line1: "Alumnos de",
    line2: "chalanería",
  },
  {
    target: Number.parseInt(siteConfig.google.reviewCount, 10) || 299,
    label: "Personas que nos recomiendan",
    prefix: "",
    icon: Users,
    googleIcon: true,
    line1: "Personas que nos",
    line2: "recomiendan",
  },
  {
    target: 180,
    label: "Socios de la asociación",
    prefix: "+",
    icon: Users,
    line1: "Socios de la",
    line2: "asociación",
  },
];

function StatLabel({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70 md:text-sm md:whitespace-nowrap">
      {line1}{" "}
      <br className="md:hidden" />
      {line2}
    </p>
  );
}

function StatItem({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  icon: Icon,
  googleIcon = false,
  line1,
  line2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  icon: LucideIcon;
  googleIcon?: boolean;
  line1: string;
  line2: string;
}) {
  const { ref, value } = useCountUp({ target, decimals });
  const formatted =
    decimals > 0
      ? value.toFixed(decimals).replace(".", ",")
      : value.toLocaleString("es-CO");

  return (
    <li className="text-center">
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-white/10">
        {googleIcon ? (
          <GoogleIcon className="h-5 w-5" />
        ) : (
          <Icon className="h-5 w-5 text-tertiary" strokeWidth={1.75} aria-hidden />
        )}
      </div>
      <p
        ref={ref}
        className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl"
      >
        {prefix}
        {formatted}
        {suffix}
      </p>
      <StatLabel line1={line1} line2={line2} />
    </li>
  );
}

function splitLabel(label: string): { line1: string; line2: string } {
  const words = label.trim().split(/\s+/);
  if (words.length <= 1) return { line1: label, line2: "" };
  const mid = Math.ceil(words.length / 2);
  return {
    line1: words.slice(0, mid).join(" "),
    line2: words.slice(mid).join(" "),
  };
}

export function HomeStats({ show, stats }: HomeStatsProps) {
  if (!show) return null;

  const items: StatDisplay[] =
    stats.length >= 4
      ? stats.map((stat, index) => {
          const fallback = defaultStats[index] ?? defaultStats[0];
          const lines = splitLabel(stat.label);
          return {
            ...stat,
            icon: fallback.icon,
            googleIcon: fallback.googleIcon,
            line1: lines.line1,
            line2: lines.line2 || fallback.line2,
          };
        })
      : defaultStats;

  return (
    <section className="bg-secondary px-5 py-14 text-white md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-primary">
          Trayectoria
        </p>
        <h2 className="mt-3 text-center font-display text-sm font-bold uppercase tracking-[0.18em] text-white md:text-base">
          {siteConfig.name} en el tiempo
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((stat) => (
            <StatItem
              key={`${stat.target}-${stat.label}`}
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              icon={stat.icon}
              googleIcon={stat.googleIcon}
              line1={stat.line1}
              line2={stat.line2}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
