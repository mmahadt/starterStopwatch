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
        ></StartButton>
        <SplitButton splitHandler={this.props.split}></SplitButton>
        <ResetButton handler={this.props.reset}></ResetButton>
      </div>
    );
  }
}

export default ButtonsContainer;
