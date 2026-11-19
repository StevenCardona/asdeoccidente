/**
 * Shared site chrome: Header → main → ContactLocation → Footer.
 * `settings` come from RSC `getSiteSettings()` (Sanity published).
 */
import { ContactLocation } from "@/features/layout/components/contact-location";
import { SiteFooter } from "@/features/layout/components/site-footer";
import { SiteHeader } from "@/features/layout/components/site-header";
import type { SiteSettings } from "@/features/site/models";

type SiteShellProps = {
  children: React.ReactNode;
  settings: SiteSettings;
};

export function SiteShell({ children, settings }: SiteShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader settings={settings} />
      <main className="flex-1">{children}</main>
      <ContactLocation settings={settings} />
      <SiteFooter settings={settings} />
    </div>
  );
}
