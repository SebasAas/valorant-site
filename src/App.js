import Header from './components/Header';
import { BannerVideo } from './components/Banner'
import LatestNews from './components/LatestNews'
import CharactersInfo from './components/CharactersInfo'
import MapsInfo from './components/MapsInfo';

// CSS
import './assets/css/App.css';

function App() {
  return (
    <>
      <Header />
      <section>
        <BannerVideo />
      </section>
      <section>
        <LatestNews />
      </section>
      <section className="hidden-overflow">
        <CharactersInfo />
      </section>
      {/* TODO: Maps Section */}
      {/* <section style={{ position: "relative", height: 'auto', width: '100%' }}>
        <MapsInfo />
      </section> */}
    </>
  );
}

export default App;
