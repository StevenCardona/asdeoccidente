import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { mergeMembership } from "./map";
import { membershipPageQuery, type MembershipPageDoc } from "./query";
import type { MembershipContent } from "./types";

export type {
  MembershipAbout,
  MembershipBenefit,
  MembershipBenefitBlock,
  MembershipContent,
  MembershipCostRow,
  MembershipCosts,
  MembershipHero,
  MembershipImage,
  MembershipPillar,
  MembershipRequirements,
  MembershipReview,
  MembershipSectionIntro,
} from "./types";
export { defaultMembershipContent } from "./defaults";

export const fetchMembershipContent = cache(
  async (): Promise<MembershipContent> => {
    const client = getSanityDataClient();
    if (!client) return mergeMembership(null);
    try {
      const doc = await sanityFetch<MembershipPageDoc | null>(
        client,
        membershipPageQuery,
      );
      return mergeMembership(doc);
    } catch (error) {
      console.error("[sanity] fetchMembershipContent failed", error);
      return mergeMembership(null);
    }
  },
);
