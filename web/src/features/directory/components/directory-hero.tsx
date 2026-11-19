import type { DirectoryHero as DirectoryHeroContent } from "@/features/directory/models";
import { PageHero } from "@/shared/components/page-hero";

type DirectoryHeroProps = {
  hero: DirectoryHeroContent;
};

export function DirectoryHero({ hero }: DirectoryHeroProps) {
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
