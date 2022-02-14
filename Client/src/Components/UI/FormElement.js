import "./FormElement.css";

const FormElement = (props) => {
  return (
    <div className="form-element">
      {props.children}
      <hr />
    </div>
  );
};

export default FormElement;
