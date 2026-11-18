"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookUser,
  Building2,
  CalendarDays,
  GraduationCap,
  Handshake,
  HeartPulse,
  Home,
  LayoutGrid,
} from "lucide-react";
import { navItems, type NavIconName } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";

const icons: Record<NavIconName, typeof Home> = {
  Home,
  GraduationCap,
  CalendarDays,
  LayoutGrid,
  Building2,
  Handshake,
  HeartPulse,
  BookUser,
};

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur md:hidden"
      aria-label="Navegación móvil"
    >
      <ul className="mx-auto flex w-full max-w-7xl items-stretch justify-evenly px-1 py-1">
        {navItems.map((item) => {
          const Icon = icons[item.icon];
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <li key={item.href} className="flex min-w-0 flex-1 justify-center">
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex w-full max-w-[4.5rem] flex-col items-center justify-center gap-0.5 rounded-md px-1 py-1.5 text-[9px] font-semibold uppercase tracking-wide",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-secondary hover:bg-secondary/5",
                )}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden strokeWidth={1.75} />
                {active ? (
                  <span className="max-w-full truncate leading-none">
                    {item.label}
                  </span>
                ) : (
                  <span className="sr-only">{item.label}</span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
