"use client";

import { useCountUp } from "@/features/home/hooks/use-count-up";
import type { HomeSectionIntro, HomeStat } from "@/features/home/models";
import { resolveLucideIcon } from "@/features/home/utils/icons";
import { GoogleIcon } from "@/shared/components/brand-icons";

type HomeStatsProps = {
  show: boolean;
  intro: HomeSectionIntro;
  stats: HomeStat[];
};

function StatItem({
  target,
  label,
  prefix = "",
  suffix = "",
  decimals = 0,
  icon,
}: HomeStat) {
  const { ref, value } = useCountUp({ target, decimals });
  const formatted =
    decimals > 0
      ? value.toFixed(decimals).replace(".", ",")
      : value.toLocaleString("es-CO");
  const LucideIcon = icon && icon !== "Google" ? resolveLucideIcon(icon) : null;
  const useGoogle = icon === "Google";

  return (
    <li className="text-center">
      {useGoogle || LucideIcon ? (
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-white/10">
          {useGoogle ? (
            <GoogleIcon className="h-5 w-5" />
          ) : LucideIcon ? (
            <LucideIcon
              className="h-5 w-5 text-tertiary"
              strokeWidth={1.75}
              aria-hidden
            />
          ) : null}
        </div>
      ) : null}
      <p
        ref={ref}
        className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl"
      >
        {prefix}
        {formatted}
        {suffix}
      </p>
      {label.trim() ? (
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70 md:text-sm">
          {label}
        </p>
      ) : null}
    </li>
  );
}

export function HomeStats({ show, intro, stats }: HomeStatsProps) {
  if (!show || stats.length === 0) return null;

  const hasIntro = Boolean(
    intro.eyebrow.trim() || intro.title.trim() || intro.subtitle.trim(),
  );

  return (
    <section className="bg-secondary px-5 py-14 text-white md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        {hasIntro ? (
          <div className="text-center">
            {intro.eyebrow.trim() ? (
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                {intro.eyebrow}
              </p>
            ) : null}
            {intro.title.trim() ? (
              <h2 className="mt-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-white md:text-base">
                {intro.title}
              </h2>
            ) : null}
            {intro.subtitle.trim() ? (
              <p className="mt-3 text-sm text-white/75">{intro.subtitle}</p>
            ) : null}
          </div>
        ) : null}
        <ul
          className={
            hasIntro
              ? "mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4"
              : "grid grid-cols-2 gap-8 lg:grid-cols-4"
          }
        >
          {stats.map((stat) => (
            <StatItem key={`${stat.target}-${stat.label}`} {...stat} />
          ))}
        </ul>
      </div>
    </section>
  );
}
