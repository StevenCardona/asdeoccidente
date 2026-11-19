import type { ServicesContent } from "@/features/services/models";
import { PageHero } from "@/shared/components/page-hero";

type ServicesHeroProps = {
  hero: ServicesContent["hero"];
};

export function ServicesHero({ hero }: ServicesHeroProps) {
  return (
    <PageHero
      size="compact"
      badge={hero.badge}
      title={hero.title}
      subtitle={hero.subtitle}
      imageUrl={hero.image}
      imageAlt={hero.imageAlt}
    />
  );
}
