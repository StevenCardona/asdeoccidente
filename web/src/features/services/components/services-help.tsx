import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";
import type { SiteSettings } from "@/features/site/models";
import {
  REGISTROS_WHATSAPP_TEXT,
  type ServicesHelp,
} from "@/features/services/models";

type ServicesHelpProps = {
  help: ServicesHelp;
  settings: SiteSettings;
};

export function ServicesHelpBlock({ help, settings }: ServicesHelpProps) {
  const whatsappHref = buildWhatsAppUrl(
    settings,
    "general",
    REGISTROS_WHATSAPP_TEXT,
  );

  if (!help.title.trim() && !help.body.trim()) return null;

  return (
    <section className="border-t border-border bg-muted/40 px-4 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        {help.title.trim() ? (
          <h2 className="font-display text-xl font-bold tracking-tight text-secondary md:text-2xl">
            {help.title}
          </h2>
        ) : null}
        {help.body.trim() ? (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            {help.body}
          </p>
        ) : null}
        {whatsappHref !== "#" ? (
          <div className="mt-6 flex justify-center">
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                {help.ctaLabel.trim() || "Escribir por WhatsApp"}
              </a>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
