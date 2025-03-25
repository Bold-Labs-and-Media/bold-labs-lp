import { faqData_EN, faqData_PT } from "@/lib/faq-data";
import parser from "html-react-parser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type Props = {
  lang: "en" | "pt";
};

export default function FAQ({ lang }: Props) {
  const faq = lang === "en" ? faqData_EN : faqData_PT;

  return (
    <Accordion type="single" collapsible className="flex-1">
      {faq.map(({ question, answer }) => (
        <AccordionItem
          key={question}
          className="border-b-txt-500"
          value={question}
        >
          <AccordionTrigger className="text-txt-100 group text-lg font-extrabold">
            {question}
          </AccordionTrigger>
          <AccordionContent className="prose text-txt-700 mt-3.5 max-w-2xl text-base">
            {parser(answer)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
