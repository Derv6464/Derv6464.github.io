
import './App.css'
import "@picocss/pico/css/pico.blue.min.css";

function App() {

  return (
    <>
     <div style={{ textAlign: "left" }}>
      <h1>Hey, I'm Dervla</h1>
      <p>I'm currently:</p>
      <ul>
        <li>Studing Immserive Software Engineering @ UL</li>
        <li>Working part time @ Analog Devices</li>
        <li>Co-Head of ULAS HiPR, Univeristy of Limerick's High Power Rocketry team </li>
      </ul>
          </div>
      <article>
        <div className="grid">
      <div><a href="#work">Work</a></div>
      <div><a href="#projects">Projects</a></div>
      <div><a href="#about">About</a></div>
      </div>
      </article>

      <br></br>
    <div style={{ textAlign: "left" }}>
      <h1 id="projects">Projects</h1>
      <article>
        <h4>Analog Devices</h4>
        <p>Part-Time, 2025</p>
        <p>Working on the AI Team, using Isacc Sim to train reforencement leanring policies on robot arms</p>
      </article>
      <article>
        <h4>Jaguar Land Rover</h4>
        <p>2025</p>
        <p>C++, </p>
      </article>

    </div>

     <div style={{ textAlign: "left" }}>
      <h1 id="work">Work</h1>
      <article>
        <h4>Analog Devices</h4>
        <p>Part-Time, 2025</p>
        <p>Working on the AI Team, using Isacc Sim to train reforencement leanring policies on robot arms</p>
      </article>
      <article>
        <h4>Jaguar Land Rover</h4>
        <p>2025</p>
        <p>C++, </p>
      </article>
      <article>
        <h4>Analog Devices</h4>
        <p>2024</p>
        <p>Worked with a UR Robot, Adi stepper motors and time of flight cameras to add a new mode onto a demo</p>
      </article>
      <article>
        <h4>Transact Campus</h4>
        <p>2023</p>
        <p>Test Automation</p>
      </article>
      <article>
        <h4>AWS</h4>
        <p>2023</p>
        <p>Cloud Watch, rate limiting </p>
      </article>
    </div>
    </>
  )
}

export default App
