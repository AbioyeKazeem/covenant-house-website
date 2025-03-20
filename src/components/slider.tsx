import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/banner1.jpg",
    scripture: "For Where Two or Three Gather in My Name, There Am I With Them",
    reference: "Matthew 18:20",
  },
  {
    image: "/banner2.jpg",
    scripture: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1",
  },
  {
    image: "/banner3.jpg",
    scripture:
      "Trust in the Lord with all your heart and lean not on your own understanding.",
    reference: "Proverbs 3:5",
  },
  {
    image: "/banner4.jpg",
    scripture: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
  },
  {
    image: "/banner5.jpg",
    scripture:
      "Be strong and courageous. Do not be afraid; do not be discouraged.",
    reference: "Joshua 1:9",
  },
];

const Slider = () => {
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[658px] bg-cover bg-center flex flex-col  items-center py-[56px] text-white text-center px-6"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="max-w-[742px]">
                <h1 className="text-4xl md:text-5xl font-bold ">
                  {slide.scripture}
                </h1>

                <div className="flex justify-between px-[30px]">
                  <p></p>
                  <p className="italic text-xl mt-2">— {slide.reference}</p>
                </div>
              </div>
              <div className="max-w-[742px] px-[53px] mt-[56px]">
                <p className="mt-4 text-lg font-medium">
                  Worship with us, grow in faith, and experience God’s presence
                  in a loving community.
                </p>
                <button className="mt-[56px] bg-[#ABB8E2ED] text-[#2F2860] px-8 py-2 rounded-md text-lg font-medium">
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
