import React, { Component } from "react";

function ResetButton(props) {
  return (
    <button
      id="button-reset"
      className="rounded-btn reset"
      onClick={() => props.handler()}
      disabled={props.resetDisabled}
    >
      Reset
    </button>
  );
}

export default ResetButton;
