import { defineArrayMember, defineField, defineType } from "sanity";

export const schoolFees = defineType({
  name: "schoolFees",
  title: "Tarifas",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo de tarifas.",
      initialValue: {
        eyebrow: "Inversión y membresía",
        title: "Tarifas transparentes y flexibles",
        subtitle:
          "Elige el pack según cuántas clases personalizadas al mes quieres.",
      },
    }),
    defineField({
      name: "plans",
      title: "Planes / paquetes",
      type: "array",
      description:
        "Los precios van en pesos SIN puntos ni comas (ej. 80000 = $80.000). Marca “Destacado” solo en el plan que quieras resaltar.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Id (no lo cambies si ya existe)",
              type: "string",
              description: "Código interno. Ej. personal-1 · personal-4",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "classCount",
              title: "Cantidad de clases",
              type: "number",
              description: "Ej. 1 · 2 · 3 · 4",
            }),
            defineField({
              name: "packageLabel",
              title: "Etiqueta del paquete",
              type: "string",
              description: "Ej. Paquete ocasional · Plan mensual",
            }),
            defineField({
              name: "title",
              title: "Título",
              type: "string",
              description: "Ej. 4 clases personalizadas",
            }),
            defineField({
              name: "description",
              title: "Descripción",
              type: "text",
              rows: 2,
              description: "Una frase sobre el plan.",
            }),
            defineField({
              name: "priceSocio",
              title: "Precio socio (COP)",
              type: "number",
              description: "Solo números. Ej. 330000",
            }),
            defineField({
              name: "priceNoSocio",
              title: "Precio no socio (COP)",
              type: "number",
              description: "Solo números. Ej. 370000",
            }),
            defineField({
              name: "priceHijoMontador",
              title: "Precio hijo de montador (COP)",
              type: "number",
              description: "Solo números. Ej. 185000",
            }),
            defineField({
              name: "featured",
              title: "¿Destacar este plan?",
              type: "boolean",
              initialValue: false,
              description: "Actívalo solo en el plan recomendado (ej. mensual).",
            }),
            defineField({
              name: "ctaLabel",
              title: "Texto del botón",
              type: "string",
              description: "Ej. Elegir plan · Inscribir ahora",
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "packageLabel" },
          },
        }),
      ],
      initialValue: [
        {
          id: "personal-1",
          classCount: 1,
          packageLabel: "Paquete ocasional",
          title: "1 clase personalizada",
          description: "Un instructor solo para ti en toda la sesión.",
          priceSocio: 80_000,
          priceNoSocio: 90_000,
          priceHijoMontador: 45_000,
          featured: false,
          ctaLabel: "Elegir plan",
        },
        {
          id: "personal-2",
          classCount: 2,
          packageLabel: "Paquete quincenal",
          title: "2 clases personalizadas",
          description: "Seguimiento cercano dos veces al mes.",
          priceSocio: 160_000,
          priceNoSocio: 180_000,
          priceHijoMontador: 90_000,
          featured: false,
          ctaLabel: "Elegir plan",
        },
        {
          id: "personal-3",
          classCount: 3,
          packageLabel: "Paquete intensivo",
          title: "3 clases personalizadas",
          description: "Más práctica individual para acelerar tu técnica.",
          priceSocio: 250_000,
          priceNoSocio: 280_000,
          priceHijoMontador: 140_000,
          featured: false,
          ctaLabel: "Elegir plan",
        },
        {
          id: "personal-4",
          classCount: 4,
          packageLabel: "Plan mensual",
          title: "4 clases personalizadas",
          description: "El plan mensual con maestro a tu lado.",
          priceSocio: 330_000,
          priceNoSocio: 370_000,
          priceHijoMontador: 185_000,
          featured: true,
          ctaLabel: "Inscribir ahora",
        },
      ],
    }),
    defineField({
      name: "enrollmentNote",
      title: "Nota de matrícula",
      type: "text",
      rows: 2,
      description:
        "Ej. Matrícula $190.000: incluye póliza, gorra y buzo de la escuela.",
      initialValue:
        "Matrícula $190.000: incluye póliza, gorra y buzo de la escuela.",
    }),
    defineField({
      name: "benefitsNote",
      title: "Nota de beneficios",
      type: "text",
      rows: 2,
      description:
        "Ej. Con ella tienes beneficios en eventos: entrada gratuita o descuentos.",
      initialValue:
        "Con ella tienes beneficios en eventos: entrada gratuita o descuentos.",
    }),
  ],
});
