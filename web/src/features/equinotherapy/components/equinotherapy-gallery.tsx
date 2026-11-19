import type { EquinotherapyContent } from "@/features/equinotherapy/models";
import { PhotoCarouselGallery } from "@/shared/components/photo-carousel-gallery";

type EquinotherapyGalleryProps = {
  content: EquinotherapyContent["gallery"];
};

export function EquinotherapyGallery({ content }: EquinotherapyGalleryProps) {
  return (
    <PhotoCarouselGallery intro={content.intro} photos={content.photos} />
  );
}
