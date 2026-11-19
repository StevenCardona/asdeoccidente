/**
 * Shared Sanity → UI mappers for section intros and review lists.
 * Feature maps should use these instead of duplicating trim/filter logic.
 */

export type SectionIntroInput = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
} | null | undefined;

export type SectionIntro = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type ReviewInput = {
  name?: string;
  place?: string;
  rating?: number;
  text?: string;
} | null | undefined;

export type ReviewItem = {
  name: string;
  place: string;
  rating: number;
  text: string;
};

/** Maps a CMS sectionIntro object to trimmed strings (empty when missing). */
export function mapSectionIntro(intro: SectionIntroInput): SectionIntro {
  return {
    eyebrow: intro?.eyebrow?.trim() || "",
    title: intro?.title?.trim() || "",
    subtitle: intro?.subtitle?.trim() || "",
  };
}

/** Maps CMS review rows; drops items without name+text. */
export function mapReviewItems(
  reviews: ReviewInput[] | null | undefined,
): ReviewItem[] {
  const result: ReviewItem[] = [];
  for (const review of reviews ?? []) {
    const name = review?.name?.trim();
    const text = review?.text?.trim();
    if (!name || !text) continue;
    const rating =
      typeof review?.rating === "number" && Number.isFinite(review.rating)
        ? Math.min(5, Math.max(1, Math.round(review.rating)))
        : 5;
    result.push({
      name,
      place: review?.place?.trim() || "",
      rating,
      text,
    });
  }
  return result;
}
