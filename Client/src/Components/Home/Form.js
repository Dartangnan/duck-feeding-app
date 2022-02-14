import { useState } from "react";
import axios from "axios";

import DisplayWindow from "../UI/DisplayWindow";
import FormElement from "../UI/FormElement";

import "./Form.css";

const Form = (props) => {
  const initialValues = {
    time: "",
    foodType: "",
    location: "",
    frequency: "",
    nDucks: 0,
    foodAmount: "",
    amountUnit: "kg",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ans = await axios.post(
      "http://localhost:8000/duckdata/api/v1",
      JSON.stringify(values),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const response = ans.data;
    if (response.status === "success") {
      props.handleUpdate();
      setValues(initialValues);
    }
  };

  return (
    <section id="form-submission">
      <DisplayWindow>
        <form onSubmit={handleSubmit}>
          <FormElement>
            <label>
              What time did you feed:
              <input
                onChange={handleInputChange}
                type="time"
                name="time"
                value={values["time"]}
                required
              />
            </label>
          </FormElement>
          <FormElement>
            <label>
              What food did you use:
              <input
                onChange={handleInputChange}
                type="text"
                name="foodType"
                value={values["foodType"]}
                required
              />
            </label>
          </FormElement>
          <FormElement>
            <label>
              In what location did you feed:
              <input
                onChange={handleInputChange}
                type="text"
                name="location"
                value={values["location"]}
                required
              />
            </label>
          </FormElement>
          <FormElement>
            <label>
              How often did you feed them:
              <input
                onChange={handleInputChange}
                type="text"
                name="frequency"
                value={values["frequency"]}
                required
              />
            </label>
          </FormElement>
          <FormElement>
            <label>
              How many ducks did you feed:
              <input
                min="1"
                onChange={handleInputChange}
                type="number"
                name="nDucks"
                value={values["nDucks"]}
                required
              />
            </label>
          </FormElement>
          <FormElement>
            <label>
              How much food did you feed:
              <input
                min="1"
                onChange={handleInputChange}
                type="number"
                name="foodAmount"
                value={values["foodAmount"]}
                required
              />
            </label>
            <label>
              <select
                value={values["amountUnit"]}
                onChange={handleInputChange}
                name="amountUnit"
                required
              >
                <option value="kg">kg</option>
                <option value="units">un</option>
              </select>
            </label>
          </FormElement>
          <button className="btn">Submit</button>
        </form>
      </DisplayWindow>
    </section>
  );
};

export default Form;
