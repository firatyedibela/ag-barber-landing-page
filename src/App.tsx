import { Header, Main, Footer } from './components/landmarks';
import { ScrollTopButton } from './components/buttons/ScrollTopButton';

function App() {
  return (
    <div className="relative">
      <Header />
      <Main />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
