import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import barbershop1 from '../../assets/barbershop/barbershop1.jpg';
import barbershop2 from '../../assets/barbershop/barbershop2.jpg';
import barbershop3 from '../../assets/barbershop/barbershop3.jpg';
import barbershop4 from '../../assets/barbershop/barbershop4.jpg';
import barbershop5 from '../../assets/barbershop/barbershop5.jpg';
import barbershop6 from '../../assets/barbershop/barbershop6.jpg';

const barbershopImages = [
  barbershop1,
  barbershop2,
  barbershop3,
  barbershop4,
  barbershop5,
  barbershop6,
];

export const Gallery = () => {
  return (
    <Swiper
      className="relative max-w-[380px] md:max-w-[768px] lg:max-w-full"
      modules={[Navigation, Autoplay]}
      navigation
      loop
      speed={750}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {barbershopImages.map((image) => (
        <SwiperSlide className="barbershop-slide" key={image}>
          <div className="m-auto w-full max-w-[380px] h-[250px] lg:max-w-[480px] lg:h-[310px]  text-[72px] font-bold flex justify-center items-center overflow-hidden hover:opacity-80 transition duration-300 hover:scale-105">
            <img
              className="w-full h-full object-cover object-center cursor-pointer"
              src={image}
              alt="barbershop image"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
