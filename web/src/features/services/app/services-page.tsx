import { ServicesHero } from "@/features/services/components/services-hero";
import { ServicesSections } from "@/features/services/components/services-sections";
import type { ServicesContent } from "@/features/services/models";

type ServicesPageProps = {
  content: ServicesContent;
};

export function ServicesPage({ content }: ServicesPageProps) {
  return (
    <div>
      <ServicesHero hero={content.hero} />
      <ServicesSections sections={content.sections} />
    </div>
  );
}
