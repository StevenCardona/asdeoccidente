/**
 * Site-wide contact and identity from env.
 * Never hardcode these values in components.
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Asdeoccidente",
  legalName:
    process.env.NEXT_PUBLIC_SITE_LEGAL_NAME ??
    "Asociación de Criadores de Caballos de Paso y Fomento Equino del Occidente",
  address:
    process.env.NEXT_PUBLIC_SITE_ADDRESS ??
    "Transversal 5 # 1 - 60, Recta Cali-Palmira, Corregimiento La Dolores, Palmira – Valle del Cauca",
  phonePbx: process.env.NEXT_PUBLIC_PHONE_PBX ?? "",
  phoneMobile: process.env.NEXT_PUBLIC_PHONE_MOBILE ?? "",
  phoneMobileAlt: process.env.NEXT_PUBLIC_PHONE_MOBILE_ALT ?? "",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
  mapEmbedUrl: process.env.NEXT_PUBLIC_MAP_EMBED_URL ?? "",
  directionsVideoUrl: process.env.NEXT_PUBLIC_DIRECTIONS_VIDEO_URL ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const whatsappMessages = {
  school: "Hola, quiero información sobre la clase gratis de chalanería.",
  fairs:
    "Hola, quiero información sobre entradas y palcos para la Copa América Equina.",
  general: "Hola, quiero hacer una consulta.",
} as const;

export type WhatsappTopic = keyof typeof whatsappMessages;

export function buildWhatsAppUrl(topic: WhatsappTopic = "general"): string {
  const number = siteConfig.whatsappNumber;
  if (!number) return "#";
  const text = encodeURIComponent(whatsappMessages[topic]);
  return `https://wa.me/${number}?text=${text}`;
}

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/school", label: "Escuela" },
  { href: "/fairs", label: "Ferias" },
  // { href: "/about", label: "Nosotros" }, // deferred
] as const;
