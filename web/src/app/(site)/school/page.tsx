import type { Metadata } from "next";
import { SchoolPage } from "@/features/school/app/school-page";
import { schoolContent } from "@/features/school/models/school";

export const metadata: Metadata = {
  title: schoolContent.seo.title,
  description: schoolContent.seo.description,
};

export default function Page() {
  return <SchoolPage />;
}
