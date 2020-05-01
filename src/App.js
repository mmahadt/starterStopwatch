import React from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import SplitTime from "./components/SplitTime";
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
    this.enableReset = this.enableReset.bind(this);
    this.disableReset = this.disableReset.bind(this);
    this.enableSplit = this.enableSplit.bind(this);
    this.disableSplit = this.disableSplit.bind(this);
    this.updateSplitTimeText = this.updateSplitTimeText.bind(this);
    this.ticks = this.ticks.bind(this);
    this.time = this.time.bind(this);
  }

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
      }));
      this.start.didrun = true;
    } else {
      //it is called to resume after pause
      //so time t0 will not be set to performance.now()
      clearInterval(this.state.interval);
      const s = setInterval(this.ticks, 1);
      this.setState((state, props) => ({
        interval: s,
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
      milliseconds: 0,
      disableResetBtn: true,
    }));
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
    const {
      unitMillis,
      tenthMillis,
      hundredthMillis,
      seconds,
      minutes,
      hours,
    } = this.time(this.state.milliseconds);

    const str = (
      <React.Fragment>
        <div style={{ color: "gray" }}>
          {`#${this.state.splitTimeList.length + 1}`}
        </div>
        <div style={{ color: `rgb(242, 158, 38)` }}>
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
        <div style={{ color: `rgb(173, 173, 173)` }}>{"Split"}</div>
      </React.Fragment>
    );

    this.setState((state, props) => {
      // Create a new array based on current state:
      let splitTimeList = [...this.state.splitTimeList];

      // Add item to it
      splitTimeList.push(str);

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
        <Stopwatch milliseconds={this.state.milliseconds}></Stopwatch>

        <SplitTime time={this.state.splitTimeText}></SplitTime>

        <ButtonsContainer
          start={this.start}
          pause={this.pause}
          split={this.updateSplitTimeText}
          reset={this.reset}
          disableResetBtn={this.state.disableResetBtn}
          disableSplitBtn={this.state.disableSplitBtn}
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
