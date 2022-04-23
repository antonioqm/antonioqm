import { useRef } from "react";
import eu from "./img/antonioqm-sentado 1.png";
import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="grid">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
      <div className="container">
        <img src={eu} alt="" />
        <h1>
          <span>Antonio</span>
          <p>Frontend Developer</p>
        </h1>
      </div>
    </div>
  );
}

export default App;
