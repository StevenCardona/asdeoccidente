import type { Metadata } from "next";
import { ServicesPage } from "@/features/services/app/services-page";
import { fetchServicesContent } from "@/features/services/models";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [content, settings] = await Promise.all([
    fetchServicesContent(),
    getSiteSettings(),
  ]);

  return buildPageMetadata({
    path: "/services",
    title: content.seo.title,
    description: content.seo.description,
    siteName: settings.name,
  });
}

export default async function Page() {
  const [content, settings] = await Promise.all([
    fetchServicesContent(),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageJsonLd
        path="/services"
        title={content.seo.title}
        description={content.seo.description}
        siteName={settings.name}
      />
      <ServicesPage content={content} />
    </>
  );
}
