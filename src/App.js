import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';


function App() {
  return (
    <div className='app'>
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
