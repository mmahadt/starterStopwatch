import React, { Component } from "react";

function LogTable(props) {
  const { timeCalculator, timeFormatter, list } = props;
  const time = timeCalculator;
  const formatTime = timeFormatter;
  const markup = list.map((item, index) => {
    return (
      <React.Fragment>
        <div className="gray">{`#${index + 1}`}</div>
        <div
          className={
            item.action === "Pause" ? "pauseLogEntry" : "splitLogEntry"
          }
        >
          {formatTime(time(item.millis))}
        </div>
        <div className="lightGray">{item.action}</div>
      </React.Fragment>
    );
  });
  return <div id="container">{markup}</div>;
}

export default LogTable;
