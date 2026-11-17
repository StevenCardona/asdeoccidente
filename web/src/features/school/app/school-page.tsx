"use client";

import { SchoolFaq } from "@/features/school/components/school-faq";
import { SchoolFees } from "@/features/school/components/school-fees";
import { SchoolGallery } from "@/features/school/components/school-gallery";
import { SchoolHero } from "@/features/school/components/school-hero";
import { SchoolHorses } from "@/features/school/components/school-horses";
import { SchoolMethod } from "@/features/school/components/school-method";
import { SchoolStaff } from "@/features/school/components/school-staff";
import { useSchoolContent } from "@/features/school/hooks/use-school";
import type { SchoolContent } from "@/features/school/models";
import type { SiteSettings } from "@/features/site/models";
import { Skeleton } from "@/shared/components/ui/skeleton";

type SchoolPageProps = {
  initialSchool?: SchoolContent;
  settings: SiteSettings;
};

export function SchoolPage({ initialSchool, settings }: SchoolPageProps) {
  const schoolQuery = useSchoolContent(initialSchool);
  const content = schoolQuery.data;
  const isBootstrapping = schoolQuery.isPending && !content;

  if (isBootstrapping || !content) {
    return (
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-16 md:px-8">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  return (
    <div>
      <SchoolHero content={content.hero} settings={settings} />
      <SchoolMethod content={content.method} />
      <SchoolHorses content={content.horses} />
      <SchoolGallery content={content.gallery} />
      <SchoolStaff content={content.staff} />
      <SchoolFees content={content.fees} settings={settings} />
      <SchoolFaq content={content.faq} />
    </div>
  );
}
