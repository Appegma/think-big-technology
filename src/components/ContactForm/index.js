import { TiMessages } from "react-icons/ti";
import Reveal from "../Animation/Reveal";
// import thinkBigVideo from "../../assets/video/aboutVideo.mp4";
import "./styles.css";
import { Input1, TextArea1 } from "../Input";
import Banner from "../Banner";

const email = "info@thinkbigtechnology.com";

const ContactForm = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="contactVideoSection">
          <Banner title="Reach Out, (Geek) Out" />
        </div>
        <div className="contactVideoDivider">
          <div className="contactVideoArea Contact-side1"></div>
          <div className="contactVideoArea Contact-side2">
            <div className="ContactVideoArea"></div>
          </div>
        </div>

        <div className="contactDetailContainer">
          <div className="contactTextArea">
            <Reveal>
              <div className="contactDetail">
                <p>
                  We're closer than your Wi-Fi signal! Whether you want to
                  brainstorm world-changing ideas or simply discuss your
                  favorite gum flavor, this form is your virtual hotline to us.
                  Spill the digital beans or just say hi – we're all ears and
                  pixels!
                </p>
              </div>
            </Reveal>

            <div className="contactDetail">
              <div className="contactPImg">
                <div className="imgRound">
                  <img
                    alt="user"
                    src="https://media.licdn.com/dms/image/C4E03AQHUpCDfDVOzjg/profile-displayphoto-shrink_800_800/0/1659488189096?e=1700697600&v=beta&t=QjoMUMrOnZZ0K66F_6IsDy0dqC7ERRw71O5-NUZREJk"
                  />
                </div>
              </div>
              <Reveal>
                <div className="contactPersonInfo">
                  <h3>
                    Hi, I'm Omar! Got ideas? We've got the digital coffee ready.
                    Let's brew up some genius together.
                  </h3>
                  <br></br>
                </div>
              </Reveal>
              {/* <div className="contactPersonP">
                <p>
                  "I enjoy translating your thoughts to our diversely skilled
                  team for the best results"
                </p>
              </div> */}
              <Reveal>
                <div className="contactPersonMail">
                  <div className="contactIcon">
                    <TiMessages />
                  </div>
                  <div className="contactEmail">
                    <a href={`mailto:${email}`}>Email Omar directly</a>
                  </div>
                </div>
              </Reveal>
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
                label="Tell us more about your project goals"
                placeholder="i.e. We'd like to rebrand & improve our marketing website and platform."
              />
            </div>
            <Reveal>
              <div className="ContactSubmit">
                <button className="contantBtn ">submit</button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
