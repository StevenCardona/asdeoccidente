import { defineField, defineType } from "sanity";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar (arriba a la derecha). Solo Guardar no actualiza la web pública.";

export const home = defineType({
  name: "home",
  title: "Inicio",
  type: "document",
  description: PUBLISH_HINT,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "essence", title: "Esencia" },
    { name: "stats", title: "Cifras" },
    { name: "services", title: "Servicios" },
    { name: "gallery", title: "Galería" },
    { name: "gaits", title: "Andares" },
    { name: "videos", title: "Videos" },
    { name: "seo", title: "Google / buscadores" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero (banner principal)",
      type: "homeHero",
      group: "hero",
      description: `${PUBLISH_HINT} Es lo primero que se ve al abrir la página de Inicio: foto grande, título y botones.`,
    }),
    defineField({
      name: "essence",
      title: "Esencia",
      type: "homeEssence",
      group: "essence",
      description:
        "Los 4 puntos con icono debajo del hero (Caballo criollo, Método uno a uno, etc.).",
    }),
    defineField({
      name: "stats",
      title: "Cifras",
      type: "homeStats",
      group: "stats",
      description:
        "Números grandes (1975, +200, reseñas, socios). La cifra de reseñas debe coincidir con Configuración → Google.",
    }),
    defineField({
      name: "services",
      title: "Servicios",
      type: "homeServices",
      group: "services",
      description:
        "Tarjetas de servicios (trámites, escuela, equinoterapia, alquiler).",
    }),
    defineField({
      name: "gallery",
      title: "Galería de fotos",
      type: "homeGallery",
      group: "gallery",
      description: "Carrusel de fotos de la sede, escuela y ferias.",
    }),
    defineField({
      name: "gaits",
      title: "Andares",
      type: "homeGaits",
      group: "gaits",
      description:
        "Sección de los cuatro andares oficiales (Paso Fino, Trocha, etc.).",
    }),
    defineField({
      name: "videos",
      title: "Videos de Instagram / TikTok",
      type: "homeVideos",
      group: "videos",
      description: "Hasta 4 enlaces de reels o videos. Se muestran en formato vertical.",
    }),
    defineField({
      name: "seo",
      title: "Google / buscadores",
      type: "seo",
      group: "seo",
      description:
        "Título y texto corto que aparecen en Google al buscar la página. No se ven dentro del sitio.",
      initialValue: {
        title: "Aprende, compite y celebra con el caballo criollo colombiano.",
        description:
          "Escuela de chalanería y ferias del caballo criollo colombiano en el Valle del Cauca. Primera clase gratis.",
      },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Inicio" }),
  },
});
