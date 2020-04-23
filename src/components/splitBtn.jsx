import React, { Component } from "react";

class SplitButton extends React.Component {
  render() {
    return (
      <button
        id="button-split"
        class="rounded-btn split"
        onclick="split()"
        disabled
      >
        Split
      </button>
    );
  }
}

export default SplitButton;
