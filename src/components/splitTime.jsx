import React, { Component } from "react";

class SplitTime extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p id="split-time">{this.props.time}</p>;
  }
}

export default SplitTime;
