import { defineArrayMember, defineField, defineType } from "sanity";

export const homeServices = defineType({
  name: "homeServices",
  title: "Servicios",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo encima de las tarjetas.",
      initialValue: {
        eyebrow: "Qué ofrecemos",
        title: "Servicios para criadores y aficionados",
        subtitle:
          "Escuela y ferias ya tienen camino en el sitio. El resto llega por fases; aquí puedes ver el panorama completo.",
      },
    }),
    defineField({
      name: "items",
      title: "Tarjetas de servicio",
      type: "array",
      description:
        "Cada tarjeta: título, texto, botón (aunque diga Próximamente) y foto. Fotos sugeridas: lugar.webp, escuela1.jpg, escuela3.jpg, banner2.jpg",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Título",
              type: "string",
              description: "Ej. Escuela de chalanería",
            }),
            defineField({
              name: "description",
              title: "Descripción",
              type: "text",
              rows: 2,
              description: "2 o 3 frases cortas sobre el servicio.",
            }),
            defineField({
              name: "cta",
              title: "Texto del botón / enlace",
              type: "string",
              description: "Ej. Ver escuela  ·  o  Próximamente",
            }),
            defineField({
              name: "href",
              title: "Enlace interno (opcional)",
              type: "string",
              description:
                "Ruta del sitio cuando el botón debe llevar a otra página. Ej. /school. Déjalo vacío si aún no hay página (Próximamente).",
            }),
            defineField({
              name: "image",
              title: "Foto",
              type: "imageWithAlt",
              description: "Sube la imagen y escribe qué se ve en Texto alternativo.",
            }),
          ],
          preview: {
            select: { title: "title", media: "image" },
          },
        }),
      ],
      initialValue: [
        {
          title: "Trámites genealógicos",
          description:
            "Acompañamos el registro y los trámites de tu ejemplar con claridad y respaldo institucional.",
          cta: "Próximamente",
        },
        {
          title: "Escuela de chalanería",
          description:
            "Clases totalmente personalizadas. Caballo y equipo los pone la escuela; tu primera clase es gratis.",
          cta: "Ver escuela",
          href: "/school",
        },
        {
          title: "Equinoterapia",
          description:
            "Espacio terapéutico con el caballo, con lenguaje cuidadoso y acompañamiento profesional.",
          cta: "Próximamente",
        },
        {
          title: "Alquiler de espacios",
          description:
            "Sede campestre para ferias, eventos y encuentros. Cotización directa cuando la página esté lista.",
          cta: "Próximamente",
        },
      ],
    }),
  ],
});
