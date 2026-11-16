import {
  buildWhatsAppUrl,
  type WhatsappTopic,
} from "@/shared/config/site";
import type { HomeCta } from "@/features/home/models/home";

export function resolveCtaHref(cta: HomeCta): string {
  if (cta.whatsappTopic) {
    return buildWhatsAppUrl(cta.whatsappTopic);
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
