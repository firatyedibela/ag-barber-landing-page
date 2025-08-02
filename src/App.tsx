import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Service } from './components/Service';
import { BarberCard } from './components/BarberCard';
import { services } from './data/services';
import { barbers } from './data/barbers';
import scissorsIcon from './assets/scissors-icon.svg';

function App() {
  return (
    <div>
      <div className="h-[100vh]">
        <Header />
        <Hero />
      </div>
      <main className="font-body">
        <section className="services min-h-[100vh] px-[25px] py-16 lg:py-28">
          <div className="services-wrap max-w-[1160px] m-auto border border-white h-full flex flex-col items-center gap-12">
            <div className="services-header flex flex-col gap-1">
              <h2 className="text-[16px] lg:text-[20px] tracking-[2px] font-bold text-golden font-body text-center">
                HİZMETLERİMİZ
              </h2>
              <p className="lg:w-[1050px] text-[28px] lg:text-[32px] text-center font-semibold opacity-90">
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
        <section className="barbers min-h-[100vh] px-[25px] py-16">
          <div className="barbers-wrap max-w-[1160px] m-auto flex flex-col gap-12">
            <div className="barbers-header flex justify-center items-center gap-2 sm:gap-6">
              <img
                className="w-8 h-8 sm:w-12 sm:h-12"
                src={scissorsIcon}
                alt="scissors icon"
              />
              <h2 className="text-white font-semibold text-[30px] sm:text-[48px] tracking-[2px]">
                BERBERLERİMİZ
              </h2>
            </div>
            <div className="flex flex-col items-center gap-10 justify-center lg:flex-row lg:justify-around">
              {barbers.map((barber) => (
                <BarberCard key={barber.name} {...barber} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
