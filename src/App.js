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
      splitTimeList: [],
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    // this.toggleReset = this.toggleSplit.bind(this);
    // this.toggleSplit = this.toggleSplit.bind(this);
    this.enableReset = this.enableReset.bind(this);
    this.disableReset = this.disableReset.bind(this);
    this.enableSplit = this.enableSplit.bind(this);
    this.disableSplit = this.disableSplit.bind(this);
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

  // toggleReset() {
  //   this.setState((state, props) => ({
  //     disableResetBtn: !state.disableResetBtn,
  //   }));
  // }

  // toggleSplit() {
  //   this.setState((state, props) => ({
  //     disableSplitBtn: !state.disableSplitBtn,
  //   }));
  // }

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
    const str = (
      <React.Fragment>
        <div style={{ color: "gray" }}>
          {`#${this.state.splitTimeList.length + 1}`}
        </div>
        <div style={{ color: `rgb(242, 158, 38)` }}>
          {("00" + this.state.time.hours).slice(-2) +
            ":" +
            ("00" + this.state.time.minutes).slice(-2) +
            ":" +
            ("00" + this.state.time.seconds).slice(-2) +
            "." +
            this.state.time.hundredthMillis +
            ("" + this.state.time.tenthMillis) +
            ("" + this.state.time.unitMillis)}
        </div>
        <div style={{ color: `rgb(173, 173, 173)` }}>{"Split"}</div>
      </React.Fragment>
    );

    this.setState((state, props) => {
      // Create a new array based on current state:
      let splitTimeList = [...this.state.splitTimeList];

      // Add item to it
      splitTimeList.push(str);
      const {
        unitMillis,
        tenthMillis,
        hundredthMillis,
        seconds,
        minutes,
        hours,
      } = this.state.time;
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

  start() {
    clearInterval(this.state.interval);
    const s = setInterval(this.ticks, 1);
    this.setState((state, props) => ({
      interval: s,
    }));
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
    } = this.state.time;
    this.setState((state, props) => {
      const str = (
        <React.Fragment>
          <div style={{ color: "gray" }}>
            {`#${this.state.splitTimeList.length + 1}`}
          </div>
          <div style={{ color: `rgb(251, 101, 127)` }}>
            {("00" + hours).slice(-2) +
              ":" +
              ("00" + minutes).slice(-2) +
              ":" +
              ("00" + seconds).slice(-2) +
              "." +
              hundredthMillis +
              ("" + tenthMillis) +
              ("" + unitMillis)}
          </div>
          <div style={{ color: `rgb(173, 173, 173)` }}>{"Pause"}</div>
        </React.Fragment>
      );
      // Create a new array based on current state:
      let splitTimeList = [...this.state.splitTimeList];

      // Add item to it
      splitTimeList.push(str);

      return { interval: 0, splitTimeList };
    });
  }

  reset() {
    this.setState((state, props) => ({
      t0: performance.now(),
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
    const {
      unitMillis,
      tenthMillis,
      hundredthMillis,
      seconds,
      minutes,
      hours,
    } = this.state.time;

    return (
      <div className="App">
        {/* Destructure time */}
        {/* <Stopwatch time={this.state}></Stopwatch> */}

        <div className="stopwatch">
          <span id="hours">{("00" + hours).slice(-2)}</span>:
          <span id="minutes">{("00" + minutes).slice(-2)}</span>:
          <span id="seconds">{seconds}</span>.
          <span id="hundredthOfMillis">{hundredthMillis}</span>
          <span id="tenthOfMillis">{tenthMillis}</span>
          <span id="unitMillis">{unitMillis}</span>
        </div>

        <SplitTime time={this.state.splitTimeText}></SplitTime>

        <ButtonsContainer
          start={this.start}
          pause={this.pause}
          split={this.updateSplitTimeText}
          reset={this.reset}
          disableResetBtn={this.state.disableResetBtn}
          disableSplitBtn={this.state.disableSplitBtn}
          // toggleReset={this.toggleReset}
          // toggleSplit={this.toggleSplit}
          enableReset={this.enableReset}
          disableReset={this.disableReset}
          enableSplit={this.enableSplit}
          disableSplit={this.disableSplit}
        ></ButtonsContainer>

        <hr />

        <LogTable list={this.state.splitTimeList}></LogTable>
      </div>
    );
  }
}

export default App;
