import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import type { SchoolContent } from "@/features/school/models";

type SchoolFaqProps = {
  content: SchoolContent["faq"];
};

export function SchoolFaq({ content }: SchoolFaqProps) {
  return (
    <section className="bg-background px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {content.subtitle}
        </p>

        <Accordion type="single" collapsible className="mt-8">
          {content.items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
