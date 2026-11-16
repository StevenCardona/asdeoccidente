import { Suspense } from "react";
import { ContactLocation } from "@/features/layout/components/contact-location";
import { MobileNav } from "@/features/layout/components/mobile-nav";
import { SiteFooter } from "@/features/layout/components/site-footer";
import { SiteHeader } from "@/features/layout/components/site-header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <ContactLocation />
      <div className="pb-20 md:pb-0">
        <SiteFooter />
      </div>
      <Suspense fallback={null}>
        <MobileNav />
      </Suspense>
    </div>
  );
}
