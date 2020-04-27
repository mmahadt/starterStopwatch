import React, { Component } from "react";
import StartButton from "./startBtn";
import SplitButton from "./splitBtn";
import ResetButton from "./resetBtn";

class ButtonsContainer extends React.Component {
  render() {
    return (
      <div className="horizontal-container">
        <StartButton></StartButton>
        <SplitButton></SplitButton>
        <ResetButton></ResetButton>
      </div>
    );
  }
}

export default ButtonsContainer;
