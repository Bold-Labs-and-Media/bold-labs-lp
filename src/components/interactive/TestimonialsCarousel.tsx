import { cn } from "@/lib/utils";
import { useEffect, useState, type SVGProps } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";

type Testimonial = {
  personPhotoUrl?: string;
  name: string;
  role: string;
  testimony: string;
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialsCarousel({}: Props) {
  const [api, setApi] = useState<CarouselApi>(undefined);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    const selectCallback = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    api.on("select", selectCallback);

    return () => {
      api.off("select", selectCallback);
    };
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="py-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div
                className={cn(
                  "flex translate-y-4 flex-col gap-10 rounded-4xl bg-[#2A2A2A] px-10 py-6 opacity-40 duration-300",
                  selectedIndex === index && "translate-y-0 opacity-100",
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* <img src="" alt="" width={64} height={64} /> */}
                    <div className="size-8 rounded-full bg-white md:size-16"></div>
                    <div className="space-y-1.5">
                      <p className="font-semibold text-white md:text-2xl">
                        Alan Baker
                      </p>
                      <p className="text-txt-400 text-xxs md:text-lg">
                        CEO of Redbird Company
                      </p>
                    </div>
                  </div>
                  <QuoteIcon />
                </div>
                <p className="italic' text-xxs leading-[170%] md:text-xl">
                  Trabalhar com a Bold Labs foi uma experiência incrível! Eles
                  entenderam profundamente as nossas necessidades e criaram uma
                  estratégia criativa que superou todas as expectativas. O
                  resultado final foi simplesmente excecional!
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 gap-4">
          <CarouselPrevious className="static size-10 translate-none border-white bg-transparent text-white duration-300 hover:border-transparent hover:bg-black" />
          <CarouselNext className="static size-10 translate-none border-white bg-transparent text-white duration-300 hover:border-transparent hover:bg-black" />
        </div>
      </Carousel>
    </div>
  );
}

const QuoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={34} height={30} fill="none" {...props}>
    <path
      fill="#444"
      d="M10.413 14.385H2.597c.133-7.783 1.666-9.067 6.45-11.9.55-.333.733-1.033.4-1.6a1.145 1.145 0 0 0-1.584-.4C2.23 3.818.263 5.852.263 15.535v8.983c0 2.85 2.317 5.15 5.15 5.15h5c2.934 0 5.15-2.216 5.15-5.15v-5c0-2.916-2.216-5.133-5.15-5.133Zm18.032 0h-7.817c.134-7.783 1.667-9.067 6.45-11.9a1.164 1.164 0 0 0 .095-1.938 1.163 1.163 0 0 0-1.295-.062c-5.633 3.333-7.6 5.367-7.6 15.067v8.983c0 2.85 2.317 5.15 5.15 5.15h5c2.934 0 5.15-2.217 5.15-5.15v-5c.017-2.933-2.2-5.15-5.133-5.15Z"
    />
  </svg>
);
