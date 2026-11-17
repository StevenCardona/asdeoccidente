import type { Metadata } from "next";
import { FairDetailPage } from "@/features/fairs/app/fair-detail-page";
import { getSiteSettings } from "@/features/site/models";
import { buildPageMetadata } from "@/shared/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [] as { slug: string }[];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const settings = await getSiteSettings();
  return buildPageMetadata({
    path: `/fairs/${slug}`,
    title: `Feria · ${slug}`,
    description: `Detalle del evento ${slug} — ${settings.name}.`,
    siteName: settings.name,
    image: "/imgs/banner3.webp",
    noIndex: true,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <FairDetailPage slug={slug} />;
}
