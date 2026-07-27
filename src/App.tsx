import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {

  return (
    <ReactLenis root options={{duration: 2.5, smoothWheel: true}}>
      <div className="bg-slate-950 text-slate-100 min-h-screen">
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </ReactLenis>
    
  )
}

export default App
