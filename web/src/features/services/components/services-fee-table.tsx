import { formatCop } from "@/features/school/models/format";
import type { ServicesFeeRow } from "@/features/services/models";

type ServicesFeeTableProps = {
  rows: ServicesFeeRow[];
};

function PriceCell({ value }: { value: number | null }) {
  if (value === null) {
    return <span className="text-muted-foreground">—</span>;
  }
  return <span className="tabular-nums">{formatCop(value)}</span>;
}

export function ServicesFeeTable({ rows }: ServicesFeeTableProps) {
  if (rows.length === 0) return null;

  return (
    <>
      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40 text-secondary">
              <th className="px-3 py-2 font-semibold">Concepto</th>
              <th className="px-3 py-2 font-semibold">Socios</th>
              <th className="border-l border-border px-3 py-2 font-semibold">
                No socios
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={`${row.concepto}-${index}`}
                className="border-b border-border odd:bg-background even:bg-muted/30"
              >
                <td className="px-3 py-2 font-medium text-secondary">
                  {row.concepto}
                </td>
                <td className="px-3 py-2 text-secondary">
                  <PriceCell value={row.priceSocio} />
                </td>
                <td className="border-l border-border/60 px-3 py-2 text-secondary">
                  <PriceCell value={row.priceNoSocio} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-4 space-y-2 md:hidden">
        {rows.map((row, index) => (
          <li
            key={`${row.concepto}-${index}`}
            className="border border-border bg-background p-3"
          >
            <p className="font-display text-sm font-semibold text-secondary">
              {row.concepto}
            </p>
            <dl className="mt-2 text-sm">
              <div className="flex items-baseline justify-between gap-3 py-1.5">
                <dt className="text-muted-foreground">Socios</dt>
                <dd className="font-medium text-secondary">
                  <PriceCell value={row.priceSocio} />
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 border-t border-border/50 py-1.5">
                <dt className="text-muted-foreground">No socios</dt>
                <dd className="font-medium text-secondary">
                  <PriceCell value={row.priceNoSocio} />
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
