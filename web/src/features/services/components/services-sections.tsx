"use client";

import { useState } from "react";
import { ServicesSectionBlock } from "@/features/services/components/services-section-block";
import { ServicesSectionNav } from "@/features/services/components/services-section-nav";
import type { ServicesSection } from "@/features/services/models";

type ServicesSectionsProps = {
  sections: ServicesSection[];
};

export function ServicesSections({ sections }: ServicesSectionsProps) {
  const [activeSlug, setActiveSlug] = useState<"all" | string>("all");

  const visible =
    activeSlug === "all"
      ? sections
      : sections.filter((section) => section.slug === activeSlug);

  return (
    <>
      <ServicesSectionNav
        sections={sections}
        activeSlug={activeSlug}
        onSelect={setActiveSlug}
      />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {visible.map((section) => (
          <ServicesSectionBlock key={section.slug} section={section} />
        ))}
      </div>
    </>
  );
}
