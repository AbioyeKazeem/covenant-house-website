import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { fetchSliders } from "../store/sliderSlice";
import { AppDispatch, RootState } from "@/store/store";
import { Link } from "react-router-dom";

const Slider = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { sliders, loading, error } = useSelector(
    (state: RootState) => state.slider
  );

  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  const fallbackSlides = [
    {
      id: 1,
      image: "/banner1.jpg",
    },
    {
      id: 2,
      image: "/banner2.jpg",
    },
    {
      id: 3,
      image: "/banner3.jpg",
    },
    {
      id: 4,
      image: "/banner4.jpg",
    },
    {
      id: 5,
      image: "/banner5.jpg",
    },
  ];

  const slidesToDisplay = sliders.length > 0 ? sliders : fallbackSlides;

  if (loading) {
    return (
      <div className="w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-red-50">
        <div className="text-center text-red-600">
          <p className="text-lg font-semibold">Error loading sliders</p>
          <p className="mt-2">{error}</p>
          <button
            onClick={() => dispatch(fetchSliders())}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {slidesToDisplay.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] max-h-[1000px] overflow-hidden">
              <img
                src={slide.image}
                alt="Slider image"
                className="w-full h-full object-cover object-top"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>

              {/* Content container - positioned to show buttons always */}
              <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-lg mx-auto">
                  <button className="w-full sm:w-auto bg-[#ABB8E2ED] text-[#2F2860] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md text-sm sm:text-base md:text-lg font-medium hover:bg-[#9BA8D9] transition-colors duration-200 whitespace-nowrap shadow-lg">
                    Join us this Sunday!
                  </button>
                  <Link
                    to="/pastor-desk"
                    className="w-full sm:w-auto bg-white/90 text-[#2F2860] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md text-sm sm:text-base md:text-lg font-medium hover:bg-white transition-colors duration-200 whitespace-nowrap shadow-lg text-center"
                  >
                    Pastor Desk
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
