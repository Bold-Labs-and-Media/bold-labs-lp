import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type Project = {
  mainImageUrl: string;
  secondaryImageUrl: string;
  title: string;
  description: string;
  tags: string[];
};

type Props = {
  projects: Project[];
};

export default function ProjectsCarousel({}: Props) {
  return (
    <div>
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex max-w-[1140px] items-center gap-5">
                <img
                  className="rounded-2.5xl mx-auto flex-1 object-cover object-center shadow-xs"
                  src="https://placehold.co/548x470"
                  width={548}
                  height={465}
                  alt=""
                />
                <img
                  className="rounded-2.5xl hidden flex-1 object-cover object-center lg:block"
                  src="https://placehold.co/548x470"
                  width={548}
                  height={465}
                  alt=""
                />
              </div>
              <ul className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-10">
                {["Landing Page", "Marca", "Idealização"].map((tag, index) => (
                  <li
                    key={index}
                    className="rounded-4xl bg-neutral-50 px-3 py-1.5 text-xs text-neutral-500 md:text-lg"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mx-auto mt-6 max-w-4xl">
                <h3 className="font-monument text-txt-100 md:text-4.5xl text-center text-sm">
                  Coca - Tech Startup Landing Page
                </h3>
                <p className="text-xxs text-txt-200 mt-2 text-center leading-[170%] md:text-lg">
                  We start by getting to know our clients, their business goals,
                  and their target audience. This involves conducting research,
                  analyzing data, and discussing ideas with our clients to gain
                  a deep understanding of their needs.
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-1/4 size-10 border-black bg-black text-white duration-300 disabled:bg-white disabled:text-black lg:top-1/3" />
        <CarouselNext className="top-1/4 size-10 border-black bg-black text-white duration-300 disabled:bg-white disabled:text-black lg:top-1/3" />
      </Carousel>
    </div>
  );
}
