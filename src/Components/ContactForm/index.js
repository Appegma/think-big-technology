import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reveal from "../Animation/Reveal";

import "./styles.css";
import { Input1, TextArea1 } from "../Input";
const ContactForm = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="contactHeading">
          <div className="contactHeadingW">
            <h1>
              Let’s blow (speech) bubbles<span className="color1">.</span>
            </h1>
          </div>
        </div>

        <div className="contactDetailContainer">
          <div className="contactTextArea">
            <div className="contactDetail">
              <p>
                We're just one click away to help you take your brand or product
                from great to incredible. Fill in the form to share more details
                about your project. Or your favorite gum flavor. Either way,
                we’d love to talk.
              </p>
            </div>
            <div className="contactDetail">
              <div className="contactPImg">
                <div className="imgRound">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
              </div>
              <div className="contactPersonInfo">
                <h3>
                  Hi, I’m Vince! Let’s chat about your amazing ideas and
                  projects.
                </h3>
              </div>
              <div className="contactPersonP">
                <p>
                  "I enjoy translating your thoughts to our diversely skilled
                  team for the best results"
                </p>
              </div>

              <div className="contactPersonMail">
                <div className="contactIcon">
                  <FontAwesomeIcon className="hoverIcon" icon={faEnvelope} />
                </div>
                <div className="contactEmail">
                  <h5>Email Vince directly</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <div className="NameArea">
              <div className="firstname">
                <Input1
                  type="text"
                  placeholder="Full Name"
                  label="First Name"
                />
              </div>
              <div className="firstname">
                <Input1 type="text" placeholder="Last Name" label="Last Name" />
              </div>
            </div>

            <div className="NameArea">
              <Input1
                type="email"
                placeholder="Your Email Address"
                label="Your Email"
              />
            </div>

            <div className="NameArea">
              <TextArea1
                label="Tell us more about your project goals:"
                placeholder="e.g. We'd like to rebrand & improve our marketing website and platform."
              />
            </div>

            <div className="ContactSubmit">
              <button className="contantBtn ">submit</button>
            </div>




          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
