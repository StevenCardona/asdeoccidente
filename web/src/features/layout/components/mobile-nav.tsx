"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, GraduationCap, Home } from "lucide-react";
import { navItems } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";

const icons = {
  Home,
  GraduationCap,
  CalendarDays,
} as const;

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur md:hidden"
      aria-label="Navegación móvil"
    >
      <ul className="mx-auto flex max-w-7xl items-stretch justify-around px-2 py-1.5">
        {navItems.map((item) => {
          const Icon = icons[item.icon];
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 rounded-md px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wide",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-secondary",
                )}
              >
                <Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
