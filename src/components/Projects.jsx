import render from "../assets/untitled.png";
import real from "../assets/IMG_7952.jpg";
import Project from "./Project";
import move from "../assets/MoveVid.mp4";
import arm from "../assets/ArmVid.mp4";
import fire from "../assets/FireVid.mp4";
import rocket1 from "../assets/rocket1.jpg";
import rocket2 from "../assets/rocket2.JPG";
import dep from "../assets/dep.jpeg";
import ebay from "../assets/ebay.jpeg";

function Projects() {
  const projects = [
    {
      title: "Mach25 - ULAS HiPR",
      description: [
        "Project Manager & Head of Avinoics for Mach25 , a student-led rocketry project.",
        "Achieved 2nd place on our category",
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
        "It used 3 DC motors for the legs & tail, as well as two servos for the arms. This is controlled by a motorboard with a Raspberry Pi Pico W. This is controller over Bluetooth using a second Pico W connted to a analog stick & buttons for control. Additionally, it has a NeoPixel strip for a fire effect, as will as displaying error codes for debugging on the fly."
    ],
      images: [render, real],
       videos: [move, arm, fire],
        github: "https://github.com/Derv6464/RobotPokemon",
    },
  ];

  return (
    <div style={{ textAlign: "left" }}>
      <h1 id="projects">Projects</h1>
      <div className="grid">
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
  );
}

export default Projects;
