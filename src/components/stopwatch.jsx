import React, { Component } from "react";

class Stopwatch extends React.Component {
  render() {
    return (
      <div class="stopwatch">
        <span id="hours">00</span>:<span id="minutes">00</span>:
        <span id="seconds">00</span>.<span id="hundredthOfMillis">0</span>
        <span id="tenthOfMillis">00</span>
      </div>
    );
  }
}

export default Stopwatch;
