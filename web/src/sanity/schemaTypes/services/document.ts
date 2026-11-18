import { defineArrayMember, defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar. Solo Guardar no actualiza la web pública.";

const sectionShells = [
  {
    title: "Registro de ejemplares",
    slug: { current: "registro-de-ejemplares" },
    description:
      "Registra a tu ejemplar con claridad y respaldo institucional.",
    icon: "FileText",
    feeRows: [],
    downloads: [],
  },
  {
    title: "Traspaso de ejemplares",
    slug: { current: "traspaso-de-ejemplares" },
    description: "Gestiona traspasos entre socios y criaderos.",
    icon: "ArrowLeftRight",
    feeRows: [],
    downloads: [],
  },
  {
    title: "Homologaciones",
    slug: { current: "homologaciones" },
    description:
      "Homologa títulos y categorías según el trámite que necesites.",
    icon: "ClipboardCheck",
    feeRows: [],
    downloads: [],
  },
  {
    title: "Duplicados",
    slug: { current: "duplicados" },
    description: "Solicita duplicados de documentos o carnets.",
    icon: "Copy",
    feeRows: [],
    downloads: [],
  },
  {
    title: "Formatos",
    slug: { current: "formatos" },
    description:
      "Descarga formatos de afiliación, salud y otros formularios.",
    icon: "FolderOpen",
    feeRows: [],
    downloads: [],
  },
];

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Página Servicios",
  type: "document",
  description: `${PUBLISH_HINT} Trámites y registros en /services: secciones, tarifas socio/público y PDFs.`,
  groups: [
    { name: "hero", title: "Encabezado", default: true },
    { name: "sections", title: "Trámites" },
    { name: "help", title: "Ayuda" },
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
        defineField({
          name: "image",
          title: "Imagen de fondo (opcional)",
          type: "imageWithAlt",
          description: "Si no subes imagen, el hero usa el color institucional.",
        }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Secciones de trámite",
      type: "array",
      group: "sections",
      description:
        "Cada bloque: título, tarifas (socio / público) y botones PDF. Reordena arrastrando.",
      of: [defineArrayMember({ type: "serviceSection" })],
      initialValue: sectionShells,
    }),
    defineField({
      name: "help",
      title: "Bloque de ayuda",
      type: "object",
      group: "help",
      fields: [
        defineField({
          name: "title",
          title: "Título",
          type: "string",
          initialValue: "¿Necesitas ayuda con un trámite?",
        }),
        defineField({
          name: "body",
          title: "Texto",
          type: "text",
          rows: 3,
          initialValue:
            "Escríbenos por WhatsApp. Te orientamos sobre registros, traspasos y formularios.",
        }),
        defineField({
          name: "ctaLabel",
          title: "Texto del botón WhatsApp",
          type: "string",
          initialValue: "Consultar por WhatsApp",
        }),
      ],
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
      return { title: "Página Servicios" };
    },
  },
});
