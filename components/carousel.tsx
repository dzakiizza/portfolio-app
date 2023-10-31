import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@nextui-org/button";
import { Pagination, Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { button as buttonStyles } from "@nextui-org/theme";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export type ContentProps = {
  title?: string;
  subtitle?: string;
  period?: string;
  status?: string;
  desc?: string;
};

const NavigationButton = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute bottom-0 z-10 flex w-full justify-between">
      <Button
        isIconOnly
        size="sm"
        aria-label="next"
        variant="shadow"
        className={
          "cursor-pointer bg-gradient-to-tr from-blue-600 to-purple-600"
        }
        onClick={() => swiper.slidePrev()}
      >
        <BiChevronLeft size="20px" />
      </Button>
      <Button
        isIconOnly
        size="sm"
        aria-label="previous"
        variant="shadow"
        className="cursor-pointer bg-gradient-to-tr from-blue-600 to-purple-600"
        onClick={() => swiper.slideNext()}
      >
        <BiChevronRight size="20px" />
      </Button>
    </div>
  );
};

const Carousel = (props: { contents: ContentProps[] }) => {
  return (
    <Swiper
      pagination={{
        enabled: true,
        clickable: true,
        bulletClass: "custom-swiper-bullet",
        bulletActiveClass: "custom-swiper-active-bullet",
      }}
      modules={[Pagination, Navigation]}
      className="custom-swiper"
      slidesPerView={"auto"}
      spaceBetween={100}
      loop={true}
    >
      {props.contents.map((content, idx) => (
        <SwiperSlide style={{ width: "100%", maxWidth: "100%" }} key={idx}>
          <div className="flex h-full w-full flex-col ">
            <div className="mb-1 flex flex-wrap items-center justify-between max-sm:mb-2">
              <p className="whitespace-normal text-lg font-semibold text-blue-400 max-md:text-base">
                {content?.title}
              </p>
              <p className="text-gray-400">{content?.period}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <p className="whitespace-normal text-base font-semibold max-md:text-sm">
                {content?.subtitle}
              </p>
              <p className="text-gray-400">{content?.status}</p>
            </div>
            <p className="mt-5 whitespace-normal max-lg:mt-3">{content.desc}</p>
          </div>
        </SwiperSlide>
      ))}
      <NavigationButton />
    </Swiper>
  );
};

export default Carousel;
