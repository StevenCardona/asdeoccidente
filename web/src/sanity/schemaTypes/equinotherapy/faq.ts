import { defineArrayMember, defineField, defineType } from "sanity";

export const equinotherapyFaq = defineType({
  name: "equinotherapyFaq",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo de preguntas frecuentes.",
      initialValue: {
        eyebrow: "Dudas frecuentes",
        title: "Preguntas sobre equinoterapia",
        subtitle: "Lo esencial antes de escribirnos.",
      },
    }),
    defineField({
      name: "items",
      title: "Preguntas y respuestas",
      type: "array",
      description:
        "Cada ítem es una pregunta que se abre al hacer clic. Escribe con claridad, sin promesas de cura.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Pregunta",
              type: "string",
              description: "Ej. ¿Para quién es la equinoterapia?",
            }),
            defineField({
              name: "answer",
              title: "Respuesta",
              type: "text",
              rows: 3,
              description: "Respuesta completa en 2–4 frases.",
            }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
      initialValue: [
        {
          question: "¿Para quién es la equinoterapia?",
          answer:
            "Para familias con necesidad terapéutica que buscan acompañamiento profesional con el caballo. El detalle de cada caso se orienta al escribirnos.",
        },
        {
          question: "¿Cómo solicito información o una valoración?",
          answer:
            "Usa el botón de WhatsApp de esta página. Te respondemos para conocer tu situación y orientar el siguiente paso.",
        },
        {
          question: "¿La equinoterapia promete curas médicas?",
          answer:
            "No. Es un espacio terapéutico de acompañamiento. No prometemos curas ni sustituye indicaciones de tu equipo de salud.",
        },
        {
          question: "¿Las sesiones son individuales o familiares?",
          answer:
            "Se realizan intervenciones individuales, en pareja y familiar, según lo que corresponda a cada proceso.",
        },
        {
          question: "¿Dónde se realizan las sesiones?",
          answer:
            "En la sede de Asdeoccidente, Recta Cali-Palmira, Corregimiento La Dolores (Palmira – Valle del Cauca). El mapa y cómo llegar están al final de esta página.",
        },
      ],
    }),
  ],
});
