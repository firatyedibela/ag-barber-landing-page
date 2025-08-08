import instagramIcon from '../../assets/instagram-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import whatsappIcon from '../../assets/whatsapp-icon.svg';
import { motion } from 'motion/react';

type BarberCardProps = {
  avatar: string;
  name: string;
  title: string;
  introduction: string;
  instagram: string;
  phone: string;
};

export const BarberCard = ({
  avatar,
  name,
  title,
  introduction,
  instagram,
  phone,
}: BarberCardProps) => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-[325px] min-h-[390px] relative mt-24 bg-[#181817] rounded-[20px] shadow-[4px_4px_10px_0_#323232]"
    >
      <img
        src={avatar}
        className="img bg-white rounded-20 w-[190px] h-[190px] object-cover object-top rounded-[20px] absolute -top-1/4 left-1/2 -translate-x-1/2 shadow-[0px_4px_10px_0_#7C7C7C]"
      ></img>
      <div className="flex flex-col justify-between px-4 absolute w-full bottom-6 top-30 text-white/85 text-center">
        <div className="">
          <div className="">
            <h3 className="uppercase font-bold text-[22px] tracking-[1px]">
              {name}
            </h3>
            <span className="text-white/30">{title}</span>
            <div className="h-[1px] w-[250px] bg-white/15 m-auto my-2"></div>
          </div>
          <div className="">
            <p>{introduction}</p>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <a className="card-icon" href="https://instagram.com" target="_blank">
            <img
              className="w-7 h-7 rounded-md"
              src={instagramIcon}
              alt="instagram icon"
            />
          </a>
          <a
            className="card-icon"
            href="https://wa.me/905369932365"
            target="_blank"
          >
            <img
              className="w-7 h-7 rounded-md"
              src={whatsappIcon}
              alt="whatsapp icon"
            />
          </a>
          <a className="card-icon" href="tel:+905369932365" target="_blank">
            <img
              className="w-7 h-7 rounded-md"
              src={phoneIcon}
              alt="phone icon"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
