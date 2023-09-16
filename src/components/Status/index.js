import Reveal from "../Animation/Reveal";
import "./styles.css";

function Status({ logo, title, logoOnly, titleOnly }) {
  return (
    <Reveal>
      <marquee behavior="alternate">
        <div
          className={`${logoOnly ? "logoPadded" : "padded"} statusContainer`}
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          {logo && !titleOnly && <div className="statusLogo">{logo}</div>}
          {!titleOnly && !logoOnly && <div className="space" />}
          {title && !logoOnly && <div className="statusTitle">{title}</div>}
        </div>
      </marquee>
    </Reveal>
  );
}

export default Status;
