import type {
  MembershipBenefit,
  MembershipSectionIntro,
} from "@/features/membership/models";

type MembershipBenefitsProps = {
  intro: MembershipSectionIntro;
  items: MembershipBenefit[];
  tone?: "default" | "muted";
};

export function MembershipBenefits({
  intro,
  items,
  tone = "default",
}: MembershipBenefitsProps) {
  if (items.length === 0) return null;

  return (
    <section
      className={
        tone === "muted"
          ? "border-y border-border bg-surface px-4 py-10 md:px-8 md:py-12"
          : "bg-background px-4 py-10 md:px-8 md:py-12"
      }
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          {intro.eyebrow.trim() ? (
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              {intro.eyebrow}
            </p>
          ) : null}
          {intro.title.trim() ? (
            <h2 className="mt-2 max-w-xl font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
              {intro.title}
            </h2>
          ) : null}
          {intro.subtitle.trim() ? (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {intro.subtitle}
            </p>
          ) : null}
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={`${item.title}-${index}`}
              className="border border-border bg-background p-3.5 md:p-4"
            >
              <h3 className="flex items-baseline gap-2 font-display text-base font-semibold text-secondary md:text-lg">
                <span className="shrink-0 text-xs font-bold tabular-nums tracking-[0.08em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.title}</span>
              </h3>
              {item.text.trim() ? (
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                  {item.text}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
