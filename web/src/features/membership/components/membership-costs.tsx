import type { MembershipContent } from "@/features/membership/models";

type MembershipCostsProps = {
  content: MembershipContent["costs"];
};

export function MembershipCosts({ content }: MembershipCostsProps) {
  const { intro, rows } = content;
  if (rows.length === 0) return null;

  return (
    <section className="bg-background px-4 py-12 md:px-8 md:py-16">
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

        <div className="mt-8 hidden overflow-x-auto md:block">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-secondary">
                <th className="px-3 py-2 font-semibold">Tipo</th>
                <th className="px-3 py-2 font-semibold">
                  Cuota de sostenimiento
                </th>
                <th className="border-l border-border px-3 py-2 font-semibold">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={`${row.label}-${index}`}
                  className="border-b border-border odd:bg-background even:bg-muted/30"
                >
                  <td className="px-3 py-2 font-medium text-secondary">
                    {row.label}
                  </td>
                  <td className="px-3 py-2 tabular-nums text-secondary">
                    {row.cuotaDisplay}
                  </td>
                  <td className="border-l border-border/60 px-3 py-2 tabular-nums text-secondary">
                    {row.valorDisplay}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-8 space-y-2 md:hidden">
          {rows.map((row, index) => (
            <li
              key={`${row.label}-${index}`}
              className="border border-border bg-background p-3"
            >
              <p className="font-display text-sm font-semibold text-secondary">
                {row.label}
              </p>
              <dl className="mt-2 text-sm">
                <div className="flex items-baseline justify-between gap-3 py-1.5">
                  <dt className="text-muted-foreground">
                    Cuota de sostenimiento
                  </dt>
                  <dd className="font-medium tabular-nums text-secondary">
                    {row.cuotaDisplay}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-t border-border/50 py-1.5">
                  <dt className="text-muted-foreground">Valor</dt>
                  <dd className="font-medium tabular-nums text-secondary">
                    {row.valorDisplay}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
