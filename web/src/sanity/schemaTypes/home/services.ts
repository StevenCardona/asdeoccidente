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
          "Escuela, eventos y más caminos en el sitio. Explora lo que puedes hacer con Asdeoccidente.",
      },
    }),
    defineField({
      name: "items",
      title: "Tarjetas de servicio",
      type: "array",
      description:
        "Cada tarjeta: título, texto, botón y foto. Enlaces a /school, /services, /venue, /membership, /equinotherapy, /directory.",
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
              description: "Ej. Ver escuela  ·  Ver más",
            }),
            defineField({
              name: "href",
              title: "Enlace interno (opcional)",
              type: "string",
              description:
                "Ruta del sitio. Ej. /school, /venue, /directory.",
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
          title: "Escuela de chalanería",
          description:
            "Clases totalmente personalizadas. Caballo y equipo los pone la escuela; tu primera clase es gratis.",
          cta: "Ver escuela",
          href: "/school",
        },
        {
          title: "Servicios",
          description:
            "Registros, traspasos, homologaciones y formularios. Consulta tarifas y descarga PDFs.",
          cta: "Ver trámites",
          href: "/services",
        },
        {
          title: "Equinoterapia",
          description:
            "Espacio terapéutico con el caballo, con lenguaje cuidadoso y acompañamiento profesional.",
          cta: "Ver equinoterapia",
          href: "/equinotherapy",
        },
        {
          title: "Alquiler de la sede",
          description:
            "Sede campestre para ferias, eventos y encuentros. Cotiza por WhatsApp.",
          cta: "Ver alquiler",
          href: "/venue",
        },
        {
          title: "Socios",
          description:
            "Descuentos y voz en la asociación. Únete como socio.",
          cta: "Quiero ser socio",
          href: "/membership",
        },
        {
          title: "Directorio equino",
          description:
            "Escuelas, pesebreras, veterinarios, montadores y más contactos relacionados.",
          cta: "Ver directorio",
          href: "/directory",
        },
      ],
    }),
  ],
});
