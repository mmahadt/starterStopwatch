import React, { Component } from "react";

class Stopwatch extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="stopwatch">
        <span id="hours">{this.props.time.hours}</span>:
        <span id="minutes">{this.props.time.minutes}</span>:
        <span id="seconds">{this.props.time.seconds}</span>.
        <span id="hundredthOfMillis">{this.props.time.hundredthMillis}</span>
        <span id="tenthOfMillis">{this.props.time.tenthMillis}</span>
      </div>
    );
  }
}

export default Stopwatch;
