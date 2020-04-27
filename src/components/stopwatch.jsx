import React, { Component } from "react";

class Stopwatch extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="stopwatch">
        <span id="hours">{("00" + this.props.time.hours).slice(-2)}</span>:
        <span id="minutes">{("00" + this.props.time.minutes).slice(-2)}</span>:
        <span id="seconds">{("00" + this.props.time.seconds).slice(-2)}</span>.
        <span id="hundredthOfMillis">{this.props.time.hundredthMillis}</span>
        <span id="tenthOfMillis">
          {("00" + this.props.time.tenthMillis).slice(-2)}
        </span>
      </div>
    );
  }
}

export default Stopwatch;
