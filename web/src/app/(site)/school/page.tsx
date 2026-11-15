import type { Metadata } from "next";
import { SchoolPage } from "@/features/school/app/school-page";

export const metadata: Metadata = {
  title: "Escuela de chalanería",
};

export default function Page() {
  return <SchoolPage />;
}
