import Project from "./Project";

{/* Fuecoco Imgs*/}
import render from "../assets/untitled.png";
import real from "../assets/IMG_7952.jpg";
import internals from "../assets/IMG_7811.jpeg";
{/* Mach25 Imgs */}
import rocket1 from "../assets/rocket1.jpg";
import rocket2 from "../assets/rocket2.JPG";
import dep from "../assets/dep.jpeg";
import ebay from "../assets/ebay.jpeg";
{/* Magik Imgs */}
import pcb_front from "../assets/pcb_front.png";
import rig_proto from "../assets/rig_proto.png";

function Projects() {
  const projects = [
    {
      title: "Mach25 - ULAS HiPR",
      description: [
        "Project Manager & Head of Avinoics for Mach25 , a student-led rocketry project.",
        "Achieved 2nd place on our category, with an apogee of 2,273m.",
      ],
      details:[
        "Mach25 is a student rocketry competition taking place in Machrihanish, Scotland. I was project manager of the team of 15 people, as well as head of avinoics. We built Macha, a 1.92m tall rocket, carrying our deployable cansat, which mapped safe and unsafe landing zones during descent. Macha reached an apogee of 2,273m.",
        "As head of avinoics, I designed the electronics bay, which housed our COTS flight computers. I was in charge of configuring them for flight, and that telemtrey was correct before flight.",
        "I was addtioanlly on the payload team, where I help design the CanSat housing, made of TPU for impact resistance. I also made a simple gps tracker and ground station by creating custom PCBs and using adafruit sesnors with Raspberry Pi Picos."
    ],
        images: [rocket1, rocket2, dep, ebay],
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7347917771067846657"
    },
    {
      title: "Fuecoco - Pokémon Robot",
      description: [
        "Designed & printed a to scale Fuecoco Robot",
        "Used a Raspberry Pi Pico W to control the robot over Bluetooth with a custom controller",
      ],
      details:
        ["This robot was for a college project, as well as Dublin Comic Con.",
        "It was designed in Fusion 360 and Blender, and printed on an Ender 3 v2. It took about 40hrs of sanding, priming and painting to get a smooth finish. ",
        "It used 3 DC motors for the legs & tail, as well as two servos for the arms. This is controlled by a motorboard with a Raspberry Pi Pico W. This is controller over Bluetooth using a second Pico W connted to a analog stick & buttons for control. Additionally, it has a NeoPixel strip for a fire effect, as will as displaying error codes for debugging on the fly.",
        "Additionally, I made the face detachable with magnets, this allows me to easily access the electronics inside"
    ],
      images: [render, real, internals],
       videos: ["/videos/MoveVid.mp4", "/videos/ArmVid.mp4", "/videos/FireVid.mp4"],
        github: "https://github.com/Derv6464/RobotPokemon",
    },
    {
      title: "Magik - Rocket Flight Computer",
      description: [
        "Wrote code & designed PCB for a rocket flight computer for my college final year project."
      ],
      details:
        ["This was built as a final year project for college, as well as to create a flight computer for ULAS HiPR.",
        "I used KiCad to design the PCB, which uses sensors commonly used in rocketry, as well as a Raspberry Pi Pico for the logic. The flight computer was coded in C++ and used FreeRTOS to manage tasks. Python was used for mocking and testing, as well as graphing results. ",
        "I made an accompanying ground station in Python, which after some modificiation was used by ULAS HiPR at Mach25 for CanSat telemetry.",
        "The full project report, as well as all code and PCB files can be found on my GitHub"
    ],
      images: [pcb_front, rig_proto],
        github: "https://github.com/Derv6464/Magik/",
    },
  ];


  return (
    <>
    <div style={{ textAlign: "left" }}>
      <h1 id="projects">Projects</h1>
       <div className="projects-grid">
        {projects.map((proj, index) => (
          <Project
            key={index}
            title={proj.title}
            description={proj.description}
            details={proj.details}
            images={proj.images}
            videos={proj.videos}     
            github={proj.github}    
            link={proj.link}  
          />
        ))}
      </div>
      </div>
    <div style={{ textAlign: "center" }}>
      <button className="outline" style={{ marginTop: "0.75rem" }}>
        <a href="https://dervlagargan.notion.site/All-My-Projects-4a1257d6ca6f4c3a9411ef3fd6de0455?pvs=74">
            Check out all my projects on Notion!
        </a>
      </button>
    </div>
    </>
  );
}

export default Projects;
