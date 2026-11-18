import type { HomeServiceItem } from "./types";

/** Canonical “Qué ofrecemos” cards when CMS is incomplete or still says Próximamente. */
export const defaultHomeServiceItems: HomeServiceItem[] = [
  {
    title: "Escuela de chalanería",
    description:
      "Clases totalmente personalizadas. Caballo y equipo los pone la escuela; tu primera clase es gratis.",
    cta: "Ver escuela",
    href: "/school",
    image: "/imgs/escuela1.jpg",
    imageAlt: "Escuela de chalanería",
  },
  {
    title: "Servicios",
    description:
      "Registros, traspasos, homologaciones y formularios. Consulta tarifas y descarga PDFs.",
    cta: "Ver trámites",
    href: "/services",
    image: "/imgs/banner2.jpg",
    imageAlt: "Servicios y trámites",
  },
  {
    title: "Equinoterapia",
    description:
      "Espacio terapéutico con el caballo, con lenguaje cuidadoso y acompañamiento profesional.",
    cta: "Ver equinoterapia",
    href: "/equinotherapy",
    image: "/imgs/escuela3.jpg",
    imageAlt: "Equinoterapia",
  },
  {
    title: "Alquiler de la sede",
    description:
      "Sede campestre para ferias, eventos y encuentros. Cotiza por WhatsApp.",
    cta: "Ver alquiler",
    href: "/venue",
    image: "/imgs/lugar.webp",
    imageAlt: "Sede Asdeoccidente",
  },
  {
    title: "Socios",
    description: "Descuentos y voz en la asociación. Únete como socio.",
    cta: "Quiero ser socio",
    href: "/membership",
    image: "/imgs/escuela5.jpg",
    imageAlt: "Socios Asdeoccidente",
  },
  {
    title: "Directorio equino",
    description:
      "Escuelas, pesebreras, veterinarios, montadores y más contactos relacionados.",
    cta: "Ver directorio",
    href: "/directory",
    image: "/imgs/lugar-1.jpg",
    imageAlt: "Directorio equino",
  },
];

export function isPlaceholderCta(cta: string): boolean {
  return /^pr[oó]ximamente$/i.test(cta.trim());
}

export function matchDefaultService(
  title: string,
  href?: string,
): HomeServiceItem | undefined {
  const normalizedHref = href?.trim();
  if (normalizedHref) {
    const byHref = defaultHomeServiceItems.find(
      (item) => item.href === normalizedHref,
    );
    if (byHref) return byHref;
  }

  const t = title.toLowerCase();
  return defaultHomeServiceItems.find((item) => {
    const d = item.title.toLowerCase();
    if (t === d) return true;
    if (d.includes("escuela") && t.includes("escuela")) return true;
    if (d === "servicios" && (t === "servicios" || t.includes("qué puedes")))
      return true;
    if (d.includes("equinoterap") && t.includes("equinoterap")) return true;
    if (d.includes("alquiler") && t.includes("alquiler")) return true;
    if (d.includes("socio") && t.includes("socio")) return true;
    if (d.includes("directorio") && t.includes("directorio")) return true;
    return false;
  });
}
