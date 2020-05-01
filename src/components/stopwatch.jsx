import React, { Component } from "react";

function Stopwatch(props) {
  const time = (milliseconds) => ({
    unitMillis: Math.floor(milliseconds % 10),
    tenthMillis: Math.floor((milliseconds / 10) % 10),
    hundredthMillis: Math.floor((milliseconds / 100) % 10),
    seconds: Math.floor((milliseconds / 1000) % 60),
    minutes: Math.floor((milliseconds / (1000 * 60)) % 60),
    hours: Math.floor((milliseconds / (1000 * 60 * 60)) % 24),
  });

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
