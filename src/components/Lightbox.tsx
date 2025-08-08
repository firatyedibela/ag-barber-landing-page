import { useEffect } from 'react';

type LightboxProps = {
  image: string;
  onClose: () => void;
};

export const Lightbox = ({ image, onClose }: LightboxProps) => {
  useEffect(() => {
    const handleScroll = () => {
      onClose();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 bg-black/95 flex justify-center items-center"
      onClick={onClose}
    >
      <div className="md:[640px] h-[360px] lg:w-[900px] lg:h-[450px] xl:w-[1100px] xl:h-[619px] relative">
        <button
          aria-label="close lightbox"
          className="absolute right-1 -top-11 w-8 h-8 cursor-pointer font-bold bg-[#bcbcbcbf] rounded-xs hover:bg-white/80 transition duration-150"
          onClick={onClose}
        >
          X
        </button>
        <img
          src={image}
          alt="bigger barbershop image"
          className="w-full h-full object-cover bg-white lg:rounded-lg"
          onClick={(e) => e.stopPropagation()}
        ></img>
      </div>
    </div>
  );
};
