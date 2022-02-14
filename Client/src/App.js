import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DataDisplay from "./Components/Home/DataDisplay";
import Form from "./Components/Home/Form";

import "./App.css";

function App() {
  return (
    <div className="main-app">
      <Header />
      <Form />
      <DataDisplay />
      <Footer />
    </div>
  );
}

export default App;
