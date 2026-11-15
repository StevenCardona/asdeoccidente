import type { Metadata } from "next";
import { FairsListPage } from "@/features/fairs/app/fairs-list-page";

export const metadata: Metadata = {
  title: "Ferias y eventos",
};

export default function Page() {
  return <FairsListPage />;
}
