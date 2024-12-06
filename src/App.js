import './App.css';
import "./style.css"
import Header from './components/Heades';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Header />
      <Title />
      <About />
      <Projects />
      <Services />
    </div>
  );
}

export default App;
