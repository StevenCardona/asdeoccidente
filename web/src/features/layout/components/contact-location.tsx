"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { ContactMiniForm } from "@/features/layout/components/contact-mini-form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { siteConfig } from "@/shared/config/site";

export function ContactLocation() {
  const mapSrc = siteConfig.mapEmbedUrl;
  const videoSrc = siteConfig.directionsVideoUrl.trim();
  const hasVideo = Boolean(videoSrc);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      className="bg-background"
      aria-labelledby="contact-location-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex min-h-0 flex-col gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-tertiary">
                Contacto y ubicación
              </p>
              <h2
                id="contact-location-heading"
                className="mt-2 font-display text-2xl font-bold text-secondary md:text-3xl"
              >
                Escríbenos y ubica la sede
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Déjanos tus datos y te respondemos por correo.
              </p>
            </div>

            <div className="h-64 min-h-[16rem] flex-1 overflow-hidden rounded-lg border border-border bg-surface md:h-72">
              <iframe
                title="Mapa de la sede Asdeoccidente"
                src={mapSrc}
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {hasVideo ? (
              <>
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="group relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-secondary text-left"
                  aria-label="Ver video cómo llegar a la sede"
                >
                  <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20" />
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
                      <Play className="h-6 w-6 fill-current" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold">
                      Cómo llegar a la sede
                    </span>
                  </span>
                </button>

                <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                  <DialogContent className="w-[min(70vw,56rem)] max-w-[min(70vw,56rem)] border-0 bg-secondary p-3 pt-10 text-secondary-foreground shadow-2xl [&_button.absolute]:text-white">
                    <DialogTitle className="sr-only">
                      Cómo llegar a la sede
                    </DialogTitle>
                    <div className="aspect-video max-h-[70vh] w-full overflow-hidden rounded-md">
                      {videoOpen ? (
                        <iframe
                          title="Cómo llegar a la sede"
                          src={videoSrc}
                          className="h-full w-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : null}
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-surface px-4 text-center text-sm text-muted-foreground">
                <Play className="h-5 w-5 text-primary" aria-hidden />
                <span>Video “Cómo llegar” pendiente de URL.</span>
              </div>
            )}
          </div>

          <div className="flex h-full flex-col">
            <ContactMiniForm />
          </div>
        </div>
      </div>
    </section>
  );
}
