import Reveal from "../Animation/Reveal";
import "./styles.css";
import BlueFullStop from "../BlueFullStop";

const Banner = ({ title, image }) => {
  return (
    <div data-aos="fade-left">
      <div className="bannerContainer">
        <div className="bannerSection">
          <Reveal>
            <div className="bannerText">
              {image && <img src={image} alt="logo" className="bannerImage" />}
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
