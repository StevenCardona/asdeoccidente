import { defineField, defineType } from "sanity";

export const cta = defineType({
  name: "cta",
  title: "Botón",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Texto del botón",
      type: "string",
      description: "Ej. Quiero mi clase gratis",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "Enlace (página o web)",
      type: "string",
      description:
        "Ruta interna o URL. Ej. /school o /events. Déjalo vacío si el botón abre WhatsApp.",
    }),
    defineField({
      name: "whatsappTopic",
      title: "Abrir WhatsApp con tema",
      type: "string",
      description:
        "Elige un tema solo si el botón debe abrir WhatsApp. Si usas un enlace de arriba, deja esto vacío.",
      options: {
        list: [
          { title: "Escuela (clase gratis)", value: "school" },
          { title: "Eventos", value: "fairs" },
          { title: "Alquiler sede", value: "venue" },
          { title: "Socios", value: "membership" },
          { title: "Consulta general", value: "general" },
        ],
      },
    }),
  ],
});
