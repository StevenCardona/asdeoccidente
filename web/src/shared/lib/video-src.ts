/** Normalize common YouTube share links to an embeddable iframe src. */
export function toYouTubeEmbedUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (url.pathname.startsWith("/embed/")) {
        return trimmed;
      }
      const id = url.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      const parts = url.pathname.split("/").filter(Boolean);
      if (parts[0] === "shorts" && parts[1]) {
        return `https://www.youtube.com/embed/${parts[1]}`;
      }
    }
  } catch {
    return null;
  }

  return null;
}

/**
 * For iframe embeds: prefer YouTube embed form when the URL is YouTube;
 * otherwise return the trimmed URL (e.g. already an embed src).
 */
export function toEmbeddableVideoUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  return toYouTubeEmbedUrl(trimmed) ?? trimmed;
}
