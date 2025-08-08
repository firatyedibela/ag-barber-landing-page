import { BarberCard } from '../cards';
import { barbers } from '../../data/barbers';
import scissorsIcon from '../../assets/scissors-icon.svg';

export const Barbers = () => {
  return (
    <section
      id="section-barbers"
      className="barbers min-h-[100vh] px-[25px] py-24"
    >
      <div className="barbers-wrap max-w-[1160px] m-auto flex flex-col gap-10 lg:gap-18">
        <div className="barbers-header flex lg:flex-col justify-center items-center gap-2 sm:gap-6">
          <img
            className="w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20"
            src={scissorsIcon}
            alt="scissors icon"
          />
          <h2 className="text-white font-semibold text-[30px] sm:text-[48px] lg:text-[72px] tracking-[2px] lg:tracking-[6px]">
            BERBERLERİMİZ
          </h2>
        </div>
        <div className="flex flex-col items-center gap-24 justify-center lg:flex-row lg:gap-32">
          {barbers.map((barber) => (
            <BarberCard key={barber.name} {...barber} />
          ))}
        </div>
      </div>
    </section>
  );
};
