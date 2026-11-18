import type { EquinotherapyContent } from "./types";

export const defaultEquinotherapyContent: EquinotherapyContent = {
  hero: {
    badge: "Equinoterapia",
    title: "Conexión, calma y acompañamiento con el caballo",
    subtitle:
      "Espacio terapéutico con el caballo, con acompañamiento profesional. Sin promesas de cura. Un entorno de comprensión, tolerancia y vínculo humano.",
    primaryCtaLabel: "Quiero información",
    image: "/imgs/escuela1.jpg",
    imageAlt: "Acompañamiento equino en Asdeoccidente",
  },
  storyIntro: {
    eyebrow: "La equinoterapia",
    title: "Más que un encuentro recreativo",
    paragraphs: [
      "El enfoque de este programa no es solo disfrutar del caballo de modo recreativo, sino de su aporte terapéutico, puesto que fortalece áreas como la física, emocional y mental.",
      "El caballo como instrumento motivacional contribuye positivamente al desarrollo personal, cognitivo, al manejo emocional, la concentración y el aprendizaje. Se realizan intervenciones individuales, en pareja y familiar.",
    ],
    benefits: [],
    image: {
      src: "/imgs/escuela2.jpg",
      alt: "Sesión de acompañamiento con el caballo",
    },
    imagePosition: "right",
  },
  gallery: {
    intro: {
      eyebrow: "Momentos",
      title: "Encuentros con el caballo",
      subtitle:
        "Imágenes del acompañamiento terapéutico en un entorno de calma y confianza.",
    },
    photos: [
      { src: "/imgs/escuela1.jpg", alt: "Acompañamiento equino" },
      { src: "/imgs/escuela2.jpg", alt: "Trabajo en pista con el caballo" },
      { src: "/imgs/escuela3.jpg", alt: "Sesión con instructor" },
      { src: "/imgs/escuela4.jpg", alt: "Vínculo con el ejemplar" },
      { src: "/imgs/escuela5.jpg", alt: "Ambiente de confianza" },
      { src: "/imgs/school5.jpg", alt: "Momento de conexión" },
    ],
  },
  storyBenefits: {
    eyebrow: "Beneficios",
    title: "Un camino de comprensión y crecimiento",
    paragraphs: [
      "La equinoterapia acompaña el desarrollo motor, cognitivo y de la comunicación desde un vínculo basado en la presencia, el respeto y la escucha.",
      "También favorece el bienestar emocional —confianza, autonomía e identidad— en un entorno de comprensión y tolerancia. Trabajamos con lenguaje cuidadoso y acompañamiento profesional: no prometemos curas; cada proceso es particular.",
    ],
    benefits: [
      "Trabajar las relaciones inconscientes que instauramos o creamos con el sistema familiar.",
      "Reforzar los autoesquemas: confianza, autonomía, identidad, autoestima.",
      "Fortalecer el estado de ánimo en momentos de ansiedad, depresión, hiperactividad, angustia o duelo.",
      "Técnicas terapéuticas para resolución de problemas.",
      "Fomentar la toma de decisiones, rutas y sentido de la vida individual y familiar.",
    ],
    image: {
      src: "/imgs/escuela3.jpg",
      alt: "Familia en sesión de equinoterapia",
    },
    imagePosition: "left",
  },
  reviewsIntro: {
    eyebrow: "Voces",
    title: "Lo que comparten las familias",
    subtitle:
      "Experiencias de acompañamiento. Sustituye por testimonios aprobados cuando estén listos.",
  },
  reviews: [
    {
      name: "Familia R.",
      place: "Palmira",
      rating: 5,
      text: "Sentimos un espacio de calma y respeto. El caballo ayudó a conectar sin presión.",
    },
    {
      name: "Camila S.",
      place: "Cali",
      rating: 5,
      text: "El acompañamiento se siente humano y cuidadoso. Salimos con más confianza.",
    },
    {
      name: "Andrés y Laura",
      place: "Valle del Cauca",
      rating: 5,
      text: "Intervención familiar clara, sin promesas exageradas. Muy buena disposición del equipo.",
    },
  ],
  faq: {
    eyebrow: "Dudas frecuentes",
    title: "Preguntas sobre equinoterapia",
    subtitle: "Lo esencial antes de escribirnos.",
    items: [
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
  },
  seo: {
    title: "Equinoterapia",
    description:
      "Espacio terapéutico con el caballo, con acompañamiento profesional. Sin promesas de cura. Información y orientación por WhatsApp.",
  },
};
