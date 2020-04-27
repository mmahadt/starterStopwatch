import React, { Component } from "react";

class StartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Start",
      text: { __html: "Start" },
      class: "rounded-btn start",
      handler: this.props.starthandler,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    if (this.state.status === "Start") {
      this.setState((state, props) => ({
        class: "rounded-btn pause",
        text: { __html: "Pause" },
        status: "Pause",
      }));
      this.props.startHandler();
    } else {
      this.setState((state, props) => ({
        class: "rounded-btn start",
        text: { __html: "Start" },
        status: "Start",
      }));
      this.props.pauseHandler();
    }
  }

  render() {
    return (
      <button
        id="button-start"
        className={this.state.class}
        onClick={this.onClickHandler}
        dangerouslySetInnerHTML={this.state.text}
      ></button>
    );
  }
}

export default StartButton;
