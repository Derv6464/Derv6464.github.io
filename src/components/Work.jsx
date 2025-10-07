import Experience from "./Experience";

function Work() {
  const experiences = [
    {
      company: "Analog Devices",
      title: "Software Engineering Intern",
      dates: "06/2025 - Present",
      description: [
        "Working on the AI Team, using Isaac Sim to train reinforcement learning policies on robot arms.",
      ],
    },
    {
      company: "Jaguar Land Rover",
      title: "Software Engineering Intern", 
      dates: "01/2025 - 06/2025",
      description: [
        "Contributed to production software by writing code and test cases in C++",
        "Improvement of code quality using static analysis tools",
      ],
    },
    {
      company: "Analog Devices",
      dates: "06/2024 - 08/2024",
      title: "Industrial Automation Intern",
      description: [
        "Worked on a demo containing two robots and time of flight cameras",
        "Refactoring a code base to better fit modern coding best practises.",
      ],
    },
    {
      company: "Transact Campus",
      dates: "09/2023 - 12/2023",
      title: "Software Developer Intern",
      description: ["Developed automated test scripts for web and mobile environments.",
        "Coming up with solutions for problems using 3D modelling, 3D printing, electronics and microcontrollers."
      ],
    },
    {
      company: "Amazon Web Services",
      dates: "06/2023 - 08/2023",
      title: "Software Developer Intern",
      description: ["Work with a team in a SCRUM environment and participating in SCRUM ceremonies",
        "Writing and testing code in Kotlin, Java and JavaScrip"
      ],
    },
  ];

  return (
    <div style={{ textAlign: "left" }}>
      <h1 id="work">Work</h1>
      {experiences.map((exp, index) => (
        <Experience
          key={index}
          company={exp.company}
          title={exp.title}
          dates={exp.dates}
          description={exp.description}
        />
      ))}
    </div>
  );
}

export default Work;
