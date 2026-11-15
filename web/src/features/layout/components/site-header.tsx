import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl, navItems, siteConfig } from "@/shared/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-12">
        <Link
          href="/"
          className="relative flex h-11 w-[140px] shrink-0 items-center md:h-12 md:w-[168px]"
          aria-label={siteConfig.name}
        >
          <Image
            src="/brand/logo.jpg"
            alt={siteConfig.name}
            fill
            className="object-contain object-left"
            sizes="168px"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-secondary transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          {/* Nosotros /about — deferred */}
        </nav>

        <Button asChild variant="whatsapp" size="sm" className="hidden md:inline-flex">
          <a
            href={buildWhatsAppUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
}
