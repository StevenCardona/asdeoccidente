"use client";

import { useState, type FormEvent } from "react";
import type { SiteSettings, WhatsappTopic } from "@/features/site/models";
import { Button } from "@/shared/components/ui/button";

const topics: Array<{ value: WhatsappTopic; label: string }> = [
  { value: "school", label: "Escuela / clase gratis" },
  { value: "fairs", label: "Ferias" },
  { value: "general", label: "Consulta general" },
];

type ContactMiniFormProps = {
  settings: SiteSettings;
};

export function ContactMiniForm({ settings }: ContactMiniFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState<WhatsappTopic>("school");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = settings.email.trim();
    if (!email) return;

    const topicLabel =
      topics.find((item) => item.value === topic)?.label ?? topic;
    const subject = encodeURIComponent(
      `Consulta Asdeoccidente — ${topicLabel}`,
    );
    const bodyLines = [
      settings.whatsappMessages[topic],
      "",
      name.trim() ? `Nombre: ${name.trim()}` : null,
      phone.trim() ? `Teléfono: ${phone.trim()}` : null,
      `Motivo: ${topicLabel}`,
      message.trim() ? `Mensaje: ${message.trim()}` : null,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full flex-col justify-between space-y-4 rounded-lg border border-border bg-background p-5 md:p-6"
    >
      <div className="space-y-4">
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight text-secondary md:text-2xl">
            Cuéntanos qué necesitas
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Te respondemos por correo.
          </p>
        </div>

        <div>
          <label
            htmlFor="contact-name"
            className="text-xs font-semibold uppercase tracking-wide text-secondary"
          >
            ¿Cómo te llamas?
          </label>
          <input
            id="contact-name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
            placeholder="Tu nombre"
            autoComplete="name"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="text-xs font-semibold uppercase tracking-wide text-secondary"
          >
            ¿A qué número te escribimos?
          </label>
          <input
            id="contact-phone"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
            placeholder="Celular o teléfono"
            autoComplete="tel"
            inputMode="tel"
          />
        </div>

        <div>
          <label
            htmlFor="contact-topic"
            className="text-xs font-semibold uppercase tracking-wide text-secondary"
          >
            Motivo
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value as WhatsappTopic)}
            className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {topics.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-xs font-semibold uppercase tracking-wide text-secondary"
          >
            Mensaje (opcional)
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={3}
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
            placeholder="Cuéntanos en pocas líneas"
          />
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
            Después de enviar
          </p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
            <li>Leemos cada mensaje y te contactamos pronto.</li>
            <li>Tu consulta es importante para nosotros.</li>
          </ul>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Enviar mensaje
        </Button>
      </div>
    </form>
  );
}
