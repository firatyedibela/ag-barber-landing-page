import { Hero, Services, Barbers, Gallery, Location } from '../sections';

export const Main = () => {
  return (
    <main className="font-body">
      <Hero />
      <Services />
      <Barbers />
      <Gallery />
      <Location />
    </main>
  );
};
