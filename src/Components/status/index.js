import Reveal from "../Animation/Reveal";

function Status({ value }) {
  return (
    <Reveal>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div className="statusMain">{value}</div>
      </div>
    </Reveal>
  );
}

function Status1({ value, statusDotsG, status1Main }) {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div className={status1Main}>
        <Reveal>
          <div className="status1Text">
            <h3>
              {value}
              <span className={statusDotsG}>.</span>
            </h3>
          </div>
        </Reveal>
        <div className="status1Line"> </div>
      </div>
    </div>
  );
}

function Status2({ status, detail, heading, date, title, city }) {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div className="statue2Area">
        <div className="status2Heading">
          <Reveal>
            <div className="status2Sides">
              <h4>{heading}</h4>
            </div>
          </Reveal>
          <Reveal>
            <div className="status2Sides">
              <p>{date}</p>
            </div>
          </Reveal>
        </div>
        <div className="status2Heading">
          <Reveal>
            <div className="status2Sides">
              <h5>{title}</h5>
            </div>
          </Reveal>
          <Reveal>
            <div className="status2Sides">
              <p>{city}</p>
            </div>
          </Reveal>
        </div>
        <div className="status2DeatailArea">
          <div className="status2DetailArea">
            <Reveal>
              <p>{detail}</p>
            </Reveal>
          </div>
        </div>
        <div className="status2DeatailArea">
          <div className="status2balloon">
            {status.map((data) => {
              return <Status value={data} />;
            })}
          </div>
          <div className="Status2LineHolder"></div>
        </div>
      </div>
    </div>
  );
}
export { Status, Status1, Status2 };
