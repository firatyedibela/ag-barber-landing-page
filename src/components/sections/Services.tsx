import { ServiceCard } from '../cards';
import { services } from '../../data/services';

export const Services = () => {
  return (
    <section className="services min-h-[100vh] px-[25px] py-24">
      <div className="services-wrap max-w-[1160px] m-auto h-full flex flex-col items-center gap-12">
        <div className="services-header flex flex-col gap-1">
          <h2 className="text-[16px] lg:text-[28px] tracking-[2px] lg:tracking-[4px] font-bold text-golden font-body text-center">
            HİZMETLERİMİZ
          </h2>
          <p className="lg:w-[960px] text-[28px] lg:text-[32px] text-center font-semibold opacity-90">
            Misafirlerimizin tarzını ve beklentilerini anlayarak, en kaliteli
            hizmeti sunmak için özenle çalışıyoruz.
          </p>
          <div className="w-[250px] md:w-[450px] lg:w-[800px] h-[1px] mt-2 bg-black opacity-[0.15] self-center"></div>
        </div>

        <div className="grid gap-12 lg:justify-between lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
