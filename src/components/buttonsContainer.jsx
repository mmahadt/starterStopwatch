import React, { Component } from "react";
import StartButton from "./StartBtn";
import SplitButton from "./SplitBtn";
import ResetButton from "./ResetBtn";

function ButtonsContainer(props) {
  return (
    <div className="horizontal-container">
      <StartButton
        startHandler={props.start}
        pauseHandler={props.pause}
        enableSplit={props.enableSplit}
        disableReset={props.disableReset}
        enableReset={props.enableReset}
        disableSplit={props.disableSplit}
      ></StartButton>
      <SplitButton
        splitHandler={props.split}
        splitDisabled={props.disableSplitBtn}
      ></SplitButton>
      <ResetButton
        handler={props.reset}
        resetDisabled={props.disableResetBtn}
      ></ResetButton>
    </div>
  );
}

export default ButtonsContainer;
