import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Service } from './components/Service';
import { services } from './data/services';

function App() {
  return (
    <div>
      <div className="h-[100vh]">
        <Header />
        <Hero />
      </div>
      <main className="font-body">
        <section className="services min-h-[100vh] px-[25px] py-16">
          <div className="services-wrap max-w-[1160px] m-auto border border-white h-full flex flex-col items-center gap-12">
            <div className="services-header flex flex-col gap-1">
              <h2 className="text-[16px] tracking-[2px] font-bold text-golden font-body text-center">
                HİZMETLERİMİZ
              </h2>
              <p className="text-[28px] text-center font-semibold opacity-90">
                Misafirlerimizin tarzını ve beklentilerini anlayarak, en
                kaliteli hizmeti sunmak için özenle çalışıyoruz.
              </p>
              <div className="w-[250px] h-[1px] mt-2 bg-black opacity-[0.15] self-center"></div>
            </div>

            <div className="grid gap-16 justify-center">
              {services.map((service) => (
                <Service key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
