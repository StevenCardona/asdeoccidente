import { DirectoryContactTeamSection } from "@/features/directory/components/directory-contact-team";
import { DirectoryHero } from "@/features/directory/components/directory-hero";
import { DirectoryTable } from "@/features/directory/components/directory-table";
import { directoryContactTeam } from "@/features/directory/models/contact-team";
import type { DirectoryPageContent } from "@/features/directory/models";

type DirectoryPageProps = {
  content: DirectoryPageContent;
};

export function DirectoryPage({ content }: DirectoryPageProps) {
  return (
    <div>
      <DirectoryHero hero={content.hero} />
      <DirectoryTable
        datasets={content.datasets}
        emptyTitle={content.emptyTitle}
        emptySubtitle={content.emptySubtitle}
      />
      <DirectoryContactTeamSection content={directoryContactTeam} />
    </div>
  );
}
