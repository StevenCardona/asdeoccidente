import { defineField, defineType } from "sanity";

export const sectionIntro = defineType({
  name: "sectionIntro",
  title: "Intro de sección",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Etiqueta superior (pequeña)",
      type: "string",
      description: "Texto corto encima del título. Ej. Qué ofrecemos",
    }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "Ej. Servicios para criadores y aficionados",
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "text",
      rows: 2,
      description:
        "Una o dos frases debajo del título. Explica la sección con palabras simples.",
    }),
  ],
});
