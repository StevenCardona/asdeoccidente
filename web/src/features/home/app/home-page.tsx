"use client";

import { HomeEssence } from "@/features/home/components/home-essence";
import { HomeGaits } from "@/features/home/components/home-gaits";
import { HomeHero } from "@/features/home/components/home-hero";
import { HomeLocationNote } from "@/features/home/components/home-location-note";
import { HomePageSkeleton } from "@/features/home/components/home-page-skeleton";
import { HomePhotoGallery } from "@/features/home/components/home-photo-gallery";
import { HomeServices } from "@/features/home/components/home-services";
import { HomeSocialVideos } from "@/features/home/components/home-social-videos";
import { HomeStats } from "@/features/home/components/home-stats";
import { HomeUnavailable } from "@/features/home/components/home-unavailable";
import { useHomeContent } from "@/features/home/hooks/use-home";
import {
  isHomeContentEmpty,
  type HomeContent,
} from "@/features/home/models";
import type { SiteSettings } from "@/features/site/models";

type HomePageProps = {
  initialHome?: HomeContent;
  settings: SiteSettings;
};

export function HomePage({ initialHome, settings }: HomePageProps) {
  const homeQuery = useHomeContent(initialHome);
  const home = homeQuery.data;
  const isBootstrapping = homeQuery.isPending && !home;

  if (isBootstrapping || !home) {
    return <HomePageSkeleton />;
  }

  if (isHomeContentEmpty(home)) {
    return <HomeUnavailable siteName={settings.name} />;
  }

  return (
    <div>
      <HomeHero
        title={home.heroTitle}
        subtitle={home.heroSubtitle}
        primaryCta={home.primaryCta}
        secondaryCta={home.secondaryCta}
        heroImage={home.heroImage}
        settings={settings}
      />
      <HomeLocationNote address={settings.address} />
      <HomeEssence
        intro={home.essence.intro}
        items={home.essence.items}
        photos={home.essence.photos}
      />

      <HomeStats
        show={home.showStats}
        intro={home.statsIntro}
        stats={home.stats}
      />
      <HomeServices intro={home.services.intro} items={home.services.items} />
      <HomePhotoGallery
        intro={home.gallery.intro}
        photos={home.gallery.photos}
      />
      <HomeGaits intro={home.gaits.intro} items={home.gaits.items} />
      <HomeSocialVideos intro={home.videosIntro} videos={home.socialVideos} />
    </div>
  );
}
