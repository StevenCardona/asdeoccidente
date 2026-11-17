import { defineField, defineType } from "sanity";

export const eventSession = defineType({
  name: "eventSession",
  title: "Día de programación",
  type: "object",
  fields: [
    defineField({
      name: "date",
      title: "Fecha del día",
      type: "date",
      description: "Obligatorio si agregas una fila de programación.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      title: "Texto del día (libre)",
      type: "string",
      description:
        "Obligatorio. Puede ser un andar, una jornada, un remate, una clínica, etc. Ej. Trocha y galope · Remate · Día de apertura.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "time",
      title: "Hora o nota de horario",
      type: "string",
      description: "Opcional. Ej. Inicia a las 9 a.m.",
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "date" },
  },
});
