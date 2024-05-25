import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchReviews = async () => {
  const res = await axios.get("https://job-nest-server-seven.vercel.app/feedback");
  return res.data;
};

const UserReview = () => {
  const {
    data: reviews = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["review"],
    queryFn: fetchReviews,
  });

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center font-bold">Loading Reviews...</div>
    );
  }
  if (isError) {
    return (
      <div className="h-screen flex items-center justify-center font-bold">
        Error While Loading Reviews!
      </div>
    );
  }
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
