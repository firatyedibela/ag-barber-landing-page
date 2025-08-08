import { ScrollDownButton } from '../buttons/ScrollDownButton';
import { AppointmentButton } from '../buttons/AppointmentButton';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <div
      id="section-hero"
      className="hero h-[100vh] border-red-500 font-body relative"
    >
      <motion.div className="text-cream flex flex-col items-center sm:items-start text-center sm:text-start px-[25px] lg:w-[85%] m-auto pt-42 lg:pt-56">
        <motion.h1
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.65 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-[16px] lg:text-[20px] xl:text-[26px] font-medium tracking-[4px] opacity-65 mb-2"
        >
          ERKEK KUAFÖRÜ
        </motion.h1>
        <motion.p
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-[550px] xl:max-w-[770px] text-[24px] lg:text-[30px] xl:text-[36px] font-semibold mb-12"
        >
          A & G olarak, profesyonel saç ve sakal bakımında güvenilir
          hizmetimizle sizleri de salonumuza bekliyoruz.
        </motion.p>
        <AppointmentButton />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex flex-col gap-2 items-center absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2"
      >
        <span className="text-cream font-medium">Daha Fazla Bilgi</span>
        <ScrollDownButton />
      </motion.div>
    </div>
  );
};
