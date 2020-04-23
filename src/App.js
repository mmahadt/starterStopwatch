import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/stopwatch";
import SplitTime from "./components/splitTime";
import ButtonsContainer from "./components/buttonsContainer";
import LogTable from "./components/logTable";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Stopwatch></Stopwatch>
      <SplitTime></SplitTime>
      <ButtonsContainer></ButtonsContainer>
      {/* <LogTable></LogTable> */}
    </div>
  );
}

export default App;
