"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLockup } from "@/features/layout/components/brand-lockup";
import type { SiteSettings } from "@/features/site/models";
import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl, navItems } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";

type SiteHeaderProps = {
  settings: SiteSettings;
};

export function SiteHeader({ settings }: SiteHeaderProps) {
  const pathname = usePathname();
  const whatsappHref = buildWhatsAppUrl(settings, "general");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:gap-4 md:px-8">
        <BrandLockup
          name={settings.name}
          className="min-w-0 flex-1 md:flex-none"
        />

        <nav
          className="hidden max-w-[min(100%,36rem)] flex-wrap items-center justify-end gap-0.5 md:flex lg:max-w-[42rem] xl:max-w-none"
          aria-label="Principal"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2 py-1.5 text-xs font-semibold transition-colors xl:px-3 xl:py-2 xl:text-sm",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-secondary hover:bg-primary hover:text-primary-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          {/* Nosotros /about — deferred */}
        </nav>

        <Button
          asChild
          variant="whatsapp"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </Button>

        <Button asChild variant="whatsapp" size="sm" className="hidden md:inline-flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
}
