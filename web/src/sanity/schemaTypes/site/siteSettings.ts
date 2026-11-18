import { defineField, defineType } from "sanity";

const DEFAULT_ADDRESS =
  "Transversal 5 # 1 - 60, Recta Cali-Palmira, Corregimiento La Dolores, Palmira – Valle del Cauca";

const DEFAULT_MAP =
  "https://www.google.com/maps?q=Transversal%205%20%23%201%20-%2060%2C%20Recta%20Cali-Palmira%2C%20Corregimiento%20La%20Dolores%2C%20Palmira%20%E2%80%93%20Valle%20del%20Cauca&z=16&output=embed";

const PUBLISH_HINT =
  "Importante: después de editar, pulsa Publicar (arriba a la derecha). Solo Guardar no actualiza la web pública.";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configuración general",
  type: "document",
  description: PUBLISH_HINT,
  groups: [
    { name: "identity", title: "Identidad", default: true },
    { name: "contact", title: "Contacto" },
    { name: "social", title: "Redes" },
    { name: "location", title: "Ubicación" },
    { name: "google", title: "Google" },
    { name: "whatsapp", title: "WhatsApp" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Nombre corto",
      type: "string",
      group: "identity",
      description: `${PUBLISH_HINT} Ej. Asdeoccidente — aparece en el menú y el pie de página.`,
      initialValue: "Asdeoccidente",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "legalName",
      title: "Razón social",
      type: "text",
      rows: 2,
      group: "identity",
      description:
        "Ej. Asociación de Criadores de Caballos de Paso y Fomento Equino del Occidente",
      initialValue:
        "Asociación de Criadores de Caballos de Paso y Fomento Equino del Occidente",
    }),
    defineField({
      name: "footerBlurb",
      title: "Texto del footer (después de la razón social)",
      type: "text",
      rows: 2,
      group: "identity",
      description:
        "Ej. Dedicada a la preservación, competencia y difusión del caballo criollo colombiano desde 1975.",
      initialValue:
        "Dedicada a la preservación, competencia y difusión del caballo criollo colombiano desde 1975.",
    }),
    defineField({
      name: "address",
      title: "Dirección",
      type: "text",
      rows: 2,
      group: "contact",
      description: `Ej. ${DEFAULT_ADDRESS}`,
      initialValue: DEFAULT_ADDRESS,
    }),
    defineField({
      name: "phonePbx",
      title: "PBX",
      type: "string",
      group: "contact",
      description: "Ej. (2) 666 96 22 / 23 / 24",
      initialValue: "(2) 666 96 22 / 23 / 24",
    }),
    defineField({
      name: "phoneMobile",
      title: "Celular",
      type: "string",
      group: "contact",
      description: "Ej. 3186669622 (solo números, sin espacios).",
      initialValue: "3186669622",
    }),
    defineField({
      name: "phoneMobileAlt",
      title: "Celular alterno",
      type: "string",
      group: "contact",
      description: "Ej. 3182698693 — segundo número que sale en el pie de página.",
      initialValue: "3182698693",
    }),
    defineField({
      name: "whatsappNumber",
      title: "Número de WhatsApp",
      type: "string",
      group: "contact",
      description:
        "Código de país + número, sin + ni espacios. Ej. 573186669622 (57 = Colombia).",
      initialValue: "573186669622",
    }),
    defineField({
      name: "email",
      title: "Correo",
      type: "string",
      group: "contact",
      description: "Ej. asdeoccidente@asdeoccidente.org.co",
      initialValue: "asdeoccidente@asdeoccidente.org.co",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram",
      type: "url",
      group: "social",
      description:
        "Pega el enlace completo del perfil. Ej. https://www.instagram.com/asdeoccidente.oficial/",
      initialValue: "https://www.instagram.com/asdeoccidente.oficial/",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube",
      type: "url",
      group: "social",
      description:
        "Pega el enlace del canal. Ej. https://www.youtube.com/@asdeoccidente.oficial/",
      initialValue: "https://www.youtube.com/@asdeoccidente.oficial/",
    }),
    defineField({
      name: "tiktokUrl",
      title: "TikTok",
      type: "url",
      group: "social",
      description:
        "Pega el enlace del perfil. Ej. https://www.tiktok.com/@asdeoccidente?lang=es",
      initialValue: "https://www.tiktok.com/@asdeoccidente?lang=es",
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Mapa (enlace para insertar)",
      type: "string",
      group: "location",
      description:
        "Cómo hacerlo: Google Maps → busca la sede → Compartir → Insertar un mapa → copia SOLO el enlace (src), no el código HTML. Debe empezar por https://www.google.com/maps",
      initialValue: DEFAULT_MAP,
    }),
    defineField({
      name: "directionsVideoSource",
      title: "Fuente del video “cómo llegar”",
      type: "string",
      group: "location",
      options: {
        list: [
          { title: "Enlace (YouTube u otra URL)", value: "url" },
          { title: "Archivo subido (MP4)", value: "file" },
        ],
        layout: "radio",
      },
      initialValue: "url",
      description:
        "Opcional. Elige si pegas un enlace o subes un video desde tu equipo.",
    }),
    defineField({
      name: "directionsVideoUrl",
      title: "Enlace del video “cómo llegar”",
      type: "string",
      group: "location",
      hidden: ({ parent }) => parent?.directionsVideoSource === "file",
      description:
        "Opcional. Pega el enlace de YouTube (ver o compartir) o el src del iframe. Déjalo vacío si aún no hay video.",
      initialValue: "",
    }),
    defineField({
      name: "directionsVideoFile",
      title: "Archivo del video “cómo llegar”",
      type: "file",
      group: "location",
      options: { accept: "video/*" },
      hidden: ({ parent }) => parent?.directionsVideoSource !== "file",
      description:
        "Opcional. Sube un MP4 liviano (recomendado menos de ~50 MB).",
    }),
    defineField({
      name: "directionsVideoPoster",
      title: "Portada del video “cómo llegar”",
      type: "imageWithAlt",
      group: "location",
      description:
        "Opcional. Imagen que se ve antes de reproducir (evita el negro vacío). Recomendada si subes un MP4.",
    }),
    defineField({
      name: "googleRating",
      title: "Calificación Google",
      type: "string",
      group: "google",
      description:
        "El número de estrellas (ej. 4.6). Se usa en el badge del hero y debe coincidir con Google.",
      initialValue: "4.6",
    }),
    defineField({
      name: "googleReviewCount",
      title: "Cantidad de reseñas",
      type: "string",
      group: "google",
      description:
        "Ej. 299. Debe ser el mismo número que pongas en Inicio → Cifras → “Personas que nos recomiendan”.",
      initialValue: "299",
    }),
    defineField({
      name: "googleReviewsUrl",
      title: "Enlace a las reseñas de Google",
      type: "url",
      group: "google",
      description:
        "Opcional. Enlace para abrir las reseñas al hacer clic en el badge. Si no lo tienes, déjalo vacío.",
    }),
    defineField({
      name: "whatsappMessageSchool",
      title: "Mensaje WhatsApp — Escuela",
      type: "text",
      rows: 2,
      group: "whatsapp",
      description:
        "Texto que se abre solo al tocar el botón de clase gratis. Ej. Hola, quiero información sobre la clase gratis de chalanería.",
      initialValue:
        "Hola, quiero información sobre la clase gratis de chalanería.",
    }),
    defineField({
      name: "whatsappMessageFairs",
      title: "Mensaje WhatsApp — Eventos",
      type: "text",
      rows: 2,
      group: "whatsapp",
      description:
        "Ej. Hola, quiero información sobre entradas y palcos para la Copa América Equina.",
      initialValue:
        "Hola, quiero información sobre entradas y palcos para la Copa América Equina.",
    }),
    defineField({
      name: "whatsappMessageVenue",
      title: "Mensaje WhatsApp — Alquiler sede",
      type: "text",
      rows: 2,
      group: "whatsapp",
      description: "Ej. Hola, quiero cotizar un evento en la sede.",
      initialValue: "Hola, quiero cotizar un evento en la sede.",
    }),
    defineField({
      name: "whatsappMessageGeneral",
      title: "Mensaje WhatsApp — General",
      type: "text",
      rows: 2,
      group: "whatsapp",
      description: "Ej. Hola, quiero hacer una consulta.",
      initialValue: "Hola, quiero hacer una consulta.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Configuración general" }),
  },
});
