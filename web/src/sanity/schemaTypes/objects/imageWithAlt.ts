import { defineField, defineType } from "sanity";

export const imageWithAlt = defineType({
  name: "imageWithAlt",
  title: "Imagen",
  type: "image",
  options: { hotspot: true },
  description:
    "Pulsa para subir una foto. Luego completa el texto alternativo (qué se ve en la imagen).",
  fields: [
    defineField({
      name: "alt",
      title: "Texto alternativo (qué se ve)",
      type: "string",
      description:
        "Obligatorio. Describe la foto en una frase. Ej. Instructor y alumno en clase de chalanería",
      validation: (rule) => rule.required(),
    }),
  ],
});
