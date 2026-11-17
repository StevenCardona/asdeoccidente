import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "Google / buscadores",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título para Google",
      type: "string",
      description:
        "Corto y claro. Ej. Aprende, compite y celebra con el caballo criollo colombiano.  ·  o  Escuela de chalanería | Clase gratis",
    }),
    defineField({
      name: "description",
      title: "Descripción para Google",
      type: "text",
      rows: 2,
      description:
        "1 o 2 frases que aparecen bajo el título en Google. Ej. Clases de chalanería personalizadas… Primera clase gratis.",
    }),
  ],
});
