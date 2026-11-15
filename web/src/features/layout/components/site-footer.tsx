import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { navItems, siteConfig } from "@/shared/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 md:px-12 md:py-14">
        <div>
          <div className="relative h-12 w-[160px]">
            <Image
              src="/brand/logo-white.png"
              alt={siteConfig.name}
              fill
              className="object-contain object-left"
              sizes="160px"
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {siteConfig.legalName}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/50">
            Navegación
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/50">
            Sede y contacto
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            {siteConfig.address}
          </p>
          {siteConfig.phonePbx ? (
            <p className="mt-2 text-sm text-white/80">PBX {siteConfig.phonePbx}</p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {siteConfig.social.instagram ? (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white"
              >
                Instagram
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : null}
            {siteConfig.social.youtube ? (
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white"
              >
                YouTube
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : null}
            {siteConfig.social.tiktok ? (
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white"
              >
                TikTok
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/50 md:px-12">
        © {siteConfig.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
