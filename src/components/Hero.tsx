import { ScrollDownButton } from './buttons/ScrollDownButton';
import { AppointmentButton } from './buttons/AppointmentButton';

export const Hero = () => {
  return (
    <div className="hero h-[calc(100vh-72px)] md:h-[calc(100vh-96px)] border-red-500 font-body relative">
      <div className="text-cream flex flex-col items-center sm:items-start text-center sm:text-start px-[25px] lg:w-[85%] m-auto pt-20 md:pt-20 lg:pt-40">
        <h1 className="text-[16px] lg:text-[20px] xl:text-[26px] font-medium tracking-[4px] opacity-65 mb-2">
          ERKEK KUAFÖRÜ
        </h1>
        <p className="max-w-[550px] xl:max-w-[770px] text-[24px] lg:text-[30px] xl:text-[36px] font-semibold mb-12">
          A & G olarak, profesyonel saç ve sakal bakımında güvenilir
          hizmetimizle sizleri de salonumuza bekliyoruz.
        </p>
        <AppointmentButton />
        <div className="flex flex-col gap-2 items-center absolute bottom-10 left-1/2 -translate-x-1/2">
          <span>Daha Fazla Bilgi</span>
          <ScrollDownButton />
        </div>
      </div>
    </div>
  );
};
