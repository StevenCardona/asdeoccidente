import type { Metadata } from "next";
import { HomePage } from "@/features/home/app/home-page";
import {
  fetchHomeContent,
} from "@/features/home/models";
import { homeHeroImageUrl } from "@/features/home/models/map";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

/** Refresh Sanity content without a full redeploy. */
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [home, settings] = await Promise.all([
    fetchHomeContent(),
    getSiteSettings(),
  ]);
  const ogImage = home.heroImage
    ? homeHeroImageUrl(home.heroImage.source, 1200)
    : null;

  return buildPageMetadata({
    path: "/",
    title: home.seoTitle || home.heroTitle || settings.name,
    description: home.seoDescription || settings.footerBlurb || settings.name,
    siteName: settings.name,
    image: ogImage,
    imageAlt: home.heroImage?.alt || home.heroTitle || settings.name,
  });
}

export default async function Page() {
  const [initialHome, settings] = await Promise.all([
    fetchHomeContent(),
    getSiteSettings(),
  ]);
  const title =
    initialHome.seoTitle || initialHome.heroTitle || settings.name;
  const description =
    initialHome.seoDescription || settings.footerBlurb || settings.name;

  // LCP: HomeHero uses next/image with priority (preloads /_next/image).
  // Avoid a second preload of the raw CDN URL that races the optimizer.
  return (
    <>
      <PageJsonLd
        path="/"
        title={title}
        description={description}
        siteName={settings.name}
      />
      <HomePage initialHome={initialHome} settings={settings} />
    </>
  );
}
