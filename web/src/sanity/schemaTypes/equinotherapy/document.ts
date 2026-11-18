import { defineArrayMember, defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar. Solo Guardar no actualiza la web pública.";

export const equinotherapyPage = defineType({
  name: "equinotherapyPage",
  title: "Equinoterapia",
  type: "document",
  description: `${PUBLISH_HINT} Página /equinotherapy: hero, historias, galería, reseñas y FAQ. Sin promesas de cura. Hasta que publiques al menos un párrafo en la primera historia, la web usa el contenido seed del código.`,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "storyIntro", title: "Historia 1" },
    { name: "gallery", title: "Galería" },
    { name: "storyBenefits", title: "Historia 2 + beneficios" },
    { name: "reviews", title: "Reseñas" },
    { name: "faq", title: "FAQ" },
    { name: "seo", title: "Google / buscadores" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      description:
        "Banner full-bleed. El botón WhatsApp usa el mensaje «Equinoterapia» de Configuración general.",
      fields: [
        defineField({
          name: "badge",
          title: "Etiqueta",
          type: "string",
          initialValue: "Equinoterapia",
        }),
        defineField({
          name: "title",
          title: "Título",
          type: "string",
          initialValue: "Conexión, calma y acompañamiento con el caballo",
        }),
        defineField({
          name: "subtitle",
          title: "Subtítulo",
          type: "text",
          rows: 3,
          initialValue:
            "Espacio terapéutico con el caballo, con acompañamiento profesional. Sin promesas de cura. Un entorno de comprensión, tolerancia y vínculo.",
        }),
        defineField({
          name: "primaryCtaLabel",
          title: "Texto del botón WhatsApp",
          type: "string",
          initialValue: "Quiero información",
        }),
        defineField({
          name: "image",
          title: "Imagen de fondo",
          type: "imageWithAlt",
        }),
      ],
    }),
    defineField({
      name: "storyIntro",
      title: "Primera historia",
      type: "object",
      group: "storyIntro",
      description:
        "Dos párrafos iniciales + imagen a la derecha (en escritorio).",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Etiqueta",
          type: "string",
          initialValue: "La equinoterapia",
        }),
        defineField({
          name: "title",
          title: "Título",
          type: "string",
          initialValue: "Más que un encuentro recreativo",
        }),
        defineField({
          name: "paragraphs",
          title: "Párrafos",
          type: "array",
          of: [defineArrayMember({ type: "text" })],
        }),
        defineField({
          name: "image",
          title: "Imagen",
          type: "imageWithAlt",
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
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Galería",
      type: "object",
      group: "gallery",
      fields: [
        defineField({
          name: "intro",
          title: "Títulos",
          type: "sectionIntro",
          initialValue: {
            eyebrow: "Momentos",
            title: "Encuentros con el caballo",
            subtitle:
              "Imágenes del acompañamiento terapéutico en un entorno de calma y confianza.",
          },
        }),
        defineField({
          name: "photos",
          title: "Fotos",
          type: "array",
          of: [defineArrayMember({ type: "imageWithAlt" })],
        }),
      ],
    }),
    defineField({
      name: "storyBenefits",
      title: "Segunda historia y beneficios",
      type: "object",
      group: "storyBenefits",
      description:
        "Párrafos restantes, listado de beneficios e imagen a la izquierda (en escritorio).",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Etiqueta",
          type: "string",
          initialValue: "Beneficios",
        }),
        defineField({
          name: "title",
          title: "Título",
          type: "string",
          initialValue: "Un camino de comprensión y crecimiento",
        }),
        defineField({
          name: "paragraphs",
          title: "Párrafos",
          type: "array",
          of: [defineArrayMember({ type: "text" })],
        }),
        defineField({
          name: "benefits",
          title: "Beneficios",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
          description: "Lista corta de aportes del programa.",
        }),
        defineField({
          name: "image",
          title: "Imagen",
          type: "imageWithAlt",
        }),
        defineField({
          name: "imagePosition",
          title: "Posición de la imagen",
          type: "string",
          options: {
            list: [
              { title: "Izquierda", value: "left" },
              { title: "Derecha", value: "right" },
            ],
            layout: "radio",
          },
          initialValue: "left",
        }),
      ],
    }),
    defineField({
      name: "reviewsIntro",
      title: "Reseñas — títulos",
      type: "sectionIntro",
      group: "reviews",
      initialValue: {
        eyebrow: "Voces",
        title: "Lo que comparten las familias",
        subtitle:
          "Experiencias de acompañamiento. Sustituye por testimonios aprobados cuando estén listos.",
      },
    }),
    defineField({
      name: "reviews",
      title: "Reseñas",
      type: "array",
      group: "reviews",
      of: [defineArrayMember({ type: "equinotherapyReview" })],
      description: "Deja vacío para usar las reseñas seed del código.",
    }),
    defineField({
      name: "faq",
      title: "Preguntas frecuentes",
      type: "object",
      group: "faq",
      fields: [
        defineField({
          name: "intro",
          title: "Títulos de la sección",
          type: "sectionIntro",
          initialValue: {
            eyebrow: "Dudas frecuentes",
            title: "Preguntas sobre equinoterapia",
            subtitle: "Lo esencial antes de escribirnos.",
          },
        }),
        defineField({
          name: "items",
          title: "Preguntas y respuestas",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "question",
                  title: "Pregunta",
                  type: "string",
                }),
                defineField({
                  name: "answer",
                  title: "Respuesta",
                  type: "text",
                  rows: 3,
                }),
              ],
              preview: { select: { title: "question" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      initialValue: {
        title: "Equinoterapia",
        description:
          "Espacio terapéutico con el caballo, con acompañamiento profesional. Sin promesas de cura.",
      },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Equinoterapia" };
    },
  },
});
