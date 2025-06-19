import service1Image from "@/assets/images/service-1.webp";
import service2Image from "@/assets/images/service-2.webp";
import service3Image from "@/assets/images/service-3.webp";
import service4Image from "@/assets/images/service-4.webp";
import service5Image from "@/assets/images/service-5.webp";
import service6Image from "@/assets/images/service-6.webp";

export type Service = {
  id: string;
  imgUrl: ImageMetadata;
};

export const services: Service[] = [
  {
    id: "services.1",
    imgUrl: service1Image,
  },
  {
    id: "services.2",
    imgUrl: service2Image,
  },
  {
    id: "services.3",
    imgUrl: service3Image,
  },
  {
    id: "services.4",
    imgUrl: service4Image,
  },
  {
    id: "services.5",
    imgUrl: service5Image,
  },
  {
    id: "services.6",
    imgUrl: service6Image,
  },
];
