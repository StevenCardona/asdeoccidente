import Image from "next/image";
import { LoaderCircle } from "lucide-react";

/** Brief branded wait while the route RSC resolves — not until all images paint. */
export function SiteRouteLoading() {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-5"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="relative mb-5 h-16 w-16 overflow-hidden md:h-20 md:w-20">
        <Image
          src="/brand/logo.jpg"
          alt=""
          fill
          className="object-contain"
          sizes="80px"
          priority
        />
      </span>
      <p className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-secondary">
        Asdeoccidente
      </p>
      <LoaderCircle
        className="mt-4 h-6 w-6 animate-spin text-primary"
        aria-hidden
      />
      <span className="sr-only">Cargando</span>
    </div>
  );
}
