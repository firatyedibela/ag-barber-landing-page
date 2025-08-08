import { Hero } from './components/Hero';
import { Service } from './components/Service';
import { BarberCard } from './components/BarberCard';
import { services } from './data/services';
import { barbers } from './data/barbers';
import scissorsIcon from './assets/scissors-icon.svg';
import { Gallery } from './components/swipers/Gallery';
import { ReviewsSwiper } from './components/swipers/ReviewsSwiper';
import wpIcon from './assets/ww.png';

function App() {
  return (
    <div>
      <Hero />

      <main className="font-body">
        <section className="services min-h-[100vh] px-[25px] py-24">
          <div className="services-wrap max-w-[1160px] m-auto h-full flex flex-col items-center gap-12">
            <div className="services-header flex flex-col gap-1">
              <h2 className="text-[16px] lg:text-[28px] tracking-[2px] lg:tracking-[4px] font-bold text-golden font-body text-center">
                HİZMETLERİMİZ
              </h2>
              <p className="lg:w-[960px] text-[28px] lg:text-[32px] text-center font-semibold opacity-90">
                Misafirlerimizin tarzını ve beklentilerini anlayarak, en
                kaliteli hizmeti sunmak için özenle çalışıyoruz.
              </p>
              <div className="w-[250px] md:w-[450px] lg:w-[800px] h-[1px] mt-2 bg-black opacity-[0.15] self-center"></div>
            </div>

            <div className="grid gap-12 lg:justify-between lg:grid-cols-2">
              {services.map((service) => (
                <Service key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>
        <section className="barbers min-h-[100vh] px-[25px] py-24">
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
        <section className="gallery min-h-[100vh] py-24 ">
          <div className="gallery-wrap m-auto">
            <div className="gallery-header flex flex-col max-w-[1160px] m-auto items-center text-center gap-2 px-4 mb-8 lg:mb-16">
              <h2 className="text-[24px] lg:text-[64px] font-semibold">
                Salonumuzdan Görseller
              </h2>
              <p className="text-[17px] lg:text-[24px]">
                Klimalı salonumuzda serin bir ortamda hizmet alırken, çay ve
                kahve ikramlarımızla keyfinize keyif katıyoruz.
              </p>
              <div className="w-[250px] md:w-[450px] lg:w-[800px] h-[1px] mt-2 bg-black opacity-[0.15] self-center"></div>
            </div>
            <div className="image-gallery-wrap mb-6 max-w-[1440px] m-auto md:px-4">
              <Gallery />
            </div>
            <div className="reviews-wrap max-w-[1160px] xl:max-w-[1280px] md:px-8 m-auto">
              <ReviewsSwiper />
            </div>
          </div>
        </section>
        <section className="location-map py-24 bg-[#1a1a1a]">
          <div className="location-wrap max-w-[1160px] m-auto flex flex-col items-center gap-10">
            <div className="location-header">
              <h2 className="text-[42px] lg:text-[72px] font-semibold tracking-[4px] text-center text-white">
                Ulaşım
              </h2>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.6627921367817!2d32.93365051201637!3d39.90418148655599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d351af6f0d19fb%3A0x3bc189688adcc6f2!2zQSAmIEcgRXJrZWsgS3VhZsO2csO8!5e0!3m2!1str!2str!4v1754506031417!5m2!1str!2str"
              className="w-[90%] h-100 sm:w-[550px] sm:h-[550px] md:w-[650px] lg:w-[800px] lg:h-[600px] xl:w-[1100px] xl:h-[650px] rounded-xl border-4 border-white/50"
              loading="lazy"
            ></iframe>
          </div>
        </section>
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
