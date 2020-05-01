import React from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import ButtonsContainer from "./components/ButtonsContainer";
import LogTable from "./components/LogTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: 0,
      t0: 0,
      milliseconds: 0,
      disableResetBtn: true,
      disableSplitBtn: true,
      splitTimeText: "SPLIT TIME",
      splitTimeList: [],
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.split = this.split.bind(this);
    this.ticks = this.ticks.bind(this);
    this.time = this.time.bind(this);
  }

  //time function accepts milliseconds and
  //returns an object containing time values
  //for hours, mins, secs etc.
  time = (milliseconds) => ({
    unitMillis: Math.floor(milliseconds % 10),
    tenthMillis: Math.floor((milliseconds / 10) % 10),
    hundredthMillis: Math.floor((milliseconds / 100) % 10),
    seconds: Math.floor((milliseconds / 1000) % 60),
    minutes: Math.floor((milliseconds / (1000 * 60)) % 60),
    hours: Math.floor((milliseconds / (1000 * 60 * 60)) % 24),
  });

  ticks() {
    this.setState((state, props) => ({
      milliseconds: performance.now() - state.t0,
    }));
  }

  start() {
    if (!this.start.didrun) {
      //For first run of start function after page load
      //we have to set t0 to performance.now()
      clearInterval(this.state.interval);
      const s = setInterval(this.ticks, 1);
      this.setState((state, props) => ({
        interval: s,
        t0: performance.now(),
        disableResetBtn: true,
        disableSplitBtn: false,
      }));
      this.start.didrun = true;
    } else {
      //it is called to resume after pause
      //so time t0 will not be set to performance.now()
      clearInterval(this.state.interval);
      const s = setInterval(this.ticks, 1);
      this.setState((state, props) => ({
        interval: s,
        disableResetBtn: true,
        disableSplitBtn: false,
      }));
    }
  }

  pause() {
    clearInterval(this.state.interval);
    const {
      unitMillis,
      tenthMillis,
      hundredthMillis,
      seconds,
      minutes,
      hours,
    } = this.time(this.state.milliseconds);

    this.setState((state, props) => {
      // Create a new array based on current state:
      let splitTimeList = [...this.state.splitTimeList];

      // Add item to it
      splitTimeList.push({ millis: this.state.milliseconds, action: "Pause" });

      return {
        interval: 0,
        disableResetBtn: false,
        disableSplitBtn: true,
        splitTimeList,
      };
    });
  }

  reset() {
    this.setState((state, props) => ({
      t0: performance.now(),
      milliseconds: 0,
      disableResetBtn: true,
    }));
  }

  split() {
    const {
      unitMillis,
      tenthMillis,
      hundredthMillis,
      seconds,
      minutes,
      hours,
    } = this.time(this.state.milliseconds);

    this.setState((state, props) => {
      // Create a new array based on current state:
      let splitTimeList = [...this.state.splitTimeList];

      // Add item to it
      splitTimeList.push({ millis: this.state.milliseconds, action: "Split" });

      return {
        splitTimeText:
          ("00" + hours).slice(-2) +
          ":" +
          ("00" + minutes).slice(-2) +
          ":" +
          ("00" + seconds).slice(-2) +
          "." +
          hundredthMillis +
          ("" + tenthMillis) +
          ("" + unitMillis),
        splitTimeList,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Stopwatch
          timeCalculator={this.time}
          milliseconds={this.state.milliseconds}
        ></Stopwatch>

        <p id="split-time">{this.state.splitTimeText}</p>

        <ButtonsContainer
          start={this.start}
          pause={this.pause}
          split={this.split}
          reset={this.reset}
          disableResetBtn={this.state.disableResetBtn}
          disableSplitBtn={this.state.disableSplitBtn}
        ></ButtonsContainer>

        <hr />

        <LogTable
          timeCalculator={this.time}
          list={this.state.splitTimeList}
        ></LogTable>
      </div>
    );
  }
}

export default App;
