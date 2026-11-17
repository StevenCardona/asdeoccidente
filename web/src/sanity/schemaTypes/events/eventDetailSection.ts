import { defineArrayMember, defineField, defineType } from "sanity";

export const eventDetailSection = defineType({
  name: "eventDetailSection",
  title: "Sección del detalle",
  type: "object",
  fields: [
    defineField({
      name: "type",
      title: "Tipo de sección",
      type: "string",
      options: {
        list: [
          { title: "Información (texto + imagen + botón)", value: "info" },
          { title: "Precios / entradas", value: "prices" },
          { title: "Galería", value: "gallery" },
        ],
        layout: "radio",
      },
      initialValue: "info",
      validation: (rule) => rule.required(),
      description:
        "Cada sección lleva su propio contenido. Sin secciones, el detalle usa el resumen del evento.",
    }),
    defineField({
      name: "eyebrow",
      title: "Etiqueta superior",
      type: "string",
      hidden: ({ parent }) => parent?.type !== "info",
      description: "Opcional. Ej. La cita grande",
    }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description:
        "Opcional. En info: «Información del evento». En precios: «Entradas». En galería: «Momentos».",
    }),
    defineField({
      name: "body",
      title: "Texto",
      type: "text",
      rows: 8,
      hidden: ({ parent }) => parent?.type !== "info",
      description:
        "Texto completo de la sección (puedes usar saltos de línea). No hace falta dividirlo en párrafos del Studio.",
    }),
    defineField({
      name: "image",
      title: "Imagen de la sección",
      type: "imageWithAlt",
      hidden: ({ parent }) => parent?.type !== "info",
      description: "Opcional. Foto que acompaña este bloque de información.",
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
      hidden: ({ parent }) => parent?.type !== "info",
      description: "Opcional. Solo aplica si hay imagen.",
    }),
    defineField({
      name: "ctaLabel",
      title: "Texto del botón",
      type: "string",
      hidden: ({ parent }) => parent?.type !== "info",
      description: "Opcional. Ej. Más información",
    }),
    defineField({
      name: "ctaAction",
      title: "Acción del botón",
      type: "string",
      options: {
        list: [
          { title: "WhatsApp (Eventos)", value: "whatsapp" },
          { title: "Enlace (página o URL)", value: "link" },
        ],
        layout: "radio",
      },
      initialValue: "whatsapp",
      hidden: ({ parent }) => parent?.type !== "info" || !parent?.ctaLabel,
      description: "Opcional. Solo si hay texto de botón.",
    }),
    defineField({
      name: "ctaHref",
      title: "Enlace del botón",
      type: "string",
      hidden: ({ parent }) =>
        parent?.type !== "info" || parent?.ctaAction !== "link",
      description: "Obligatorio si la acción es Enlace. Ej. /events o https://…",
    }),
    defineField({
      name: "ctaNote",
      title: "Nota bajo el botón",
      type: "string",
      hidden: ({ parent }) => parent?.type !== "info",
      description:
        "Opcional. Ej. Te respondemos por WhatsApp con cupos y requisitos.",
    }),
    defineField({
      name: "ctaNoteIcon",
      title: "Icono de la nota",
      type: "string",
      options: {
        list: [
          { title: "Mensaje", value: "message" },
          { title: "Teléfono", value: "phone" },
          { title: "Ticket", value: "ticket" },
          { title: "Info", value: "info" },
        ],
      },
      hidden: ({ parent }) => parent?.type !== "info" || !parent?.ctaNote,
      description: "Opcional.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "text",
      rows: 2,
      hidden: ({ parent }) => parent?.type !== "gallery",
      description: "Opcional. Texto corto bajo el título de la galería.",
    }),
    defineField({
      name: "images",
      title: "Fotos de esta galería",
      type: "array",
      hidden: ({ parent }) => parent?.type !== "gallery",
      of: [defineArrayMember({ type: "imageWithAlt" })],
      description: "Sube aquí las fotos de esta sección (no en otro lugar).",
    }),
    defineField({
      name: "priceRows",
      title: "Filas de precios",
      type: "array",
      hidden: ({ parent }) => parent?.type !== "prices",
      description: "Solo con tarifas confirmadas. No inventes precios.",
      of: [
        defineArrayMember({
          type: "object",
          name: "priceRow",
          fields: [
            defineField({
              name: "label",
              title: "Concepto",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "amountLabel",
              title: "Precio (texto)",
              type: "string",
              description: "Ej. $10.000",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "amountLabel" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { type: "type", title: "title" },
    prepare({ type, title }) {
      const labels: Record<string, string> = {
        info: "Info",
        prices: "Precios",
        gallery: "Galería",
      };
      return {
        title: title || labels[type as string] || "Sección",
        subtitle: labels[type as string] || type,
      };
    },
  },
});
