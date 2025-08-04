import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import { reviews } from '../../data/reviews';
import { ReviewCard } from '../ReviewCard';

export const ReviewsSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
      }}
      speed={5000}
      loop
      slidesPerView={1}
      breakpoints={{
        620: {
          slidesPerView: 2,
        },
        965: {
          slidesPerView: 3,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide className="py-4" key={review.id}>
          <ReviewCard {...review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
