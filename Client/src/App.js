import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DataDisplay from "./Components/Home/DataDisplay";

import "./App.css";

function App() {
  return (
    <div className="main-app">
      <Header />
      <DataDisplay />
      <Footer />
    </div>
  );
}

export default App;
