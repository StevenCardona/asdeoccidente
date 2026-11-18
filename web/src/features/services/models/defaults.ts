import type { ServicesContent } from "./types";

export const defaultServicesContent: ServicesContent = {
  hero: {
    eyebrow: "Servicios",
    title: "Servicios y trámites",
    subtitle:
      "Tarifas y formularios para registros, traspasos, homologaciones y más.",
  },
  sections: [
    {
      title: "Registro de ejemplares",
      slug: "registro-de-ejemplares",
      description:
        "Este tramite se realiza ante la asociación a la que esta asociado o afiliado el Criador.",
      icon: "FileText",
      feeRows: [
        {
          concepto: "Registro de Ejemplar 0 a 18 Meses",
          priceSocio: 537_000,
          priceNoSocio: 785_000,
        },
        {
          concepto: "Registro de Ejemplar Mayor 18 Meses",
          priceSocio: 537_000,
          priceNoSocio: 1_428_000,
        },
        {
          concepto: "Registro de Castrados, Asnales y Mulares",
          priceSocio: 537_000,
          priceNoSocio: 785_000,
        },
      ],
      downloads: [
        { label: "Inscripción de Propietarios", fileUrl: "" },
        { label: "Actualización de Datos", fileUrl: "" },
      ],
    },
    {
      title: "Traspaso de ejemplares",
      slug: "traspaso-de-ejemplares",
      description:
        "Este tramite se realiza ante la asociación a la que pertenece el registro.",
      icon: "ArrowLeftRight",
      feeRows: [
        {
          concepto: "Traspaso de Socio a Socio",
          priceSocio: 100_000,
          priceNoSocio: null,
        },
        {
          concepto: "Traspaso de Socio a No Socio",
          priceSocio: 60_000,
          priceNoSocio: null,
        },
        {
          concepto: "Traspaso de Socio a No Socio",
          priceSocio: null,
          priceNoSocio: 132_000,
        },
        {
          concepto: "Traspaso de No Socio a Socio",
          priceSocio: null,
          priceNoSocio: 132_000,
        },
        {
          concepto: "Traspaso de No Socio a No Socio",
          priceSocio: null,
          priceNoSocio: 180_000,
        },
        {
          concepto: "Traspaso y Duplicado",
          priceSocio: 170_000,
          priceNoSocio: 280_000,
        },
      ],
      downloads: [
        { label: "Traspasos", fileUrl: "" },
        { label: "Bloqueo de Registros", fileUrl: "" },
        { label: "Denuncia de Perdida", fileUrl: "" },
      ],
    },
    {
      title: "Homologaciones",
      slug: "homologaciones",
      description: "Homologación de ejemplares ante Fedequinas.",
      icon: "ClipboardCheck",
      feeRows: [
        {
          concepto: "Homologación por Andar o Color Menor a 60 Meses",
          priceSocio: 110_000,
          priceNoSocio: 200_000,
        },
        {
          concepto: "Homologación por Andar de 60 a 120 Meses en Feria",
          priceSocio: 1_042_000,
          priceNoSocio: 1_042_000,
        },
        {
          concepto:
            "Homologación por Andar Mayor a 120 Meses Autorizada por Fedequinas",
          priceSocio: 2_084_000,
          priceNoSocio: 2_084_000,
        },
        {
          concepto: "Sellados Reporte de Monta de 0 a 6 meses",
          priceSocio: 20_000,
          priceNoSocio: 30_000,
        },
        {
          concepto: "Sellados Reporte de Monta de 6 a 11 meses",
          priceSocio: 55_000,
          priceNoSocio: 55_000,
        },
        {
          concepto: "Sellados Reporte de Monta Mayores de 11 meses",
          priceSocio: 105_000,
          priceNoSocio: 105_000,
        },
      ],
      downloads: [
        { label: "Homologacion de Andar o Color", fileUrl: "" },
        { label: "Homologación de Andar en Feria", fileUrl: "" },
        { label: "Homologacion de Calidad de Registro", fileUrl: "" },
      ],
    },
    {
      title: "Duplicados",
      slug: "duplicados",
      description: "El tramite dura alrededor de 15 días hábiles.",
      icon: "Copy",
      feeRows: [
        {
          concepto: "Duplicado Normal",
          priceSocio: 70_000,
          priceNoSocio: 100_000,
        },
      ],
      downloads: [
        { label: "Duplicados", fileUrl: "" },
        { label: "Denuncia de Perdida", fileUrl: "" },
      ],
    },
    {
      title: "Formatos",
      slug: "formatos",
      description:
        "Asdeoccidente le ofrece los siguientes enlaces de descarga para los formatos de",
      icon: "FolderOpen",
      feeRows: [],
      downloads: [
        { label: "Búsqueda de Padres", fileUrl: "" },
        { label: "Certificado Defunción", fileUrl: "" },
      ],
    },
  ],
  seo: {
    title: "Servicios y trámites",
    description:
      "Registros, traspasos, homologaciones y formularios. Tarifas y descargas de PDFs.",
  },
};
