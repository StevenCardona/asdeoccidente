/**
 * Infra + navigation helpers.
 * Editable identity/contact lives in Sanity (`getSiteSettings`).
 */

import type {
  SiteSettings,
  WhatsappTopic,
} from "@/features/site/models";

export type { WhatsappTopic };

export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const navItems = [
  { href: "/", label: "Inicio", icon: "Home" as const },
  { href: "/school", label: "Escuela", icon: "GraduationCap" as const },
  { href: "/events", label: "Eventos", icon: "CalendarDays" as const },
  { href: "/services", label: "Servicios", icon: "LayoutGrid" as const },
  { href: "/venue", label: "Alquiler", icon: "Building2" as const },
  { href: "/membership", label: "Socios", icon: "Handshake" as const },
  { href: "/equinotherapy", label: "Equinoterapia", icon: "HeartPulse" as const },
  { href: "/directory", label: "Directorio", icon: "BookUser" as const },
  // { href: "/about", label: "Nosotros", icon: "Users" as const }, // deferred
] as const;

export type NavItem = (typeof navItems)[number];
export type NavIconName = NavItem["icon"];

export function buildWhatsAppUrl(
  settings: Pick<SiteSettings, "whatsappNumber" | "whatsappMessages">,
  topic: WhatsappTopic = "general",
  customText?: string,
): string {
  const number = settings.whatsappNumber?.trim();
  if (!number) return "#";
  const text = encodeURIComponent(
    customText ?? settings.whatsappMessages[topic],
  );
  return `https://wa.me/${number}?text=${text}`;
}
