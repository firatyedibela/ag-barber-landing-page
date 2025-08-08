import { ReviewsSwiper } from '../swipers/ReviewsSwiper';
import { BarbershopSwiper } from '../swipers/BarbershopSwiper';
import { motion } from 'motion/react';

export const Gallery = () => {
  return (
    <section id="section-gallery" className="gallery min-h-[100vh] py-24 ">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="gallery-wrap m-auto"
      >
        <div className="gallery-header flex flex-col max-w-[1160px] m-auto items-center text-center gap-2 px-4 mb-8 lg:mb-16">
          <h2 className="text-[24px] lg:text-[64px] font-semibold">
            Salonumuzdan Görseller
          </h2>
          <p className="text-[17px] lg:text-[24px]">
            Klimalı salonumuzda serin bir ortamda hizmet alırken, çay ve kahve
            ikramlarımızla keyfinize keyif katıyoruz.
          </p>
          <div className="w-[250px] md:w-[450px] lg:w-[800px] h-[1px] mt-2 bg-black opacity-[0.15] self-center"></div>
        </div>
        <div className="image-gallery-wrap mb-6 max-w-[1440px] m-auto md:px-4">
          <BarbershopSwiper />
        </div>
        <div className="reviews-wrap max-w-[1160px] xl:max-w-[1280px] md:px-8 m-auto">
          <ReviewsSwiper />
        </div>
      </motion.div>
    </section>
  );
};
