import { siteConfig } from "@/shared/config/site";

type SchoolJsonLdProps = {
  description: string;
};

/** BreadcrumbList + Course (free first class) for the school page. */
export function SchoolJsonLd({ description }: SchoolJsonLdProps) {
  const schoolUrl = `${siteConfig.siteUrl}/school`;
  const organizationId = `${siteConfig.siteUrl}/#organization`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${schoolUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: `${siteConfig.siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Escuela",
            item: schoolUrl,
          },
        ],
      },
      {
        "@type": "Course",
        "@id": `${schoolUrl}#course`,
        name: "Clases de chalanería",
        description,
        url: schoolUrl,
        inLanguage: "es-CO",
        provider: {
          "@id": organizationId,
        },
        offers: {
          "@type": "Offer",
          name: "Primera clase gratis",
          price: 0,
          priceCurrency: "COP",
          category: "Free",
          url: schoolUrl,
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
