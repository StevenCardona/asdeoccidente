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
      className="fixed inset-x-0 bottom-0 z-40 h-14 border-t border-border bg-background/95 backdrop-blur md:hidden"
      aria-label="Navegación móvil"
    >
      <ul className="mx-auto flex h-14 w-full max-w-7xl items-center gap-0.5 px-1.5">
        {navItems.map((item) => {
          const Icon = icons[item.icon];
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <li
              key={item.href}
              className={cn(
                "flex min-w-0 justify-center transition-all duration-200",
                active ? "flex-[1.75]" : "flex-[0.65]",
              )}
            >
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex w-full flex-col items-center justify-center rounded-md text-[9px] font-semibold uppercase tracking-wide transition-all duration-200",
                  active
                    ? "gap-0.5 bg-primary px-2.5 py-1.5 text-primary-foreground"
                    : "px-1 py-1.5 text-secondary hover:bg-secondary/5",
                )}
              >
                <Icon
                  className={cn(
                    "shrink-0 transition-all duration-200",
                    active ? "h-6 w-6" : "h-5 w-5",
                  )}
                  aria-hidden
                  strokeWidth={1.75}
                />
                {active ? (
                  <span className="max-w-full truncate px-0.5 leading-none">
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
