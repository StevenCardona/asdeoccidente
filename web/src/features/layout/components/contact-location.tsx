"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { ContactMiniForm } from "@/features/layout/components/contact-mini-form";
import type { SiteSettings } from "@/features/site/models";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";

type ContactLocationProps = {
  settings: SiteSettings;
};

export function ContactLocation({ settings }: ContactLocationProps) {
  const mapSrc = settings.mapEmbedUrl;
  const video = settings.directionsVideo;
  const videoSrc = video.src.trim();
  const hasVideo = Boolean(videoSrc);
  const posterSrc = video.posterSrc?.trim() || "";
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="contacto"
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
                  className="group relative h-28 w-full cursor-pointer overflow-hidden rounded-lg border border-border bg-secondary text-left md:h-32"
                  aria-label="Ver video cómo llegar a la sede"
                >
                  {posterSrc ? (
                    <Image
                      src={posterSrc}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : null}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/25" />
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
                  <DialogContent
                    className={cn(
                      "border-0 bg-secondary p-2 pt-10 text-secondary-foreground shadow-2xl sm:p-3 sm:pt-10",
                      "w-[calc(100%-0.75rem)] max-w-[calc(100%-0.75rem)]",
                      "sm:w-[min(92vw,56rem)] sm:max-w-[min(92vw,56rem)]",
                      "[&_button.absolute]:text-white",
                    )}
                  >
                    <DialogTitle className="sr-only">
                      Cómo llegar a la sede
                    </DialogTitle>
                    <div
                      className={cn(
                        "mx-auto w-full overflow-hidden rounded-md bg-black",
                        "h-[min(78dvh,42rem)] sm:h-auto sm:max-h-[min(85dvh,56rem)] sm:aspect-video",
                      )}
                    >
                      {videoOpen ? (
                        video.kind === "file" ? (
                          <video
                            key={videoSrc}
                            src={videoSrc}
                            poster={posterSrc || undefined}
                            controls
                            playsInline
                            preload="metadata"
                            className="h-full w-full bg-black object-contain"
                          />
                        ) : (
                          <iframe
                            title="Cómo llegar a la sede"
                            src={videoSrc}
                            className="h-full w-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )
                      ) : null}
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            ) : null}
          </div>

          <div className="flex h-full flex-col">
            <ContactMiniForm settings={settings} />
          </div>
        </div>
      </div>
    </section>
  );
}
