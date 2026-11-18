export type OfferStubId =
  | "services"
  | "venue"
  | "membership"
  | "equinotherapy"
  | "directory";

export type OfferStub = {
  id: OfferStubId;
  path: `/${OfferStubId}`;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  body: string;
  /** Prefill for WhatsApp; empty uses site general template. */
  whatsappText: string;
  ctaLabel: string;
};

export const offerStubs: Record<OfferStubId, OfferStub> = {
  services: {
    id: "services",
    path: "/services",
    title: "Qué puedes hacer en Asdeoccidente",
    seoTitle: "Servicios",
    seoDescription:
      "Escuela, ferias, equinoterapia, sede, socios y directorio. Elige el camino que necesitas.",
    eyebrow: "Servicios",
    body: "Pronto verás aquí el panorama completo de lo que puedes hacer con nosotros. Mientras tanto, escribe por WhatsApp o visita Escuela y Eventos.",
    whatsappText: "",
    ctaLabel: "Escríbenos por WhatsApp",
  },
  venue: {
    id: "venue",
    path: "/venue",
    title: "Alquila la sede para tu evento",
    seoTitle: "Alquiler de la sede",
    seoDescription:
      "Sede campestre para ferias, eventos y encuentros. Cotiza por WhatsApp.",
    eyebrow: "Alquiler de la sede",
    body: "Estamos preparando la página con el detalle de la sede. Si quieres cotizar un evento, escríbenos por WhatsApp.",
    whatsappText: "Hola, quiero cotizar un evento en la sede.",
    ctaLabel: "Quiero cotizar",
  },
  membership: {
    id: "membership",
    path: "/membership",
    title: "Quiero ser socio",
    seoTitle: "Socios",
    seoDescription:
      "Descuentos y voz en la asociación. Pronto más detalle sobre cómo unirte.",
    eyebrow: "Socios",
    body: "Pronto encontrarás aquí cómo unirte y los beneficios confirmados. Mientras tanto, escríbenos si quieres ser socio.",
    whatsappText: "Hola, quiero información para ser socio de Asdeoccidente.",
    ctaLabel: "Quiero ser socio",
  },
  equinotherapy: {
    id: "equinotherapy",
    path: "/equinotherapy",
    title: "Equinoterapia",
    seoTitle: "Equinoterapia",
    seoDescription:
      "Espacio terapéutico con el caballo. Sin promesas de cura. Información pronto.",
    eyebrow: "Equinoterapia",
    body: "Estamos armando esta página con cuidado y lenguaje validado. Sin promesas de cura. Escríbenos si quieres información.",
    whatsappText: "Hola, quiero información sobre equinoterapia.",
    ctaLabel: "Quiero información",
  },
  directory: {
    id: "directory",
    path: "/directory",
    title: "Directorio equino",
    seoTitle: "Directorio equino",
    seoDescription:
      "Escuelas, pesebreras, veterinarios, montadores y más. Catálogo buscable pronto.",
    eyebrow: "Directorio",
    body: "Aquí vivirá un directorio buscable de escuelas, pesebreras, veterinarios, montadores y otros contactos relacionados. El catálogo llega pronto.",
    whatsappText: "",
    ctaLabel: "Escríbenos por WhatsApp",
  },
};
