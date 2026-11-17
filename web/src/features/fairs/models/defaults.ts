import { normalizeFair } from "./normalize";
import type { FairInput, FairsContent } from "./types";

/** Thin authoring helper — only calendar essentials required. */
function fair(partial: FairInput) {
  return normalizeFair(partial);
}

/**
 * Calendario oficial 2026 — Ferias equinas Valle del Cauca (Asdeoccidente).
 */
export const defaultFairsContent: FairsContent = {
  fairs: [
    fair({
      title: "Exposición equina Grado B Roldanillo",
      slug: "exposicion-equina-grado-b-roldanillo-2026",
      startDate: "2026-01-31",
      endDate: "2026-02-01",
      placeLabel: "Roldanillo, Valle del Cauca",
      summary:
        "Exposición equina Grado B en Roldanillo: dos jornadas de competencia y ambiente de feria al inicio del año.",
      kind: "grado-b",
    }),
    fair({
      title: "Válida nacional de chalanería",
      slug: "valida-nacional-de-chalaneria-2026",
      startDate: "2026-02-13",
      endDate: "2026-02-15",
      placeLabel: "Valle del Cauca",
      summary:
        "Válida nacional de chalanería con jornadas de competencia y seguimiento de escuela y afición.",
      kind: "festival",
    }),
    fair({
      title: "Exposición equina Grado B de jinetes no profesionales",
      slug: "exposicion-equina-grado-b-jinetes-no-profesionales-2026",
      startDate: "2026-03-13",
      endDate: "2026-03-14",
      placeLabel: "Valle del Cauca",
      summary:
        "Exposición equina Grado B para jinetes no profesionales: dos días de pista y ambiente de feria.",
      kind: "grado-b",
    }),
    fair({
      title: "Exposición equina Grado B Ginebra",
      slug: "exposicion-equina-grado-b-ginebra-2026",
      startDate: "2026-04-11",
      endDate: "2026-04-12",
      placeLabel: "Ginebra, Valle del Cauca",
      summary:
        "Exposición equina Grado B en Ginebra con dos jornadas de competencia.",
      kind: "grado-b",
    }),
    fair({
      title: "Exposición equina Grado A de verano",
      slug: "exposicion-equina-grado-a-de-verano-2026",
      startDate: "2026-05-01",
      endDate: "2026-05-02",
      placeLabel: "Valle del Cauca",
      summary:
        "Exposición equina Grado A de verano: dos días de alto nivel en el circuito del Valle.",
      kind: "grado-a",
    }),
    fair({
      title: "Exposición equina Grado A de Tuluá",
      slug: "exposicion-equina-grado-a-de-tulua-2026",
      startDate: "2026-06-12",
      endDate: "2026-06-14",
      placeLabel: "Tuluá, Valle del Cauca",
      summary:
        "Exposición equina Grado A de Tuluá con tres jornadas de competencia y ambiente de feria.",
      kind: "grado-a",
    }),
    fair({
      title: "Exposición equina Grado A Buga",
      slug: "exposicion-equina-grado-a-buga-2026",
      startDate: "2026-07-18",
      endDate: "2026-07-20",
      placeLabel: "Buga, Valle del Cauca",
      summary:
        "Exposición equina Grado A en Buga: tres días de pista y público.",
      kind: "grado-a",
    }),
    fair({
      title: "Exposición equina Grado B Caicedonia",
      slug: "exposicion-equina-grado-b-caicedonia-2026",
      startDate: "2026-07-25",
      endDate: "2026-07-26",
      placeLabel: "Caicedonia, Valle del Cauca",
      summary:
        "Exposición equina Grado B en Caicedonia con dos jornadas de competencia.",
      kind: "grado-b",
    }),
    fair({
      title: "Exposición equina Grado B Palmira",
      slug: "exposicion-equina-grado-b-palmira-2026",
      startDate: "2026-08-15",
      endDate: "2026-08-16",
      placeLabel: "Palmira, Valle del Cauca",
      summary:
        "Exposición equina Grado B en Palmira: dos días de feria cerca de la sede Asdeoccidente.",
      kind: "grado-b",
    }),
    fair({
      title: "Exposición equina Grado B Jamundí",
      slug: "exposicion-equina-grado-b-jamundi-2026",
      startDate: "2026-09-05",
      endDate: "2026-09-06",
      placeLabel: "Jamundí, Valle del Cauca",
      summary:
        "Exposición equina Grado B en Jamundí con dos jornadas de competencia.",
      kind: "grado-b",
    }),
    fair({
      title: "Exposición equina Grado B La Tinaja",
      slug: "exposicion-equina-grado-b-la-tinaja-2026",
      startDate: "2026-09-26",
      endDate: "2026-09-27",
      placeLabel: "La Tinaja, Valle del Cauca",
      summary:
        "Exposición equina Grado B La Tinaja: cierre de septiembre en el circuito del Valle.",
      kind: "grado-b",
    }),
    fair({
      title: "XXXIV Copa América Equina",
      slug: "xxxiv-copa-america-equina",
      featured: true,
      teaser: "Exposición equina AA · cuatro días de andares en la sede.",
      startDate: "2026-10-29",
      endDate: "2026-11-01",
      placeLabel:
        "Sede Asdeoccidente · Recta Cali-Palmira, Corregimiento La Dolores, Palmira",
      summary:
        "La XXXIV Copa América Equina es la exposición equina AA del calendario Asdeoccidente: cuatro días de competencia, pesebrera y ambiente de feria en la sede.",
      kind: "grado-aa",
      updatedAt: "2026-11-14T12:00:00.000Z",
      sessions: [
        {
          date: "2026-10-29",
          label: "Trocha y galope",
          time: "Inicia a las 9 a.m.",
        },
        {
          date: "2026-10-30",
          label: "Trote y galope",
          time: "Inicia a las 9 a.m.",
        },
        {
          date: "2026-10-31",
          label: "Paso fino colombiano",
          time: "Inicia a las 9 a.m.",
        },
        {
          date: "2026-11-01",
          label: "Trocha colombiana",
          time: "Inicia a las 9 a.m.",
        },
      ],
      detailSections: [
        {
          type: "info",
          eyebrow: "La cita grande",
          title: "Información de la feria",
          imagePosition: "right",
          body: [
            "La XXXIV Copa América Equina es la exposición equina AA del calendario Asdeoccidente: cuatro días de competencia, pesebrera y ambiente de feria en la sede.",
            "Cada jornada se centra en un andar: trocha y galope, trote y galope, paso fino colombiano y trocha colombiana, con inicio de competencias a las 9:00 a.m.",
            "Es la cita grande del año para criadores, aficionados y familias que viven el caballo criollo colombiano en el Valle del Cauca.",
          ],
          cta: {
            label: "Más información",
            action: "whatsapp",
          },
          ctaNote: {
            text: "Te respondemos por WhatsApp con cupos y requisitos.",
            icon: "message",
          },
        },
        {
          type: "gallery",
        },
      ],
      seo: {
        title: "XXXIV Copa América Equina",
        description:
          "Exposición equina AA XXXIV Copa América en Asdeoccidente, 29 de octubre al 1 de noviembre de 2026.",
      },
    }),
    fair({
      title: "Exposición equina Grado B Cartago",
      slug: "exposicion-equina-grado-b-cartago-2026",
      startDate: "2026-11-21",
      endDate: "2026-11-22",
      placeLabel: "Cartago, Valle del Cauca",
      summary:
        "Exposición equina Grado B en Cartago: dos jornadas para cerrar el calendario equino del Valle 2026.",
      kind: "grado-b",
      detailSections: [
        {
          type: "info",
          eyebrow: "Cierre de temporada",
          title: "Información de la feria",
          imagePosition: "left",
          body: [
            "Exposición equina Grado B en Cartago: dos jornadas para cerrar el calendario equino del Valle 2026.",
          ],
          cta: {
            label: "Más información",
            action: "whatsapp",
          },
          ctaNote: {
            text: "Pregunta por entradas e inscripción por WhatsApp.",
            icon: "message",
          },
        },
        {
          type: "gallery",
        },
      ],
    }),
  ],
  list: {
    calendarIntro: {
      eyebrow: "Calendario 2026",
      title: "Ferias equinas Valle del Cauca",
      subtitle:
        "El circuito Asdeoccidente: Grado A, Grado B, válidas y la Copa América. Entra al detalle para fechas, programación e inscripción.",
    },
    reviewsIntro: {
      eyebrow: "Voces de la feria",
      title: "Lo que dicen quienes nos visitan",
      subtitle: "Comentarios de familias, criadores y aficionados en la sede.",
    },
    reviews: [
      {
        name: "Laura M.",
        place: "Cali",
        rating: 5,
        text: "La pista se siente organizada y el ambiente es familiar. Volveremos a la próxima Copa.",
      },
      {
        name: "Andrés R.",
        place: "Palmira",
        rating: 5,
        text: "Inscribí mi ejemplar sin enredo. El equipo responde rápido por WhatsApp.",
      },
      {
        name: "Camila S.",
        place: "Buga",
        rating: 5,
        text: "Buena sede, fácil de llegar y con espacio para toda la familia.",
      },
    ],
    galleryIntro: {
      eyebrow: "Ambiente",
      title: "Así se vive una feria en Asdeoccidente",
      subtitle: "Pista, público y sede en La Dolores.",
    },
    gallery: [
      {
        src: "/imgs/banner3.webp",
        alt: "Público y pista en feria equina",
      },
      {
        src: "/imgs/banner2.jpg",
        alt: "Ejemplar en exposición",
      },
      {
        src: "/imgs/lugar.webp",
        alt: "Instalaciones de la sede Asdeoccidente",
      },
      {
        src: "/imgs/lugar-1.jpg",
        alt: "Espacios de la sede para eventos",
      },
      {
        src: "/imgs/lugar-2.jpg",
        alt: "Ambiente campestre de la sede",
      },
      {
        src: "/imgs/lugar-3.jpg",
        alt: "Sede lista para feria y exposición",
      },
    ],
    faqIntro: {
      eyebrow: "Dudas frecuentes",
      title: "Preguntas sobre ferias",
      subtitle: "Lo básico antes de venir o inscribir tu ejemplar.",
    },
    faq: [
      {
        question: "¿Dónde compro entradas y palcos?",
        answer:
          "Escríbenos por WhatsApp con el tema Ferias. Te orientamos sobre entrada general y palcos.",
      },
      {
        question: "¿Cómo inscribo mi ejemplar?",
        answer:
          "Usa el botón Más información en la feria que te interesa. Te respondemos por WhatsApp con los requisitos vigentes.",
      },
      {
        question: "¿Dónde queda la sede de la Copa América?",
        answer:
          "Transversal 5 # 1 - 60, Recta Cali-Palmira, Corregimiento La Dolores, Palmira – Valle del Cauca. El mapa está al final de esta página.",
      },
      {
        question: "¿La programación del día a día ya está publicada?",
        answer:
          "En la Copa América publicamos el andar de cada día. En otras ferias, la programación oficial sale con el afiche del evento.",
      },
    ],
    emptyCalendarMessage:
      "Pronto publicaremos más ferias aquí. Mientras tanto, revisa la destacada arriba o escríbenos por WhatsApp.",
  },
};
