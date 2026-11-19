import { defineArrayMember, defineField, defineType } from "sanity";

export const homeReview = defineType({
  name: "homeReview",
  title: "Reseña",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "place",
      title: "Lugar o contexto",
      type: "string",
      description: "Ej. Alumno · Palmira",
    }),
    defineField({
      name: "rating",
      title: "Calificación (1–5)",
      type: "number",
      validation: (rule) => rule.min(1).max(5).integer(),
      initialValue: 5,
    }),
    defineField({
      name: "text",
      title: "Texto",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "text" },
  },
});

export const homeReviews = defineType({
  name: "homeReviews",
  title: "Reseñas",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Encabezado de sección",
      type: "sectionIntro",
      initialValue: {
        eyebrow: "Comunidad",
        title: "Lo que dicen de nosotros",
        subtitle:
          "Experiencias de alumnos, socios y visitantes en la sede Asdeoccidente.",
      },
    }),
    defineField({
      name: "items",
      title: "Reseñas",
      type: "array",
      description:
        "Testimonios mostrados en Inicio. No inventes reseñas: usa textos reales o deja vacío.",
      of: [defineArrayMember({ type: "homeReview" })],
    }),
  ],
});
