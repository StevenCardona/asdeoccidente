import { cache } from "react";
import { getSanityDataClient } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { emptyMembershipContent } from "./defaults";
import { isMembershipContentEmpty, mergeMembership } from "./map";
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
export { emptyMembershipContent, defaultMembershipContent } from "./defaults";
export { isMembershipContentEmpty } from "./map";

export const fetchMembershipContent = cache(
  async (): Promise<MembershipContent> => {
    const client = getSanityDataClient();
    if (!client) return emptyMembershipContent;
    try {
      const doc = await sanityFetch<MembershipPageDoc | null>(
        client,
        membershipPageQuery,
      );
      return mergeMembership(doc);
    } catch (error) {
      console.error("[sanity] fetchMembershipContent failed", error);
      return emptyMembershipContent;
    }
  },
);
