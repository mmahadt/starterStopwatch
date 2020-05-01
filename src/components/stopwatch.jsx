import React, { Component } from "react";

function Stopwatch(props) {
  const time = props.timeCalculator;

  const {
    unitMillis,
    tenthMillis,
    hundredthMillis,
    seconds,
    minutes,
    hours,
  } = time(props.milliseconds);

  return (
    <div className="stopwatch">
      <span id="hours">{hours < 10 ? `0${hours}` : hours}</span>:
      <span id="minutes">{minutes < 10 ? `0${minutes}` : minutes}</span>:
      <span id="seconds">{seconds < 10 ? `0${seconds}` : seconds}</span>.
      <span id="hundredthOfMillis">{hundredthMillis}</span>
      <span id="tenthOfMillis">{tenthMillis}</span>
      <span id="unitMillis">{unitMillis}</span>
    </div>
  );
}

export default Stopwatch;
