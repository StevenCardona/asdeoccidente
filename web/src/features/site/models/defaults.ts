import type { SiteSettings } from "./types";

const DEFAULT_ADDRESS =
  "Transversal 5 # 1 - 60, Recta Cali-Palmira, Corregimiento La Dolores, Palmira – Valle del Cauca";

export function mapEmbedFromAddress(address: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;
}

export const defaultSiteSettings: SiteSettings = {
  name: "Asdeoccidente",
  legalName:
    "Asociación de Criadores de Caballos de Paso y Fomento Equino del Occidente",
  footerBlurb:
    "Dedicada a la preservación, competencia y difusión del caballo criollo colombiano desde 1975.",
  address: DEFAULT_ADDRESS,
  phonePbx: "(2) 666 96 22 / 23 / 24",
  phoneMobile: "3186669622",
  phoneMobileAlt: "3182698693",
  whatsappNumber: "573186669622",
  email: "asdeoccidente@asdeoccidente.org.co",
  social: {
    instagram: "https://www.instagram.com/asdeoccidente.oficial/",
    youtube: "https://www.youtube.com/@asdeoccidente.oficial/",
    tiktok: "https://www.tiktok.com/@asdeoccidente?lang=es",
  },
  mapEmbedUrl: mapEmbedFromAddress(DEFAULT_ADDRESS),
  directionsVideo: { kind: "url", src: "", posterSrc: undefined },
  google: {
    rating: "4.6",
    reviewCount: "299",
    reviewsUrl: "",
  },
  whatsappMessages: {
    school: "Hola, quiero información sobre la clase gratis de chalanería.",
    fairs:
      "Hola, quiero información sobre entradas y palcos para la Copa América Equina.",
    general: "Hola, quiero hacer una consulta.",
  },
};
