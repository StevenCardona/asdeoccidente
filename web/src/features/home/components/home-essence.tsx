import type {
  HomeEssenceItem,
  HomeGalleryPhoto,
  HomeSectionIntro,
} from "@/features/home/models";
import { resolveLucideIcon } from "@/features/home/utils/icons";
import { SafeImage } from "@/shared/components/safe-image";

type HomeEssenceProps = {
  intro: HomeSectionIntro;
  items: HomeEssenceItem[];
  photos: HomeGalleryPhoto[];
};

export function HomeEssence({ intro, items, photos }: HomeEssenceProps) {
  const hasIntro = Boolean(
    intro.eyebrow.trim() || intro.title.trim() || intro.subtitle.trim(),
  );
  if (!hasIntro && items.length === 0 && photos.length === 0) return null;

  const hasPhotos = photos.length > 0;
  const textBlock = (
    <div>
      {intro.eyebrow.trim() ? (
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {intro.eyebrow}
        </p>
      ) : null}
      {intro.title.trim() ? (
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
          {intro.title}
        </h2>
      ) : null}
      {intro.subtitle.trim() ? (
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro.subtitle}
        </p>
      ) : null}

      {items.length > 0 ? (
        <ul
          className={
            hasPhotos
              ? "mt-8 grid gap-6 sm:grid-cols-2 md:mt-10"
              : "mt-8 grid gap-6 sm:grid-cols-2 md:mt-10 lg:grid-cols-4"
          }
        >
          {items.map((item) => {
            const Icon = resolveLucideIcon(item.icon);
            return (
              <li
                key={item.title}
                className="border-l-2 border-primary/80 pl-4"
              >
                <div className="flex items-center gap-2">
                  {Icon ? (
                    <Icon
                      className="h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  ) : null}
                  <h3 className="font-display text-lg font-semibold text-secondary">
                    {item.title}
                  </h3>
                </div>
                {item.text.trim() ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );

  return (
    <section className="bg-background px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        {hasPhotos ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            {textBlock}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {photos.map((photo) => (
                <SafeImage
                  key={`${photo.src}-${photo.alt}`}
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  wrapperClassName="aspect-[4/3]"
                />
              ))}
            </div>
          </div>
        ) : (
          textBlock
        )}
      </div>
    </section>
  );
}
