import {
  OfferStubRoute,
  generateOfferStubMetadata,
} from "@/features/offers/app/offer-stub-route";

export const revalidate = 60;

export async function generateMetadata() {
  return generateOfferStubMetadata("membership");
}

export default function Page() {
  return <OfferStubRoute id="membership" />;
}
