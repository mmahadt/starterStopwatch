import React, { Component } from "react";

class StartButton extends React.Component {
  render() {
    return (
      <button id="button-start" class="rounded-btn start" onclick="start()">
        Start
      </button>
    );
  }
}

export default StartButton;
