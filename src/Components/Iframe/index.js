import "./styles.css"

const Iframe = () => {
  return (
    <>
      <div className="clip-container">
        <iframe
          title="Embedded Content"
          className="iframeContainer"
          src="https://player.vimeo.com/video/829920535?controls=0&autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1" // Replace with your iframe URL
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Iframe;
