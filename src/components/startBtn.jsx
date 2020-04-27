import React, { Component } from "react";

class StartButton extends React.Component {
  render() {
    return (
      <button
        id="button-start"
        className="rounded-btn start"
        onClick={() => this.start}
      >
        Start
      </button>
    );
  }
}

export default StartButton;
