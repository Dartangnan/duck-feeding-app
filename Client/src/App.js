import { useState } from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DataDisplay from "./Components/Home/DataDisplay";
import Form from "./Components/Home/Form";

import "./App.css";

function App() {
  const [wasUpdated, setWasUpdated] = useState(false);

  // helper function to update the state of datadisplay when form is submitted
  const handleUpdate = () => {
    setWasUpdated(!wasUpdated);
  };

  return (
    <div className="main-app">
      <Header />
      <Form handleUpdate={handleUpdate} />
      <DataDisplay updateState={wasUpdated} />
      <Footer />
    </div>
  );
}

export default App;
