import type { SanityImageSource } from "@sanity/image-url";
import { sanityClient } from "@/sanity/lib/client";
import type { WhatsappTopic } from "@/shared/config/site";
import { siteConfig } from "@/shared/config/site";

export type HomeCta = {
  label: string;
  href?: string;
  whatsappTopic?: WhatsappTopic;
};

export type HomeEssenceItem = {
  title: string;
  text: string;
  icon?: string;
};

export type HomeEntryCard = {
  title: string;
  description: string;
  href: string;
  icon?: string;
};

export type HomeStat = {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export type HomeSocialVideo = {
  url: string;
  label?: string;
};

export type HomeHeroImage = {
  source: SanityImageSource;
  alt: string;
};

export type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
  culturalLabel: string;
  heroImage: HomeHeroImage | null;
  primaryCta: HomeCta;
  secondaryCta: HomeCta;
  essenceItems: HomeEssenceItem[];
  entryCards: HomeEntryCard[];
  showStats: boolean;
  stats: HomeStat[];
  socialVideos: HomeSocialVideo[];
  seoTitle: string;
  seoDescription: string;
};

export const defaultHomeContent: HomeContent = {
  heroTitle: "Aprende, compite y celebra con el caballo criollo colombiano.",
  heroSubtitle:
    "Clases de chalanería personalizadas para niños y adultos, y ferias en el Valle del Cauca. Te acompañamos desde el primer paso.",
  culturalLabel: "Valle del Cauca",
  heroImage: null,
  primaryCta: {
    label: "Quiero mi clase gratis",
    whatsappTopic: "school",
  },
  secondaryCta: {
    label: "Ver la próxima feria",
    href: "/fairs",
  },
  essenceItems: [
    {
      title: "Caballo criollo",
      text: "El arte de montar el paso colombiano, con respeto por el animal y la tradición.",
      icon: "Trophy",
    },
    {
      title: "Método uno a uno",
      text: "Clases totalmente personalizadas: un alumno con su instructor en cada sesión.",
      icon: "Users",
    },
    {
      title: "Maestros cerca",
      text: "Conexión humana y seguimiento cercano desde tu primera clase.",
      icon: "HeartHandshake",
    },
    {
      title: "Cultura en el Valle",
      text: "Comunidad, ferias y chalanería en el corazón del Valle del Cauca.",
      icon: "Landmark",
    },
  ],
  entryCards: [
    {
      title: "Escuela de chalanería",
      description:
        "Aprende a montar con un maestro solo para ti. Caballo y equipo los pone la escuela.",
      href: "/school",
      icon: "GraduationCap",
    },
    {
      title: "Ferias",
      description:
        "Competencia, ambiente de feria y la próxima cita en la sede.",
      href: "/fairs",
      icon: "CalendarDays",
    },
  ],
  showStats: true,
  stats: [
    { target: 1975, label: "Trabajando por ustedes desde", prefix: "" },
    { target: 200, label: "Alumnos de chalanería", prefix: "+" },
    {
      target: Number.parseInt(siteConfig.google.reviewCount, 10) || 299,
      label: "Personas que nos recomiendan",
      prefix: "",
    },
    { target: 180, label: "Socios de la asociación", prefix: "+" },
  ],
  socialVideos: siteConfig.homeVideos.map(({ url, label }) => ({
    url,
    label,
  })),
  seoTitle: "Inicio",
  seoDescription:
    "Escuela de chalanería y ferias del caballo criollo colombiano en el Valle del Cauca. Primera clase gratis.",
};

const homeQuery = `*[_type == "home" && _id == "home"][0]{
  heroTitle,
  heroSubtitle,
  culturalLabel,
  heroImage,
  "heroImageAlt": heroImage.alt,
  primaryCta,
  secondaryCta,
  essenceItems[]{ title, text, icon },
  entryCards[]{ title, description, href, icon },
  showStats,
  stats[]{ value, label, prefix },
  socialVideos[]{ url, label },
  seoTitle,
  seoDescription
}`;

type HomeDoc = {
  heroTitle?: string;
  heroSubtitle?: string;
  culturalLabel?: string;
  heroImage?: SanityImageSource | null;
  heroImageAlt?: string;
  primaryCta?: Partial<HomeCta> | null;
  secondaryCta?: Partial<HomeCta> | null;
  essenceItems?: HomeEssenceItem[] | null;
  entryCards?: HomeEntryCard[] | null;
  showStats?: boolean;
  stats?: Array<{ value?: string; label?: string; prefix?: string }> | null;
  socialVideos?: HomeSocialVideo[] | null;
  seoTitle?: string;
  seoDescription?: string;
};

function parseStats(
  stats: HomeDoc["stats"],
  showStats: boolean | undefined,
): { showStats: boolean; stats: HomeStat[] } {
  if (showStats === false) {
    return { showStats: false, stats: [] };
  }

  const parsed: HomeStat[] = [];
  for (const item of stats ?? []) {
    const raw = item.value?.replace(/[^\d.,]/g, "").replace(",", ".") ?? "";
    const target = Number.parseFloat(raw);
    if (!Number.isFinite(target) || !item.label) continue;
    parsed.push({
      target,
      label: item.label,
      prefix: item.prefix ?? (item.value?.trim().startsWith("+") ? "+" : ""),
      decimals: raw.includes(".") ? 1 : 0,
    });
  }

  if (parsed.length > 0) {
    return { showStats: true, stats: parsed };
  }

  return {
    showStats: true,
    stats: defaultHomeContent.stats,
  };
}

function mergeHome(doc: HomeDoc | null): HomeContent {
  if (!doc) return defaultHomeContent;

  const heroImage =
    doc.heroImage != null
      ? {
          source: doc.heroImage,
          alt: doc.heroImageAlt?.trim() || "Caballo criollo colombiano",
        }
      : null;

  const statsState = parseStats(doc.stats, doc.showStats);

  return {
    heroTitle: doc.heroTitle?.trim() || defaultHomeContent.heroTitle,
    heroSubtitle: doc.heroSubtitle?.trim() || defaultHomeContent.heroSubtitle,
    culturalLabel:
      doc.culturalLabel?.trim() || defaultHomeContent.culturalLabel,
    heroImage,
    primaryCta: {
      ...defaultHomeContent.primaryCta,
      ...doc.primaryCta,
      label:
        doc.primaryCta?.label?.trim() || defaultHomeContent.primaryCta.label,
    },
    secondaryCta: {
      ...defaultHomeContent.secondaryCta,
      ...doc.secondaryCta,
      label:
        doc.secondaryCta?.label?.trim() ||
        defaultHomeContent.secondaryCta.label,
      href:
        doc.secondaryCta?.href?.trim() ||
        defaultHomeContent.secondaryCta.href,
    },
    essenceItems:
      doc.essenceItems && doc.essenceItems.length > 0
        ? doc.essenceItems
        : defaultHomeContent.essenceItems,
    entryCards:
      doc.entryCards && doc.entryCards.length > 0
        ? doc.entryCards
        : defaultHomeContent.entryCards,
    showStats: statsState.showStats,
    stats: statsState.stats,
    socialVideos: (() => {
      const fromCms =
        doc.socialVideos?.filter((item) => Boolean(item.url?.trim())) ?? [];
      return fromCms.length > 0
        ? fromCms
        : defaultHomeContent.socialVideos;
    })(),
    seoTitle: doc.seoTitle?.trim() || defaultHomeContent.seoTitle,
    seoDescription:
      doc.seoDescription?.trim() || defaultHomeContent.seoDescription,
  };
}

export async function fetchHomeContent(): Promise<HomeContent> {
  if (!sanityClient) return defaultHomeContent;
  try {
    const doc = await sanityClient.fetch<HomeDoc | null>(homeQuery);
    return mergeHome(doc);
  } catch {
    return defaultHomeContent;
  }
}
