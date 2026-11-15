import { MapPin, Phone, Mail, MessageCircle, Play } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { buildWhatsAppUrl, siteConfig } from "@/shared/config/site";

export function ContactLocation() {
  const hasMap = Boolean(siteConfig.mapEmbedUrl);
  const hasVideo = Boolean(siteConfig.directionsVideoUrl);

  return (
    <section
      className="border-t border-border bg-surface"
      aria-labelledby="contact-location-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-12 md:py-16">
        <p className="text-xs font-bold uppercase tracking-wider text-tertiary">
          Contacto y ubicación
        </p>
        <h2
          id="contact-location-heading"
          className="mt-2 font-display text-2xl font-bold text-secondary md:text-3xl"
        >
          Visítanos o escríbenos
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-sm text-muted-foreground">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>{siteConfig.address}</span>
            </p>
            {siteConfig.phonePbx ? (
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>
                  PBX {siteConfig.phonePbx}
                  {siteConfig.phoneMobile
                    ? ` · Cel ${siteConfig.phoneMobile}`
                    : null}
                  {siteConfig.phoneMobileAlt
                    ? ` / ${siteConfig.phoneMobileAlt}`
                    : null}
                </span>
              </p>
            ) : null}
            {siteConfig.email ? (
              <p className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-secondary underline-offset-2 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            ) : null}

            <Button asChild variant="whatsapp" className="mt-2">
              <a
                href={buildWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Escríbenos por WhatsApp
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            {hasMap ? (
              <div className="overflow-hidden rounded-lg border border-border bg-background">
                <iframe
                  title="Mapa de la sede"
                  src={siteConfig.mapEmbedUrl}
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div className="flex h-56 items-center justify-center rounded-lg border border-dashed border-border bg-background px-4 text-center text-sm text-muted-foreground">
                Mapa disponible cuando configuremos la URL de embed.
              </div>
            )}

            {hasVideo ? (
              <div className="overflow-hidden rounded-lg border border-border bg-background">
                <iframe
                  title="Cómo llegar a la sede"
                  src={siteConfig.directionsVideoUrl}
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-background px-4 py-3 text-sm text-muted-foreground">
                <Play className="h-4 w-4 text-primary" aria-hidden />
                Video “Cómo llegar” pendiente de URL.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
