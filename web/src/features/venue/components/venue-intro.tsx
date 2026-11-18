import type { VenueContent } from "@/features/venue/models";

type VenueIntroProps = {
  content: VenueContent["intro"];
};

export function VenueIntro({ content }: VenueIntroProps) {
  const hasContent =
    content.eyebrow.trim() ||
    content.title.trim() ||
    content.paragraphs.some((paragraph) => paragraph.trim());

  if (!hasContent) return null;

  return (
    <section className="border-b border-border bg-surface px-5 py-10 md:px-12 md:py-14">
      <div className="mx-auto max-w-7xl">
        {content.eyebrow.trim() ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {content.eyebrow}
          </p>
        ) : null}
        {content.title.trim() ? (
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
            {content.title}
          </h2>
        ) : null}
        <div className="mt-5 space-y-4 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
