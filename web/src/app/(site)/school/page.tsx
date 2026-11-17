import type { Metadata } from "next";
import { SchoolFaqJsonLd } from "@/features/school/components/school-faq-json-ld";
import { SchoolJsonLd } from "@/features/school/components/school-json-ld";
import { SchoolPage } from "@/features/school/app/school-page";
import { fetchSchoolContent } from "@/features/school/models";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [school, settings] = await Promise.all([
    fetchSchoolContent(),
    getSiteSettings(),
  ]);

  return buildPageMetadata({
    path: "/school",
    title: school.seo.title,
    description: school.seo.description,
    siteName: settings.name,
    image: school.hero.image,
    imageAlt: school.hero.imageAlt,
  });
}

export default async function Page() {
  const [initialSchool, settings] = await Promise.all([
    fetchSchoolContent(),
    getSiteSettings(),
  ]);
  // LCP: SchoolHero uses next/image with priority (preloads /_next/image).
  return (
    <>
      <PageJsonLd
        path="/school"
        title={initialSchool.seo.title}
        description={initialSchool.seo.description}
        siteName={settings.name}
      />
      <SchoolJsonLd description={initialSchool.seo.description} />
      <SchoolFaqJsonLd items={initialSchool.faq.items} />
      <SchoolPage initialSchool={initialSchool} settings={settings} />
    </>
  );
}
