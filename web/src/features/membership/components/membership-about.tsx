import type { MembershipContent } from "@/features/membership/models";
import { SafeImage } from "@/shared/components/safe-image";

type MembershipAboutProps = {
  content: MembershipContent["about"];
};

export function MembershipAbout({ content }: MembershipAboutProps) {
  const hasIntro = Boolean(
    content.eyebrow.trim() ||
      content.title.trim() ||
      content.paragraphs.some((p) => p.trim()),
  );
  if (!hasIntro && content.photos.length === 0) return null;

  const textBlock = (
    <div>
      {content.eyebrow.trim() ? (
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {content.eyebrow}
        </p>
      ) : null}
      {content.title.trim() ? (
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
          {content.title}
        </h2>
      ) : null}
      {content.paragraphs.length > 0 ? (
        <div className="mt-4 max-w-lg space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </div>
  );

  const hasPhotos = content.photos.length > 0;

  return (
    <section className="bg-background px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        {hasPhotos ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            {textBlock}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {content.photos.slice(0, 4).map((photo) => (
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
