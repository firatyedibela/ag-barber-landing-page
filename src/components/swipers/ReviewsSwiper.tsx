import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import { reviews } from '../../data/reviews';
import { ReviewCard } from '../cards';

export const ReviewsSwiper = () => {
  return (
    <Swiper
      className="reviews-swiper"
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
      }}
      speed={4500}
      spaceBetween={16}
      loop
      slidesPerView="auto"
      freeMode
    >
      {reviews.map((review) => (
        <SwiperSlide className="py-4 max-w-[320px]" key={review.id}>
          <ReviewCard {...review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
