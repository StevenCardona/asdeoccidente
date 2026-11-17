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
        "Pega el enlace completo del reel o video de Instagram/TikTok. Máximo 4. Ej. https://www.instagram.com/asdeoccidente.oficial/reel/…",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "url",
              title: "Enlace del video",
              type: "url",
              description:
                "Copia el enlace desde Instagram o TikTok (Compartir → Copiar enlace).",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "Nombre para accesibilidad",
              type: "string",
              description: "Ej. Reel Asdeoccidente",
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "url" },
          },
        }),
      ],
      validation: (rule) => rule.max(4),
    }),
  ],
});
