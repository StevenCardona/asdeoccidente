import { defineArrayMember, defineField, defineType } from "sanity";

export const schoolFaq = defineType({
  name: "schoolFaq",
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
        title: "Preguntas sobre la escuela",
        subtitle: "Lo esencial si es tu primera vez con nosotros.",
      },
    }),
    defineField({
      name: "items",
      title: "Preguntas y respuestas",
      type: "array",
      description:
        "Cada ítem es una pregunta que se abre al hacer clic. Escribe con claridad, como si se lo explicaras a alguien por teléfono.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Pregunta",
              type: "string",
              description: "Ej. ¿La primera clase es gratis? ¿Cómo la agendo?",
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
          question: "¿La primera clase es gratis? ¿Cómo la agendo?",
          answer:
            "Sí. Usa el botón de WhatsApp del hero, nos escribes y coordinamos día y hora para tu clase de cortesía.",
        },
        {
          question: "¿Necesito traer caballo o montura?",
          answer:
            "No. En cada clase la escuela pone el caballo, la montura, el casco y el equipo necesario.",
        },
        {
          question: "¿Qué incluye la matrícula?",
          answer:
            "Cuesta $190.000 e incluye póliza, gorra y buzo de la escuela. Además tienes entrada gratuita o descuentos en eventos.",
        },
        {
          question: "¿Qué debo llevar el día de la clase?",
          answer:
            "Ropa cómoda, zapatos cerrados y ganas de aprender. Si el alumno es menor, datos del acudiente.",
        },
        {
          question: "¿Qué diferencia hay entre socio y no socio?",
          answer:
            "Los socios pagan tarifa preferencial. El público general usa el precio no socio; también hay fila para hijo de montador.",
        },
        {
          question: "¿Dónde queda la sede?",
          answer:
            "En la Recta Cali-Palmira, Corregimiento La Dolores (Palmira – Valle del Cauca). El mapa y cómo llegar están al final de esta página.",
        },
      ],
    }),
  ],
});
