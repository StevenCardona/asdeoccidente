import { WhatsAppIcon } from "@/shared/components/brand-icons";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl } from "@/shared/config/site";
import type { SiteSettings } from "@/features/site/models";
import type { OfferStub } from "@/features/offers/models/stubs";

type OfferStubPageProps = {
  stub: OfferStub;
  settings: SiteSettings;
};

export function OfferStubPage({ stub, settings }: OfferStubPageProps) {
  const whatsappHref = stub.whatsappText.trim()
    ? buildWhatsAppUrl(settings, "general", stub.whatsappText)
    : buildWhatsAppUrl(settings, "general");

  return (
    <section className="bg-background px-5 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {stub.eyebrow}
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
          {stub.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {stub.body}
        </p>
        {whatsappHref !== "#" ? (
          <div className="mt-8">
            <Button asChild variant="primary" size="lg">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                {stub.ctaLabel}
              </a>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
