// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import SliderItem from "../../../components/SliderItem/SliderItem";
const BannerSlider = () => {
  const bannaerItem = [
    {
      id: 1,
      title: "Let Admit for Your Forever Home.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciuntillo tenetur fuga ducimus numquam ea!",
      couponCode: "B17SD",
      discount: 10,
      image:
        "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 2,
      title: "Let Admit for Your Forever Home.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciuntillo tenetur fuga ducimus numquam ea!",
      couponCode: null,
      discount: null,
      image:
        "https://i.ibb.co/St29Jjc/pexels-chokniti-khongchum-1197604-2280551.jpg",
    },
    {
      id: 3,
      title: "Let Admit for Your CT Scan",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciuntillo tenetur fuga ducimus numquam ea!",
      couponCode: null,
      discount: null,
      image:
        "https://i.pinimg.com/originals/5c/57/c9/5c57c9972800df37f578730e72f1a813.jpg",
    },
  ];
  return (
    <div>
      <>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {bannaerItem.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default BannerSlider;
