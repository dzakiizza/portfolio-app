import { Button } from "@nextui-org/button";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const Carousel = (props: { children: React.ReactNode }) => {
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
      {props.children}
      <NavigationButton />
    </Swiper>
  );
};

export default Carousel;
