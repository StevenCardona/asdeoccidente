import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configuración general",
  type: "document",
  fields: [
    defineField({
      name: "venueName",
      title: "Nombre de la sede",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Dirección",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "phonePbx",
      title: "PBX",
      type: "string",
    }),
    defineField({
      name: "phoneMobile",
      title: "Celular",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Correo",
      type: "string",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp (E.164 sin +)",
      type: "string",
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "URL embed Google Maps",
      type: "url",
    }),
    defineField({
      name: "directionsVideoUrl",
      title: "URL video cómo llegar",
      type: "url",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram",
      type: "url",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube",
      type: "url",
    }),
    defineField({
      name: "tiktokUrl",
      title: "TikTok",
      type: "url",
    }),
  ],
});
