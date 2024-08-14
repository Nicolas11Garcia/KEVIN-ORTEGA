import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FrequentlyAskedQuestionsC = () => {
  return (
    <Accordion
      className="flex flex-col gap-4"
      type="single"
      collapsible
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className=" rounded-xl p-1">
        <AccordionTrigger className="hover:no-underline text-lg text-negro">
          ¿Texto?
        </AccordionTrigger>
        <AccordionContent className="text-plomo">texto</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className=" rounded-xl p-1">
        <AccordionTrigger className="hover:no-underline text-lg text-negro">
          ¿Texto?
        </AccordionTrigger>
        <AccordionContent className="text-plomo">texto</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className=" rounded-xl p-1">
        <AccordionTrigger className="hover:no-underline text-lg text-negro">
          ¿Texto?
        </AccordionTrigger>
        <AccordionContent className="text-plomo">texto</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className=" rounded-xl p-1">
        <AccordionTrigger className="hover:no-underline text-lg text-negro">
          ¿Texto?
        </AccordionTrigger>
        <AccordionContent className="text-plomo">texto</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
