import { defineArrayMember, defineField, defineType } from "sanity";

export const homeGallery = defineType({
  name: "homeGallery",
  title: "Galería",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo de la galería.",
      initialValue: {
        eyebrow: "Galería",
        title: "Así se vive Asdeoccidente",
        subtitle: "Escuela, ferias y sede: un vistazo a lo que pasa en el Valle.",
      },
    }),
    defineField({
      name: "photos",
      title: "Fotos",
      type: "array",
      description:
        "Añade varias fotos. Sugeridas: banner2.jpg, banner3.webp, escuela2.jpg, escuela4.jpg, escuela5.jpg, lugar.webp. Cada una necesita Texto alternativo.",
      of: [
        defineArrayMember({
          type: "imageWithAlt",
        }),
      ],
    }),
  ],
});
