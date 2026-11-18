import type { VenueContent } from "./types";

export const defaultVenueContent: VenueContent = {
  hero: {
    badge: "Alquiler de sede",
    title: "Alquila la sede para tu evento",
    subtitle:
      "Sede campestre para ferias, eventos y encuentros. Cotiza por WhatsApp.",
    primaryCtaLabel: "Quiero cotizar",
    image: "/imgs/lugar.webp",
    imageAlt: "Sede Asdeoccidente",
    contactLine:
      "Steet Achury Mendoza · (+57) 300 322 0606 · comercial@asdeoccidente.org.co",
  },
  intro: {
    eyebrow: "Eventos en las mejores manos",
    title: "Los mejores espacios",
    paragraphs: [
      "Encuentra aquí los mejores espacios para realizar tu evento o celebración. Asdeoccidente te ofrece distintas opciones para que elijas el lugar que más te convenga.",
      "Contamos con un equipo capacitado para eventos sociales, familiares y empresariales. Recibirás asesoría y un servicio integral para tu reunión.",
      "Nuestra misión es ganarnos tu confianza con un servicio que va desde el diseño y la planificación hasta la gestión y producción de todo tipo de reuniones y grandes eventos.",
    ],
  },
  spaces: [
    {
      title: "Coliseo Principal",
      description:
        "Escenario amplio para ferias, competencias y eventos de gran formato.",
      highlights: ["1250 m²"],
      image: {
        src: "/imgs/lugar-1.jpg",
        alt: "Coliseo Principal Asdeoccidente",
      },
      imagePosition: "right",
    },
    {
      title: "Coliseo Alterno",
      description:
        "Espacio versátil para competencias, ensayos y encuentros de menor escala.",
      highlights: ["546 m²"],
      image: {
        src: "/imgs/lugar-2.jpg",
        alt: "Coliseo Alterno Asdeoccidente",
      },
      imagePosition: "left",
    },
    {
      title: "Salón Nelson Garcés",
      description:
        "Salón cerrado para reuniones, celebraciones y eventos empresariales.",
      highlights: ["425 m²"],
      image: {
        src: "/imgs/lugar-3.jpg",
        alt: "Salón Nelson Garcés",
      },
      imagePosition: "right",
    },
    {
      title: "Parqueadero",
      description:
        "Amplio parqueadero para recibir invitados con comodidad.",
      highlights: ["~800 vehículos"],
      image: {
        src: "/imgs/lugar4.png",
        alt: "Parqueadero de la sede",
      },
      imagePosition: "left",
    },
    {
      title: "Zonas verdes",
      description:
        "Áreas verdes para ambientación, descanso y actividades al aire libre.",
      highlights: ["~600 m² aprox. c/u"],
      image: {
        src: "/imgs/lugar6.webp",
        alt: "Zonas verdes de la sede",
      },
      imagePosition: "right",
    },
  ],
  gallery: {
    intro: {
      eyebrow: "Ambiente",
      title: "Momentos en nuestra sede",
      subtitle: "Fotos del coliseo, salones y zonas verdes.",
    },
    photos: [
      { src: "/imgs/lugar-1.jpg", alt: "Coliseo y espacios de la sede" },
      { src: "/imgs/lugar-2.jpg", alt: "Instalaciones Asdeoccidente" },
      { src: "/imgs/lugar-3.jpg", alt: "Salón de eventos" },
      { src: "/imgs/lugar4.png", alt: "Áreas de la sede" },
      { src: "/imgs/lugar6.webp", alt: "Zonas verdes" },
      { src: "/imgs/lugar.webp", alt: "Vista de la sede" },
    ],
  },
  reviewsIntro: {
    eyebrow: "Confianza",
    title: "Lo que dicen quienes nos visitan",
    subtitle: "Experiencias en eventos y celebraciones en la sede.",
  },
  reviews: [
    {
      name: "Ana M.",
      place: "Evento familiar · Palmira",
      rating: 5,
      text: "Espacios amplios y un equipo que nos acompañó en cada detalle de la celebración.",
    },
    {
      name: "Carlos R.",
      place: "Reunión empresarial",
      rating: 5,
      text: "El salón y el parqueadero facilitaron mucho la logística. Cotización clara por WhatsApp.",
    },
    {
      name: "Laura G.",
      place: "Feria equina",
      rating: 5,
      text: "El coliseo se siente profesional y bien cuidado. Volveremos para el próximo evento.",
    },
  ],
  seo: {
    title: "Alquiler de la sede",
    description:
      "Sede campestre para ferias, eventos y encuentros. Cotiza por WhatsApp.",
  },
};
