import "./styles.css";
import List from "./List";
import data from "./data";
import React, { useState } from "react";
export default function App() {
  const [people, setPeople] = useState(data);

  function Clear() {
    setPeople([]);
  }
  return (
    <div className="App">
      <h1>BirthDay Remainder </h1>
      <div className="container">
        <div className="birth-parent">
          <h2>{people.length} Birthday Today</h2>
          <List people={people} />
          <list />
        </div>
        <button type="submit" onClick={Clear} className="btn">
          Clear Items
        </button>
      </div>
    </div>
  );
}
