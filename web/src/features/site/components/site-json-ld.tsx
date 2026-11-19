import type { SiteSettings } from "@/features/site/models";
import { siteConfig } from "@/shared/config/site";

type SiteJsonLdProps = {
  settings: SiteSettings;
};

export function SiteJsonLd({ settings }: SiteJsonLdProps) {
  const sameAs = [
    settings.social.instagram,
    settings.social.youtube,
    settings.social.tiktok,
  ].filter(Boolean);

  const rawPhone = settings.whatsappNumber || settings.phoneMobile;
  const telephone = rawPhone
    ? `+${rawPhone.replace(/^\+/, "")}`
    : undefined;

  const organizationId = `${siteConfig.siteUrl}/#organization`;
  const localBusinessId = `${siteConfig.siteUrl}/#localbusiness`;
  const websiteId = `${siteConfig.siteUrl}/#website`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: settings.name,
        legalName: settings.legalName,
        url: siteConfig.siteUrl,
        email: settings.email || undefined,
        telephone,
        sameAs: sameAs.length ? sameAs : undefined,
        logo: `${siteConfig.siteUrl}/brand/logo.jpg`,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: settings.name,
        url: siteConfig.siteUrl,
        inLanguage: "es-CO",
        publisher: { "@id": organizationId },
      },
      {
        "@type": ["LocalBusiness", "SportsActivityLocation"],
        "@id": localBusinessId,
        name: settings.name,
        image: settings.ui.ogImageUrl || undefined,
        url: siteConfig.siteUrl,
        email: settings.email || undefined,
        telephone,
        address: settings.address
          ? {
              "@type": "PostalAddress",
              streetAddress: settings.address,
              addressCountry: "CO",
            }
          : undefined,
        parentOrganization: {
          "@id": organizationId,
        },
        sameAs: sameAs.length ? sameAs : undefined,
        aggregateRating: settings.google.rating
          ? {
              "@type": "AggregateRating",
              ratingValue: settings.google.rating,
              reviewCount: settings.google.reviewCount || undefined,
            }
          : undefined,
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
