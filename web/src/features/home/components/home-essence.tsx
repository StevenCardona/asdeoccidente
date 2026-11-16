import { SafeImage } from "@/shared/components/safe-image";
import type { HomeEssenceItem } from "@/features/home/models/home";
import { resolveLucideIcon } from "@/features/home/utils/icons";

type HomeEssenceProps = {
  items: HomeEssenceItem[];
};

const beatImages = [
  "/imgs/escuela1.jpg",
  "/imgs/escuela2.jpg",
  "/imgs/escuela3.jpg",
  "/imgs/escuela5.jpg",
] as const;

export function HomeEssence({ items }: HomeEssenceProps) {
  if (items.length === 0) return null;

  return (
    <section className="bg-background px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Esencia
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              Caballo, método y comunidad
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Así entendemos la chalanería en el Valle: presencia, respeto por
              el animal y maestros cerca de ti.
            </p>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-10">
              {items.map((item) => {
                const Icon = resolveLucideIcon(item.icon);
                return (
                  <li
                    key={item.title}
                    className="border-l-2 border-primary/80 pl-4"
                  >
                    <div className="flex items-center gap-2">
                      {Icon ? (
                        <Icon
                          className="h-5 w-5 shrink-0 text-primary"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      ) : null}
                      <h3 className="font-display text-lg font-semibold text-secondary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {beatImages.map((src) => (
              <SafeImage
                key={src}
                src={src}
                alt=""
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                wrapperClassName="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
