import React, { Component } from "react";
import StartButton from "./startBtn";
import SplitButton from "./splitBtn";
import ResetButton from "./resetBtn";

class ButtonsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="horizontal-container">
        <StartButton
          startHandler={this.props.start}
          pauseHandler={this.props.pause}
          enableSplit={this.props.enableSplit}
          disableReset={this.props.disableReset}
          enableReset={this.props.enableReset}
          disableSplit={this.props.disableSplit}
        ></StartButton>
        <SplitButton
          splitHandler={this.props.split}
          splitDisabled={this.props.disableSplitBtn}
        ></SplitButton>
        <ResetButton
          handler={this.props.reset}
          resetDisabled={this.props.disableResetBtn}
        ></ResetButton>
      </div>
    );
  }
}

export default ButtonsContainer;
