import type { Metadata } from "next";
import { FairsListPage } from "@/features/fairs/app/fairs-list-page";
import { getFairsContent } from "@/features/fairs/models";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return buildPageMetadata({
    path: "/fairs",
    title: "Ferias y eventos",
    description:
      "Ferias, exposiciones y eventos del caballo criollo colombiano con Asdeoccidente.",
    siteName: settings.name,
    image: "/imgs/banner3.webp",
    imageAlt: "Ambiente de feria equina en Asdeoccidente",
  });
}

export default async function Page() {
  const [content, settings] = await Promise.all([
    Promise.resolve(getFairsContent()),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageJsonLd
        path="/fairs"
        title="Ferias y eventos"
        description="Ferias, exposiciones y eventos del caballo criollo colombiano con Asdeoccidente."
        siteName={settings.name}
      />
      <FairsListPage content={content} />
    </>
  );
}
