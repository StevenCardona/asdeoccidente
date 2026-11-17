import type { EventFaqItem, EventsListContent } from "@/features/events/models";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";

type EventsFaqProps = {
  intro: EventsListContent["faqIntro"];
  items: EventFaqItem[];
};

export function EventsFaq({ intro, items }: EventsFaqProps) {
  if (items.length === 0) return null;

  return (
    <section className="border-t border-border bg-background px-5 py-14 md:px-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {intro.eyebrow.trim() ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {intro.eyebrow}
          </p>
        ) : null}
        {intro.title.trim() ? (
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
            {intro.title}
          </h2>
        ) : null}
        {intro.subtitle.trim() ? (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {intro.subtitle}
          </p>
        ) : null}

        <Accordion type="single" collapsible className="mt-8">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`events-faq-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
