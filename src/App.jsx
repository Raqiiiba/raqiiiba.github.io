import './styles/App.css';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import HobbiesAndLanguages from './sections/Hobbies';
import Contact from './sections/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Experience />
      <HobbiesAndLanguages /> 
      <Contact/>  
    </div>
  );
}

export default App;
