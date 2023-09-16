import Reveal from "../Animation/Reveal";
import "./styles.css";

const Input1 = ({ type, placeholder, label }) => {
  return (
    <>
      <div className="mainInput">
        <Reveal>
          <div className="Input1Holder">
            <p>{label}:</p>
          </div>
        </Reveal>
        <div className="input1Border">
          <input
            type={type}
            className="input1Style"
            placeholder={placeholder}
          />
          <div className="inputStar">*</div>
        </div>
      </div>
    </>
  );
};

const TextArea1 = ({ label, placeholder }) => {
  return (
    <>
      <div className="mainInput">
        <Reveal>
          <div className="Input1Holder">
            <p>{label}:</p>
          </div>
        </Reveal>

        <div className="textAreastar">
          <textarea className="textArea1" placeholder={placeholder}></textarea>
        </div>
      </div>
    </>
  );
};

export { Input1, TextArea1 };
