import { FileDown } from "lucide-react";
import { ServicesFeeTable } from "@/features/services/components/services-fee-table";
import type { ServicesSection } from "@/features/services/models";
import { resolveServiceIcon } from "@/features/services/utils/icons";
import { Button } from "@/shared/components/ui/button";

type ServicesSectionBlockProps = {
  section: ServicesSection;
};

export function ServicesSectionBlock({ section }: ServicesSectionBlockProps) {
  const Icon = resolveServiceIcon(section.icon);
  const hasFees = section.feeRows.length > 0;
  const hasDownloads = section.downloads.length > 0;

  return (
    <section
      id={section.slug}
      className="scroll-mt-28 border-b border-border py-8 md:scroll-mt-32 md:py-10"
    >
      <div className="flex items-center gap-2 md:gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-10 md:w-10 md:rounded-2xl">
          <Icon
            className="h-4 w-4 md:h-5 md:w-5"
            aria-hidden
            strokeWidth={1.75}
          />
        </div>
        <h2 className="min-w-0 font-display text-xl font-bold tracking-tight text-secondary md:text-2xl">
          {section.title}
        </h2>
      </div>

      {section.description.trim() ? (
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {section.description}
        </p>
      ) : null}

      {hasFees ? <ServicesFeeTable rows={section.feeRows} /> : null}

      {hasDownloads ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {section.downloads.map((file, index) => {
            const key = `${file.label}-${index}`;
            if (file.fileUrl.trim()) {
              return (
                <Button key={key} asChild variant="primary" size="sm">
                  <a
                    href={file.fileUrl.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileDown className="h-4 w-4" aria-hidden />
                    {file.label}
                  </a>
                </Button>
              );
            }
            return (
              <Button
                key={key}
                type="button"
                variant="primary"
                size="sm"
                disabled
              >
                <FileDown className="h-4 w-4" aria-hidden />
                {file.label}
              </Button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
