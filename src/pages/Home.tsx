import { useState } from 'react';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';
import AboutMe from '../components/homepage/AboutMe';
import Contact from '../components/homepage/Contact';
import Experience from '../components/homepage/Experience';
import Hero from '../components/homepage/Hero';
import Projects from '../components/homepage/Projects';
import Skills from '../components/homepage/Skills';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {isMobileMenuOpen && (
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Hero />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
