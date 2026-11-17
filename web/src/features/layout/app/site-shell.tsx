import { Suspense } from "react";
import { ContactLocation } from "@/features/layout/components/contact-location";
import { MobileNav } from "@/features/layout/components/mobile-nav";
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
      <div className="pb-14 md:pb-0">
        <SiteFooter settings={settings} />
      </div>
      <Suspense fallback={null}>
        <MobileNav />
      </Suspense>
    </div>
  );
}
