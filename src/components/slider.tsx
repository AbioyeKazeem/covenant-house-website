import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { fetchSliders } from "../store/sliderSlice";
import { AppDispatch, RootState } from "@/store/store";

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
      title: "For Where Two or Three Gather in My Name, There Am I With Them",
      verse: "Matthew 18:20",
    },
    {
      id: 2,
      image: "/banner2.jpg",
      title: "The Lord is my shepherd; I shall not want.",
      verse: "Psalm 23:1",
    },
    {
      id: 3,
      image:
        "/banner3.jpg",
      title:
        "Trust in the Lord with all your heart and lean not on your own understanding.",
      verse: "Proverbs 3:5",
    },
    {
      id: 4,
      image: "/banner4.jpg",
      title: "I can do all things through Christ who strengthens me.",
      verse: "Philippians 4:13",
    },
    {
      id: 5,
      image: "/banner5.jpg",
      title:
        "Be strong and courageous. Do not be afraid; do not be discouraged.",
      verse: "Joshua 1:9",
    },
  ];

  const slidesToDisplay = sliders.length > 0 ? sliders : fallbackSlides;

  if (loading) {
    return (
      <div className="w-full h-[658px] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading sliders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[658px] flex items-center justify-center bg-red-50">
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
    <div className="w-full h-[658px]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slidesToDisplay.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-[658px] bg-cover bg-center flex flex-col text-white text-center px-6"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Title and Verse */}
              <div className="max-w-[742px] mt-[56px] mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold">{slide.title}</h1>
                <div className="flex justify-between px-[30px]">
                  <p></p>
                  <p className="italic text-xl mt-2">— {slide.verse}</p>
                </div>
              </div>

              {/* Spacer to push the button down */}
              <div className="flex-grow" />

              {/* Call-to-action Button */}
              <div className="max-w-[742px] mx-auto mb-[60px]">
                <button className="bg-[#ABB8E2ED] text-[#2F2860] px-8 py-2 rounded-md text-lg font-medium">
                  Join us this Sunday!
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
