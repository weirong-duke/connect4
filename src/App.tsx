import React from "react";
import "./App.css";
import { Board } from "./Board";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Connect four</h1>
      <div className="Game">
        <Board />
      </div>
    </div>
  );
};

export default App;
