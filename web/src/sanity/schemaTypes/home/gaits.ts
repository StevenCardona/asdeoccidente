import { defineArrayMember, defineField, defineType } from "sanity";

export const homeGaits = defineType({
  name: "homeGaits",
  title: "Andares",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo de los andares.",
      initialValue: {
        eyebrow: "Patrimonio vivo",
        title: "Los cuatro andares oficiales",
        subtitle:
          "Elige una modalidad para conocer su cadencia y carácter en pista.",
      },
    }),
    defineField({
      name: "items",
      title: "Modalidades",
      type: "array",
      description:
        "Los 4 andares. El Id no se cambia (paso-fino, trocha…). Fotos sugeridas: escuela1.jpg a escuela4.jpg.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Id (no lo cambies)",
              type: "string",
              description:
                "Código interno. Ej. paso-fino · trocha · trocha-galope · trote-galope",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "tab",
              title: "Nombre en la pestaña",
              type: "string",
              description: "Ej. Paso Fino",
            }),
            defineField({
              name: "tag",
              title: "Etiqueta corta",
              type: "string",
              description: "Ej. Cadencia isócrona en 4 tiempos",
            }),
            defineField({
              name: "sound",
              title: "Cadencia / sonido",
              type: "string",
              description: "Ej. Ta-ca-ta-ca-ta-ca-ta-ca",
            }),
            defineField({
              name: "title",
              title: "Título",
              type: "string",
              description: "Ej. Paso Fino Colombiano",
            }),
            defineField({
              name: "text",
              title: "Descripción",
              type: "text",
              rows: 3,
              description: "2 o 3 frases sobre el andar.",
            }),
            defineField({
              name: "image",
              title: "Foto",
              type: "imageWithAlt",
              description: "Foto del andar. Completa el texto alternativo.",
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "tab", media: "image" },
          },
        }),
      ],
      initialValue: [
        {
          id: "paso-fino",
          tab: "Paso Fino",
          tag: "Cadencia isócrona en 4 tiempos",
          sound: "Ta-ca-ta-ca-ta-ca-ta-ca",
          title: "Paso Fino Colombiano",
          text: "El andar más suave y elegante: cuatro tiempos iguales, ritmo lateral y presencia de pista.",
        },
        {
          id: "trocha",
          tab: "Trocha",
          tag: "Ritmo diagonal característico",
          sound: "Tac-tac-tac-tac",
          title: "Trocha",
          text: "Modalidad de brío y compás propio del criollo. Fuerza controlada y cadencia clara.",
        },
        {
          id: "trocha-galope",
          tab: "Trocha y Galope",
          tag: "Dos aires en una misma prueba",
          sound: "Trocha · Galope",
          title: "Trocha y Galope",
          text: "El jinete muestra transición y dominio entre la trocha y el galope reglamentario.",
        },
        {
          id: "trote-galope",
          tab: "Trote y Galope",
          tag: "Clásico de pista",
          sound: "Trote · Galope",
          title: "Trote y Galope",
          text: "Combinación de trote y galope que exige equilibrio, conducción y presentación.",
        },
      ],
    }),
  ],
});
