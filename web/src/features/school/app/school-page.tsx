import { SchoolFaq } from "@/features/school/components/school-faq";
import { SchoolFees } from "@/features/school/components/school-fees";
import { SchoolGallery } from "@/features/school/components/school-gallery";
import { SchoolHero } from "@/features/school/components/school-hero";
import { SchoolHorses } from "@/features/school/components/school-horses";
import { SchoolMethod } from "@/features/school/components/school-method";
import { SchoolStaff } from "@/features/school/components/school-staff";
import { schoolContent } from "@/features/school/models/school";

export function SchoolPage() {
  const content = schoolContent;

  return (
    <div>
      <SchoolHero content={content.hero} />
      <SchoolMethod content={content.method} />
      <SchoolHorses content={content.horses} />
      <SchoolGallery content={content.gallery} />
      <SchoolStaff content={content.staff} />
      <SchoolFees content={content.fees} />
      <SchoolFaq content={content.faq} />
    </div>
  );
}
