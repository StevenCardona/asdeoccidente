import { defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar (arriba a la derecha). Solo Guardar no actualiza la web pública.";

export const school = defineType({
  name: "school",
  title: "Escuela",
  type: "document",
  description: PUBLISH_HINT,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "method", title: "Método" },
    { name: "horses", title: "Caballos" },
    { name: "gallery", title: "Galería" },
    { name: "staff", title: "Profesores" },
    { name: "fees", title: "Tarifas" },
    { name: "faq", title: "Preguntas" },
    { name: "seo", title: "Google / buscadores" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero (banner de Escuela)",
      type: "schoolHero",
      group: "hero",
      description: `${PUBLISH_HINT} Banner de la página Escuela: foto, título y botón de WhatsApp para la clase gratis.`,
    }),
    defineField({
      name: "method",
      title: "Cómo es la clase",
      type: "schoolMethod",
      group: "method",
      description:
        "Explica el método 1 a 1: pasos de la clase y ejes (equilibrio, conducción, etc.).",
    }),
    defineField({
      name: "horses",
      title: "Caballos maestros",
      type: "schoolHorses",
      group: "horses",
      description: "Lista de caballos de la escuela con su andar y una foto.",
    }),
    defineField({
      name: "gallery",
      title: "Galería de la escuela",
      type: "schoolGallery",
      group: "gallery",
      description: "Mosaico de fotos de la vida en la escuela.",
    }),
    defineField({
      name: "staff",
      title: "Profesores",
      type: "schoolStaff",
      group: "staff",
      description: "Director e instructores: nombre, rol, bio y foto.",
    }),
    defineField({
      name: "fees",
      title: "Tarifas",
      type: "schoolFees",
      group: "fees",
      description:
        "Planes de clases y precios (socio, no socio, hijo de montador). Los números van en pesos sin puntos ni comas (ej. 80000).",
    }),
    defineField({
      name: "faq",
      title: "Preguntas frecuentes",
      type: "schoolFaq",
      group: "faq",
      description: "Preguntas y respuestas que se abren al hacer clic.",
    }),
    defineField({
      name: "seo",
      title: "Google / buscadores",
      type: "seo",
      group: "seo",
      description:
        "Título y texto corto para Google. No se ven dentro de la página de Escuela.",
      initialValue: {
        title: "Escuela de chalanería | Clase gratis",
        description:
          "Clases de chalanería personalizadas para niños y adultos. Caballo y equipo incluidos. Tu primera clase es gratis en Asdeoccidente.",
      },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Escuela" }),
  },
});
