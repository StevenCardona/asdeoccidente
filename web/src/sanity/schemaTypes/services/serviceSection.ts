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
      description: "2 o 3 frases. Voz: Registra a tu ejemplar…",
    }),
    defineField({
      name: "icon",
      title: "Icono (Lucide)",
      type: "string",
      description:
        "Escribe exactamente uno: FileText · ArrowLeftRight · ClipboardCheck · Copy · HeartHandshake · CalendarDays · Stamp · FolderOpen",
    }),
    defineField({
      name: "feeRows",
      title: "Tarifas",
      type: "array",
      description:
        "Filas Concepto · Socio · Público general. Puedes dejar precios vacíos hasta confirmar.",
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
