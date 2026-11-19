import { defineField, defineType } from "sanity";

export const schoolHero = defineType({
  name: "schoolHero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "badge",
      title: "Cifra de alumnos (bajo el banner)",
      type: "string",
      description:
        "Se muestra junto a las reseñas Google, no como etiqueta. Ej. +200 alumnos. No repitas este texto en el título.",
      initialValue: "+200 alumnos",
    }),
    defineField({
      name: "title",
      title: "Título grande",
      type: "string",
      description: "Ej. Escuela de chalanería personalizada",
      initialValue: "Escuela de chalanería personalizada",
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "text",
      rows: 3,
      description:
        "Distinto del título y de la cifra. Ej. Un instructor a tu lado… primera clase gratis.",
      initialValue:
        "Un instructor a tu lado en cada sesión. Caballo y equipo los pone la escuela; tu primera clase es gratis.",
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Texto del botón principal (WhatsApp)",
      type: "string",
      description: "Ej. Quiero mi clase gratis",
      initialValue: "Quiero mi clase gratis",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Texto del botón secundario",
      type: "string",
      description: "Lleva a la sección de tarifas. Ej. Ver tarifas",
      initialValue: "Ver tarifas",
    }),
    defineField({
      name: "image",
      title: "Foto de fondo",
      type: "imageWithAlt",
      description:
        "Sugerencia: sube escuela1.jpg. Alt ej. Instructor y alumno en clase de chalanería",
    }),
  ],
});
