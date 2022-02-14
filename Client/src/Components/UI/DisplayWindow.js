import "./DisplayWindow.css";

const DisplayWindow = (props) => {
  return <div className="display-card">{props.children}</div>;
};

export default DisplayWindow;
