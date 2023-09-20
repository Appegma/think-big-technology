import "./styles.css";
import FadeTransition from "../Animation/FadeTransition";

function ProjectPanel({ image, title, description, active }) {
  return (
    <div className="projectPanelContainer">
      <div className="projectPanelSection">
        <div className="projectPanelSectionW1">
          <div className="projectPanelArea">
            <div className="projectPanelDesign">
              <div className="projectPanelScreen">
                <div className="projectPanelTop">
                  <img src={image} alt="Project" />
                </div>
              </div>
            </div>
          </div>
          {active && (
            <>
              <div className="firstImage">
                <FadeTransition>
                  <img
                    alt="first"
                    src="https://smartslider3.com/wp-content/uploads/slider/cache/57392fcd5a6d7525bd59c99139711f31/shape11.webp"
                  />
                </FadeTransition>
              </div>
              <div className="secondImage">
                <FadeTransition>
                  <img
                    alt="second"
                    src="https://smartslider3.com/wp-content/uploads/slider/cache/9c72c127dffe26233d73ab064ee231fa/shape13.webp"
                  />
                </FadeTransition>
              </div>
              <div className="thirdImage">
                <FadeTransition>
                  <img
                    alt="third"
                    src="https://smartslider3.com/wp-content/uploads/slider/cache/c1571c5c3986114df363ec6649150f8d/shape12.webp"
                  />
                </FadeTransition>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="projectPanelSection">
        <div className="projectPanelStatus">
          <div className="projectPanelHeading">
            <h1>{title}</h1>
          </div>
          <div className="projectPanelpara">
            <p>{description}</p>
          </div>
          <div className="projectPanelBtn">
            <button>Visit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPanel;
