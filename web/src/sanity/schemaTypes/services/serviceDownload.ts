import { defineField, defineType } from "sanity";

export const serviceDownload = defineType({
  name: "serviceDownload",
  title: "Descarga PDF",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Texto del botón",
      type: "string",
      description: "Ej. Inscripción de criadero · Afiliación de socio",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "file",
      title: "Archivo PDF",
      type: "file",
      options: { accept: "application/pdf" },
      description:
        "Opcional por ahora. Cuando lo subas, el botón abre el PDF en una pestaña nueva.",
    }),
  ],
  preview: {
    select: { title: "label", filename: "file.asset.originalFilename" },
    prepare({ title, filename }) {
      return {
        title: title || "Descarga",
        subtitle: filename || "Sin archivo",
      };
    },
  },
});
