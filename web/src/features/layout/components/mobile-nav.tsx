"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, GraduationCap, Home } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const items = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/school", label: "Escuela", icon: GraduationCap },
  { href: "/fairs", label: "Ferias", icon: CalendarDays },
  // { href: "/about", label: "Nosotros", icon: Users }, // deferred
] as const;

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background md:hidden"
      aria-label="Navegación móvil"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-around gap-1 px-2 pb-[env(safe-area-inset-bottom)] pt-0.5">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={cn(
                  "mx-auto flex max-w-[5.5rem] flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] font-semibold transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-primary hover:text-primary-foreground",
                )}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
