/** Shared horizontal padding for content sections. */
export const sectionPadX = "px-4 md:px-8";

/** Shared vertical padding for content sections. */
export const sectionPadY = "py-12 md:py-16";

/** Slightly tighter vertical rhythm for denser blocks. */
export const sectionPadYTight = "py-10 md:py-12";

/** Combined section padding helper. */
export function sectionClass(
  variant: "plain" | "muted" | "surface" = "plain",
  tight = false,
): string {
  const bg =
    variant === "muted"
      ? "bg-muted/40"
      : variant === "surface"
        ? "bg-surface"
        : "bg-background";
  return [bg, sectionPadX, tight ? sectionPadYTight : sectionPadY].join(" ");
}
