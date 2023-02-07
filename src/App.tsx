import React from "react";
import "./App.css";
import Card from "./components/Gentleman/Gentleman";
import gentlemanData from "./gentleman.data";
import "./components/Gentleman/Gentleman.css";

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
      {gentlemanData.map((gentleman) => (
        <Card gentleman={gentleman} />
      ))}
    </div>
  );
}

export default App;
