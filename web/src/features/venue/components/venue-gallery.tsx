import type { VenueContent } from "@/features/venue/models";
import { PhotoCarouselGallery } from "@/shared/components/photo-carousel-gallery";

type VenueGalleryProps = {
  content: VenueContent["gallery"];
};

export function VenueGallery({ content }: VenueGalleryProps) {
  return (
    <PhotoCarouselGallery intro={content.intro} photos={content.photos} />
  );
}
