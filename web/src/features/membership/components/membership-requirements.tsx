import { FileDown } from "lucide-react";
import type { MembershipContent } from "@/features/membership/models";
import { Button } from "@/shared/components/ui/button";

type MembershipRequirementsProps = {
  content: MembershipContent["requirements"];
};

export function MembershipRequirements({
  content,
}: MembershipRequirementsProps) {
  const { intro, items, formatLabel, formatFileUrl } = content;
  if (items.length === 0 && !formatLabel.trim()) return null;

  const hasFile = Boolean(formatFileUrl.trim());

  return (
    <section className="border-y border-border bg-surface px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          {intro.eyebrow.trim() ? (
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {intro.eyebrow}
            </p>
          ) : null}
          {intro.title.trim() ? (
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              {intro.title}
            </h2>
          ) : null}
          {intro.subtitle.trim() ? (
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro.subtitle}
            </p>
          ) : null}
        </div>

        {items.length > 0 ? (
          <ul className="mt-8 max-w-3xl space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="border-l-2 border-primary/80 pl-4 text-base leading-relaxed text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {formatLabel.trim() ? (
          <div className="mt-8">
            {hasFile ? (
              <Button asChild variant="primary" size="lg">
                <a
                  href={formatFileUrl.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="h-4 w-4" aria-hidden />
                  {formatLabel}
                </a>
              </Button>
            ) : (
              <Button type="button" variant="primary" size="lg" disabled>
                <FileDown className="h-4 w-4" aria-hidden />
                {formatLabel}
              </Button>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
