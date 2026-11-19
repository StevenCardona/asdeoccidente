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
    { name: "reviews", title: "Reseñas" },
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
        "Tarjetas de servicios (trámites, escuela, equinoterapia, alquiler). Cada tarjeta debe tener su propia imagen.",
    }),
    defineField({
      name: "gallery",
      title: "Galería de fotos",
      type: "homeGallery",
      group: "gallery",
      description: "Carrusel de fotos de la sede, escuela y ferias.",
    }),
    defineField({
      name: "reviews",
      title: "Reseñas",
      type: "homeReviews",
      group: "reviews",
      description:
        "Sección de testimonios en Inicio (reemplaza Andares). Sube solo reseñas reales.",
    }),
    defineField({
      name: "videos",
      title: "Videos de Instagram / TikTok",
      type: "homeVideos",
      group: "videos",
      description:
        "Hasta 4 videos: enlace de Instagram/TikTok o archivo MP4. Se muestran en formato vertical.",
    }),
    defineField({
      name: "seo",
      title: "Google / buscadores",
      type: "seo",
      group: "seo",
      description:
        "Título y texto corto que aparecen en Google al buscar la página. No se ven dentro del sitio. Deben ser distintos del h1 del banner y no repetir el badge.",
      initialValue: {
        title: "Asociación equina del Occidente · Escuela y ferias",
        description:
          "Escuela de chalanería, ferias, registros y sede en el Valle del Cauca. Primera clase gratis.",
      },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Inicio" }),
  },
});
