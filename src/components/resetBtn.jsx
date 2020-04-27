import React, { Component } from "react";

class ResetButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: false };
    this.toggleEnableDisable = this.toggleEnableDisable.bind(this);
  }

  toggleEnableDisable() {
    this.setState((state) => {
      if (state.enabled === true) {
        return { enabled: false };
      } else {
        return { enables: true };
      }
    });
  }
  render() {
    return (
      <button
        id="button-reset"
        className="rounded-btn reset"
        // onClick={}
        disabled
      >
        Reset
      </button>
    );
  }
}

export default ResetButton;
