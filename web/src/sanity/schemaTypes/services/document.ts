import { defineArrayMember, defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar. Solo Guardar no actualiza la web pública.";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Servicios",
  type: "document",
  description: `${PUBLISH_HINT} Trámites en /services: crea secciones con ícono, título, descripción, tarifas y PDFs. El orden del listado es el del filtro y la página.`,
  groups: [
    { name: "hero", title: "Encabezado", default: true },
    { name: "sections", title: "Trámites" },
    { name: "seo", title: "Google / buscadores" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Encabezado",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "intro",
          title: "Títulos",
          type: "sectionIntro",
          initialValue: {
            eyebrow: "Servicios",
            title: "Servicios y trámites",
            subtitle:
              "Consulta tarifas y descarga los formularios que necesitas para registros y trámites.",
          },
        }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Secciones de trámite",
      type: "array",
      group: "sections",
      description:
        "Añade solo los trámites que quieras mostrar. Reordena arrastrando: ese orden es el del filtro y la página.",
      of: [defineArrayMember({ type: "serviceSection" })],
      initialValue: [],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      initialValue: {
        title: "Servicios y trámites",
        description:
          "Registros, traspasos, homologaciones y formularios. Consulta tarifas y descarga PDFs.",
      },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Servicios" };
    },
  },
});
