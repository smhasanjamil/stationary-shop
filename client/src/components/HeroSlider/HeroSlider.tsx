// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
    renderBullet: function (index: number, className: string): string {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };
  return (
    <>
      <Swiper
        pagination={pagination}
        // modules={[Pagination]}
        modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
        className="mySwiper rounded-lg overflow-hidden"
      >
        <SwiperSlide
          className="relative h-[400px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/bg3W435V/pexels-punttim-53874.jpg)",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center z-10 text-center text-white p-5">
            <div
              className=" p-5 rounded-lg"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <h2 className="text-3xl sm:text-2xl font-bold mb-4">
                All Your Stationery Needs in One Place.
              </h2>
              <p className="text-lg sm:text-base mb-4">
                From pens and notebooks to office supplies —<br /> Find
                high-quality products for school, work, and creativity at
                affordable prices.
              </p>
              <Link
                to="/products"
                title=""
                className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white transition-all duration-200 bg-gray-600 hover:bg-gray-700 focus:bg-gray-600 rounded-lg "
                role="button"
              >
                Start Exploring
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="relative h-[400px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/NgW0H3Pf/pexels-rdne-7414277-1.jpg)",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center z-10 text-center text-white p-5">
            <div
              className=" p-5 rounded-lg"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <h2 className="text-3xl sm:text-2xl font-bold mb-4">
                All Your Stationery Needs in One Place.
              </h2>
              <p className="text-lg sm:text-base mb-4">
                From pens and notebooks to office supplies —<br /> Find
                high-quality products for school, work, and creativity at
                affordable prices.
              </p>
              <Link
                to="/products"
                title=""
                className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white transition-all duration-200 bg-gray-600 hover:bg-gray-700 focus:bg-gray-600 rounded-lg "
                role="button"
              >
                Start Exploring
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="relative h-[400px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/qL8VD0jm/pexels-ekaterina-bolovtsova-6192519.jpg)",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center z-10 text-center text-white p-5">
            <div
              className=" p-5 rounded-lg"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <h2 className="text-3xl sm:text-2xl font-bold mb-4">
                All Your Stationery Needs in One Place.
              </h2>
              <p className="text-lg sm:text-base mb-4">
                From pens and notebooks to office supplies —<br /> Find
                high-quality products for school, work, and creativity at
                affordable prices.
              </p>
              <Link
                to="/products"
                title=""
                className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white transition-all duration-200 bg-gray-600 hover:bg-gray-700 focus:bg-gray-600 rounded-lg "
                role="button"
              >
                Start Exploring
              </Link>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default HeroSlider;
