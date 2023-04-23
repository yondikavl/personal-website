import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

import './App.css';

import Navbar from './Components/Header/Navbar';
import Hero from './Pages/Hero';
import Services from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Experience from './Pages/Experience';
import Footer from './Components/Footer/Footer';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id='root' className='overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
