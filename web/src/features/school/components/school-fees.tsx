import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";
import { formatCop, type SchoolContent } from "@/features/school/models/school";

type SchoolFeesProps = {
  content: SchoolContent["fees"];
};

export function SchoolFees({ content }: SchoolFeesProps) {
  const whatsappHref = buildWhatsAppUrl("school");

  return (
    <section
      id="tarifas"
      className="scroll-mt-24 bg-background px-4 py-14 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.subtitle}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {content.plans.map((plan) => (
            <li
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-xl border bg-background p-5 shadow-sm md:p-6",
                plan.featured
                  ? "border-primary ring-1 ring-primary"
                  : "border-border",
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                  Plan mensual recomendado
                </span>
              ) : null}

              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {plan.packageLabel}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-secondary">
                {plan.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <dl className="mt-5 space-y-3 border-t border-border pt-4">
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Socio
                  </dt>
                  <dd className="font-display text-lg font-bold text-secondary">
                    {formatCop(plan.prices.socio)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    No socio
                  </dt>
                  <dd className="font-display text-base font-semibold text-secondary">
                    {formatCop(plan.prices.noSocio)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Hijo montador
                  </dt>
                  <dd className="font-display text-base font-semibold text-secondary">
                    {formatCop(plan.prices.hijoMontador)}
                  </dd>
                </div>
              </dl>

              <div className="mt-auto pt-6">
                {whatsappHref ? (
                  <Button
                    asChild
                    variant={plan.featured ? "primary" : "secondary"}
                    className={cn(
                      "w-full",
                      !plan.featured &&
                        "bg-[#cbdbf5] text-secondary hover:bg-[#b7cef0]",
                    )}
                  >
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      {plan.ctaLabel}
                    </a>
                  </Button>
                ) : (
                  <Button variant="primary" className="w-full" disabled>
                    {plan.ctaLabel}
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm font-semibold text-primary">
          {content.enrollmentNote}
        </p>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {content.benefitsNote}
        </p>
      </div>
    </section>
  );
}
