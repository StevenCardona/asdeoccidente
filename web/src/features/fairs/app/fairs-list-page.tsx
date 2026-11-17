import { FairsCalendar } from "@/features/fairs/components/fairs-calendar";
import { FairsFaq } from "@/features/fairs/components/fairs-faq";
import { FairsFeaturedHero } from "@/features/fairs/components/fairs-featured-hero";
import { FairsGallery } from "@/features/fairs/components/fairs-gallery";
import { FairsReviews } from "@/features/fairs/components/fairs-reviews";
import {
  getFeaturedFair,
  type FairsContent,
} from "@/features/fairs/models";

type FairsListPageProps = {
  content: FairsContent;
};

export function FairsListPage({ content }: FairsListPageProps) {
  const featured = getFeaturedFair(content.fairs);

  return (
    <div>
      {featured ? <FairsFeaturedHero fair={featured} /> : null}
      <FairsCalendar
        fairs={content.fairs}
        intro={content.list.calendarIntro}
        emptyMessage={content.list.emptyCalendarMessage}
      />
      <FairsReviews
        intro={content.list.reviewsIntro}
        reviews={content.list.reviews}
      />
      <FairsGallery
        intro={content.list.galleryIntro}
        photos={content.list.gallery}
      />
      <FairsFaq intro={content.list.faqIntro} items={content.list.faq} />
    </div>
  );
}
