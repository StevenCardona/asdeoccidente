import { defineArrayMember, defineField, defineType } from "sanity";

export const schoolStaff = defineType({
  name: "schoolStaff",
  title: "Profesores",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      title: "Títulos de la sección",
      type: "sectionIntro",
      description: "Etiqueta, título y subtítulo del equipo.",
      initialValue: {
        eyebrow: "Titulados",
        title: "Nuestros maestros",
        subtitle: "Director y docentes a tu lado.",
      },
    }),
    defineField({
      name: "members",
      title: "Equipo",
      type: "array",
      description:
        "Cada persona: nombre, rol, badge, bio y foto. Fotos sugeridas: escuela2.jpg … escuela5.jpg",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Nombre",
              type: "string",
              description: "Ej. Diego Hincapié",
            }),
            defineField({
              name: "role",
              title: "Cargo / rol",
              type: "string",
              description: "Ej. Director ecuestre · Instructora",
            }),
            defineField({
              name: "badge",
              title: "Etiqueta",
              type: "string",
              description: "Ej. Director técnico · Coach",
            }),
            defineField({
              name: "bio",
              title: "Bio corta",
              type: "text",
              rows: 2,
              description: "1 o 2 frases sobre qué hace en la escuela.",
            }),
            defineField({
              name: "image",
              title: "Foto",
              type: "imageWithAlt",
              description:
                "Foto de la persona. Alt ej. Diego Hincapié, director de la escuela",
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "role", media: "image" },
          },
        }),
      ],
      initialValue: [
        {
          name: "Diego Hincapié",
          role: "Director ecuestre",
          badge: "Director técnico",
          bio: "Coordina la escuela de chalanería y el seguimiento de cada alumno.",
        },
        {
          name: "Rubén Aparicio",
          role: "Instructor",
          badge: "Coach",
          bio: "Trabajo técnico en pista con énfasis en asiento y conducción.",
        },
        {
          name: "Yudi Mendoza",
          role: "Instructora",
          badge: "Coach",
          bio: "Acompaña a niños y jóvenes en su primer camino con el caballo.",
        },
        {
          name: "Yadi Sánchez",
          role: "Instructora",
          badge: "Coach",
          bio: "Clases personalizadas orientadas a progresión y confianza.",
        },
      ],
    }),
  ],
});
