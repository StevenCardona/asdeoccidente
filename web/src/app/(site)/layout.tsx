import { SiteShell } from "@/features/layout/app/site-shell";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}
