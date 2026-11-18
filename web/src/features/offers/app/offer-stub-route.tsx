import type { Metadata } from "next";
import { OfferStubPage } from "@/features/offers/components/offer-stub-page";
import {
  offerStubs,
  type OfferStubId,
} from "@/features/offers/models/stubs";
import { getSiteSettings } from "@/features/site/models";
import { PageJsonLd } from "@/shared/components/page-json-ld";
import { buildPageMetadata } from "@/shared/lib/metadata";

export async function generateOfferStubMetadata(
  id: OfferStubId,
): Promise<Metadata> {
  const stub = offerStubs[id];
  const settings = await getSiteSettings();
  return buildPageMetadata({
    path: stub.path,
    title: stub.seoTitle,
    description: stub.seoDescription,
    siteName: settings.name,
  });
}

export async function OfferStubRoute({ id }: { id: OfferStubId }) {
  const stub = offerStubs[id];
  const settings = await getSiteSettings();

  return (
    <>
      <PageJsonLd
        path={stub.path}
        title={stub.seoTitle}
        description={stub.seoDescription}
        siteName={settings.name}
      />
      <OfferStubPage stub={stub} settings={settings} />
    </>
  );
}
