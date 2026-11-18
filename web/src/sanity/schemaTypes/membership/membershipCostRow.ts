import { defineField, defineType } from "sanity";

export const membershipCostRow = defineType({
  name: "membershipCostRow",
  title: "Fila de costo",
  type: "object",
  description:
    "Una fila de la tabla. Cuota y Valor son texto libre (no números): $0, $1.500.000, Traspasable, etc.",
  fields: [
    defineField({
      name: "label",
      title: "Tipo",
      type: "string",
      description: "Ej. Socio afiliado · Socio vitalicio",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cuotaDisplay",
      title: "Cuota de sostenimiento",
      type: "string",
      description: "Texto tal cual se muestra. Ej. $0 o $1.500.000",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "valorDisplay",
      title: "Valor",
      type: "string",
      description: "Texto tal cual se muestra. Ej. $5.000.000 o Traspasable",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "label",
      cuota: "cuotaDisplay",
      valor: "valorDisplay",
    },
    prepare({ title, cuota, valor }) {
      return {
        title: title || "Costo",
        subtitle: [cuota, valor].filter(Boolean).join(" · "),
      };
    },
  },
});
