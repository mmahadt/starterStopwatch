import React, { Component } from "react";

class ResetButton extends React.Component {
  state = {};
  render() {
    return (
      <button
        id="button-reset"
        class="rounded-btn reset"
        onclick="reset()"
        disabled
      >
        Reset
      </button>
    );
  }
}

export default ResetButton;
