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
        <StartButton handler={this.props.start}></StartButton>
        <SplitButton></SplitButton>
        <ResetButton></ResetButton>
      </div>
    );
  }
}

export default ButtonsContainer;
