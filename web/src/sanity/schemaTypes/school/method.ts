import { defineArrayMember, defineField, defineType } from "sanity";

export const schoolMethod = defineType({
  name: "schoolMethod",
  title: "Método",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo de “Cómo es la clase”.",
      initialValue: {
        eyebrow: "Cómo es la clase",
        title: "Un alumno, un instructor",
        subtitle:
          "Cada sesión es 1 a 1: te reciben, te asignan caballo y equipo, y trabajas en pista con tu maestro. Caballo, montura y casco los pone la escuela; tú llegas con ganas.",
      },
    }),
    defineField({
      name: "image",
      title: "Foto del método",
      type: "imageWithAlt",
      description:
        "Sugerencia: escuela2.jpg. Alt ej. Clase personalizada de chalanería en pista",
    }),
    defineField({
      name: "steps",
      title: "Pasos de la clase",
      type: "array",
      description: "Normalmente 3 pasos (llegas → montas → cierras).",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Título del paso",
              type: "string",
              description: "Ej. Llegas a la sede",
            }),
            defineField({
              name: "text",
              title: "Texto",
              type: "text",
              rows: 2,
              description: "Explica qué pasa en ese momento de la clase.",
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
      initialValue: [
        {
          title: "Llegas a la sede",
          text: "Te reciben, revisan tu nivel y preparan el ejemplar y el equipo para la sesión.",
        },
        {
          title: "Montas con tu maestro",
          text: "Trabajo en pista a tu ritmo: asiento, ayudas y andares con corrección constante.",
        },
        {
          title: "Cierras con indicaciones",
          text: "Salís con puntos claros para la próxima clase y avances medibles.",
        },
      ],
    }),
    defineField({
      name: "axes",
      title: "Ejes de trabajo",
      type: "array",
      description:
        "Equilibrio, Conducción, Concentración, Preparación. Icono: elige de la lista.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Título",
              type: "string",
              description: "Ej. Equilibrio",
            }),
            defineField({
              name: "text",
              title: "Texto",
              type: "text",
              rows: 2,
              description: "Qué se trabaja en ese eje.",
            }),
            defineField({
              name: "icon",
              title: "Icono",
              type: "string",
              description: "Elige uno de la lista (no inventes otro nombre).",
              options: {
                list: [
                  { title: "Equilibrio (Scale)", value: "Scale" },
                  { title: "Conducción (Compass)", value: "Compass" },
                  { title: "Concentración (Focus)", value: "Focus" },
                  { title: "Preparación (Dumbbell)", value: "Dumbbell" },
                ],
              },
            }),
          ],
          preview: { select: { title: "title", subtitle: "icon" } },
        }),
      ],
      initialValue: [
        {
          title: "Equilibrio",
          text: "Asiento estable, peso centrado y control del cuerpo para sentirte seguro sobre el caballo.",
          icon: "Scale",
        },
        {
          title: "Conducción",
          text: "Ayudas claras con riendas y piernas para marcar ritmo, giros y los andares del criollo.",
          icon: "Compass",
        },
        {
          title: "Concentración",
          text: "Atención y calma para leer al ejemplar, seguir instrucciones y progresar sin prisa.",
          icon: "Focus",
        },
        {
          title: "Preparación",
          text: "Fuerza, técnica y hábitos de sesión para que cada clase sume de verdad.",
          icon: "Dumbbell",
        },
      ],
    }),
  ],
});
