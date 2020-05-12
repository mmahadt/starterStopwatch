import React, { Component } from "react";
import Button from "./Button";

function ButtonsContainer(props) {
  const {
    disableSplitBtn,
    start,
    pause,
    split,
    reset,
    disableResetBtn,
  } = props;
  return (
    <div className="horizontal-container">
      <Button
        handler={disableSplitBtn ? start : pause}
        className={disableSplitBtn ? "rounded-btn start" : "rounded-btn pause"}
        buttonName={disableSplitBtn ? "Start" : "Pause"}
        disabled={false}
      ></Button>
      <Button
        handler={split}
        className="rounded-btn split"
        buttonName="Split"
        disabled={disableSplitBtn}
      ></Button>
      <Button
        handler={reset}
        className="rounded-btn reset"
        buttonName="Reset"
        disabled={disableResetBtn}
      ></Button>
    </div>
  );
}

export default ButtonsContainer;
