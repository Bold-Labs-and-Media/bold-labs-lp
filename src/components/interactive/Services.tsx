import { services } from "@/lib/services-data";
import { cn, useTranslations } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";

type Props = {
  lang: "en" | "pt";
};

export default function Services({ lang }: Props) {
  const servicesIds = Array.from({ length: 6 }).map(
    (_, index) => `services.${index + 1}`,
  );
  const servicesIdFirstHalf = servicesIds.slice(0, 3);
  const servicesIdSecondHalf = servicesIds.slice(3);
  const [selectedService, setSelectedService] = useState(servicesIds[0]);
  console.log(selectedService);

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-4 md:grid-cols-3">
      <div className="md:mt-0">
        <ServiceList
          lang={lang}
          isFirstHalf
          services={servicesIdFirstHalf}
          onServiceSelect={setSelectedService}
          selectedService={selectedService}
        />
      </div>
      <div className="hidden h-full md:block">
        {services.map(({ id, imgUrl }) => (
          <img
            key={id}
            height={580}
            src={imgUrl}
            alt=""
            style={
              id !== selectedService
                ? {}
                : { animationRange: "entry 0% cover 40%" }
            }
            className={cn(
              "rounded-2.5xl h-[580px] object-cover object-center shadow-2xl",
              id !== selectedService
                ? "hidden"
                : "animation-appear animate-delay-[200ms]",
            )}
          />
        ))}
      </div>
      <div className="md:mt-0">
        <ServiceList
          lang={lang}
          services={servicesIdSecondHalf}
          onServiceSelect={setSelectedService}
          selectedService={selectedService}
        />
      </div>
    </div>
  );
}

type ServiceProps = {
  services: string[];
  onServiceSelect: (service: string) => void;
  selectedService: string;
  isFirstHalf?: boolean;
  lang: "en" | "pt";
};

const ServiceList = ({
  services,
  onServiceSelect,
  selectedService,
  isFirstHalf = false,
  lang,
}: ServiceProps) => {
  const t = useCallback(useTranslations(lang), []);
  return (
    <ul className="flex flex-col gap-8">
      {services.map((service, index) => (
        <li key={service}>
          <button
            style={{
              animationDelay: `${index * 0.2}s`,
              animationRange: "entry 0% cover 15%",
            }}
            type="button"
            onClick={() => onServiceSelect(service)}
            className={cn(
              "hover:bg-txt-100 hover:text-txt-400 animation-left-title-appear rounded-5xl border-txt-400 text-foreground flex w-full cursor-pointer items-center gap-3 border px-10 py-8 text-sm font-medium duration-500 hover:shadow-2xl md:text-xl",
              service == selectedService && "bg-txt-100 text-txt-400",
            )}
          >
            <span
              className={cn(
                "font-monument text-lg",
                service === selectedService && "text-primary",
                !isFirstHalf && "order-2",
              )}
            >
              0{index + (isFirstHalf ? 1 : 4)}
            </span>
            <p className={cn("flex-1", !isFirstHalf && "order-2")}>
              {t(service)}
            </p>
            {isFirstHalf ? (
              <ArrowRight className="hidden md:block" size={24} />
            ) : (
              <ArrowLeft className="order-1 hidden md:block" size={24} />
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};
