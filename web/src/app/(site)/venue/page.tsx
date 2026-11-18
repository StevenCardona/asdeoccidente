import type { Metadata } from "next";
import { VenuePage } from "@/features/venue/app/venue-page";
import { fetchVenueContent } from "@/features/venue/models";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [content, settings] = await Promise.all([
    fetchVenueContent(),
    getSiteSettings(),
  ]);

  return buildPageMetadata({
    path: "/venue",
    title: content.seo.title,
    description: content.seo.description,
    siteName: settings.name,
  });
}

export default async function Page() {
  const [content, settings] = await Promise.all([
    fetchVenueContent(),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageJsonLd
        path="/venue"
        title={content.seo.title}
        description={content.seo.description}
        siteName={settings.name}
      />
      <VenuePage content={content} settings={settings} />
    </>
  );
}
