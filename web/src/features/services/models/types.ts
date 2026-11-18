export type ServicesSectionIntro = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type ServicesFeeRow = {
  concepto: string;
  priceSocio: number | null;
  priceNoSocio: number | null;
};

export type ServicesDownload = {
  label: string;
  /** Empty until a PDF is uploaded in Sanity. */
  fileUrl: string;
};

export type ServicesSection = {
  title: string;
  slug: string;
  description: string;
  icon: string;
  feeRows: ServicesFeeRow[];
  downloads: ServicesDownload[];
};

export type ServicesContent = {
  hero: ServicesSectionIntro;
  sections: ServicesSection[];
  seo: {
    title: string;
    description: string;
  };
};
