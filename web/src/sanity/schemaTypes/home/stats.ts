import { defineArrayMember, defineField, defineType } from "sanity";

export const homeStats = defineType({
  name: "homeStats",
  title: "Cifras",
  type: "object",
  fields: [
    defineField({
      name: "show",
      title: "¿Mostrar esta sección?",
      type: "boolean",
      description: "Si lo apagas, las cifras no aparecen en la página.",
      initialValue: true,
    }),
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo encima de las cifras.",
      hidden: ({ parent }) => parent?.show === false,
      initialValue: {
        eyebrow: "Trayectoria",
        title: "Asdeoccidente en el tiempo",
        subtitle: "",
      },
    }),
    defineField({
      name: "items",
      title: "Lista de cifras",
      type: "array",
      description:
        "Normalmente 4 cifras. El ítem de reseñas puede sincronizarse con Configuración → Google → Cantidad de reseñas si el texto menciona reseñas.",
      hidden: ({ parent }) => parent?.show === false,
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Número",
              type: "string",
              description: "Solo el número. Ej. 1975 · 200 · 299 · 180",
            }),
            defineField({
              name: "prefix",
              title: "Prefijo (opcional)",
              type: "string",
              description: "Ej. +  (para mostrar +200). Déjalo vacío si no aplica.",
            }),
            defineField({
              name: "label",
              title: "Texto debajo del número",
              type: "string",
              description: "Ej. Alumnos de chalanería",
            }),
            defineField({
              name: "icon",
              title: "Icono",
              type: "string",
              description:
                "Elige uno: CalendarDays (año) · GraduationCap (alumnos) · Google (reseñas) · Users (socios).",
              options: {
                list: [
                  { title: "Calendario (CalendarDays)", value: "CalendarDays" },
                  { title: "Birrete (GraduationCap)", value: "GraduationCap" },
                  { title: "Google (reseñas)", value: "Google" },
                  { title: "Usuarios (Users)", value: "Users" },
                ],
                layout: "dropdown",
              },
            }),
          ],
          preview: {
            select: { title: "value", subtitle: "label", icon: "icon" },
            prepare: ({ title, subtitle, icon }) => ({
              title: title || "Cifra",
              subtitle: [icon, subtitle].filter(Boolean).join(" · "),
            }),
          },
        }),
      ],
      initialValue: [
        {
          value: "1975",
          prefix: "",
          label: "Trabajando por ustedes desde",
          icon: "CalendarDays",
        },
        {
          value: "200",
          prefix: "+",
          label: "Alumnos de chalanería",
          icon: "GraduationCap",
        },
        {
          value: "299",
          prefix: "",
          label: "Personas que nos recomiendan",
          icon: "Google",
        },
        {
          value: "180",
          prefix: "+",
          label: "Socios de la asociación",
          icon: "Users",
        },
      ],
    }),
  ],
});
