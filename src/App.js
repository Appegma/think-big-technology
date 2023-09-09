import "./App.css";
import Banner from "./Components/Banner";
import { Button1 } from "./Components/Button";
import { Status, Status1 } from "./Components/status";
import Card from "./Components/Cards";
import { SideBar } from "./Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <>
      <div className="container1">
        <SideBar>
          <Banner bannarHeadingG1="color1" BtnValue="Contact me" />
          <div className="section1">
            <Status1
              value="javascript"
              statusDotsG="color1"
              status1Main="status1Main"
            />
            <div className="divider">
              <div className="dividerText">
                <div className="dividerText1">
                  I currently work for Google on Google Photos. I also toss in
                  my ¢2 with the design systems teams from time to time (once an
                  artist, always an artist, amirite?).
                </div>
                <div className="dividerText1">
                  I currently work for Google on Google Photos. I also toss in
                  my ¢2 with the design systems teams from time to time (once an
                  artist, always an artist, amirite?).
                </div>
                <div className="dividerText1">
                  I currently work for Google on Google Photos. I also toss in
                  my ¢2 with the design systems teams from time to time (once an
                  artist, always an artist, amirite?).
                </div>
                <div className="dividerText1">
                  I currently work for Google on Google Photos. I also toss in
                  my ¢2 with the design systems teams from time to time (once an
                  artist, always an artist, amirite?).
                </div>
              
                    
                <div className="mylink">
                  <span className="color1 font_s">My Link </span>
                  <button className="SideBarBtn">
                    <FontAwesomeIcon icon={faGithub} />
                  </button>
                  <button className="SideBarBtn">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </button>
                  <button className="SideBarBtn">
                    <FontAwesomeIcon icon={faGithub} />
                  </button>
                </div>
              </div>

              <div className="dividerStatus">
                <div className="dividerStatusContaioner">
                  <div className="dividerHeadingMain">
                    <FontAwesomeIcon icon={faHouse} />
                    <h1>Use at work</h1>
                  </div>

                  <div className="statusContainer">
                    <Status value="javascript" />
                    <Status value="react" />
                    <Status value="html" />
                    <Status value="css" />
                    <Status value="Angular" />
                    <Status value="Vue JS" />
                    <Status value="TypeScript" />
                    <Status value="Node" />
                    <Status value="Express" />
                    <Status value="Github" />
                    <Status value="Redux" />
                  </div>
                </div>

                <div className="dividerStatusContaioner">
                  <div className="dividerHeadingMain">
                    <FontAwesomeIcon icon={faHouse} />
                    <h1>Use at work</h1>
                  </div>

                  <div className="statusContainer">
                    <Status value="javascript" />
                    <Status value="react" />
                    <Status value="html" />
                    <Status value="css" />
                    <Status value="Angular" />
                    <Status value="Vue JS" />
                    <Status value="TypeScript" />
                    <Status value="Node" />
                    <Status value="Express" />
                    <Status value="Github" />
                    <Status value="Redux" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Card /> */}
        </SideBar>
      </div>
    </>
  );
};
export default App;
