import React, { Component } from "react";

class StartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Start",
      handler: this.props.starthandler,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    if (this.state.status === "Start") {
      this.setState((state, props) => ({
        status: "Pause",
      }));
      this.props.startHandler();
      this.props.disableReset();
      this.props.enableSplit();
    } else {
      this.setState((state, props) => ({
        status: "Start",
      }));
      this.props.pauseHandler();
      this.props.enableReset();
      this.props.disableSplit();
    }
  }

  render() {
    return (
      <button
        id="button-start"
        className={
          this.state.status === "Start"
            ? "rounded-btn start"
            : "rounded-btn pause"
        }
        onClick={this.onClickHandler}
      >
        {this.state.status}
      </button>
    );
  }
}

export default StartButton;
