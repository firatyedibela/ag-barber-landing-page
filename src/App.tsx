import {
  Hero,
  Services,
  Barbers,
  Gallery,
  Location,
} from './components/sections';
import { Header } from './components/landmarks';

import wpIcon from './assets/ww.png';

function App() {
  return (
    <div className="relative">
      <Header />
      <main className="font-body">
        <Hero />
        <Services />
        <Barbers />
        <Gallery />
        <Location />
      </main>
      <footer className="contact bg-[#111111] py-24 relative font-body">
        <div className="footer-wrap max-w-[1160px] m-auto flex flex-col items-center gap-16 lg:px-8 lg:flex-row lg:gap-0 lg:justify-between mb-6">
          <div className="flex flex-col gap-6 items-center">
            <div className="working-hours text-white flex flex-col gap-2 text-center">
              <h3 className="text-[#b8a269] font-bold text-2xl tracking-[1px]">
                Çalışma Saatleri
              </h3>
              <div className="w-[250px] h-[1px] bg-[#b8a269]/30 m-auto"></div>
              <span className="text-lg">
                Pazartesi - Cumartesi:{' '}
                <span className="font-semibold">09:00 - 22:00</span>
              </span>
              <span className="text-lg">
                Pazar: <span className="font-semibold">Kapalı</span>
              </span>
            </div>
          </div>
          <div className="address text-white text-center text-lg max-w-[320px]">
            <div className="flex flex-col gap-2">
              <span className="text-[#b8a269] font-bold text-2xl tracking-[1px]">
                Adres
              </span>
              <div className="w-[250px] h-[1px] bg-[#b8a269]/30 m-auto"></div>
              <p className="mb-2 font">
                Akşemsettin, 980. Sk 173b, 06480 Mamak/Ankara
              </p>
            </div>
          </div>
          <div className="whatsapp text-white flex flex-col gap-6 items-center text-center">
            <a
              href="https://wa.me/905369932365"
              className="cursor-pointer hover:scale-115 transition duration-300"
            >
              <img className="w-16 h-16" src={wpIcon} alt="whatsapp icon" />
            </a>
            <span className="max-w-[290px] text-lg">
              Soru, görüş ve önerileriniz için WhatsApp hattımızdan bize
              ulaşabilirsiniz.
            </span>
            <a
              href="https://wa.me/905369932365"
              className="btn-animate text-[#b8a269] border-2 border-current w-full max-w-[250px] h-[64px] flex items-center justify-center"
            >
              <span className="text-lg tracking-[3px]">+90 538 970 84 62</span>
            </a>
          </div>
        </div>
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm text-center w-[200px] lg:w-auto">
          © 2025 A&G Erkek Kuaförü. Tüm hakları saklıdır.
        </span>
      </footer>
    </div>
  );
}

export default App;
