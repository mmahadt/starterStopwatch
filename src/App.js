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
      t0: 0,
      time: {
        unitMillis: 0,
        tenthMillis: 0,
        hundredthMillis: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
      },
      disableResetBtn: true,
      disableSplitBtn: true,
      splitTimeText: "SPLIT TIME",
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.enableReset = this.enableReset.bind(this);
    this.disableReset = this.disableReset.bind(this);
    this.enableSplit = this.enableSplit.bind(this);
    this.disableSplit = this.disableSplit.bind(this);
    // this.timeIncrementor = this.timeIncrementor.bind(this);
    this.updateSplitTimeText = this.updateSplitTimeText.bind(this);
    this.ticks = this.ticks.bind(this);
  }

  ticks() {
    this.setState((state, props) => {
      const milliseconds = performance.now() - state.t0;
      return {
        time: {
          unitMillis: Math.floor(milliseconds % 10),
          tenthMillis: Math.floor((milliseconds / 10) % 10),
          hundredthMillis: Math.floor((milliseconds / 100) % 10),
          seconds: Math.floor((milliseconds / 1000) % 60),
          minutes: Math.floor((milliseconds / (1000 * 60)) % 60),
          hours: Math.floor((milliseconds / (1000 * 60 * 60)) % 24),
        },
      };
    });
  }

  enableReset() {
    this.setState((state, props) => ({
      disableResetBtn: false,
    }));
  }

  disableReset() {
    this.setState((state, props) => ({
      disableResetBtn: true,
    }));
  }

  enableSplit() {
    this.setState((state, props) => ({
      disableSplitBtn: false,
    }));
  }
  disableSplit() {
    this.setState((state, props) => ({
      disableSplitBtn: true,
    }));
  }

  updateSplitTimeText() {
    this.setState((state, props) => ({
      splitTimeText:
        ("00" + this.state.time.hours).slice(-2) +
        ":" +
        ("00" + this.state.time.minutes).slice(-2) +
        ":" +
        ("00" + this.state.time.seconds).slice(-2) +
        "." +
        this.state.time.hundredthMillis +
        ("" + this.state.time.tenthMillis) +
        ("" + this.state.time.unitMillis),
    }));
  }

  start() {
    clearInterval(this.state.interval);
    const s = setInterval(this.ticks, 1);
    this.setState((state, props) => ({
      interval: s,
      t0: performance.now(),
    }));
  }

  pause() {
    clearInterval(this.state.interval);
    this.setState((state, props) => ({ interval: 0 }));
  }

  reset() {
    this.setState((state, props) => ({
      t0: 0,
      time: {
        unitMillis: 0,
        tenthMillis: 0,
        hundredthMillis: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
      },
      disableResetBtn: true,
    }));
  }

  render() {
    return (
      <div className="App">
        {/* Destructure time */}
        {/* <Stopwatch time={this.state}></Stopwatch> */}

        <div className="stopwatch">
          <span id="hours">{("00" + this.state.time.hours).slice(-2)}</span>:
          <span id="minutes">{("00" + this.state.time.minutes).slice(-2)}</span>
          :<span id="seconds">{this.state.time.seconds}</span>.
          <span id="hundredthOfMillis">{this.state.time.hundredthMillis}</span>
          <span id="tenthOfMillis">{this.state.time.tenthMillis}</span>
          <span id="unitMillis">{this.state.time.unitMillis}</span>
        </div>

        <SplitTime time={this.state.splitTimeText}></SplitTime>

        <ButtonsContainer
          start={this.start}
          pause={this.pause}
          split={this.updateSplitTimeText}
          reset={this.reset}
          disableResetBtn={this.state.disableResetBtn}
          disableSplitBtn={this.state.disableSplitBtn}
          enableReset={() => this.enableReset()}
          disableReset={() => this.disableReset()}
          enableSplit={() => this.enableSplit()}
          disableSplit={() => this.disableSplit()}
        ></ButtonsContainer>
        <LogTable time={this.state}></LogTable>
      </div>
    );
  }
}

export default App;
