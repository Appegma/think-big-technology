import Reveal from "../Animation/Reveal";
import "./styles.css";
import BlueFullStop from "../BlueFullStop";

const Banner = ({ title, image }) => {
  return (
    <div data-aos="fade-left">
      <div className="bannerContainer">
        <div className="bannerSection">
          {image && (
            <div className="bannerImageContainer">
              <Reveal>
                <img src={image} alt="logo" className="bannerImage" />
                <h1 className="slogan">
                  Innnovate
                  <BlueFullStop /> Redefine
                  <BlueFullStop /> Prosper
                  <BlueFullStop />
                </h1>
              </Reveal>
            </div>
          )}
          <Reveal>
            <div className="bannerText">
              {!image && (
                <h1>
                  {title || "Think Big Technology"}
                  <BlueFullStop />
                </h1>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Banner;
