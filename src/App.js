import React, { useState, useEffect } from 'react';
import './App.css';
import './style.css';
import './responsive.css';
import Header from './components/Header';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const circle = document.getElementById('mouse-circle');

    if (!circle) return;

    const moveCircle = (e) => {
      const { clientX, clientY } = e;
      circle.style.left = `${clientX}px`;
      circle.style.top = `${clientY}px`;
    };

    window.addEventListener('mousemove', moveCircle);

    return () => {
      window.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  return (
    <>
      <div id="mouse-circle"></div>

      {loading ? (
        <div className="preloader">
          <div className="preloader-spinner"></div>
        </div>
      ) : (
        <div>
          <Header />
          <Title />
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
