import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/stopwatch";
import SplitTime from "./components/splitTime";
import ButtonsContainer from "./components/buttonsContainer";
import LogTable from "./components/logTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: 0,
      tenthMillis: 0,
      hundredthMillis: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.timeIncrementor = this.timeIncrementor.bind(this);
  }

  timeIncrementor() {
    if (this.state.tenthMillis <= 99) {
      this.setState((state, props) => ({
        tenthMillis: this.state.tenthMillis + 1,
      }));
    } else if (this.state.tenthMillis == 100) {
      this.setState((state, props) => ({
        tenthMillis: 0,
        hundredthMillis: this.state.hundredthMillis + 1,
      }));
    }
    if (this.state.hundredthMillis == 10) {
      this.setState((state, props) => ({
        hundredthMillis: 0,
        seconds: this.state.seconds + 1,
      }));
    }
    if (this.state.seconds == 59) {
      this.setState((state, props) => ({
        seconds: 0,
        minutes: this.state.minutes + 1,
      }));
    }
    if (this.state.minutes == 59) {
      this.setState((state, props) => ({
        minutes: 0,
        hours: this.state.hours + 1,
      }));
    }
    if (this.state.minutes == 23) {
      this.setState((state, props) => ({
        hours: 0,
      }));
    }
  }

  start() {
    clearInterval(this.state.interval);
    this.state.interval = setInterval(this.timeIncrementor, 1);
  }

  pause() {
    clearInterval(this.state.interval);
    this.state.interval = 0;
  }

  reset() {
    this.setState((state, props) => ({
      tenthMillis: 0,
      hundredthMillis: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    }));
  }

  render() {
    return (
      <div className="App">
        <Stopwatch time={this.state}></Stopwatch>
        <SplitTime time={this.state}></SplitTime>
        <button onClick={() => this.start()}>Start</button>
        <hr></hr>
        <button onClick={() => this.pause()}>Pause</button>
        <hr></hr>
        <button onClick={() => this.reset()}>Reset</button>
        <ButtonsContainer
          start={() => this.start()}
          pause={() => this.pause()}
          reset={() => this.reset()}
        ></ButtonsContainer>
        <LogTable time={this.state}></LogTable>
      </div>
    );
  }
}

export default App;
