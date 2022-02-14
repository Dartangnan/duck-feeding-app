import { useEffect, useState } from "react";
import DisplayWindow from "../UI/DisplayWindow";
import Card from "../UI/Card";

import "./DataDisplay.css";

const DataDisplay = () => {
  const [duckData, setDuckData] = useState([]);

  // Retrieve the data every time the component is rendered.
  useEffect(() => {
    console.log("entered");
    async function fetchDuckData() {
      try {
        const ans = await fetch("http://localhost:8000/duckdata/api/v1");
        console.log(ans.data);
        const { data: dataObject } = await ans.json();
        console.log(dataObject.entries);
        setDuckData(dataObject.entries);
      } catch (err) {
        setDuckData([]);
      }
    }
    fetchDuckData();
  }, []);

  // Render each data entry in a list:

  //Labels used to identify each data entry information
  const cardLabels = {
    time: "Time",
    foodType: "Type of Food",
    location: "Location",
    frequency: "Frequency",
    nDucks: "Number of Ducks",
    foodAmount: "Amount of food Given",
    amountUnit: "Unit of Amount Measurement",
  };

  const dataCards = duckData
    .map((entry, index) => {
      return <Card key={index} dataBody={entry} dataHeaders={cardLabels} />;
    })
    .reverse();

  // Conditional display in case we have no data or the data cannot be retrieved:
  if (!duckData[0]) {
    return (
      <DisplayWindow>
        <p className="errorMsg">Data could not be retrieved.</p>
      </DisplayWindow>
    );
  }

  return (
    <section id="data-display">
      <h2 className="display-title">Past Data</h2>
      <DisplayWindow>{dataCards}</DisplayWindow>
    </section>
  );
};

export default DataDisplay;
