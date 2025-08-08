import {
  Hero,
  Services,
  Barbers,
  Gallery,
  Location,
} from './components/sections';
import { Header, Footer } from './components/landmarks';

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
      <Footer />
    </div>
  );
}

export default App;
