import { Mail, Phone } from "lucide-react";
import type { DirectoryContactTeam } from "@/features/directory/models/contact-team";
import { sectionPadX, sectionPadY } from "@/shared/lib/section";

type DirectoryContactTeamProps = {
  content: DirectoryContactTeam;
};

function phoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits ? `tel:+${digits.startsWith("57") ? digits : `57${digits}`}` : "";
}

export function DirectoryContactTeamSection({
  content,
}: DirectoryContactTeamProps) {
  if (content.members.length === 0) return null;

  return (
    <section className={`bg-surface ${sectionPadX} ${sectionPadY}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.subtitle}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.members.map((member) => (
            <li
              key={`${member.role}-${member.email}`}
              className="rounded-lg border border-border bg-background p-5 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                {member.role}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold text-secondary">
                {member.name}
              </h3>
              {member.email ? (
                <a
                  href={`mailto:${member.email}`}
                  className="mt-3 flex items-start gap-2 text-sm text-muted-foreground hover:text-secondary"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span className="break-all">{member.email}</span>
                </a>
              ) : null}
              {member.phones.length > 0 ? (
                <ul className="mt-2 space-y-1.5">
                  {member.phones.map((phone) => {
                    const href = phoneHref(phone);
                    return (
                      <li key={phone}>
                        {href ? (
                          <a
                            href={href}
                            className="flex items-start gap-2 text-sm text-muted-foreground hover:text-secondary"
                          >
                            <Phone
                              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                              aria-hidden
                            />
                            <span>{phone}</span>
                          </a>
                        ) : (
                          <span className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Phone
                              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                              aria-hidden
                            />
                            <span>{phone}</span>
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
