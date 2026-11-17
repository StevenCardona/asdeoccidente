import { defineArrayMember, defineField, defineType } from "sanity";

export const schoolHorses = defineType({
  name: "schoolHorses",
  title: "Caballos",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo de caballos maestros.",
      initialValue: {
        eyebrow: "4 andares",
        title: "Caballos maestros",
        subtitle: "Ejemplares que enseñan ritmo y suavidad.",
      },
    }),
    defineField({
      name: "items",
      title: "Lista de caballos",
      type: "array",
      description:
        "Nombre, andar y foto. Fotos sugeridas: escuela1.jpg … escuela4.jpg",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Nombre",
              type: "string",
              description: "Ej. Consentido",
            }),
            defineField({
              name: "gait",
              title: "Andar",
              type: "string",
              description: "Ej. Paso Fino · Trocha · Trocha y Galope",
            }),
            defineField({
              name: "blurb",
              title: "Descripción corta",
              type: "text",
              rows: 2,
              description: "Una o dos frases sobre el ejemplar.",
            }),
            defineField({
              name: "image",
              title: "Foto",
              type: "imageWithAlt",
              description: "Foto del caballo. Completa el texto alternativo.",
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "gait", media: "image" },
          },
        }),
      ],
      initialValue: [
        {
          name: "Consentido",
          gait: "Paso Fino",
          blurb: "Suave y paciente; ideal para primeros pasos y asiento.",
        },
        {
          name: "Princesa",
          gait: "Trocha",
          blurb: "Brío controlado para trabajar ritmo y transición.",
        },
        {
          name: "Relámpago",
          gait: "Trocha y Galope",
          blurb: "Energía clara para alumnos que ya dominan lo básico.",
        },
        {
          name: "Estrella",
          gait: "Trote y Galope",
          blurb: "Presencia de pista y equilibrio en modalidades clásicas.",
        },
      ],
    }),
  ],
});
