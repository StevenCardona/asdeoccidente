export type OfferStubId = "directory";

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
