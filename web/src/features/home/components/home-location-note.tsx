type HomeLocationNoteProps = {
  address: string;
};

/** Body copy with sede location for local SEO (not a heading or hero hook). */
export function HomeLocationNote({ address }: HomeLocationNoteProps) {
  const trimmed = address.trim();
  if (!trimmed) return null;

  return (
    <section className="border-b border-border bg-background px-5 py-8 md:px-12">
      <p className="mx-auto max-w-7xl text-sm leading-relaxed text-muted-foreground md:text-base">
        Nuestra sede está en {trimmed}.
      </p>
    </section>
  );
}
