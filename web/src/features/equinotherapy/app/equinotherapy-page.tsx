import { EquinotherapyFaq } from "@/features/equinotherapy/components/equinotherapy-faq";
import { EquinotherapyGallery } from "@/features/equinotherapy/components/equinotherapy-gallery";
import { EquinotherapyHero } from "@/features/equinotherapy/components/equinotherapy-hero";
import { EquinotherapyReviews } from "@/features/equinotherapy/components/equinotherapy-reviews";
import { EquinotherapyStorySection } from "@/features/equinotherapy/components/equinotherapy-story";
import type { EquinotherapyContent } from "@/features/equinotherapy/models";
import type { SiteSettings } from "@/features/site/models";

type EquinotherapyPageProps = {
  content: EquinotherapyContent;
  settings: SiteSettings;
};

export function EquinotherapyPage({
  content,
  settings,
}: EquinotherapyPageProps) {
  return (
    <div>
      <EquinotherapyHero content={content.hero} settings={settings} />
      <EquinotherapyStorySection content={content.storyIntro} />
      <EquinotherapyGallery content={content.gallery} />
      <EquinotherapyStorySection content={content.storyBenefits} muted />
      <EquinotherapyReviews
        intro={content.reviewsIntro}
        reviews={content.reviews}
      />
      <EquinotherapyFaq content={content.faq} />
    </div>
  );
}
