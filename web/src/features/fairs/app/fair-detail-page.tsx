import { FairDetailBody } from "@/features/fairs/components/fair-detail-body";
import { FairDetailHero } from "@/features/fairs/components/fair-detail-hero";
import type { Fair } from "@/features/fairs/models";
import type { SiteSettings } from "@/features/site/models";

type FairDetailPageProps = {
  fair: Fair;
  settings: SiteSettings;
};

export function FairDetailPage({ fair, settings }: FairDetailPageProps) {
  return (
    <div>
      <FairDetailHero fair={fair} settings={settings} />
      <FairDetailBody fair={fair} settings={settings} />
    </div>
  );
}
