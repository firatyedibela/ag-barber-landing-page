import { SideMenu } from '../SideMenu';
import agLogo from '../../assets/A&G.svg';

export const Header = () => {
  return (
    <header className="absolute z-20 px-[25px] md:px-8 lg:px-10 h-[72px] md:h-[96px] flex justify-between items-center ">
      <div className="logo">
        <img
          className="h-[28px] lg:h-[34px]"
          src={agLogo}
          alt="A&G barber logo"
        />
      </div>
      <SideMenu
        routes={[
          'ana sayfa',
          'hizmetlerimiz',
          'berberlerimiz',
          'galeri',
          'ulaşım',
          'İletişim',
        ]}
      />
    </header>
  );
};
