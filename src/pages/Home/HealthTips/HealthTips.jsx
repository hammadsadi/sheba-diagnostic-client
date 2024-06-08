import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import HealthTipsItem from "../../../components/HealthTipsItem/HealthTipsItem";
const HealthTips = () => {
  return (
    <section className="my-8 bg-[#e1f1f2] text-gray-800">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <HealthTipsItem />
          </SwiperSlide>
          <SwiperSlide>
            <HealthTipsItem />
          </SwiperSlide>
          <SwiperSlide>
            <HealthTipsItem />
          </SwiperSlide>
          <SwiperSlide>
            <HealthTipsItem />
          </SwiperSlide>
          <SwiperSlide>
            <HealthTipsItem />
          </SwiperSlide>
          <SwiperSlide>
            <HealthTipsItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HealthTips;
