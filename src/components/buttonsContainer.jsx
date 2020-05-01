import React, { Component } from "react";
import Button from "./Button";

function ButtonsContainer(props) {
  return (
    <div className="horizontal-container">
      <Button
        handler={props.disableSplitBtn ? props.start : props.pause}
        className={
          props.disableSplitBtn ? "rounded-btn start" : "rounded-btn pause"
        }
        buttonName={props.disableSplitBtn ? "Start" : "Pause"}
        disabled={false}
      ></Button>
      <Button
        handler={props.split}
        className="rounded-btn split"
        buttonName="Split"
        disabled={props.disableSplitBtn}
      ></Button>
      <Button
        handler={props.reset}
        className="rounded-btn reset"
        buttonName="Reset"
        disabled={props.disableResetBtn}
      ></Button>
    </div>
  );
}

export default ButtonsContainer;
