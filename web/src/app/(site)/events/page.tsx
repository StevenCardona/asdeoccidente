import type { Metadata } from "next";
import { EventsListPage } from "@/features/events/app/events-list-page";
import { fetchEventsContent } from "@/features/events/models";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [content, settings] = await Promise.all([
    fetchEventsContent(),
    getSiteSettings(),
  ]);
  return buildPageMetadata({
    path: "/events",
    title: content.list.seo.title || "Eventos y ferias",
    description:
      content.list.seo.description ||
      "Ferias, exposiciones y eventos del caballo criollo colombiano con Asdeoccidente.",
    siteName: settings.name,
    image: "/imgs/banner3.webp",
    imageAlt: "Ambiente de evento equino en Asdeoccidente",
  });
}

export default async function Page() {
  const [initialContent, settings] = await Promise.all([
    fetchEventsContent(),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageJsonLd
        path="/events"
        title={initialContent.list.seo.title || "Eventos y ferias"}
        description={
          initialContent.list.seo.description ||
          "Ferias, exposiciones y eventos del caballo criollo colombiano con Asdeoccidente."
        }
        siteName={settings.name}
      />
      <EventsListPage initialContent={initialContent} settings={settings} />
    </>
  );
}
