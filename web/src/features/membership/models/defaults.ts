import type { MembershipContent } from "./types";

export const defaultMembershipContent: MembershipContent = {
  hero: {
    title: "Quiero ser socio",
    subtitle:
      "Únete a la casa del caballo criollo colombiano. Beneficios, voz en la asociación y comunidad.",
    primaryCtaLabel: "Quiero ser socio",
    image: "/imgs/banner2.jpg",
    imageAlt: "Caballo criollo colombiano — Asdeoccidente",
  },
  about: {
    eyebrow: "Quiénes somos",
    title:
      "Fundada en 1975, más de 45 años trabajando en pro del caballo criollo colombiano.",
    paragraphs: [
      "Asdeoccidente es una asociación sin ánimo de lucro dedicada a promover la cría, el desarrollo y la cultura del caballo criollo colombiano en el Valle del Cauca.",
      "Aquí encuentras comunidad, representación gremial y un camino claro para unirte como socio o afiliado.",
    ],
    photos: [
      { src: "/imgs/lugar-1.jpg", alt: "Instalaciones Asdeoccidente" },
      { src: "/imgs/lugar-2.jpg", alt: "Sede y espacios equinos" },
      { src: "/imgs/escuela1.jpg", alt: "Comunidad equina" },
      { src: "/imgs/lugar.webp", alt: "Vista de la sede" },
    ],
  },
  missionVision: {
    pillars: [
      {
        title: "Visión",
        text: "Promover, desarrollar y mejorar la raza del caballo criollo colombiano, fortaleciendo a criadores y aficionados.",
        image: {
          src: "/imgs/escuela2.jpg",
          alt: "Caballo criollo en Asdeoccidente",
        },
      },
      {
        title: "Misión",
        text: "Representar a los criadores y promover la cultura y la pasión por el caballo criollo colombiano a través de servicios, eventos y comunidad.",
        image: {
          src: "/imgs/escuela3.jpg",
          alt: "Evento y comunidad equina",
        },
      },
    ],
  },
  memberBenefits: {
    intro: {
      eyebrow: "Ser socio",
      title: "Derechos y beneficios de ser socio",
      subtitle:
        "Voz en la asociación, uso de la sede y acceso preferente a servicios.",
    },
    items: [
      {
        title: "Voz y voto",
        text: "Participas con voz y voto en las asambleas de la asociación.",
      },
      {
        title: "Cargos directivos",
        text: "Puedes elegir y ser elegido para cargos según el reglamento.",
      },
      {
        title: "Instalaciones",
        text: "Usas las instalaciones de la sede de acuerdo con el reglamento.",
      },
      {
        title: "Eventos oficiales",
        text: "Participas en eventos y competencias oficiales de la asociación.",
      },
      {
        title: "Registros y trámites",
        text: "Acceso preferente a registros y trámites de ejemplares.",
      },
      {
        title: "Tarifas preferenciales",
        text: "Disfrutas tarifas preferenciales en escuela y servicios.",
      },
      {
        title: "Representación gremial",
        text: "Te representa ante Fedequinas y entidades afines.",
      },
      {
        title: "Información",
        text: "Recibes comunicados e información de la asociación.",
      },
      {
        title: "Formación",
        text: "Participas en actividades formativas y culturales.",
      },
      {
        title: "Departamento veterinario",
        text: "Accedes al departamento veterinario según disponibilidad.",
      },
      {
        title: "Categorías de socio",
        text: "Puedes optar por categorías como socio afiliado o vitalicio.",
      },
    ],
    gallery: {
      intro: {
        eyebrow: "Comunidad",
        title: "Momentos de nuestra asociación",
        subtitle: "Sede, eventos y vida equina en Asdeoccidente.",
      },
      photos: [
        { src: "/imgs/lugar-1.jpg", alt: "Coliseo e instalaciones" },
        { src: "/imgs/lugar-3.jpg", alt: "Espacios de la sede" },
        { src: "/imgs/escuela4.jpg", alt: "Ambiente equino" },
        { src: "/imgs/lugar4.png", alt: "Áreas de la sede" },
        { src: "/imgs/school5.jpg", alt: "Comunidad y caballos" },
        { src: "/imgs/lugar6.webp", alt: "Zonas verdes" },
      ],
    },
  },
  affiliateBenefits: {
    intro: {
      eyebrow: "Ser afiliado",
      title: "Beneficios de ser afiliado",
      subtitle:
        "Registros, eventos y servicios para acompañar tu actividad equina.",
    },
    items: [
      {
        title: "Registro de ejemplares",
        text: "Registras tus ejemplares ante la asociación.",
      },
      {
        title: "Departamento veterinario",
        text: "Usas el departamento veterinario según disponibilidad.",
      },
      {
        title: "Eventos y ferias",
        text: "Participas en eventos y ferias de la asociación.",
      },
      {
        title: "Trámites",
        text: "Accedes a trámites de registros y homologaciones.",
      },
      {
        title: "Agenda e información",
        text: "Recibes información de la asociación y su agenda.",
      },
      {
        title: "Condiciones preferenciales",
        text: "Obtienes condiciones preferenciales en servicios según tu categoría.",
      },
    ],
  },
  costs: {
    intro: {
      eyebrow: "Costos",
      title: "Cuotas y valores",
      subtitle: "Referencia de afiliación. Puedes actualizarla en Sanity.",
    },
    rows: [
      { label: "Afiliado", cuotaDisplay: "$0", valorDisplay: "$0" },
      { label: "Socio", cuotaDisplay: "$0", valorDisplay: "$0" },
      {
        label: "Socio afiliado",
        cuotaDisplay: "$1.500.000",
        valorDisplay: "$5.000.000",
      },
      {
        label: "Socio vitalicio",
        cuotaDisplay: "$1.500.000",
        valorDisplay: "Traspasable",
      },
    ],
  },
  requirements: {
    intro: {
      eyebrow: "Requisitos",
      title: "Cómo unirte",
      subtitle: "Prepara estos documentos y escríbenos para iniciar tu ingreso.",
    },
    items: [
      "Diligenciar el formato de Asdeoccidente con dos registros originales.",
      "Presentar dos cartas de recomendación de socios de Asdeoccidente.",
      "El ingreso está sujeto a aprobación por la junta directiva en el mes en curso.",
      "Copia de la C.C.",
    ],
    formatLabel: "Descargar formato",
    formatFileUrl: "",
  },
  reviewsIntro: {
    eyebrow: "Confianza",
    title: "Lo que dicen nuestros socios",
    subtitle: "Experiencias de quienes ya forman parte de Asdeoccidente.",
  },
  reviews: [
    {
      name: "Diego G.",
      place: "Socio · Palmira",
      rating: 5,
      text: "Sentí respaldo desde el primer trámite. La comunidad y los eventos valen la pena.",
    },
    {
      name: "María L.",
      place: "Afiliada · Cali",
      rating: 5,
      text: "Registros claros y buena atención. Recomiendo unirse si crías o compites.",
    },
    {
      name: "Andrés P.",
      place: "Socio afiliado",
      rating: 5,
      text: "Voz en la asociación y tarifas preferenciales. El proceso de ingreso fue sencillo.",
    },
  ],
  seo: {
    title: "Socios",
    description:
      "Quiénes somos, beneficios de socio y afiliado, costos y requisitos para unirte a Asdeoccidente.",
  },
};
