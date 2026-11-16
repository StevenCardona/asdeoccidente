import { defineField, defineType } from "sanity";

export const fair = defineType({
  name: "fair",
  title: "Feria",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "startDate",
      title: "Fecha inicio",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "Fecha fin",
      type: "date",
    }),
    defineField({
      name: "featured",
      title: "Destacada (Home / listado)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "summary",
      title: "Resumen corto",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "startDate",
      media: "banner",
    },
  },
});
