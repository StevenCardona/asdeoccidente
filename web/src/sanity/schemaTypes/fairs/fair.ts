import { defineField, defineType } from "sanity";

export const fair = defineType({
  name: "fair",
  title: "Feria",
  type: "document",
  groups: [
    { name: "data", title: "Datos", default: true },
    { name: "dates", title: "Fechas" },
    { name: "image", title: "Imagen" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Nombre de la feria",
      type: "string",
      group: "data",
      description: "Ej. Copa América Equina 2026",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Enlace corto (slug)",
      type: "slug",
      group: "data",
      options: { source: "title" },
      description:
        "Se genera solo: escribe el nombre y pulsa Generar. No lo inventes a mano. Ej. copa-america-equina-2026",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Resumen corto",
      type: "text",
      rows: 3,
      group: "data",
      description:
        "2 o 3 frases para el listado de ferias. Ej. Competencia y ambiente de feria en la sede de Asdeoccidente.",
    }),
    defineField({
      name: "featured",
      title: "¿Destacar en el sitio?",
      type: "boolean",
      group: "data",
      initialValue: false,
      description:
        "Si está activo, la feria puede aparecer como destacada en Inicio o al inicio del listado.",
    }),
    defineField({
      name: "startDate",
      title: "Fecha de inicio",
      type: "date",
      group: "dates",
      description: "Día en que empieza la feria.",
    }),
    defineField({
      name: "endDate",
      title: "Fecha de fin",
      type: "date",
      group: "dates",
      description: "Día en que termina. Si es un solo día, usa la misma fecha de inicio.",
    }),
    defineField({
      name: "banner",
      title: "Banner / foto",
      type: "imageWithAlt",
      group: "image",
      description:
        "Foto grande de la feria. En Texto alternativo escribe qué se ve (ej. Público en la pista de Asdeoccidente).",
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
