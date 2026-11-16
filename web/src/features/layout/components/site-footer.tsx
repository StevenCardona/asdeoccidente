import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { BrandLockup } from "@/features/layout/components/brand-lockup";
import {
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from "@/shared/components/brand-icons";
import {
  buildWhatsAppUrl,
  navItems,
  siteConfig,
} from "@/shared/config/site";

export function SiteFooter() {
  const socialLinks = [
    {
      href: siteConfig.social.instagram,
      label: "Instagram",
      icon: InstagramIcon,
    },
    {
      href: siteConfig.social.youtube,
      label: "YouTube",
      icon: YoutubeIcon,
    },
    {
      href: siteConfig.social.tiktok,
      label: "TikTok",
      icon: TikTokIcon,
    },
  ].filter((item) => Boolean(item.href));

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 md:px-12 md:py-14">
        <div>
          <BrandLockup variant="dark" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {siteConfig.legalName}. Dedicada a la preservación, competencia y
            difusión del caballo criollo colombiano desde 1975.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/50">
            Navegación
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-white"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
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
          <ul className="mt-3 space-y-3 text-sm text-white/80">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden />
              <span>{siteConfig.address}</span>
            </li>
            {siteConfig.phonePbx ? (
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden />
                <span>PBX {siteConfig.phonePbx}</span>
              </li>
            ) : null}
            {siteConfig.whatsappNumber ? (
              <li className="flex gap-2.5">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <a
                  href={buildWhatsAppUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp {siteConfig.whatsappNumber}
                </a>
              </li>
            ) : null}
            {siteConfig.email ? (
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/70 hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            ) : null}
          </ul>

          {socialLinks.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/50 md:px-12">
        © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
