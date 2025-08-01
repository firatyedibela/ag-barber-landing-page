import { Squash as Hamburger } from 'hamburger-react';
import agLogo from '../assets/A&G.svg';

export const Header = () => {
  return (
    <header className="px-[25px] md:px-8 lg:px-10 h-[72px] md:h-[96px] flex justify-between items-center bg-black">
      <div className="logo">
        <img
          className="h-[28px] lg:h-[34px]"
          src={agLogo}
          alt="A&G barber logo"
        />
      </div>
      <Hamburger color="white" size={30} />
    </header>
  );
};
