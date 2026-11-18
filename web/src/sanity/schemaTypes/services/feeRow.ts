import { defineField, defineType } from "sanity";

export const feeRow = defineType({
  name: "feeRow",
  title: "Fila de tarifa",
  type: "object",
  fields: [
    defineField({
      name: "concepto",
      title: "Concepto",
      type: "string",
      description: "Ej. Inscripción de criadero · Traspaso de socio a socio",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "priceSocio",
      title: "Precio para socios",
      type: "number",
      description:
        "Pesos SIN puntos ni comas (ej. 80000). Déjalo vacío si aún no está confirmado.",
    }),
    defineField({
      name: "priceNoSocio",
      title: "Precio para público general",
      type: "number",
      description:
        "Pesos SIN puntos ni comas. Déjalo vacío si aún no está confirmado.",
    }),
  ],
  preview: {
    select: { title: "concepto", socio: "priceSocio", noSocio: "priceNoSocio" },
    prepare({ title, socio, noSocio }) {
      const parts = [
        typeof socio === "number" ? `Socio ${socio}` : null,
        typeof noSocio === "number" ? `Público ${noSocio}` : null,
      ].filter(Boolean);
      return {
        title: title || "Concepto",
        subtitle: parts.length > 0 ? parts.join(" · ") : "Sin precios aún",
      };
    },
  },
});
