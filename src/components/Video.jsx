function Video({ location, width }) {
  return (
    <video autoPlay loop muted style={{ width: width + "%" }}>
      <source src={location} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
