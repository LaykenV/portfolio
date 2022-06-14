import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { useRef } from 'react';


function App() {
  const myProjectsRef = useRef();
  const myContactRef = useRef();
  return (
    <div className='app'>
      <Header refProp={myProjectsRef} myContactRef={myContactRef}/>
      <Skills />
      <Projects refProp={myProjectsRef}/>
      <Footer  refProp={myContactRef}/>
    </div>
  );
}

export default App;
