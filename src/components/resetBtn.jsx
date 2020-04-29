import React, { Component } from "react";

class ResetButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disable: this.props.resetDisabled };
    this.toggleEnableDisable = this.toggleEnableDisable.bind(this);
  }

  toggleEnableDisable() {
    this.props.handler();
    this.setState((state, props) => {
      if (state.disable === false) {
        return { disable: true };
      } else {
        return { disable: false };
      }
    });
  }

  render() {
    return (
      <button
        id="button-reset"
        // className={`rounded-btn ${
        //   this.state.enabled ? "reset" : "button:disabled"
        // }`}
        className="rounded-btn reset"
        onClick={() => this.props.handler()}
        // onClick={() => this.toggleEnableDisable()}
        disabled={this.props.resetDisabled}
        // disabled={this.state.disable}
      >
        Reset
      </button>
    );
  }
}

export default ResetButton;
