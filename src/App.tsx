import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Service } from './components/Service';
import { BarberCard } from './components/BarberCard';
import { services } from './data/services';
import { barbers } from './data/barbers';
import scissorsIcon from './assets/scissors-icon.svg';
import { Gallery } from './components/swipers/Gallery';
import { ReviewsSwiper } from './components/swipers/ReviewsSwiper';

function App() {
  return (
    <div>
      <div className="h-[100vh]">
        <Header />
        <Hero />
      </div>
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
            <div className="gallery-header flex flex-col max-w-[1160px] m-auto items-center text-center gap-2 px-4 mb-16">
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
      </main>
    </div>
  );
}

export default App;
