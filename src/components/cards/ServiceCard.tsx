import { motion } from 'motion/react';

type ServiceProps = {
  icon: string;
  title: string;
  description: string;
};

export const ServiceCard = ({ icon, title, description }: ServiceProps) => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="service max-w-[510px] flex flex-col gap-3 lg:flex-row items-center lg:items-start lg:gap-7 shadow-sm p-6 rounded-xl"
    >
      <img className="w-10 h-10 lg:mt-2" src={icon} alt="" />
      <div className="flex flex-col gap-2 items-center lg:items-start">
        <h3 className="text-[24px] font-semibold text-center">{title}</h3>
        <p className="text-[#757575] text-center lg:text-start lg:text-[17px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
