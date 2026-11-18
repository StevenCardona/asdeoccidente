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
  /** Empty until a PDF is uploaded (Sanity later). */
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

export type ServicesHelp = {
  title: string;
  body: string;
  ctaLabel: string;
};

export type ServicesContent = {
  hero: ServicesSectionIntro & {
    image: string | null;
    imageAlt: string;
  };
  sections: ServicesSection[];
  help: ServicesHelp;
  seo: {
    title: string;
    description: string;
  };
};
