import type { MembershipContent } from "@/features/membership/models";
import { PhotoCarouselGallery } from "@/shared/components/photo-carousel-gallery";

type MembershipGalleryProps = {
  content: MembershipContent["memberBenefits"]["gallery"];
};

export function MembershipGallery({ content }: MembershipGalleryProps) {
  return (
    <PhotoCarouselGallery intro={content.intro} photos={content.photos} />
  );
}
