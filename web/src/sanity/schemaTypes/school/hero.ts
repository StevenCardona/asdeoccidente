import { defineField, defineType } from "sanity";

export const schoolHero = defineType({
  name: "schoolHero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "badge",
      title: "Etiqueta roja",
      type: "string",
      description: "Ej. Clase de cortesía",
      initialValue: "Clase de cortesía",
    }),
    defineField({
      name: "title",
      title: "Título grande",
      type: "string",
      description: "Ej. Aprende a montar con un maestro solo para ti.",
      initialValue: "Aprende a montar con un maestro solo para ti.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "text",
      rows: 3,
      description:
        "Ej. Clases totalmente personalizadas. Un instructor a tu lado. Tu primera clase es gratis.",
      initialValue:
        "Clases totalmente personalizadas. Un instructor a tu lado. Tu primera clase es gratis.",
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
