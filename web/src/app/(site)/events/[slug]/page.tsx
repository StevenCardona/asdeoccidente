import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetailPage } from "@/features/events/app/event-detail-page";
import {
  fetchEventBySlug,
  fetchEventSlugs,
} from "@/features/events/models";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await fetchEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [event, settings] = await Promise.all([
    fetchEventBySlug(slug),
    getSiteSettings(),
  ]);

  if (!event) {
    return buildPageMetadata({
      path: `/events/${slug}`,
      title: "Evento no encontrado",
      description: settings.name,
      siteName: settings.name,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    path: `/events/${event.slug}`,
    title: event.seo.title,
    description: event.seo.description,
    siteName: settings.name,
    image: event.banner?.src,
    imageAlt: event.banner?.alt,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const [event, settings] = await Promise.all([
    fetchEventBySlug(slug),
    getSiteSettings(),
  ]);

  if (!event) notFound();

  return (
    <>
      <PageJsonLd
        path={`/events/${event.slug}`}
        title={event.seo.title}
        description={event.seo.description}
        siteName={settings.name}
      />
      <EventDetailPage
        slug={slug}
        initialEvent={event}
        settings={settings}
      />
    </>
  );
}
