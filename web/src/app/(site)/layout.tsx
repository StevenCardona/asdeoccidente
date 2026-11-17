import { SiteShell } from "@/features/layout/app/site-shell";
import { SiteJsonLd } from "@/features/site/components/site-json-ld";
import { getSiteSettings } from "@/features/site/models";

export const revalidate = 60;

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  return (
    <>
      <SiteJsonLd settings={settings} />
      <SiteShell settings={settings}>{children}</SiteShell>
    </>
  );
}
