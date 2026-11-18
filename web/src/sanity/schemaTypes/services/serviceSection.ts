import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceSection = defineType({
  name: "serviceSection",
  title: "Sección de trámite",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "Ej. Registro de ejemplares",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Ancla (slug)",
      type: "slug",
      description: "Se usa en el menú de la página (#registro-de-ejemplares).",
      options: {
        source: "title",
        maxLength: 64,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 3,
      description: "Texto corto bajo el título (2 o 3 frases).",
    }),
    defineField({
      name: "icon",
      title: "Ícono",
      type: "string",
      description: "Ícono que aparece junto al título en la página.",
      options: {
        list: [
          { title: "Documento", value: "FileText" },
          { title: "Traspaso", value: "ArrowLeftRight" },
          { title: "Homologación", value: "ClipboardCheck" },
          { title: "Duplicado", value: "Copy" },
          { title: "Manos / apoyo", value: "HeartHandshake" },
          { title: "Calendario", value: "CalendarDays" },
          { title: "Sello", value: "Stamp" },
          { title: "Carpeta", value: "FolderOpen" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "feeRows",
      title: "Tarifas",
      type: "array",
      description:
        "Filas Concepto · Socios · No socios. Precio vacío se muestra como — en la web.",
      of: [defineArrayMember({ type: "feeRow" })],
    }),
    defineField({
      name: "downloads",
      title: "Formularios PDF",
      type: "array",
      description: "Botones de descarga. Sube el PDF en cada ítem.",
      of: [defineArrayMember({ type: "serviceDownload" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      fees: "feeRows",
      downloads: "downloads",
    },
    prepare({ title, fees, downloads }) {
      const feeCount = Array.isArray(fees) ? fees.length : 0;
      const fileCount = Array.isArray(downloads) ? downloads.length : 0;
      return {
        title: title || "Sección",
        subtitle: `${feeCount} tarifas · ${fileCount} PDFs`,
      };
    },
  },
});
