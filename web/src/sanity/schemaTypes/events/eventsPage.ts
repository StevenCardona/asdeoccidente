import { defineArrayMember, defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar. Solo Guardar no actualiza la web pública.";

export const eventsPage = defineType({
  name: "eventsPage",
  title: "Eventos · Página",
  type: "document",
  description: `${PUBLISH_HINT} Configura el listado /events: banner (si no hay evento destacado), intros, reseñas, galería y FAQ. Los eventos del calendario se crean en Eventos → Calendario.`,
  groups: [
    { name: "hero", title: "Banner", default: true },
    { name: "calendar", title: "Calendario" },
    { name: "reviews", title: "Reseñas" },
    { name: "gallery", title: "Galería" },
    { name: "faq", title: "Preguntas" },
    { name: "seo", title: "Google / buscadores" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Banner de la página",
      type: "object",
      group: "hero",
      description:
        "Se muestra en /events cuando aún no hay un evento con foto para el hero destacado. Si hay evento destacado, ese hero lo reemplaza.",
      fields: [
        defineField({
          name: "badge",
          title: "Etiqueta",
          type: "string",
          initialValue: "Eventos",
        }),
        defineField({
          name: "title",
          title: "Título (h1)",
          type: "string",
          initialValue: "Próximos eventos",
        }),
        defineField({
          name: "subtitle",
          title: "Subtítulo",
          type: "text",
          rows: 3,
          initialValue:
            "Ferias, exposiciones y citas del caballo criollo colombiano con Asdeoccidente.",
        }),
        defineField({
          name: "image",
          title: "Imagen de fondo",
          type: "imageWithAlt",
          description: "Solo lo publicado se ve. Sin imagen, el banner usa fondo sólido.",
        }),
        defineField({
          name: "primaryCtaLabel",
          title: "Texto del botón WhatsApp",
          type: "string",
          initialValue: "Consultar por WhatsApp",
          description: "Usa el mensaje WhatsApp — Eventos de Configuración general.",
        }),
      ],
    }),
    defineField({
      name: "calendarIntro",
      title: "Títulos del calendario",
      type: "sectionIntro",
      group: "calendar",
      description: "Etiqueta, título y subtítulo encima del listado de eventos.",
      initialValue: {
        eyebrow: "Calendario",
        title: "Próximos eventos",
        subtitle:
          "Ferias, exposiciones y citas del caballo criollo colombiano con Asdeoccidente.",
      },
    }),
    defineField({
      name: "emptyCalendarMessage",
      title: "Mensaje si no hay eventos",
      type: "text",
      rows: 2,
      group: "calendar",
      description: "Se muestra cuando aún no hay eventos publicados.",
      initialValue:
        "Estamos armando el calendario. Escríbenos por WhatsApp si quieres cupos o fechas.",
    }),
    defineField({
      name: "reviewsIntro",
      title: "Títulos de reseñas",
      type: "sectionIntro",
      group: "reviews",
      initialValue: {
        eyebrow: "Comunidad",
        title: "Lo que dicen de nuestros eventos",
        subtitle: "",
      },
    }),
    defineField({
      name: "reviews",
      title: "Reseñas",
      type: "array",
      group: "reviews",
      description: "Opcional. Testimonios cortos sobre ferias o eventos.",
      of: [
        defineArrayMember({
          type: "object",
          name: "eventReview",
          fields: [
            defineField({
              name: "name",
              title: "Nombre",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "place",
              title: "Lugar o rol",
              type: "string",
              description: "Ej. Palmira · Criador",
            }),
            defineField({
              name: "rating",
              title: "Estrellas (1–5)",
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
        }),
      ],
    }),
    defineField({
      name: "galleryIntro",
      title: "Títulos de la galería",
      type: "sectionIntro",
      group: "gallery",
      initialValue: {
        eyebrow: "Ambiente",
        title: "Momentos de nuestros eventos",
        subtitle: "",
      },
    }),
    defineField({
      name: "gallery",
      title: "Fotos de la página",
      type: "array",
      group: "gallery",
      of: [defineArrayMember({ type: "imageWithAlt" })],
      description: "Galería general del listado /events (no de un evento concreto).",
    }),
    defineField({
      name: "faqIntro",
      title: "Títulos de preguntas",
      type: "sectionIntro",
      group: "faq",
      initialValue: {
        eyebrow: "Dudas",
        title: "Preguntas sobre eventos",
        subtitle: "",
      },
    }),
    defineField({
      name: "faq",
      title: "Preguntas frecuentes",
      type: "array",
      group: "faq",
      of: [
        defineArrayMember({
          type: "object",
          name: "eventFaqItem",
          fields: [
            defineField({
              name: "question",
              title: "Pregunta",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Respuesta",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "Google / buscadores",
      type: "seo",
      group: "seo",
      initialValue: {
        title: "Eventos y ferias",
        description:
          "Ferias, exposiciones y eventos del caballo criollo colombiano con Asdeoccidente.",
      },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Página Eventos" }),
  },
});
