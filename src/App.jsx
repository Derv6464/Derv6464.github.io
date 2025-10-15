
import './App.css'
import "@picocss/pico/css/pico.blue.min.css";
import Navbar from "./components/Navbar";
import Intro from './components/Intro';
import Projects from './components/Projects';
import Work from './components/Work';
import About from './components/About';

function App() {

  return (
       <>
      <main className="container-fluid">
        <Navbar />
      </main>
      <Intro />

      <br></br>
      <section>
      <Projects />
      </section>
      <section>
      <Work />
      </section>
         <section>
      <About />
      </section>
    </>
  )
}

export default App
