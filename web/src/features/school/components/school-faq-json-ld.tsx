import type { SchoolFaqItem } from "@/features/school/models";
import { siteConfig } from "@/shared/config/site";

type SchoolFaqJsonLdProps = {
  items: SchoolFaqItem[];
};

export function SchoolFaqJsonLd({ items }: SchoolFaqJsonLdProps) {
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

  const schoolUrl = `${siteConfig.siteUrl}/school`;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${schoolUrl}#faq`,
    url: schoolUrl,
    mainEntityOfPage: {
      "@id": `${schoolUrl}#webpage`,
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
