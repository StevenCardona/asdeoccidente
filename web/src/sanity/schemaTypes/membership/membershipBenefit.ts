import { defineField, defineType } from "sanity";

export const membershipBenefit = defineType({
  name: "membershipBenefit",
  title: "Beneficio",
  type: "object",
  description: "Card en la web: número automático + título + texto corto.",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "Ej. Voz y voto",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Texto",
      type: "text",
      rows: 3,
      description: "Una o dos frases. Habla a la persona (tú).",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "text" },
    prepare({ title, subtitle }) {
      return {
        title: title || "Beneficio",
        subtitle: subtitle || "Sin texto",
      };
    },
  },
});
