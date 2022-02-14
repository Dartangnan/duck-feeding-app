import "./Card.css";

const Card = ({ dataBody, dataHeaders }, props) => {
  if (!dataHeaders && !dataBody) {
    return <div className="single-card">{props.children}</div>;
  }

  const objKeys = Object.keys(dataHeaders);
  const outputCard = objKeys.map((key, index) => {
    return (
      <li key={index} className="card-item">
        <label className="card-label">{dataHeaders[key]}</label>:{" "}
        {dataBody[key]}
      </li>
    );
  });

  return (
    <div className="single-card">
      <ul>{outputCard}</ul>
    </div>
  );
};

export default Card;
