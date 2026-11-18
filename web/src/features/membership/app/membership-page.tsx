import { MembershipAbout } from "@/features/membership/components/membership-about";
import { MembershipBenefits } from "@/features/membership/components/membership-benefits";
import { MembershipCosts } from "@/features/membership/components/membership-costs";
import { MembershipGallery } from "@/features/membership/components/membership-gallery";
import { MembershipHero } from "@/features/membership/components/membership-hero";
import { MembershipMissionVision } from "@/features/membership/components/membership-mission-vision";
import { MembershipRequirements } from "@/features/membership/components/membership-requirements";
import { MembershipReviews } from "@/features/membership/components/membership-reviews";
import type { MembershipContent } from "@/features/membership/models";
import type { SiteSettings } from "@/features/site/models";

type MembershipPageProps = {
  content: MembershipContent;
  settings: SiteSettings;
};

export function MembershipPage({ content, settings }: MembershipPageProps) {
  return (
    <div>
      <MembershipHero content={content.hero} settings={settings} />
      <MembershipAbout content={content.about} />
      <MembershipMissionVision pillars={content.missionVision.pillars} />
      <MembershipBenefits
        intro={content.memberBenefits.intro}
        items={content.memberBenefits.items}
      />
      <MembershipGallery content={content.memberBenefits.gallery} />
      <MembershipBenefits
        intro={content.affiliateBenefits.intro}
        items={content.affiliateBenefits.items}
        tone="muted"
      />
      <MembershipCosts content={content.costs} />
      <MembershipRequirements content={content.requirements} />
      <MembershipReviews
        intro={content.reviewsIntro}
        reviews={content.reviews}
      />
    </div>
  );
}
