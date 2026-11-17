import { defineArrayMember, defineField, defineType } from "sanity";

export const schoolGallery = defineType({
  name: "schoolGallery",
  title: "Galería",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo del mosaico.",
      initialValue: {
        eyebrow: "Comunidad y emoción",
        title: "La vida en nuestra escuela",
        subtitle:
          "Más de 200 alumnos han pasado por nuestras pistas: desde los primeros pasos hasta la competencia.",
      },
    }),
    defineField({
      name: "tiles",
      title: "Fotos del mosaico",
      type: "array",
      description:
        "Cada casilla: badge, título, subtítulo, tamaño y foto. Tamaño: elige Grande / Alto / Ancho / Pequeño.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "badge",
              title: "Etiqueta",
              type: "string",
              description: "Ej. Prácticas de pista",
            }),
            defineField({
              name: "title",
              title: "Título",
              type: "string",
              description: "Ej. Biomecánica y precisión",
            }),
            defineField({
              name: "subtitle",
              title: "Subtítulo",
              type: "string",
              description: "Ej. Giros reglamentarios con método.",
            }),
            defineField({
              name: "image",
              title: "Foto",
              type: "imageWithAlt",
              description: "Sube la foto y escribe qué se ve.",
            }),
            defineField({
              name: "span",
              title: "Tamaño en el mosaico",
              type: "string",
              description: "Elige cómo se ve la foto en la cuadrícula.",
              options: {
                list: [
                  { title: "Grande", value: "large" },
                  { title: "Alto", value: "tall" },
                  { title: "Ancho", value: "wide" },
                  { title: "Pequeño", value: "small" },
                ],
              },
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "badge", media: "image" },
          },
        }),
      ],
      initialValue: [
        {
          badge: "Prácticas de pista",
          title: "Biomecánica y precisión",
          subtitle: "Giros reglamentarios con método.",
          span: "large",
        },
        {
          badge: "Cuidado y vínculo",
          title: "Cepillado y pesebrera",
          subtitle: "Conexión antes de montar.",
          span: "tall",
        },
        {
          badge: "Semilleros",
          title: "Clases y trabajo en equipo",
          subtitle: "Comunidad que crece junta.",
          span: "tall",
        },
        {
          badge: "Competencia",
          title: "Festivales Fedequinas",
          subtitle: "Pista y presentación.",
          span: "small",
        },
        {
          badge: "Reglamento",
          title: "Tabla sonora",
          subtitle: "Precisión y oído.",
          span: "small",
        },
        {
          badge: "Adultos",
          title: "Afición y perfeccionamiento",
          subtitle: "Montar a tu ritmo.",
          span: "small",
        },
      ],
    }),
  ],
});
