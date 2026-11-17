import type { SiteSettings, WhatsappTopic } from "@/features/site/models";
import type { HomeCta } from "@/features/home/models";
import { buildWhatsAppUrl } from "@/shared/config/site";

export function resolveCtaHref(
  cta: HomeCta,
  settings: Pick<SiteSettings, "whatsappNumber" | "whatsappMessages">,
): string {
  if (cta.whatsappTopic) {
    return buildWhatsAppUrl(settings, cta.whatsappTopic);
  }
  if (cta.href) return cta.href;
  return "#";
}

export function isExternalCta(cta: HomeCta): boolean {
  return Boolean(cta.whatsappTopic) || Boolean(cta.href?.startsWith("http"));
}

export function resolveWhatsAppTopic(
  topic: WhatsappTopic | undefined,
): WhatsappTopic {
  return topic ?? "general";
}
