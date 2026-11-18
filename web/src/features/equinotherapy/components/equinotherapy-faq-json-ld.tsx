import type { EquinotherapyFaqItem } from "@/features/equinotherapy/models";
import { siteConfig } from "@/shared/config/site";

type EquinotherapyFaqJsonLdProps = {
  items: EquinotherapyFaqItem[];
};

export function EquinotherapyFaqJsonLd({ items }: EquinotherapyFaqJsonLdProps) {
  const mainEntity = items
    .filter((item) => item.question.trim() && item.answer.trim())
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));

  if (mainEntity.length === 0) return null;

  const pageUrl = `${siteConfig.siteUrl}/equinotherapy`;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntityOfPage: {
      "@id": `${pageUrl}#webpage`,
    },
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
