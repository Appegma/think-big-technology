import Reveal from "../Animation/Reveal";
import { Button1 } from "../Button";

const Dots = () => {
  const dotes = [];
  for (let i = 0; i < 500; i++) {
    dotes.push(
      <div className="dotesGrid">
        <div className="bannerDotes" />
      </div>,
    );
  }

  return <div className="dotesStyle">{dotes}</div>;
};

const Banner = ({ bannarHeadingG1, BtnValue }) => {
  return (
    <>
      <div className="section">
        <div className="bannarHeading">
          <div className="bannarheading1">
            <Reveal>
              <div className="bannarH1opacity">
                <h1>
                  Think Big Technology
                  <span className={bannarHeadingG1}>.</span>
                </h1>
              </div>
            </Reveal>
          </div>
          <div className="bannarheading1">
            <Reveal>
              <div className="bannarH1opacity">
                <h3>
                  Our<span className={bannarHeadingG1}> skillset</span>
                </h3>
              </div>
            </Reveal>
          </div>
          <div className="bannarheading1">
            <Reveal>
              <div className="bannarH1opacity">
                <p>
                  We aid our clients from the early stages of a project, all the
                  way up to the endgame. We have the expertise and the right
                  tools to help organizations level up their brands.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="bannarheading1">
            <Reveal>
              <div className="bannarH1opacity">
                <Button1 value={BtnValue} />
              </div>
            </Reveal>
          </div>
        </div>
        <Dots />
      </div>
    </>
  );
};

export default Banner;
