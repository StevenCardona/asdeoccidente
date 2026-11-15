import type { Metadata } from "next";
import { FairDetailPage } from "@/features/fairs/app/fair-detail-page";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [] as { slug: string }[];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Feria · ${slug}`,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <FairDetailPage slug={slug} />;
}
