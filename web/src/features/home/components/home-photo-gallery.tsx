import type { HomeGalleryPhoto, HomeSectionIntro } from "@/features/home/models";
import { PhotoCarouselGallery } from "@/shared/components/photo-carousel-gallery";

type HomePhotoGalleryProps = {
  intro: HomeSectionIntro;
  photos: HomeGalleryPhoto[];
};

export function HomePhotoGallery({ intro, photos }: HomePhotoGalleryProps) {
  return <PhotoCarouselGallery intro={intro} photos={photos} />;
}
