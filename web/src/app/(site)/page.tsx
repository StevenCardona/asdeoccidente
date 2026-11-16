import type { Metadata } from "next";
import { HomePage } from "@/features/home/app/home-page";
import { fetchHomeContent } from "@/features/home/models/home";
import { siteConfig } from "@/shared/config/site";
import { urlForImage } from "@/shared/lib/sanity-image";

export async function generateMetadata(): Promise<Metadata> {
  const home = await fetchHomeContent();
  const ogImage =
    (home.heroImage
      ? urlForImage(home.heroImage.source)?.width(1200).height(630).url()
      : null) ?? "/imgs/banner.png";

  return {
    title: home.seoTitle,
    description: home.seoDescription,
    openGraph: {
      title: `${home.seoTitle} · ${siteConfig.name}`,
      description: home.seoDescription,
      locale: "es_CO",
      type: "website",
      images: [
        {
          url: ogImage,
          alt: home.heroImage?.alt ?? home.heroTitle,
        },
      ],
    },
  };
}

export default async function Page() {
  const initialHome = await fetchHomeContent();
  return <HomePage initialHome={initialHome} />;
}
