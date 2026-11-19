import type { Metadata } from "next";
import { DirectoryPage } from "@/features/directory/app/directory-page";
import { fetchDirectoryContent } from "@/features/directory/models";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [content, settings] = await Promise.all([
    fetchDirectoryContent(),
    getSiteSettings(),
  ]);

  return buildPageMetadata({
    path: "/directory",
    title: content.seo.title || content.hero.title,
    description: content.seo.description || content.hero.subtitle,
    siteName: settings.name,
    image: content.hero.image,
    imageAlt: content.hero.imageAlt,
  });
}

export default async function Page() {
  const [content, settings] = await Promise.all([
    fetchDirectoryContent(),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageJsonLd
        path="/directory"
        title={content.seo.title || content.hero.title}
        description={content.seo.description || content.hero.subtitle}
        siteName={settings.name}
      />
      <DirectoryPage content={content} />
    </>
  );
}
