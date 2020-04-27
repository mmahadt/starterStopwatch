import React, { Component } from "react";

class StartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        id="button-start"
        className="rounded-btn start"
        onClick={() => this.props.handler()}
      >
        Start
      </button>
    );
  }
}

export default StartButton;
