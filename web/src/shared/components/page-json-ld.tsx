import { siteConfig } from "@/shared/config/site";

type PageJsonLdProps = {
  path: string;
  title: string;
  description: string;
  siteName: string;
};

function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${siteConfig.siteUrl}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized}`;
}

/** WebPage entity matching the page's title and meta description. */
export function PageJsonLd({
  path,
  title,
  description,
  siteName,
}: PageJsonLdProps) {
  const url = absoluteUrl(path);
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title.includes(siteName) ? title : `${title} · ${siteName}`,
    description,
    inLanguage: "es-CO",
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
    },
    about: {
      "@id": `${siteConfig.siteUrl}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
