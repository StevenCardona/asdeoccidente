/**
 * Infra helpers. Editable identity/contact/nav lives in Sanity (`getSiteSettings`).
 */

import type {
  SiteNavItem,
  SiteSettings,
  WhatsappTopic,
} from "@/features/site/models";

export type { WhatsappTopic, SiteNavItem };

export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export type NavIconName =
  | "Home"
  | "GraduationCap"
  | "CalendarDays"
  | "LayoutGrid"
  | "Building2"
  | "Handshake"
  | "HeartPulse"
  | "BookUser"
  | "Users";

const ALLOWED_ICONS = new Set<string>([
  "Home",
  "GraduationCap",
  "CalendarDays",
  "LayoutGrid",
  "Building2",
  "Handshake",
  "HeartPulse",
  "BookUser",
  "Users",
]);

export function resolveNavItems(settings: SiteSettings): Array<{
  href: string;
  label: string;
  icon: NavIconName;
}> {
  return settings.ui.navItems.map((item) => ({
    href: item.href,
    label: item.label,
    icon: (ALLOWED_ICONS.has(item.icon)
      ? item.icon
      : "Home") as NavIconName,
  }));
}

export function buildWhatsAppUrl(
  settings: Pick<SiteSettings, "whatsappNumber" | "whatsappMessages">,
  topic: WhatsappTopic = "general",
  customText?: string,
): string {
  const number = settings.whatsappNumber?.trim();
  if (!number) return "#";
  const text = encodeURIComponent(
    customText ?? settings.whatsappMessages[topic] ?? "",
  );
  return `https://wa.me/${number}?text=${text}`;
}
