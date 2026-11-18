import { defineArrayMember, defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar. Solo Guardar no actualiza la web pública.";

export const venuePage = defineType({
  name: "venuePage",
  title: "Alquiler",
  type: "document",
  description: `${PUBLISH_HINT} Página /venue: hero, intro, espacios, galería y reseñas.`,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "intro", title: "Intro" },
    { name: "spaces", title: "Espacios" },
    { name: "gallery", title: "Galería" },
    { name: "reviews", title: "Reseñas" },
    { name: "seo", title: "Google / buscadores" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "badge",
          title: "Etiqueta",
          type: "string",
          initialValue: "Alquiler de sede",
        }),
        defineField({
          name: "title",
          title: "Título",
          type: "string",
          initialValue: "Alquila la sede para tu evento",
        }),
        defineField({
          name: "subtitle",
          title: "Subtítulo",
          type: "text",
          rows: 2,
          initialValue:
            "Sede campestre para ferias, eventos y encuentros. Cotiza por WhatsApp.",
        }),
        defineField({
          name: "primaryCtaLabel",
          title: "Texto del botón WhatsApp",
          type: "string",
          initialValue: "Quiero cotizar",
        }),
        defineField({
          name: "image",
          title: "Imagen de fondo",
          type: "imageWithAlt",
        }),
        defineField({
          name: "contactLine",
          title: "Contacto comercial (línea secundaria)",
          type: "string",
          description:
            "Se muestra bajo la dirección en el hero. Ej. Steet Achury Mendoza · (+57) 300 322 0606 · comercial@…",
          initialValue:
            "Steet Achury Mendoza · (+57) 300 322 0606 · comercial@asdeoccidente.org.co",
        }),
      ],
    }),
    defineField({
      name: "intro",
      title: "Introducción",
      type: "object",
      group: "intro",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Etiqueta",
          type: "string",
          initialValue: "Eventos en las mejores manos",
        }),
        defineField({
          name: "title",
          title: "Título",
          type: "string",
          initialValue: "Los mejores espacios",
        }),
        defineField({
          name: "paragraphs",
          title: "Párrafos",
          type: "array",
          of: [defineArrayMember({ type: "text" })],
          description: "Dos o tres párrafos cortos sobre la oferta de sede.",
        }),
      ],
    }),
    defineField({
      name: "spaces",
      title: "Espacios",
      type: "array",
      group: "spaces",
      description:
        "Cada espacio: título, descripción, medidas e imagen con orientación izquierda/derecha.",
      of: [defineArrayMember({ type: "venueSpace" })],
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
            eyebrow: "Ambiente",
            title: "Momentos en nuestra sede",
            subtitle: "Fotos del coliseo, salones y zonas verdes.",
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
      name: "reviewsIntro",
      title: "Reseñas — títulos",
      type: "sectionIntro",
      group: "reviews",
      initialValue: {
        eyebrow: "Confianza",
        title: "Lo que dicen quienes nos visitan",
        subtitle: "Experiencias en eventos y celebraciones en la sede.",
      },
    }),
    defineField({
      name: "reviews",
      title: "Reseñas",
      type: "array",
      group: "reviews",
      of: [defineArrayMember({ type: "venueReview" })],
      description: "Deja vacío si aún no hay reseñas aprobadas.",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      initialValue: {
        title: "Alquiler de la sede",
        description:
          "Sede campestre para ferias, eventos y encuentros. Cotiza por WhatsApp.",
      },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Alquiler" };
    },
  },
});
