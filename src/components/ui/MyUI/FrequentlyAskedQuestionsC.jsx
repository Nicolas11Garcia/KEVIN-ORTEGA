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
        <AccordionTrigger className="hover:no-underline text-start text-lg text-negro">
          ¿Qué hace un Core o Consejero Regional?
        </AccordionTrigger>
        <AccordionContent className="text-plomo text-base">
          Un Core o Consejero Regional es miembro del Consejo Regional, el
          órgano encargado de aprobar y modificar reglamentos y planes de
          desarrollo regional, incluidos los urbanísticos y presupuestarios.
          Este organismo resuelve la distribución de fondos nacionales, aprueba
          convenios y supervisa al Gobernador Regional. Además, autoriza la
          enajenación de bienes raíces y emite opiniones sobre modificaciones en
          la división política-administrativa de la región. También desempeña
          otras funciones según lo estipulado por la ley.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className=" rounded-xl p-1">
        <AccordionTrigger className="hover:no-underline text-start text-lg text-negro">
          ¿Cuántos Consejeros Regionales representan Rancagua?
        </AccordionTrigger>
        <AccordionContent className="text-plomo text-base">
          La ciudad de Rancagua pertenece a la división electoral Cachapoal 1 y
          está representada por 5 Consejeros Regionales
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className=" rounded-xl p-1">
        <AccordionTrigger className="text-start hover:no-underline text-lg text-negro">
          ¿Quién escoge a los Cores o Consejeros Regionales?
        </AccordionTrigger>
        <AccordionContent className="text-plomo text-base">
          Los Consejeros Regionales, o Cores, son elegidos por voto popular. Las
          próximas elecciones se llevarán a cabo el 26 y 27 de octubre de 2024.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className=" rounded-xl p-1">
        <AccordionTrigger className="hover:no-underline text-start text-lg text-negro">
          ¿Quiénes son los candidatos a Core o Consejeros Regionales por
          Rancagua?
        </AccordionTrigger>
        <AccordionContent className="text-plomo  text-base">
          Soy Kevin Ortega, candidato a CORE por Rancagua. Busco representar a
          nuestros vecinos en el Consejo Regional de O’Higgins con
          responsabilidad, siempre enfocado en el bienestar de la ciudad y su
          gente.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
