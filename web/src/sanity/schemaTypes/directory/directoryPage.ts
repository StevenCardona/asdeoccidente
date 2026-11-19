import { defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar. Solo Guardar no actualiza la web pública.";

export const directoryPage = defineType({
  name: "directoryPage",
  title: "Directorio",
  type: "document",
  description: `${PUBLISH_HINT} Textos del banner y SEO de /directory. Los datos de la tabla viven en «Tipos (Excel)».`,
  groups: [
    { name: "hero", title: "Banner", default: true },
    { name: "empty", title: "Estados vacíos" },
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
          initialValue: "Directorio equino",
        }),
        defineField({
          name: "title",
          title: "Título (h1)",
          type: "string",
          initialValue: "Encuentra contactos del gremio",
          description: "Sin botón CTA en esta página.",
        }),
        defineField({
          name: "subtitle",
          title: "Subtítulo",
          type: "text",
          rows: 3,
          initialValue:
            "Escuelas, pesebreras, veterinarios y más. Elige un tipo, busca y descarga la tabla.",
        }),
        defineField({
          name: "image",
          title: "Imagen de fondo",
          type: "imageWithAlt",
        }),
      ],
    }),
    defineField({
      name: "emptyTitle",
      title: "Título sin datos",
      type: "string",
      group: "empty",
      initialValue: "Aún no hay contactos publicados",
    }),
    defineField({
      name: "emptySubtitle",
      title: "Texto sin datos",
      type: "text",
      rows: 3,
      group: "empty",
      initialValue:
        "Cuando la asociación cargue y publique un Excel por tipo, aquí aparecerá la tabla.",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      initialValue: {
        title: "Directorio equino",
        description:
          "Consulta escuelas, pesebreras, veterinarios y otros contactos relacionados con Asdeoccidente.",
      },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Directorio" }),
  },
});
