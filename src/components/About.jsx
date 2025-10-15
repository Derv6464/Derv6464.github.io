import { Linkedin, Mail, Github } from "lucide-react";

function About() {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1 id="about">About Me</h1>
        <p>In my (limited) free time I like to:</p>
        <ul>
          <li>Swim (swam competitively for 10 years)</li>
          <li>
            Read comics (check out what I've read{" "}
            <a
              href="https://leagueofcomicgeeks.com/profile/derb/read-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            )
          </li>
          <li>Skateboard (I'm very bad)</li>
        </ul>

        <section style={{ marginTop: "3rem" }}>
          <h3>Find Me On:</h3>

          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            <article style={{ textAlign: "center", padding: "1.5rem" }}>
              <a
                href="https://www.linkedin.com/in/dervla-gargan-57aa30251/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Linkedin size={40} style={{ marginBottom: "0.75rem" }} />
                <p>LinkedIn</p>
                <small>Dervla Gargan</small>
              </a>
            </article>

            <article style={{ textAlign: "center", padding: "1.5rem" }}>
              <a
                href="mailto:dervlag6464@gmal.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Mail size={40} style={{ marginBottom: "0.75rem" }} />
                <p>Email</p>
                <small>dervlag6464@gmal.com</small>
              </a>
            </article>

            <article style={{ textAlign: "center", padding: "1.5rem" }}>
              <a
                href="https://github.com/Derv6464"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Github size={40} style={{ marginBottom: "0.75rem" }} />
                <p>GitHub</p>
                <small>@Derv6464</small>
              </a>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
