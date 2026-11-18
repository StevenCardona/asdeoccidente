import { defineField, defineType } from "sanity";

export const membershipPillar = defineType({
  name: "membershipPillar",
  title: "Misión / Visión",
  type: "object",
  description: "Un bloque (Visión o Misión) con imagen acompañante.",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "Ej. Visión o Misión",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Texto",
      type: "text",
      rows: 4,
      description: "Párrafo corto del propósito.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "imageWithAlt",
      description: "Completa el texto alternativo.",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "text", media: "image" },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Bloque",
        subtitle: subtitle || "Sin texto",
        media,
      };
    },
  },
});
