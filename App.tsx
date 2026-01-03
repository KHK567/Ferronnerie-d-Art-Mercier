
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Processus from './components/Processus';

// Utilitaire pour remonter en haut de page lors d'un changement de route
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen font-sans selection:bg-rust selection:text-white bg-charcoal">
        <Navbar />
        <main className="pt-20"> {/* Padding pour la navbar fixe */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/atelier" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/processus" element={<Processus />} />
            <Route path="/realisations" element={<Gallery />} />
            <Route path="/avis" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
