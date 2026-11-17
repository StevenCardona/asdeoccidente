import type { FairImage, FairsListContent } from "@/features/fairs/models";
import { SafeImage } from "@/shared/components/safe-image";

type FairsGalleryProps = {
  intro: FairsListContent["galleryIntro"];
  photos: FairImage[];
};

export function FairsGallery({ intro, photos }: FairsGalleryProps) {
  if (photos.length === 0) return null;

  return (
    <section className="border-t border-border bg-background px-5 py-14 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        {intro.eyebrow.trim() ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {intro.eyebrow}
          </p>
        ) : null}
        {intro.title.trim() ? (
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
            {intro.title}
          </h2>
        ) : null}
        {intro.subtitle.trim() ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro.subtitle}
          </p>
        ) : null}

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <li key={`${photo.src}-${photo.alt}`} className="overflow-hidden">
              <SafeImage
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                wrapperClassName="aspect-[4/3]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
