import React, { Component } from "react";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stopwatch">
        <span id="hours">{("00" + this.props.time.hours).slice(-2)}</span>:
        <span id="minutes">{("00" + this.props.time.minutes).slice(-2)}</span>:
        <span id="tenSeconds">{this.props.time.tenSeconds}</span>
        <span id="unitSeconds">{this.props.time.unitSeconds}</span>.
        <span id="hundredthOfMillis">{this.props.time.hundredthMillis}</span>
        <span id="tenthOfMillis">{this.props.time.tenthMillis}</span>
        <span id="unitMillis">{this.props.time.unitMillis}</span>
      </div>
    );
  }
}

export default Stopwatch;
