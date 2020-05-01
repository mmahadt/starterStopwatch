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

    return (
      <React.Fragment>
        <div className="gray">{`#${index + 1}`}</div>
        <div
          className={
            item.action === "Pause" ? "pauseLogEntry" : "splitLogEntry"
          }
        >
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
        <div className="lightGray">{item.action}</div>
      </React.Fragment>
    );
  });
  return <div id="container">{markup}</div>;
}

export default LogTable;
