"use client";

import { HomeEssence } from "@/features/home/components/home-essence";
import { HomeGaits } from "@/features/home/components/home-gaits";
import { HomeHero } from "@/features/home/components/home-hero";
import { HomePageSkeleton } from "@/features/home/components/home-page-skeleton";
import { HomePhotoGallery } from "@/features/home/components/home-photo-gallery";
import { HomeServices } from "@/features/home/components/home-services";
import { HomeSocialVideos } from "@/features/home/components/home-social-videos";
import { HomeStats } from "@/features/home/components/home-stats";
import { useHomeContent } from "@/features/home/hooks/use-home";
import type { HomeContent } from "@/features/home/models/home";

type HomePageProps = {
  initialHome?: HomeContent;
};

export function HomePage({ initialHome }: HomePageProps) {
  const homeQuery = useHomeContent(initialHome);
  const home = homeQuery.data;
  const isBootstrapping = homeQuery.isPending && !home;

  if (isBootstrapping || !home) {
    return <HomePageSkeleton />;
  }

  return (
    <div>
      <HomeHero
        title={home.heroTitle}
        subtitle={home.heroSubtitle}
        primaryCta={home.primaryCta}
        secondaryCta={home.secondaryCta}
        heroImage={home.heroImage}
      />
      <HomeEssence items={home.essenceItems} />
      <HomeStats show={home.showStats} stats={home.stats} />
      <HomeServices />
      <HomePhotoGallery />
      <HomeGaits />
      <HomeSocialVideos videos={home.socialVideos} />
    </div>
  );
}
