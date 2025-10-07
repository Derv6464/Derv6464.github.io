function Experience({ company, title, dates, description }) {
  return (
    <article style={{ marginBottom: "1.5rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <b>{company}</b>
          {title && (
            <>
              {" "}
              <i>{title}</i>
            </>
          )}
        </div>
        <div style={{ fontSize: "0.9rem", color: "#a3a3a3ff" }}>{dates}</div>
      </div>
      <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export default Experience;
