import React, { Component } from "react";

class ResetButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
    this.toggleEnableDisable = this.toggleEnableDisable.bind(this);
  }

  toggleEnableDisable() {
    this.setState((state, props) => {
      if (state.disabled) {
        return { disabled: false };
      } else {
        return { disabled: true };
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
        disabled={this.state.disabled}
      >
        Reset
      </button>
    );
  }
}

export default ResetButton;
