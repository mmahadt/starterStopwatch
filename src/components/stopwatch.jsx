import React, { Component } from "react";

function Stopwatch(props) {
  const {
    unitMillis,
    tenthMillis,
    hundredthMillis,
    seconds,
    minutes,
    hours,
  } = props.time;
  return (
    <div className="stopwatch">
      <span id="hours">{("00" + hours).slice(-2)}</span>:
      <span id="minutes">{("00" + minutes).slice(-2)}</span>:
      <span id="seconds">{("00" + seconds).slice(-2)}</span>.
      <span id="hundredthOfMillis">{hundredthMillis}</span>
      <span id="tenthOfMillis">{tenthMillis}</span>
      <span id="unitMillis">{unitMillis}</span>
    </div>
  );
}

export default Stopwatch;
