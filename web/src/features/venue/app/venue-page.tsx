import { VenueGallery } from "@/features/venue/components/venue-gallery";
import { VenueHero } from "@/features/venue/components/venue-hero";
import { VenueIntro } from "@/features/venue/components/venue-intro";
import { ReviewsSection } from "@/shared/components/reviews-section";
import { VenueSpaces } from "@/features/venue/components/venue-spaces";
import type { VenueContent } from "@/features/venue/models";
import type { SiteSettings } from "@/features/site/models";

type VenuePageProps = {
  content: VenueContent;
  settings: SiteSettings;
};

export function VenuePage({ content, settings }: VenuePageProps) {
  const featuredSpaces = content.spaces.slice(0, 2);
  const remainingSpaces = content.spaces.slice(2);

  return (
    <div>
      <VenueHero content={content.hero} settings={settings} />
      <VenueIntro content={content.intro} />
      <VenueGallery content={content.gallery} />
      <VenueSpaces spaces={featuredSpaces} />
      <VenueSpaces spaces={remainingSpaces} />
      <ReviewsSection
        intro={content.reviewsIntro}
        reviews={content.reviews}
        tone="muted"
      />
    </div>
  );
}
