function DarkLightVisual({ onClick, src, type, videoEnd }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {type === "VIDEO" ? (
        <video muted playsInline onEnded={videoEnd}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={src} alt="Transition Image" />
      )}
    </div>
  );
}

export default DarkLightVisual;
