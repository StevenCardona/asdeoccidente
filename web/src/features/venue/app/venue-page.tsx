import { VenueGallery } from "@/features/venue/components/venue-gallery";
import { VenueHero } from "@/features/venue/components/venue-hero";
import { VenueIntro } from "@/features/venue/components/venue-intro";
import { VenueReviews } from "@/features/venue/components/venue-reviews";
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
      <VenueReviews intro={content.reviewsIntro} reviews={content.reviews} />
    </div>
  );
}
