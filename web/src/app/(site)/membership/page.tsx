import type { Metadata } from "next";
import { MembershipPage } from "@/features/membership/app/membership-page";
import { fetchMembershipContent } from "@/features/membership/models";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [content, settings] = await Promise.all([
    fetchMembershipContent(),
    getSiteSettings(),
  ]);

  return buildPageMetadata({
    path: "/membership",
    title: content.seo.title,
    description: content.seo.description,
    siteName: settings.name,
  });
}

export default async function Page() {
  const [content, settings] = await Promise.all([
    fetchMembershipContent(),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageJsonLd
        path="/membership"
        title={content.seo.title}
        description={content.seo.description}
        siteName={settings.name}
      />
      <MembershipPage content={content} settings={settings} />
    </>
  );
}
