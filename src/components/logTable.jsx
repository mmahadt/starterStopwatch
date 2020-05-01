import React, { Component } from "react";

function LogTable(props) {
  const time = props.timeCalculator;

  const markup = props.list.map((item, index) => {
    const {
      unitMillis,
      tenthMillis,
      hundredthMillis,
      seconds,
      minutes,
      hours,
    } = time(item.millis);

    if (item.action === "Pause") {
      return (
        <React.Fragment>
          <div style={{ color: "gray" }}>{`#${index + 1}`}</div>
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
    } else if (item.action === "Split") {
      return (
        <React.Fragment>
          <div style={{ color: "gray" }}>{`#${index + 1}`}</div>
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
    }
  });
  return <div id="container">{markup}</div>;
}

export default LogTable;
