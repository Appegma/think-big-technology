import Reveal from "../Animation/Reveal";

const Status = ({ value }) => {
  return (
    <Reveal>
      <div className="statusMain">{value}</div>
    </Reveal>
  );
};

const Status1 = ({ value, statusDotsG, status1Main }) => {
  return (
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
  );
};

const Status2 = ({
  status,
  detail,
  heading,
  date,
  title,
  city,
}) => {
  return (
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
          {status.map(data => {
            return <Status value={data} />
          })}
        </div>
        <div className="Status2LineHolder"></div>
      </div>
    </div>
  );
};
export { Status, Status1, Status2 };
