import { useEffect, useState } from "react";
import axios from "axios";

import DisplayWindow from "../UI/DisplayWindow";
import Card from "../UI/Card";

import "./DataDisplay.css";

const DataDisplay = () => {
  const [duckData, setDuckData] = useState([]);
  const [refresh, setRefresh] = useState([]);

  // Retrieve the data every time the component is rendered.
  useEffect(() => {
    console.log("entered");
    async function fetchDuckData() {
      try {
        const ans = await axios.get("http://localhost:8000/duckdata/api/v1");
        console.log(ans.data);
        const { data: dataObject } = ans.data;
        console.log(dataObject.entries);
        setDuckData(dataObject.entries);
      } catch (err) {
        setDuckData([]);
      }
    }
    fetchDuckData();
  }, [refresh]);

  // ----- Download button click handler:
  const onClickHandler = async () => {
    //Retrieve data from the server
    const randomID = Math.floor(Math.random() * 1000000000);
    const { data } = await axios.get(
      `http://localhost:8000/duckdata/csvFile/${randomID}`
    );

    //Create download link and open download window
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([data]));
    link.setAttribute("download", `duck_feeding_data_${randomID}.csv`);
    document.body.appendChild(link);
    link.click();

    await axios.delete(`http://localhost:8000/duckdata/csvFile/${randomID}`);
  };

  // ----- Refresh button click handler:

  const handleRefreshClick = () => {
    const newState = refresh ? false : true;
    setRefresh(newState);
  };

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
      <div className="btn-group">
        <button onClick={onClickHandler} className="btn" href="" download>
          Download Data
        </button>
        <button className=" refresh-btn btn" onClick={handleRefreshClick}>
          Refresh
        </button>
      </div>
    </section>
  );
};

export default DataDisplay;
