import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FairDetailPage } from "@/features/fairs/app/fair-detail-page";
import {
  getFairBySlug,
  getFairSlugs,
} from "@/features/fairs/models";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getFairSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fair = getFairBySlug(slug);
  const settings = await getSiteSettings();

  if (!fair) {
    return buildPageMetadata({
      path: `/fairs/${slug}`,
      title: "Feria no encontrada",
      description: settings.name,
      siteName: settings.name,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    path: `/fairs/${fair.slug}`,
    title: fair.seo.title,
    description: fair.seo.description,
    siteName: settings.name,
    image: fair.banner.src,
    imageAlt: fair.banner.alt,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const [fair, settings] = await Promise.all([
    Promise.resolve(getFairBySlug(slug)),
    getSiteSettings(),
  ]);

  if (!fair) notFound();

  return (
    <>
      <PageJsonLd
        path={`/fairs/${fair.slug}`}
        title={fair.seo.title}
        description={fair.seo.description}
        siteName={settings.name}
      />
      <FairDetailPage fair={fair} settings={settings} />
    </>
  );
}
