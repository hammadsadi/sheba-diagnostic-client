// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import HealthTipsItem from "../../../components/HealthTipsItem/HealthTipsItem";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const HealthTips = () => {
  const axiosCommon = useAxiosCommon();
  const { data: healthTips = [] } = useQuery({
    queryKey: ["healthTips"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/health/recommendation");
      return data;
    },
  });
  return (
    <section className="mt-10 md:mt-20 text-gray-800">
      <div>
        <SectionTitle heading="health tips" />
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {healthTips?.map((health) => (
            <SwiperSlide key={health._id}>
              <HealthTipsItem health={health} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HealthTips;
