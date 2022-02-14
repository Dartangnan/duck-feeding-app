import { useEffect, useState } from "react";
import DisplayWindow from "../UI/DisplayWindow";

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

  // Conditional display in case we have no data or the data cannot be retrieved:
  if (!duckData[0]) {
    return <p className="errorMsg">Data could not be retrieved.</p>;
  }

  return <section>Data</section>;
};

export default DataDisplay;
