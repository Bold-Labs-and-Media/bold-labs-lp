import { cn, useTranslations } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";

type Props = {
  lang: "en" | "pt";
};

const DUMMY_IMAGES = [
  "https://images.unsplash.com/photo-1507461476191-0ed4f9f18533?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519635451045-a41d4361d495?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1611693196679-c1f358840cc6?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Services({ lang }: Props) {
  const t = useCallback(useTranslations(lang), []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const services = [t("services.1"), t("services.2"), t("services.3")];

  return (
    <>
      <div className="row-span-2 mt-6 md:mt-0">
        <p className="text-xxs text-center leading-[170%] md:text-left md:text-xl">
          {t("services.subtitle")}
        </p>
        <ul className="mt-8.5 flex flex-col gap-8">
          {services.map((service, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  "hover:bg-txt-100 hover:text-txt-400 rounded-5xl border-txt-400 text-foreground flex w-full cursor-pointer items-center gap-3 border px-10 py-8 text-sm font-medium duration-500 hover:shadow-2xl md:text-xl",
                  index == selectedIndex && "bg-txt-100 text-txt-400",
                )}
              >
                <span
                  className={cn(
                    "font-monument text-lg",
                    index === selectedIndex && "text-primary",
                  )}
                >
                  0{index + 1}
                </span>
                <p className="flex-1">{service}</p>
                <ArrowRight className="hidden md:block" size={24} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="row-span-2 hidden h-full md:block">
        {DUMMY_IMAGES.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={cn(
              "rounded-2.5xl h-full object-cover object-center",
              index !== selectedIndex && "hidden",
            )}
          />
        ))}
      </div>
    </>
  );
}
