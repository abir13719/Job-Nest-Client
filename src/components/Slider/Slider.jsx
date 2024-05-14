import { useEffect, useState } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Slider = () => {
  const [allSliders, setAllSliders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sliders")
      .then((res) => res.json())
      .then((data) => setAllSliders(data));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {allSliders.map((slider) => (
        <SwiperSlide key={slider._id}>
          <div className="h-screen">
            <div className="absolute top-0 bottom-0 left-0 right-0">
              <img className="w-full h-full object-cover" src={slider.image} />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-[100%] bg-[rgba(0,0,0,0.5)]">
              <div className="h-full container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-violet-100">
                  {slider.title}
                </h1>
                <p className="p-10 text-lg md:text-xl  max-w-md text-center text-violet-100">
                  {slider.description}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
