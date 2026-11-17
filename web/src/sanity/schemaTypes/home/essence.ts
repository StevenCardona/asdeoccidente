import { defineArrayMember, defineField, defineType } from "sanity";

export const homeEssence = defineType({
  name: "homeEssence",
  title: "Esencia",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Intro de la sección",
      type: "sectionIntro",
      description:
        "Etiqueta, título y subtítulo de Esencia. Solo se muestra lo que escribas aquí.",
    }),
    defineField({
      name: "items",
      title: "Puntos de esencia",
      type: "array",
      description:
        "Se recomiendan 4 puntos. Icono: escribe exactamente el nombre (Trophy, Users, HeartHandshake, Landmark).",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Título",
              type: "string",
              description: "Ej. Caballo criollo",
            }),
            defineField({
              name: "text",
              title: "Texto corto",
              type: "text",
              rows: 2,
              description:
                "Ej. El arte de montar el paso colombiano, con respeto por el animal y la tradición.",
            }),
            defineField({
              name: "icon",
              title: "Icono (nombre Lucide)",
              type: "string",
              description:
                "Escribe exactamente uno de estos: Trophy · Users · HeartHandshake · Landmark",
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        }),
      ],
    }),
    defineField({
      name: "photos",
      title: "Fotos del mosaico",
      type: "array",
      description:
        "2 a 4 fotos que se muestran al lado de los puntos. Cada una necesita Texto alternativo. Si no subes ninguna, solo se ven los textos.",
      of: [
        defineArrayMember({
          type: "imageWithAlt",
        }),
      ],
    }),
  ],
});
