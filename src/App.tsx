import React from "react";
import "./App.css";
import Card from "./components/Gentleman/Gentleman";
import gentlemanData from "./gentleman.data";
import "./components/Gentleman/Gentleman.css";

function App() {
  return (
    <div className="App">
      {gentlemanData.map((gentleman) => (
        <Card gentleman={gentleman} />
      ))}
    </div>
  );
}

export default App;
