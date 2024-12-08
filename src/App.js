import './App.css';
import './style.css';
import Header from './components/Heades';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
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
    );
}

export default App;
