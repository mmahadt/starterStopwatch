import React, { Component } from "react";

class SplitButton extends React.Component {
  render() {
    return (
      <button
        id="button-split"
        className="rounded-btn split"
        // onClick="split()"
        disabled
      >
        Split
      </button>
    );
  }
}

export default SplitButton;
