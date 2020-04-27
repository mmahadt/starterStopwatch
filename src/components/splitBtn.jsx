import React, { Component } from "react";

class SplitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        id="button-split"
        className="rounded-btn split"
        onClick={() => this.props.splitHandler()}
        // disabled
      >
        Split
      </button>
    );
  }
}

export default SplitButton;
