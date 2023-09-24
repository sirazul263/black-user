"use client";

import { useState, useEffect } from "react";
import { getBanners } from "../../services/productServices";
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

const Promotion = () => {
  //Fetching Data
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBanner = async () => {
      const products = await getBanners(setLoading);

      setResult(products);
    };
    fetchBanner();
  }, []);
  return (
    <div className="container mt-md-5 mt-4 pt-5">
      <div className="row">
        <div className="col-6">
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
              <div className="position-relative  text-white ">
                <img
                  alt="Category"
                  src="../../../img/promotion1.svg"
                  className="w-100 h-100 img-fluid"
                />
                <div className="promotion-text">
                  <h2 className="text-uppercase promo-text">formal woman</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="position-relative  text-white ">
                <img
                  alt="Category"
                  src="../../../img/promotion1.svg"
                  className="w-100 h-100 img-fluid"
                />
                <div className="promotion-text">
                  <h2 className="text-uppercase promo-text">formal woman</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="position-relative  text-white ">
                <img
                  alt="Category"
                  src="../../../img/promotion1.svg"
                  className="w-100 h-100 img-fluid"
                />
                <div className="promotion-text">
                  <h2 className="text-uppercase promo-text">formal woman</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

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
              <div className="position-relative  text-white mt-md-4 mt-2 pt-md-3 ">
                <img
                  alt="Category"
                  src="../../../img/promotion2.svg"
                  className="w-100 h-100 img-fluid"
                />
                <div className="promotion-text">
                  <h2 className="text-uppercase promo-text">formal Men</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="position-relative  text-white mt-md-4 mt-2 pt-md-3 ">
                <img
                  alt="Category"
                  src="../../../img/promotion2.svg"
                  className="w-100 h-100 img-fluid"
                />
                <div className="promotion-text">
                  <h2 className="text-uppercase promo-text">formal Men</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="position-relative  text-white mt-md-4 mt-2 pt-md-3 ">
                <img
                  alt="Category"
                  src="../../../img/promotion2.svg"
                  className="w-100 h-100 img-fluid"
                />
                <div className="promotion-text">
                  <h2 className="text-uppercase promo-text">formal Men</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-6 ">
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
              <div className="position-relative  text-white ">
                <img
                  alt="Category"
                  src="../../../img/promotion3.svg"
                  className="w-100 h-100 img-fluid"
                />
                <div className="promotion-text">
                  <h2 className="text-uppercase promo-text">Casual Style</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="position-relative  text-white ">
                <img
                  alt="Category"
                  src="../../../img/promotion3.svg"
                  className="w-100 h-100 img-fluid"
                />
                <div className="promotion-text">
                  <h2 className="text-uppercase promo-text">Casual Style</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="position-relative  text-white ">
                <img
                  alt="Category"
                  src="../../../img/promotion3.svg"
                  className="w-100 h-100 img-fluid"
                />
                <div className="promotion-text">
                  <h2 className="text-uppercase promo-text">Casual Style</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
