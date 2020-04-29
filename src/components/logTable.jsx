import React, { Component } from "react";

class LogTable extends React.Component {
  render() {
    return <div id="container">{this.props.list}</div>;
  }
}

export default LogTable;
