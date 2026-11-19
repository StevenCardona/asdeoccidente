import { defineArrayMember, defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar. Solo Guardar no actualiza la web pública.";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Servicios",
  type: "document",
  description: `${PUBLISH_HINT} Trámites en /services: banner + secciones con ícono, título, descripción, tarifas y PDFs. Los PDFs se suben en cada botón de descarga.`,
  groups: [
    { name: "hero", title: "Banner", default: true },
    { name: "sections", title: "Trámites" },
    { name: "seo", title: "Google / buscadores" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Banner",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "badge",
          title: "Etiqueta",
          type: "string",
          initialValue: "Registros y trámites",
          description: "Corta y distinta del título.",
        }),
        defineField({
          name: "title",
          title: "Título (h1)",
          type: "string",
          initialValue: "Servicios para criadores y aficionados",
        }),
        defineField({
          name: "subtitle",
          title: "Subtítulo",
          type: "text",
          rows: 3,
          initialValue:
            "Consulta tarifas socio / no socio y descarga los formularios oficiales en PDF.",
        }),
        defineField({
          name: "image",
          title: "Imagen de fondo",
          type: "imageWithAlt",
          description: "Banner full-bleed. Solo lo publicado se ve; sin imagen, fondo sólido.",
        }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Secciones de trámite",
      type: "array",
      group: "sections",
      description:
        "Añade solo los trámites que quieras mostrar. Reordena arrastrando: ese orden es el del filtro y la página. Sube cada PDF en Downloads.",
      of: [defineArrayMember({ type: "serviceSection" })],
      initialValue: [],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      description:
        "Título y descripción para Google. No repitas la etiqueta del banner.",
      initialValue: {
        title: "Servicios y trámites equinos",
        description:
          "Registros, traspasos, homologaciones y formularios. Consulta tarifas y descarga PDFs oficiales.",
      },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Servicios" };
    },
  },
});
