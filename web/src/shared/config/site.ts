/**
 * Site-wide contact and identity from env.
 * Never hardcode these values in components.
 */

const DEFAULT_ADDRESS =
  "Transversal 5 # 1 - 60, Recta Cali-Palmira, Corregimiento La Dolores, Palmira – Valle del Cauca";

const DEFAULT_HOME_VIDEOS = [
  {
    url: "https://www.instagram.com/linaje_equino/reel/Deae7fnRIX0/",
    orientation: "vertical" as const,
    label: "Reel Linaje Equino",
  },
  {
    url: "https://www.instagram.com/asdeoccidente.oficial/reel/DfLdlWOi7bS/",
    orientation: "vertical" as const,
    label: "Reel Asdeoccidente",
  },
  {
    url: "https://www.instagram.com/asdeoccidente.oficial/reel/DfKvIoeCawv/",
    orientation: "horizontal" as const,
    label: "Reel Asdeoccidente horizontal",
  },
  {
    url: "https://www.instagram.com/asdeoccidente.oficial/reel/DfIJvrnCVkk/",
    orientation: "horizontal" as const,
    label: "Reel Asdeoccidente horizontal 2",
  },
];

function envVideo(index: 1 | 2 | 3 | 4): string {
  const key = `NEXT_PUBLIC_HOME_VIDEO_URL_${index}` as const;
  return process.env[key]?.trim() ?? "";
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Asdeoccidente",
  legalName:
    process.env.NEXT_PUBLIC_SITE_LEGAL_NAME ??
    "Asociación de Criadores de Caballos de Paso y Fomento Equino del Occidente",
  address: process.env.NEXT_PUBLIC_SITE_ADDRESS?.trim() || DEFAULT_ADDRESS,
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
  instagramProfile: {
    handle:
      process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "asdeoccidente.oficial",
    displayName:
      process.env.NEXT_PUBLIC_INSTAGRAM_DISPLAY_NAME ?? "ASDEOCCIDENTE",
    postsLabel:
      process.env.NEXT_PUBLIC_INSTAGRAM_POSTS_LABEL ??
      "Más de 4.000 publicaciones",
    followersLabel:
      process.env.NEXT_PUBLIC_INSTAGRAM_FOLLOWERS_LABEL ??
      "Más de 30 mil seguidores",
  },
  mapEmbedUrl: (() => {
    const fromEnv = process.env.NEXT_PUBLIC_MAP_EMBED_URL?.trim() ?? "";
    if (fromEnv) return fromEnv;
    const address =
      process.env.NEXT_PUBLIC_SITE_ADDRESS?.trim() || DEFAULT_ADDRESS;
    return `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;
  })(),
  directionsVideoUrl: process.env.NEXT_PUBLIC_DIRECTIONS_VIDEO_URL ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  google: {
    rating: process.env.NEXT_PUBLIC_GOOGLE_RATING ?? "4.6",
    reviewCount: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT ?? "299",
    reviewsUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ?? "",
  },
  homeVideos: DEFAULT_HOME_VIDEOS.map((item, index) => {
    const fromEnv = envVideo((index + 1) as 1 | 2 | 3 | 4);
    return {
      ...item,
      url: fromEnv || item.url,
    };
  }),
};

export const whatsappMessages = {
  school: "Hola, quiero información sobre la clase gratis de chalanería.",
  fairs:
    "Hola, quiero información sobre entradas y palcos para la Copa América Equina.",
  general: "Hola, quiero hacer una consulta.",
} as const;

export type WhatsappTopic = keyof typeof whatsappMessages;

export function buildWhatsAppUrl(
  topic: WhatsappTopic = "general",
  customText?: string,
): string {
  const number = siteConfig.whatsappNumber;
  if (!number) return "#";
  const text = encodeURIComponent(customText ?? whatsappMessages[topic]);
  return `https://wa.me/${number}?text=${text}`;
}

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/school", label: "Escuela" },
  { href: "/fairs", label: "Ferias" },
  // { href: "/about", label: "Nosotros" }, // deferred
] as const;
