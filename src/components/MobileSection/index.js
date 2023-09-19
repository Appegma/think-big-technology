import "./styles.css";

import FadeTransition from "../Animation/FadeTransition";
const Mobile = ({ image, title, description }) => {
  return (
    <>
      <div className="MobileMainSection">
        <div className="mobileSet">
          <div className="mobileDivider MobileSectionW1">
            <div className="mobileArea">
              <div className="mobileDivider">
                <div className="mobileDesign">
                  <div className="mobileScreen">
                    <div className="mobileTop">
                      <img src={image} alt="Project Image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="firstImage">
                <FadeTransition>
                  <img src="https://smartslider3.com/wp-content/uploads/slider/cache/57392fcd5a6d7525bd59c99139711f31/shape11.webp" />
                </FadeTransition>
              </div>
              <div className="firstImage2">
                <FadeTransition>
                  <img src="https://smartslider3.com/wp-content/uploads/slider/cache/9c72c127dffe26233d73ab064ee231fa/shape13.webp" />
                </FadeTransition>
              </div>
              <div className="firstImage3">
                <FadeTransition>
                  <img src="https://smartslider3.com/wp-content/uploads/slider/cache/c1571c5c3986114df363ec6649150f8d/shape12.webp" />
                </FadeTransition>
              </div>
            </div>
          </div>
        </div>
        <div className="mobileSet2">
          <div className="mobileDivider ">
            <div className="mobileStatus">
              <div className="mobileHeading">
                <h1>{title}</h1>
              </div>
              <div className="mobilepara">
                <p>{description}</p>
              </div>
              <div className="MobileBtn">
                <button>Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
