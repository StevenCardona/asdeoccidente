export type ServicesHero = {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
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
  hero: ServicesHero;
  sections: ServicesSection[];
  seo: {
    title: string;
    description: string;
  };
};
