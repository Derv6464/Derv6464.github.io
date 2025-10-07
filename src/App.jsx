
import './App.css'
import "@picocss/pico/css/pico.blue.min.css";
import Navbar from "./components/Navbar";
import Intro from './components/Intro';
import Projects from './components/Projects';
import Work from './components/Work';

function App() {

  return (
       <>
      <main className="container-fluid">
        <Navbar />
      </main>
      <Intro />

      <br></br>
      <Projects />
      <Work />
    </>
  )
}

export default App
