import { defineArrayMember, defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar. Solo Guardar no actualiza la web pública.";

export const event = defineType({
  name: "event",
  title: "Evento",
  type: "document",
  description: `${PUBLISH_HINT} Un documento pinta la tarjeta del listado y la página de detalle.`,
  groups: [
    { name: "data", title: "Datos", default: true },
    { name: "dates", title: "Fechas" },
    { name: "program", title: "Programación" },
    { name: "detail", title: "Secciones del detalle" },
    { name: "media", title: "Fotos del hero" },
    { name: "seo", title: "Google / buscadores" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Nombre del evento",
      type: "string",
      group: "data",
      description: "Obligatorio. Ej. XXXIV Copa América Equina",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Enlace corto (slug)",
      type: "slug",
      group: "data",
      options: { source: "title" },
      description:
        "Obligatorio. Se genera solo: escribe el nombre y pulsa Generar. Ej. xxxiv-copa-america-equina",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Resumen",
      type: "text",
      rows: 3,
      group: "data",
      description:
        "Obligatorio. Sirve para la tarjeta del listado y, si no hay secciones, también para el detalle. 1–3 frases.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "placeLabel",
      title: "Lugar",
      type: "string",
      group: "data",
      description:
        "Obligatorio. Ciudad o sede. Ej. Cartago, Valle del Cauca · Sede Asdeoccidente",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kind",
      title: "Tipo / grado",
      type: "string",
      group: "data",
      options: {
        list: [
          { title: "Grado A", value: "grado-a" },
          { title: "Grado AA", value: "grado-aa" },
          { title: "Grado B", value: "grado-b" },
          { title: "Exposición", value: "exposicion" },
          { title: "Festival / válida", value: "festival" },
          { title: "Remate", value: "remate" },
        ],
      },
      description: "Recomendado. Filtra el calendario.",
    }),
    defineField({
      name: "featured",
      title: "¿Evento destacado?",
      type: "boolean",
      group: "data",
      initialValue: false,
      description:
        "Opcional. Activa solo en el evento principal (ej. Copa América). Aparece arriba en /events.",
    }),
    defineField({
      name: "ticketNotes",
      title: "Nota de boletería / inscripción",
      type: "text",
      rows: 2,
      group: "data",
      description:
        "Opcional. Una sola frase. Ej. Entrada general, palcos e inscripción de ejemplares por WhatsApp.",
    }),
    defineField({
      name: "startDate",
      title: "Fecha de inicio",
      type: "date",
      group: "dates",
      description: "Obligatorio.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "Fecha de fin",
      type: "date",
      group: "dates",
      description:
        "Opcional. Si es un solo día, déjala vacía o usa la misma fecha de inicio.",
    }),
    defineField({
      name: "sessions",
      title: "Programación por día",
      type: "array",
      group: "program",
      of: [defineArrayMember({ type: "eventSession" })],
      description:
        "Opcional. Solo si ya tienes el programa. Cada fila: fecha + texto libre del día + hora opcional.",
    }),
    defineField({
      name: "detailSections",
      title: "Secciones debajo del hero",
      type: "array",
      group: "detail",
      of: [defineArrayMember({ type: "eventDetailSection" })],
      description:
        "Opcional. Cada sección (info, precios o galería) incluye su propio texto e imágenes. El hero del detalle sale de Datos + Fotos del hero.",
    }),
    defineField({
      name: "banner",
      title: "Foto principal (tarjeta y hero)",
      type: "imageWithAlt",
      group: "media",
      description:
        "Obligatorio. Misma foto para la card del listado y el detalle. Completa el texto alternativo.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlightImage",
      title: "Foto alternativa del detalle",
      type: "imageWithAlt",
      group: "media",
      description: "Opcional. Si está vacía, se usa la foto principal.",
    }),
    defineField({
      name: "seo",
      title: "Google / buscadores",
      type: "seo",
      group: "seo",
      description:
        "Opcional. Si está vacío, el sitio arma título y descripción con el nombre y las fechas.",
    }),
  ],
  orderings: [
    {
      title: "Fecha de inicio (nuevas primero)",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "startDate",
      media: "banner",
      featured: "featured",
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: featured ? `★ ${title}` : title,
        subtitle,
        media,
      };
    },
  },
});
