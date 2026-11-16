import { ArrowRight } from "lucide-react";
import { SafeImage } from "@/shared/components/safe-image";

const services = [
  {
    title: "Trámites genealógicos",
    description:
      "Acompañamos el registro y los trámites de tu ejemplar con claridad y respaldo institucional.",
    cta: "Próximamente",
    image: "/imgs/lugar.webp",
    imageAlt: "Instalaciones de Asdeoccidente",
  },
  {
    title: "Escuela de chalanería",
    description:
      "Clases totalmente personalizadas. Caballo y equipo los pone la escuela; tu primera clase es gratis.",
    cta: "Ver escuela",
    image: "/imgs/escuela1.jpg",
    imageAlt: "Clase de chalanería en Asdeoccidente",
  },
  {
    title: "Equinoterapia",
    description:
      "Espacio terapéutico con el caballo, con lenguaje cuidadoso y acompañamiento profesional.",
    cta: "Próximamente",
    image: "/imgs/escuela3.jpg",
    imageAlt: "Actividad equina en la sede",
  },
  {
    title: "Alquiler de espacios",
    description:
      "Sede campestre para ferias, eventos y encuentros. Cotización directa cuando la página esté lista.",
    cta: "Próximamente",
    image: "/imgs/banner2.jpg",
    imageAlt: "Coliseo y ambiente de feria",
  },
] as const;

export function HomeServices() {
  return (
    <section className="bg-background px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
          Qué ofrecemos
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
          Servicios para criadores y aficionados
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Escuela y ferias ya tienen camino en el sitio. El resto llega por
          fases; aquí puedes ver el panorama completo.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className="overflow-hidden border border-border bg-background"
            >
              <SafeImage
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                wrapperClassName="aspect-[16/10]"
              />
              <div className="p-5 md:p-6">
                <h3 className="font-display text-lg font-semibold text-secondary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary/70">
                  {service.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
