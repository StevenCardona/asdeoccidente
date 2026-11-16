import { defineArrayMember, defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Inicio",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Título del hero",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Subtítulo del hero",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Imagen del hero",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "culturalLabel",
      title: "Etiqueta cultural (opcional)",
      type: "string",
      description: "Ej. Valle del Cauca — breve, sin pegatinas.",
    }),
    defineField({
      name: "primaryCta",
      title: "CTA principal",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Texto", type: "string" }),
        defineField({
          name: "href",
          title: "Enlace interno (opcional)",
          type: "string",
          description: "Ej. /school. Vacío si usas WhatsApp.",
        }),
        defineField({
          name: "whatsappTopic",
          title: "Tema WhatsApp",
          type: "string",
          options: {
            list: [
              { title: "Escuela", value: "school" },
              { title: "Ferias", value: "fairs" },
              { title: "General", value: "general" },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "CTA secundario",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Texto", type: "string" }),
        defineField({
          name: "href",
          title: "Enlace interno",
          type: "string",
          description: "Ej. /fairs",
        }),
      ],
    }),
    defineField({
      name: "essenceItems",
      title: "Esencia",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Título", type: "string" }),
            defineField({
              name: "text",
              title: "Texto corto",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "icon",
              title: "Icono Lucide (clave)",
              type: "string",
              description: "Ej. Trophy, Users, HeartHandshake, Landmark",
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        }),
      ],
    }),
    defineField({
      name: "entryCards",
      title: "Qué quieres hacer",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Título", type: "string" }),
            defineField({
              name: "description",
              title: "Descripción",
              type: "text",
              rows: 2,
            }),
            defineField({ name: "href", title: "Ruta", type: "string" }),
            defineField({
              name: "icon",
              title: "Icono Lucide (clave)",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "href" },
          },
        }),
      ],
    }),
    defineField({
      name: "showStats",
      title: "Mostrar cifras",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "stats",
      title: "Cifras",
      type: "array",
      hidden: ({ parent }) => parent?.showStats === false,
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Valor numérico",
              type: "string",
              description: "Ej. 1975, 200, 299",
            }),
            defineField({
              name: "prefix",
              title: "Prefijo",
              type: "string",
              description: "Ej. +",
            }),
            defineField({ name: "label", title: "Etiqueta", type: "string" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        }),
      ],
    }),
    defineField({
      name: "socialVideos",
      title: "Videos Instagram / TikTok",
      type: "array",
      description: "Hasta 4 URLs de publicaciones (reel/post/video).",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "Etiqueta accesible",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "url" },
          },
        }),
      ],
      validation: (rule) => rule.max(4),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO — título",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO — descripción",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Inicio" }),
  },
});
