import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Connect four</h1>
      <div className="Game">
        <div className="Game-Board">
          <div className="Game-Column">
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell red"></div>
          </div>
          <div className="Game-Column">
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell yellow"></div>
            <div className="Game-Cell red"></div>
          </div>
          <div className="Game-Column">
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell yellow"></div>
            <div className="Game-Cell yellow"></div>
          </div>
          <div className="Game-Column">
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell red"></div>
            <div className="Game-Cell yellow"></div>
          </div>
          <div className="Game-Column">
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell yellow"></div>
            <div className="Game-Cell yellow"></div>
          </div>
          <div className="Game-Column">
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell red"></div>
            <div className="Game-Cell red"></div>
          </div>
          <div className="Game-Column">
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell"></div>
            <div className="Game-Cell yellow"></div>
            <div className="Game-Cell yellow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
