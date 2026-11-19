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
  const image = content.list.gallery[0]?.src ?? null;
  return buildPageMetadata({
    path: "/events",
    title: content.list.seo.title || content.list.calendarIntro.title,
    description: content.list.seo.description,
    siteName: settings.name,
    image,
    imageAlt: content.list.gallery[0]?.alt,
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
        title={
          initialContent.list.seo.title ||
          initialContent.list.calendarIntro.title
        }
        description={initialContent.list.seo.description}
        siteName={settings.name}
      />
      <EventsListPage initialContent={initialContent} settings={settings} />
    </>
  );
}
