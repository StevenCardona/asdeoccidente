import { defineArrayMember, defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar. Solo Guardar no actualiza la web pública.";

export const membershipPage = defineType({
  name: "membershipPage",
  title: "Socios",
  type: "document",
  description: `${PUBLISH_HINT} Página /membership. Orden en el sitio: Hero → Quiénes somos → Misión/Visión (solo bloques) → Ser socio (+ galería) → Ser afiliado → Costos → Requisitos (+ PDF) → Reseñas → SEO. Hasta que publiques al menos un beneficio de socio con título, la web usa el contenido seed del código.`,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "about", title: "Quiénes somos" },
    { name: "mission", title: "Misión y visión" },
    { name: "member", title: "Ser socio" },
    { name: "affiliate", title: "Ser afiliado" },
    { name: "costs", title: "Costos" },
    { name: "requirements", title: "Requisitos" },
    { name: "reviews", title: "Reseñas" },
    { name: "seo", title: "Google / buscadores" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      description:
        "Banner full-bleed. El logo Fedequinas se muestra solo en la web (no hay campo badge). El botón WhatsApp usa el mensaje «Socios» de Configuración general.",
      fields: [
        defineField({
          name: "title",
          title: "Título",
          type: "string",
          initialValue: "Quiero ser socio",
        }),
        defineField({
          name: "subtitle",
          title: "Subtítulo",
          type: "text",
          rows: 2,
          initialValue:
            "Únete a la casa del caballo criollo colombiano. Beneficios, voz en la asociación y comunidad.",
        }),
        defineField({
          name: "primaryCtaLabel",
          title: "Texto del botón WhatsApp",
          type: "string",
          description:
            "Abre WhatsApp con el mensaje «Socios» de Configuración general.",
          initialValue: "Quiero ser socio",
        }),
        defineField({
          name: "image",
          title: "Imagen de fondo",
          type: "imageWithAlt",
          description: "Preferí JPG/WebP liviano. Completa el texto alternativo.",
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "Quiénes somos",
      type: "object",
      group: "about",
      description:
        "Bloque tipo esencia: texto a la izquierda y mosaico de fotos a la derecha (hasta 4).",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Etiqueta",
          type: "string",
          initialValue: "Quiénes somos",
        }),
        defineField({
          name: "title",
          title: "Título",
          type: "string",
          initialValue:
            "Fundada en 1975, más de 45 años trabajando en pro del caballo criollo colombiano.",
        }),
        defineField({
          name: "paragraphs",
          title: "Párrafos",
          type: "array",
          of: [defineArrayMember({ type: "text" })],
          description: "Dos o tres párrafos cortos sobre la asociación.",
        }),
        defineField({
          name: "photos",
          title: "Fotos",
          type: "array",
          of: [defineArrayMember({ type: "imageWithAlt" })],
          description: "Mosaico a la derecha. Ideal 4 fotos con alt.",
        }),
      ],
    }),
    defineField({
      name: "missionVision",
      title: "Misión y visión",
      type: "object",
      group: "mission",
      description:
        "Sin títulos de sección en la web: solo bloques Visión/Misión (imagen + título + texto). Desktop: dos columnas más compactas; móvil: carousel.",
      fields: [
        defineField({
          name: "pillars",
          title: "Bloques",
          type: "array",
          of: [defineArrayMember({ type: "membershipPillar" })],
          description:
            "Orden sugerido: 1) Visión 2) Misión. Cada bloque: imagen, título y texto.",
        }),
      ],
    }),
    defineField({
      name: "memberBenefits",
      title: "Ser socio",
      type: "object",
      group: "member",
      description:
        "Cards compactas (número junto al título) + galería. Publica al menos un beneficio con título para que Sanity reemplace el seed de la página completa.",
      fields: [
        defineField({
          name: "intro",
          title: "Títulos",
          type: "sectionIntro",
          initialValue: {
            eyebrow: "Ser socio",
            title: "Derechos y beneficios de ser socio",
            subtitle:
              "Voz en la asociación, uso de la sede y acceso preferente a servicios.",
          },
        }),
        defineField({
          name: "items",
          title: "Beneficios",
          type: "array",
          of: [defineArrayMember({ type: "membershipBenefit" })],
          description:
            "Cada ítem es una card (número automático en la web). El orden del array = orden en la página.",
        }),
        defineField({
          name: "gallery",
          title: "Galería",
          type: "object",
          description: "Carousel de fotos debajo de las cards de socio.",
          fields: [
            defineField({
              name: "intro",
              title: "Títulos",
              type: "sectionIntro",
              initialValue: {
                eyebrow: "Comunidad",
                title: "Momentos de nuestra asociación",
                subtitle: "Sede, eventos y vida equina en Asdeoccidente.",
              },
            }),
            defineField({
              name: "photos",
              title: "Fotos",
              type: "array",
              of: [defineArrayMember({ type: "imageWithAlt" })],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "affiliateBenefits",
      title: "Ser afiliado",
      type: "object",
      group: "affiliate",
      description: "Segunda sección de cards (beneficios de afiliado).",
      fields: [
        defineField({
          name: "intro",
          title: "Títulos",
          type: "sectionIntro",
          initialValue: {
            eyebrow: "Ser afiliado",
            title: "Beneficios de ser afiliado",
            subtitle:
              "Registros, eventos y servicios para acompañar tu actividad equina.",
          },
        }),
        defineField({
          name: "items",
          title: "Beneficios",
          type: "array",
          of: [defineArrayMember({ type: "membershipBenefit" })],
          description: "Orden del array = orden en la página.",
        }),
      ],
    }),
    defineField({
      name: "costs",
      title: "Costos",
      type: "object",
      group: "costs",
      description:
        "Tabla en desktop y cards en móvil. Cuota y Valor son texto libre (puedes poner $0, $1.500.000 o Traspasable).",
      fields: [
        defineField({
          name: "intro",
          title: "Títulos",
          type: "sectionIntro",
          initialValue: {
            eyebrow: "Costos",
            title: "Cuotas y valores",
            subtitle: "Referencia de afiliación.",
          },
        }),
        defineField({
          name: "rows",
          title: "Filas",
          type: "array",
          of: [defineArrayMember({ type: "membershipCostRow" })],
          description:
            "Columnas en la web: Tipo · Cuota de sostenimiento · Valor.",
        }),
      ],
    }),
    defineField({
      name: "requirements",
      title: "Requisitos",
      type: "object",
      group: "requirements",
      description:
        "Lista de requisitos + botón de descarga del formato. Sin PDF subido, el botón aparece deshabilitado.",
      fields: [
        defineField({
          name: "intro",
          title: "Títulos",
          type: "sectionIntro",
          initialValue: {
            eyebrow: "Requisitos",
            title: "Cómo unirte",
            subtitle:
              "Prepara estos documentos y escríbenos para iniciar tu ingreso.",
          },
        }),
        defineField({
          name: "items",
          title: "Lista",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
          description: "Un requisito por línea. Orden = orden en la página.",
        }),
        defineField({
          name: "formatLabel",
          title: "Texto del botón de formato",
          type: "string",
          initialValue: "Descargar formato",
        }),
        defineField({
          name: "formatFile",
          title: "Archivo PDF del formato",
          type: "file",
          options: { accept: "application/pdf" },
          description:
            "Sube el PDF de afiliación aquí. Después de Publicar, el botón «Descargar formato» se activa en /membership y abre el archivo en una pestaña nueva. Si lo dejas vacío, el botón queda deshabilitado.",
        }),
      ],
    }),
    defineField({
      name: "reviewsIntro",
      title: "Reseñas — títulos",
      type: "sectionIntro",
      group: "reviews",
      initialValue: {
        eyebrow: "Confianza",
        title: "Lo que dicen nuestros socios",
        subtitle: "Experiencias de quienes ya forman parte de Asdeoccidente.",
      },
    }),
    defineField({
      name: "reviews",
      title: "Reseñas",
      type: "array",
      group: "reviews",
      of: [defineArrayMember({ type: "membershipReview" })],
      description: "Al final de la página, después de Cómo unirte. Vacío = no se muestra.",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      description: "Título y descripción para Google / pestaña del navegador.",
      initialValue: {
        title: "Socios",
        description:
          "Quiénes somos, beneficios de socio y afiliado, costos y requisitos para unirte a Asdeoccidente.",
      },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Socios" };
    },
  },
});
