import { motion } from 'motion/react';

export const Location = () => {
  return (
    <section id="section-location" className="location-map py-24 bg-[#1a1a1a]">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="location-wrap max-w-[1160px] m-auto flex flex-col items-center gap-10"
      >
        <div className="location-header">
          <h2 className="text-[42px] lg:text-[72px] font-semibold tracking-[4px] text-center text-white">
            Ulaşım
          </h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.6627921367817!2d32.93365051201637!3d39.90418148655599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d351af6f0d19fb%3A0x3bc189688adcc6f2!2zQSAmIEcgRXJrZWsgS3VhZsO2csO8!5e0!3m2!1str!2str!4v1754506031417!5m2!1str!2str"
          className="w-[90%] h-100 sm:w-[550px] sm:h-[550px] md:w-[650px] lg:w-[800px] lg:h-[600px] xl:w-[1100px] xl:h-[650px] rounded-xl border-4 border-white/50"
          loading="lazy"
          title="A&G Erkek Kuaförü Konumu - Google Haritalar"
        ></iframe>
      </motion.div>
    </section>
  );
};
