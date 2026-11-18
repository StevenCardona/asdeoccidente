import { defineField, defineType } from "sanity";

export const venueReview = defineType({
  name: "venueReview",
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
      description: "Ej. Evento familiar · Palmira",
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
