"use client";

import { useState, type FormEvent } from "react";
import type { SiteSettings, WhatsappTopic } from "@/features/site/models";
import { Button } from "@/shared/components/ui/button";

const TOPIC_KEYS: WhatsappTopic[] = [
  "school",
  "fairs",
  "venue",
  "membership",
  "equinotherapy",
  "general",
];

type ContactMiniFormProps = {
  settings: SiteSettings;
};

export function ContactMiniForm({ settings }: ContactMiniFormProps) {
  const ui = settings.ui;
  const topics = TOPIC_KEYS.map((value) => ({
    value,
    label: ui.contactTopicLabels[value],
  })).filter((item) => item.label.trim());

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState<WhatsappTopic>(
    topics[0]?.value ?? "general",
  );
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = settings.email.trim();
    if (!email) return;

    const topicLabel =
      topics.find((item) => item.value === topic)?.label ?? topic;
    const subject = encodeURIComponent(
      `${settings.name.trim() || "Consulta"} — ${topicLabel}`,
    );
    const bodyLines = [
      settings.whatsappMessages[topic],
      "",
      name.trim() ? `${ui.contactNameLabel || "Nombre"}: ${name.trim()}` : null,
      phone.trim()
        ? `${ui.contactPhoneLabel || "Teléfono"}: ${phone.trim()}`
        : null,
      `${ui.contactTopicLabel || "Motivo"}: ${topicLabel}`,
      message.trim()
        ? `${ui.contactMessageLabel || "Mensaje"}: ${message.trim()}`
        : null,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  if (!settings.email.trim() && !ui.contactFormTitle.trim()) {
    return null;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full flex-col justify-between space-y-4 rounded-lg border border-border bg-background p-5 md:p-6"
    >
      <div className="space-y-4">
        <div>
          {ui.contactFormTitle.trim() ? (
            <h3 className="font-display text-xl font-bold tracking-tight text-secondary md:text-2xl">
              {ui.contactFormTitle}
            </h3>
          ) : null}
          {ui.contactFormSubtitle.trim() ? (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {ui.contactFormSubtitle}
            </p>
          ) : null}
        </div>

        <div>
          {ui.contactNameLabel.trim() ? (
            <label
              htmlFor="contact-name"
              className="text-xs font-semibold uppercase tracking-wide text-secondary"
            >
              {ui.contactNameLabel}
            </label>
          ) : null}
          <input
            id="contact-name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
            placeholder={ui.contactNamePlaceholder}
            autoComplete="name"
          />
        </div>

        <div>
          {ui.contactPhoneLabel.trim() ? (
            <label
              htmlFor="contact-phone"
              className="text-xs font-semibold uppercase tracking-wide text-secondary"
            >
              {ui.contactPhoneLabel}
            </label>
          ) : null}
          <input
            id="contact-phone"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
            placeholder={ui.contactPhonePlaceholder}
            autoComplete="tel"
            inputMode="tel"
          />
        </div>

        {topics.length > 0 ? (
          <div>
            {ui.contactTopicLabel.trim() ? (
              <label
                htmlFor="contact-topic"
                className="text-xs font-semibold uppercase tracking-wide text-secondary"
              >
                {ui.contactTopicLabel}
              </label>
            ) : null}
            <select
              id="contact-topic"
              name="topic"
              value={topic}
              onChange={(event) =>
                setTopic(event.target.value as WhatsappTopic)
              }
              className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {topics.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <div>
          {ui.contactMessageLabel.trim() ? (
            <label
              htmlFor="contact-message"
              className="text-xs font-semibold uppercase tracking-wide text-secondary"
            >
              {ui.contactMessageLabel}
            </label>
          ) : null}
          <textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={3}
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
            placeholder={ui.contactMessagePlaceholder}
          />
        </div>
      </div>

      <div className="space-y-4 pt-2">
        {ui.contactSubmitLabel.trim() ? (
          <Button type="submit" variant="primary" size="lg" className="w-full">
            {ui.contactSubmitLabel}
          </Button>
        ) : null}
      </div>
    </form>
  );
}
