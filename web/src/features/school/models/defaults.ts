import type { SchoolContent } from "./types";

export const defaultSchoolContent: SchoolContent = {
  hero: {
    badge: "Clase de cortesía",
    title: "Aprende a montar con un maestro solo para ti.",
    subtitle:
      "Clases totalmente personalizadas. Un instructor a tu lado. Tu primera clase es gratis.",
    primaryCtaLabel: "Quiero mi clase gratis",
    secondaryCtaLabel: "Ver tarifas",
    image: "/imgs/escuela1.jpg",
    imageAlt: "Instructor y alumno en clase de chalanería",
  },
  method: {
    eyebrow: "Cómo es la clase",
    title: "Un alumno, un instructor",
    subtitle:
      "Cada sesión es 1 a 1: te reciben, te asignan caballo y equipo, y trabajas en pista con tu maestro. Caballo, montura y casco los pone la escuela; tú llegas con ganas.",
    image: "/imgs/escuela2.jpg",
    imageAlt: "Clase personalizada de chalanería en pista",
    steps: [
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
    axes: [
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
  },
  staff: {
    eyebrow: "Titulados",
    title: "Nuestros maestros",
    subtitle: "Director y docentes a tu lado.",
    members: [
      {
        name: "Diego Hincapié",
        role: "Director ecuestre",
        badge: "Director técnico",
        bio: "Coordina la escuela de chalanería y el seguimiento de cada alumno.",
        image: "/imgs/escuela2.jpg",
        imageAlt: "Diego Hincapié, director de la escuela",
      },
      {
        name: "Rubén Aparicio",
        role: "Instructor",
        badge: "Coach",
        bio: "Trabajo técnico en pista con énfasis en asiento y conducción.",
        image: "/imgs/escuela3.jpg",
        imageAlt: "Rubén Aparicio, instructor",
      },
      {
        name: "Yudi Mendoza",
        role: "Instructora",
        badge: "Coach",
        bio: "Acompaña a niños y jóvenes en su primer camino con el caballo.",
        image: "/imgs/escuela4.jpg",
        imageAlt: "Yudi Mendoza, instructora",
      },
      {
        name: "Yadi Sánchez",
        role: "Instructora",
        badge: "Coach",
        bio: "Clases personalizadas orientadas a progresión y confianza.",
        image: "/imgs/escuela5.jpg",
        imageAlt: "Yadi Sánchez, instructora",
      },
    ],
  },
  horses: {
    eyebrow: "4 andares",
    title: "Caballos maestros",
    subtitle: "Ejemplares que enseñan ritmo y suavidad.",
    items: [
      {
        name: "Consentido",
        gait: "Paso Fino",
        blurb: "Suave y paciente; ideal para primeros pasos y asiento.",
        image: "/imgs/escuela1.jpg",
        imageAlt: "Caballo Consentido",
      },
      {
        name: "Princesa",
        gait: "Trocha",
        blurb: "Brío controlado para trabajar ritmo y transición.",
        image: "/imgs/escuela2.jpg",
        imageAlt: "Yegua Princesa",
      },
      {
        name: "Relámpago",
        gait: "Trocha y Galope",
        blurb: "Energía clara para alumnos que ya dominan lo básico.",
        image: "/imgs/escuela3.jpg",
        imageAlt: "Caballo Relámpago",
      },
      {
        name: "Estrella",
        gait: "Trote y Galope",
        blurb: "Presencia de pista y equilibrio en modalidades clásicas.",
        image: "/imgs/escuela4.jpg",
        imageAlt: "Yegua Estrella",
      },
    ],
  },
  gallery: {
    eyebrow: "Comunidad y emoción",
    title: "La vida en nuestra escuela",
    subtitle:
      "Más de 200 alumnos han pasado por nuestras pistas: desde los primeros pasos hasta la competencia.",
    tiles: [
      {
        badge: "Prácticas de pista",
        title: "Biomecánica y precisión",
        subtitle: "Giros reglamentarios con método.",
        image: "/imgs/escuela1.jpg",
        imageAlt: "Práctica de pista con alumno",
        span: "large",
      },
      {
        badge: "Cuidado y vínculo",
        title: "Cepillado y pesebrera",
        subtitle: "Conexión antes de montar.",
        image: "/imgs/escuela2.jpg",
        imageAlt: "Cuidado del caballo en pesebrera",
        span: "tall",
      },
      {
        badge: "Semilleros",
        title: "Clases y trabajo en equipo",
        subtitle: "Comunidad que crece junta.",
        image: "/imgs/escuela3.jpg",
        imageAlt: "Grupo de alumnos en la escuela",
        span: "tall",
      },
      {
        badge: "Competencia",
        title: "Festivales Fedequinas",
        subtitle: "Pista y presentación.",
        image: "/imgs/escuela4.jpg",
        imageAlt: "Presentación en competencia",
        span: "small",
      },
      {
        badge: "Reglamento",
        title: "Tabla sonora",
        subtitle: "Precisión y oído.",
        image: "/imgs/escuela5.jpg",
        imageAlt: "Prueba de tabla sonora",
        span: "small",
      },
      {
        badge: "Adultos",
        title: "Afición y perfeccionamiento",
        subtitle: "Montar a tu ritmo.",
        image: "/imgs/banner2.jpg",
        imageAlt: "Clase para adultos",
        span: "small",
      },
    ],
  },
  fees: {
    eyebrow: "Inversión y membresía",
    title: "Tarifas transparentes y flexibles",
    subtitle:
      "Elige el pack según cuántas clases personalizadas al mes quieres.",
    plans: [
      {
        id: "personal-1",
        classCount: 1,
        packageLabel: "Paquete ocasional",
        title: "1 clase personalizada",
        description: "Un instructor solo para ti en toda la sesión.",
        prices: { socio: 80_000, noSocio: 90_000, hijoMontador: 45_000 },
        ctaLabel: "Elegir plan",
      },
      {
        id: "personal-2",
        classCount: 2,
        packageLabel: "Paquete quincenal",
        title: "2 clases personalizadas",
        description: "Seguimiento cercano dos veces al mes.",
        prices: { socio: 160_000, noSocio: 180_000, hijoMontador: 90_000 },
        ctaLabel: "Elegir plan",
      },
      {
        id: "personal-3",
        classCount: 3,
        packageLabel: "Paquete intensivo",
        title: "3 clases personalizadas",
        description: "Más práctica individual para acelerar tu técnica.",
        prices: { socio: 250_000, noSocio: 280_000, hijoMontador: 140_000 },
        ctaLabel: "Elegir plan",
      },
      {
        id: "personal-4",
        classCount: 4,
        packageLabel: "Plan mensual",
        title: "4 clases personalizadas",
        description: "El plan mensual con maestro a tu lado.",
        prices: { socio: 330_000, noSocio: 370_000, hijoMontador: 185_000 },
        featured: true,
        ctaLabel: "Inscribir ahora",
      },
    ],
    enrollmentNote:
      "Matrícula $190.000: incluye póliza, gorra y buzo de la escuela.",
    benefitsNote:
      "Con ella tienes beneficios en eventos: entrada gratuita o descuentos.",
  },
  faq: {
    eyebrow: "Dudas frecuentes",
    title: "Preguntas sobre la escuela",
    subtitle: "Lo esencial si es tu primera vez con nosotros.",
    items: [
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
  },
  seo: {
    title: "Escuela de chalanería | Clase gratis",
    description:
      "Clases de chalanería personalizadas para niños y adultos. Caballo y equipo incluidos. Tu primera clase es gratis en Asdeoccidente.",
  },
};
