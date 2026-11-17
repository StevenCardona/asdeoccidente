import type { Metadata } from "next";
import { FairsListPage } from "@/features/fairs/app/fairs-list-page";
import { getSiteSettings } from "@/features/site/models";
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
    imageAlt: settings.name,
    // Placeholder list — avoid indexing thin content until fairs ship
    noIndex: true,
  });
}

export default function Page() {
  return <FairsListPage />;
}
