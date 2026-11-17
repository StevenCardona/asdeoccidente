import { defineArrayMember, defineField, defineType } from "sanity";

export const homeVideos = defineType({
  name: "homeVideos",
  title: "Videos sociales",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo encima de los videos.",
      initialValue: {
        eyebrow: "En movimiento",
        title: "Videos de la comunidad",
        subtitle:
          "Reels de escuela y feria — Instagram en vivo, sin salir del ritmo de la página.",
      },
    }),
    defineField({
      name: "items",
      title: "Videos (máximo 4)",
      type: "array",
      description:
        "Hasta 4 videos. Cada uno puede ser un enlace de Instagram/TikTok o un archivo subido (MP4).",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "source",
              title: "Fuente",
              type: "string",
              options: {
                list: [
                  { title: "Enlace (Instagram / TikTok)", value: "url" },
                  { title: "Archivo subido (MP4)", value: "file" },
                ],
                layout: "radio",
              },
              initialValue: "url",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "Enlace del video",
              type: "url",
              description:
                "Copia el enlace desde Instagram o TikTok (Compartir → Copiar enlace).",
              hidden: ({ parent }) => parent?.source === "file",
              validation: (rule) =>
                rule.custom((value, context) => {
                  const parent = context.parent as { source?: string } | undefined;
                  if (parent?.source === "file") return true;
                  if (!value?.trim()) {
                    return "Pega el enlace del video o cambia la fuente a Archivo.";
                  }
                  return true;
                }),
            }),
            defineField({
              name: "file",
              title: "Archivo de video",
              type: "file",
              options: { accept: "video/*" },
              description: "Sube un MP4 liviano (recomendado menos de ~50 MB).",
              hidden: ({ parent }) => parent?.source !== "file",
              validation: (rule) =>
                rule.custom((value, context) => {
                  const parent = context.parent as { source?: string } | undefined;
                  if (parent?.source !== "file") return true;
                  if (!value) {
                    return "Sube un archivo o cambia la fuente a Enlace.";
                  }
                  return true;
                }),
            }),
            defineField({
              name: "label",
              title: "Nombre para accesibilidad",
              type: "string",
              description: "Ej. Reel Asdeoccidente",
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "url",
              source: "source",
              media: "file",
            },
            prepare({ title, subtitle, source, media }) {
              return {
                title: title || (source === "file" ? "Video subido" : "Video"),
                subtitle:
                  source === "file"
                    ? "Archivo"
                    : subtitle || "Sin enlace",
                media,
              };
            },
          },
        }),
      ],
      validation: (rule) => rule.max(4),
    }),
  ],
});
