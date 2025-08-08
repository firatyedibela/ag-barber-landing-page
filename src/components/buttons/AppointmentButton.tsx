import { motion } from 'motion/react';

export const AppointmentButton = () => {
  return (
    <motion.a
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: true }}
      href="tel:+905369932365"
      target="_blank"
      className="btn-animate w-full max-w-[320px] h-[50px] border-1 border-current flex justify-center items-center text-[13px] font-medium uppercase tracking-[2px] text-[#FFE6BD]"
    >
      <span>Randevu Al</span>
    </motion.a>
  );
};
