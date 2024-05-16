import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import axios from "axios";

const UserReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/feedback").then((data) => setReviews(data.data));
  }, []);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-center text-4xl font-bold my-5">Our Client Reviews</h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id} className="rounded-2xl p-4 grid gap-2 shadow-xl">
            <div className="flex gap-2 items-center">
              <img className="w-14 h-14 rounded-full" src={review.profile} />
              <p className="font-medium">{review.userName}</p>
            </div>
            <p className="text-justify">{review.review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserReview;
