import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  return (
    <>
      <div className="contact">
        <div className="contect">
          <h2>Contact Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="contactContainer">
          <div className="contactInfo">
            <div className="Contactbox">
              <div className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  502671 Surge Camp Road, <br /> Owatonne,Minnesota,
                  <br />
                  5502560
                </p>
              </div>
            </div>
            <div className="Contactbox">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>000-000-000-000</p>
              </div>
            </div>
            <div className="Contactbox">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>name@gmail.com</p>
              </div>
            </div>
            <h2 className="txt">Contact With us</h2>
            <ul className="sci">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </ul>
          </div>
          <div className="contactForm">
            <h2>Send Massage</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="reaquired"></textarea>
              <span>Type Your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="send"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
