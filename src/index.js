import React from "react";
import { render } from "react-dom";
import NameTag from "./NameTag";
import CountClicker from "./CountClicker";
import AsyncNameTag from "./AsyncNameTag";
import "./index.css";
const App = () => (
  <div>
    <div className="card">
      <h3>NameTag</h3>
      <NameTag firstName="Kevin" lastName="Kelly" />
    </div>
    <div className="card">
      <h3>CountClicker</h3>
      <CountClicker />
    </div>
    <div className="card">
      <h3>AsyncNameTag</h3>
      <AsyncNameTag />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
