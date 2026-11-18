import {
  OfferStubRoute,
  generateOfferStubMetadata,
} from "@/features/offers/app/offer-stub-route";

export const revalidate = 60;

export async function generateMetadata() {
  return generateOfferStubMetadata("equinotherapy");
}

export default function Page() {
  return <OfferStubRoute id="equinotherapy" />;
}
