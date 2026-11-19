import { defineField, defineType } from "sanity";

export const homeHero = defineType({
  name: "homeHero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título grande",
      type: "string",
      description:
        "Ej. Aprende, compite y celebra con el caballo criollo colombiano.",
      initialValue:
        "Aprende, compite y celebra con el caballo criollo colombiano.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "text",
      rows: 3,
      description:
        "Ej. Clases de chalanería personalizadas para niños y adultos, y ferias en el Valle del Cauca. Te acompañamos desde el primer paso.",
      initialValue:
        "Clases de chalanería personalizadas para niños y adultos, y ferias en el Valle del Cauca. Te acompañamos desde el primer paso.",
    }),
    defineField({
      name: "image",
      title: "Foto de fondo",
      type: "imageWithAlt",
      description:
        "Foto grande del banner (WebP/JPG liviano, ~1600px de ancho). Evita PNG de varios MB. Alt ej. Jinetes del caballo criollo colombiano en la sede de Asdeoccidente",
    }),
    defineField({
      name: "culturalLabel",
      title: "Etiqueta cultural (opcional)",
      type: "string",
      description: "Texto corto opcional. Ej. Valle del Cauca",
      initialValue: "Valle del Cauca",
    }),
    defineField({
      name: "primaryCta",
      title: "Botón principal",
      type: "cta",
      description:
        "Normalmente abre WhatsApp para la clase gratis. Texto ej. Quiero mi clase gratis · Tema WhatsApp: Escuela",
      initialValue: {
        label: "Quiero mi clase gratis",
        whatsappTopic: "school",
      },
    }),
    defineField({
      name: "secondaryCta",
      title: "Botón secundario",
      type: "cta",
      description:
        "Obligatorio para el listado de eventos: texto «Ver el próximo evento» (o similar) y enlace exacto /events — nunca /fairs.",
      initialValue: {
        label: "Ver el próximo evento",
        href: "/events",
      },
    }),
  ],
});
