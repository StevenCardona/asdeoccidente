import { defineArrayMember, defineField, defineType } from "sanity";

export const venueSpace = defineType({
  name: "venueSpace",
  title: "Espacio de la sede",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Nombre del espacio",
      type: "string",
      description: "Ej. Coliseo Principal",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción corta",
      type: "text",
      rows: 3,
      description: "Una o dos frases. Sin inventar precios ni capacidades extra.",
    }),
    defineField({
      name: "highlights",
      title: "Medidas / datos clave",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "Ej. 1250 m² · ~800 vehículos",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "imageWithAlt",
      description: "Opcional. Foto del espacio.",
    }),
    defineField({
      name: "imagePosition",
      title: "Posición de la imagen",
      type: "string",
      options: {
        list: [
          { title: "Derecha", value: "right" },
          { title: "Izquierda", value: "left" },
        ],
        layout: "radio",
      },
      initialValue: "right",
      description: "Solo aplica si hay imagen.",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
    prepare({ title, subtitle }) {
      return {
        title: title || "Espacio",
        subtitle: subtitle || "",
      };
    },
  },
});
