"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Cookies from "js-cookie";

const MainContainer = () => {
  const user = Cookies.get("user_id");
  if (!user) {
    const user_id = Math.floor(Math.random() * 9000000000) + 1000000000;
    Cookies.set("user_id", user_id, { expires: 30 });
  }
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination]}
      showSwitchArrows={false}
      className="mySwiper custom-arrow"
    >
      <SwiperSlide>
        <div className=" text-white ">
          <img
            alt="Category"
            src="../../../img/main-bg.svg"
            className="hero-image"
          />
          <div className="centered-text">
            <p className="text-uppercase">
              made in Indonesia, dedicated to Indonesia
            </p>
            <h1 className="text-uppercase  hero-text">
              Discover the Art of <br />
              Dressing Up
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="position-relative  text-white ">
          <img
            alt="Category"
            src="../../../img/main-bg.svg"
            className="hero-image"
          />
          <div className="centered-text">
            <p className="text-uppercase">
              made in Indonesia, dedicated to Indonesia
            </p>
            <h1 className="text-uppercase hero-text">
              Discover the Art of <br />
              Dressing Up
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="  text-white ">
          <img
            alt="Category"
            src="../../../img/main-bg.svg"
            className="hero-image"
          />
          <div className="centered-text">
            <p className="text-uppercase">
              made in Indonesia, dedicated to Indonesia
            </p>
            <h1 className="text-uppercase hero-text">
              Discover the Art of <br />
              Dressing Up
            </h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainContainer;
