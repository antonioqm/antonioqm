import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import eu from "./img/antonioqm-sentado 1.png";
import "./App.css";
import PixelPhoto from "./PixelPhoto";

function App() {

  const img = useRef<HTMLImageElement>(new Image(100, 100));

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
        <h1><span>Antonio</span>
         
        <p>Frontend Developer</p> 
        </h1>
      </div>
    </div>
  );
}

export default App;
