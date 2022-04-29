import { Suspense } from "react";
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header'
import Hours from './components/Hours/Hours';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu';
import FetchingData from './components/FetchingData/FetchingData';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <div className="bottom-header">
          <Header />
          <Hero />
        </div>
        <Hours />
        <Menu />
        <FetchingData />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
