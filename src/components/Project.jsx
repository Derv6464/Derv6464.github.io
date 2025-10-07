import { useState } from "react";
import Video from "./Video"; // import your Video component

function Project({ title, description, details, images = [], videos = [], github, link }) {
  const [open, setOpen] = useState(false);

  return (
    <article style={{ marginBottom: "2rem" }}>
      <h4>{title}</h4>

      <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <button
        className="secondary"
        style={{ marginTop: "0.75rem" }}
        onClick={() => setOpen(true)}
      >
        Learn more
      </button>

      <dialog open={open} onClick={() => setOpen(false)}>
        <article
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          <header style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="24"
                  height="24"
                  fill="currentColor"
                  style={{ color: "#ffffffff" }}
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 
                    6.53 5.47 7.59.4.07.55-.17.55-.38 
                    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
                    -.01-.53.63-.01 1.08.58 1.23.82.72 
                    1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
                    -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2
                    -.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.68 
                    7.68 0 0 1 8 3.47c.68.003 1.36.092 
                    2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 
                    1.92.08 2.12.51.56.82 1.27.82 
                    2.15 0 3.07-1.87 3.75-3.65 
                    3.95.29.25.54.73.54 1.48 0 1.07-.01 
                    1.93-.01 2.19 0 .21.15.46.55.38A8.013 
                    8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            )}

            <h3 style={{ flexGrow: 1 }}>{title}</h3>

            <button aria-label="Close" rel="prev" onClick={() => setOpen(false)}></button>
          </header>

          {details && (
  <>
    {Array.isArray(details)
      ? details.map((para, idx) => <p key={idx}>{para}</p>)
      : <p>{details}</p>}
  </>
)}

          {images.length > 0 && (
            <div className="grid" style={{ marginTop: "1rem" }}>
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${title} image ${index + 1}`}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
              ))}
            </div>
          )}

          {videos.length > 0 && (
            <div className="grid" style={{ marginTop: "1rem", gap: "1rem" }}>
              {videos.map((video, index) => (
                <Video key={index} location={video} width={100} />
              ))}
            </div>
          )}

          {link && (
            <footer style={{ marginTop: "1.5rem" }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Learn Even More!
              </a>
            </footer>
          )}
        </article>
      </dialog>
    </article>
  );
}

export default Project;
