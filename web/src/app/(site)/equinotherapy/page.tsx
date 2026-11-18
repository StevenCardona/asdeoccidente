import type { Metadata } from "next";
import { EquinotherapyPage } from "@/features/equinotherapy/app/equinotherapy-page";
import { EquinotherapyFaqJsonLd } from "@/features/equinotherapy/components/equinotherapy-faq-json-ld";
import { fetchEquinotherapyContent } from "@/features/equinotherapy/models";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [content, settings] = await Promise.all([
    fetchEquinotherapyContent(),
    getSiteSettings(),
  ]);

  return buildPageMetadata({
    path: "/equinotherapy",
    title: content.seo.title,
    description: content.seo.description,
    siteName: settings.name,
  });
}

export default async function Page() {
  const [content, settings] = await Promise.all([
    fetchEquinotherapyContent(),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageJsonLd
        path="/equinotherapy"
        title={content.seo.title}
        description={content.seo.description}
        siteName={settings.name}
      />
      <EquinotherapyFaqJsonLd items={content.faq.items} />
      <EquinotherapyPage content={content} settings={settings} />
    </>
  );
}
