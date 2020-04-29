import React, { Component } from "react";

function SplitButton(props) {
  return (
    <button
      id="button-split"
      className="rounded-btn split"
      onClick={() => props.splitHandler()}
      disabled={props.splitDisabled}
    >
      Split
    </button>
  );
}

export default SplitButton;
